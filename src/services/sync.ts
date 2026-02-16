
import { crawler } from './crawler/manager';
import { prisma } from '@/lib/prisma';
import { ParsedArticleDetail, ParsedSeries } from './crawler/parser';
import { Prisma } from '@prisma/client';

export async function syncData() {
    console.log('Starting data sync...');
    const data = await crawler.crawl();

    console.log(`Crawler finished. Preparing to sync ${data.posts.length} posts and ${data.series.length} series.`);

    // 1. Prepare unique Authors
    // We need to extract authors from posts and series.
    // Map username -> Author object
    const authorsMap = new Map<string, { name: string, username: string, avatar: string }>();

    data.posts.forEach(post => {
        authorsMap.set(post.author.username, post.author);
    });

    data.series.forEach(series => {
        if (series.author) {
            authorsMap.set(series.author.username, series.author);
        }
    });

    // 2. Prepare unique Categories
    // Crawler returns list of categories (strings) and posts have tags.
    // We'll treat the crawled categories as the main categories.
    // But wait, schema has relation Post -> Category (single).
    // A post can have multiple tags.
    // We need to assign ONE primary category to each post.
    // In `manager.ts`, we pushed the crawled category as the first tag.
    // We will use that.

    const categoriesSet = new Set<string>();
    data.posts.forEach(post => {
        if (post.tags.length > 0) {
            categoriesSet.add(post.tags[0]);
        }
    });

    // 3. Prepare Series
    // We have data.series.

    // 4. Execute Transaction
    // We use interactive transaction to ensure atomicity.
    // However, SQLite variables/limits might be an issue with huge queries, 
    // but 500 items should be fine.
    // We will Delete All then Create All.

    await prisma.$transaction(async (tx: Prisma.TransactionClient) => {
        console.log('Clearing old data...');
        // Delete in order to avoid FK constraints violations (if cascade is not set)
        // Post depends on Author, Category, Series.
        // Series depends on Author.
        // Category depends on nothing.
        // Author depends on nothing.
        await tx.post.deleteMany();
        await tx.series.deleteMany();
        await tx.category.deleteMany();
        await tx.author.deleteMany();

        console.log('Inserting authors...');
        const authorIdMap = new Map<string, number>();
        for (const author of authorsMap.values()) {
            const created = await tx.author.create({
                data: {
                    name: author.name,
                    username: author.username,
                    avatar: author.avatar,
                    bio: 'Viblo Author'
                }
            });
            authorIdMap.set(author.username, created.id);
        }

        console.log('Inserting categories...');
        const categoryIdMap = new Map<string, number>();
        for (const slug of categoriesSet) {
            // We assume slug == name for simplicity or derive name
            const name = slug.charAt(0).toUpperCase() + slug.slice(1);
            const created = await tx.category.create({
                data: {
                    name: name,
                    slug: slug
                }
            });
            categoryIdMap.set(slug, created.id);
        }

        console.log('Inserting series...');
        const seriesIdMap = new Map<string, number>();
        for (const series of data.series) {
            // Series needs author.
            // If series author is missing (crawler didn't find it?), fallback to a default or skip?
            // In our updated parser, we try to get it.
            // If undefined, we can try to find an author from one of its posts?
            // Complex. For now, if no author, we might skip or assign to a placeholder.
            // Let's check if we have series.author.

            let authorId: number | undefined;
            if (series.author) {
                authorId = authorIdMap.get(series.author.username);
            }

            // Fallback: finding author from the first article in the series that we crawled?
            if (!authorId) {
                // Try to find a post in this series
                const postInSeries = data.posts.find(p => p.series?.slug === series.slug);
                if (postInSeries) {
                    authorId = authorIdMap.get(postInSeries.author.username);
                }
            }

            // If still no authorId, we can't create series properly without violating foreign key?
            // Schema: authorId Int. It is required.
            // We will skip series if no author found.
            if (!authorId) {
                console.warn(`Skipping series ${series.slug} due to missing author.`);
                continue;
            }

            const created = await tx.series.create({
                data: {
                    title: series.title,
                    slug: series.slug,
                    description: '',
                    authorId: authorId
                }
            });
            seriesIdMap.set(series.slug, created.id);
        }

        console.log('Inserting posts...');
        for (const post of data.posts) {
            const authorId = authorIdMap.get(post.author.username);
            if (!authorId) continue; // Should not happen given we inserted all authors

            // Category
            // Use first tag
            const categorySlug = post.tags[0];
            let categoryId = categoryIdMap.get(categorySlug);

            // If post has no tags or tag not in map (should be there), fallback?
            if (!categoryId) {
                // Find 'uncategorized' or create it?
                // Let's just skip or create on the fly?
                // We populated categoryIdMap from data.posts tags. So it must exist.
                // Unless tags is empty.
                if (post.tags.length === 0) {
                    // Skip or fallback
                    continue;
                }
            }

            // Series
            let seriesId: number | null = null;
            if (post.series) {
                seriesId = seriesIdMap.get(post.series.slug) || null;
            }

            await tx.post.create({
                data: {
                    title: post.title,
                    slug: post.slug,
                    excerpt: post.excerpt,
                    content: post.content,
                    thumbnail: post.thumbnail,
                    readTime: post.readTime,
                    authorId: authorId,
                    categoryId: categoryId!,
                    seriesId: seriesId
                }
            });
        }
    });

    console.log('Sync completed successfully.');
}
