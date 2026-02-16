
import * as cheerio from 'cheerio';

export interface ParsedCategory {
    name: string;
    slug: string;
    url: string;
}

export interface ParsedArticleSummary {
    title: string;
    slug: string;
    url: string;
    thumbnail: string;
    excerpt: string;
    author: {
        name: string;
        username: string;
        avatar: string;
    };
    tags: string[];
}

export interface ParsedSeries {
    title: string;
    slug: string;
    articles: string[]; // List of article slugs in the series
    author?: {
        name: string;
        username: string;
        avatar: string;
    }
}

export interface ParsedArticleDetail extends ParsedArticleSummary {
    content: string;
    series?: ParsedSeries;
    readTime: number;
}

const VIBLO_HOST = 'https://viblo.asia';

export class Parser {

    parseCategories(html: string): ParsedCategory[] {
        const $ = cheerio.load(html);
        const categories: ParsedCategory[] = [];

        // Attempt to find tags/categories. 
        // On Viblo, these are often links in a sidebar or header. 
        // For now, we might relying on a predefined list if extraction is hard, 
        // but let's try to find "Trending tags" or similar.
        // Selector strategy: Look for links that contain "/tags/"

        $('a[href^="/tags/"]').each((_, el) => {
            const href = $(el).attr('href');
            const name = $(el).text().trim();
            if (href && name) {
                const slug = href.split('/tags/')[1];
                categories.push({
                    name,
                    slug,
                    url: `${VIBLO_HOST}${href}`
                });
            }
        });

        // Deduplicate by slug
        return Array.from(new Map(categories.map(c => [c.slug, c])).values());
    }

    parseArticlesList(html: string): ParsedArticleSummary[] {
        const $ = cheerio.load(html);
        const articles: ParsedArticleSummary[] = [];

        // Valid as of early 2026, Viblo article cards usually:
        // Container: .post-feed-item
        // Title: h3 a.link
        // Author: .post-author a

        // We will use a more generic strategy: find blocks that contain title and author.

        // Main feed strategy
        $('.post-feed-item').each((_, el) => {
            const titleEl = $(el).find('h3 a, .post-title a').first();
            const title = titleEl.text().trim();
            const relativeLink = titleEl.attr('href');

            if (!title || !relativeLink) return;

            const slug = relativeLink.replace('/p/', '');

            const excerpt = $(el).find('.post-feed-item__content, .summary').text().trim().substring(0, 200);

            const authorEl = $(el).find('.user-name a, .author-name a').first();
            const authorName = authorEl.text().trim();
            const authorLink = authorEl.attr('href');
            const authorUsername = authorLink ? authorLink.split('/u/')[1] : 'unknown';

            const avatarEl = $(el).find('.avatar img').first();
            let avatar = avatarEl.attr('src') || avatarEl.attr('data-src') || '';
            if (avatar.startsWith('//')) avatar = 'https:' + avatar;

            const tags: string[] = [];
            $(el).find('.tag-item a, .tags a').each((_, tagEl) => {
                tags.push($(tagEl).text().trim());
            });

            articles.push({
                title,
                slug,
                url: `${VIBLO_HOST}${relativeLink}`,
                thumbnail: '', // Viblo feed items often don't show large thumbnails, mostly avatars
                excerpt,
                author: {
                    name: authorName,
                    username: authorUsername,
                    avatar
                },
                tags
            });
        });

        return articles;
    }

    parseArticleDetail(html: string, slug: string): ParsedArticleDetail | null {
        const $ = cheerio.load(html);

        // Title
        // Usually h1.article-content__title
        const title = $('h1').first().text().trim();
        if (!title) return null; // Failed to parse

        // Content
        // Usually .md-contents
        const content = $('.md-contents').html() || '';

        // Author (in detail page)
        const authorEl = $('.article-meta .user-name a').first();
        const authorName = authorEl.text().trim();
        const authorLink = authorEl.attr('href');
        const authorUsername = authorLink ? authorLink.split('/u/')[1] : 'unknown';

        const avatarEl = $('.article-meta .avatar img').first();
        let avatar = avatarEl.attr('src') || avatarEl.attr('data-src') || '';
        if (avatar.startsWith('//')) avatar = 'https:' + avatar;

        // Series?
        let series: ParsedSeries | undefined;
        const seriesEl = $('.series-sidebar-item'); // This might need adjustment
        // Or check if there is a series container

        // Attempt to find series link
        // "Bài viết này thuộc series ..."
        const seriesLink = $('a[href^="/s/"]').first();
        if (seriesLink.length > 0) {
            const seriesTitle = seriesLink.text().trim();
            const seriesHref = seriesLink.attr('href') || '';
            const seriesSlug = seriesHref.replace('/s/', '');
            if (seriesSlug) {
                series = {
                    title: seriesTitle,
                    slug: seriesSlug,
                    articles: [] // Will need to fetch the series page to get articles
                };
            }
        }

        return {
            title,
            slug,
            url: `${VIBLO_HOST}/p/${slug}`,
            thumbnail: '', // Could try to extract from OG tags
            excerpt: content.substring(0, 200), // simplistic fallback
            content,
            author: {
                name: authorName,
                username: authorUsername,
                avatar
            },
            tags: [],
            readTime: 5, // fallback
            series
        };
    }

    parseSeries(html: string, slug: string): ParsedSeries {
        const $ = cheerio.load(html);
        const articles: string[] = [];

        // Series Title
        const title = $('h1.series-content-header__title').text().trim() || slug;

        // Series Author
        const authorEl = $('.series-content-header__author .user-name a').first();
        const authorName = authorEl.text().trim() || 'Unknown';
        const authorLink = authorEl.attr('href');
        const authorUsername = authorLink ? authorLink.split('/u/')[1] : 'unknown';

        const avatarEl = $('.series-content-header__author .avatar img').first();
        let avatar = avatarEl.attr('src') || avatarEl.attr('data-src') || '';
        if (avatar.startsWith('//')) avatar = 'https:' + avatar;

        // Articles list
        $('.series-content-item .link, .series-item .link').each((_, el) => {
            const href = $(el).attr('href');
            if (href && href.startsWith('/p/')) {
                articles.push(href.replace('/p/', ''));
            }
        });

        return {
            title,
            slug,
            articles,
            // We might need to extend ParsedSeries interface to include author if we want to save it
            // But for now ParsedSeries interface in this file (lines 23-27) doesn't have author.
            // I need to update the interface too.
        };
    }
}

export const parser = new Parser();
