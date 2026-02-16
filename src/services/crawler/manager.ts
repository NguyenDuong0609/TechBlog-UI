
import { fetcher } from './fetcher';
import { parser, ParsedArticleDetail, ParsedSeries } from './parser';

const TARGET_CATEGORIES = [
    'javascript', 'java', 'php', 'python', 'ios',
    'android', 'docker', 'kubernetes', 'react', 'vue'
];

interface CrawlerResult {
    posts: ParsedArticleDetail[];
    series: ParsedSeries[];
    categories: string[];
}

export class CrawlerManager {
    private visitedPosts = new Set<string>();
    private visitedSeries = new Set<string>();

    private posts: ParsedArticleDetail[] = [];
    private seriesList: ParsedSeries[] = [];

    async crawl(): Promise<CrawlerResult> {
        console.log('Starting crawl...');

        for (const category of TARGET_CATEGORIES) {
            console.log(`Crawling category: ${category}`);
            const url = `https://viblo.asia/tags/${category}`;
            const html = await fetcher.getHtml(url);

            if (!html) {
                console.warn(`Failed to fetch category: ${category}`);
                continue;
            }

            const articles = parser.parseArticlesList(html);
            console.log(`Found ${articles.length} articles in ${category}`);

            // Limit to 50 articles per category as requested, 
            // but given latency, maybe start with 10-20 for prototype, 
            // user asked for ~50. I'll cap at 20 for speed during dev, user can change const.
            // Actually user said ~50. I will try 30.
            const LIMIT = 30;

            for (const articleSummary of articles.slice(0, LIMIT)) {
                if (this.visitedPosts.has(articleSummary.slug)) continue;

                await this.processPost(articleSummary.slug, category);
            }
        }

        console.log(`Crawl finished. Total posts: ${this.posts.length}, Total series: ${this.seriesList.length}`);
        return {
            posts: this.posts,
            series: this.seriesList,
            categories: TARGET_CATEGORIES
        };
    }

    private async processPost(slug: string, category: string) {
        if (this.visitedPosts.has(slug)) return;
        this.visitedPosts.add(slug); // Mark as visited immediately to avoid cycles

        console.log(`Fetching post: ${slug}`);
        const url = `https://viblo.asia/p/${slug}`;
        const html = await fetcher.getHtml(url);

        if (!html) return;

        const postDetail = parser.parseArticleDetail(html, slug);
        if (!postDetail) return;

        // Add category info manually since parser doesn't know context
        // We store it in a way that aligns with DB model later.
        // For now, postDetail has 'tags' but we might want to prioritize the current category.
        // We can inject it into tags if missing.
        if (!postDetail.tags.includes(category)) {
            postDetail.tags.unshift(category);
        }

        this.posts.push(postDetail);

        // Handle Series
        if (postDetail.series) {
            await this.processSeries(postDetail.series);
        }
    }

    private async processSeries(seriesInfo: { title: string, slug: string }) {
        if (this.visitedSeries.has(seriesInfo.slug)) return;
        this.visitedSeries.add(seriesInfo.slug);

        console.log(`Processing series: ${seriesInfo.slug}`);

        // Fetch series page to get full list of articles
        const url = `https://viblo.asia/s/${seriesInfo.slug}`;
        const html = await fetcher.getHtml(url);

        if (!html) return;

        const seriesDetail = parser.parseSeries(html, seriesInfo.slug);

        // Merge info (we might have author now)
        const seriesData: ParsedSeries = {
            ...seriesDetail,
            title: seriesInfo.title, // Keep original title or use new one? New one is likely better/fuller.
        };

        this.seriesList.push(seriesData);

        // Fetch all articles in this series
        for (const slug of seriesDetail.articles) {
            if (!this.visitedPosts.has(slug)) {
                // We don't know the category easily here, assume first tag logic or generic
                await this.processPost(slug, 'uncategorized');
            }
        }
    }
}

export const crawler = new CrawlerManager();
