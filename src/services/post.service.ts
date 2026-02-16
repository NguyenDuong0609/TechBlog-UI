import { marked } from 'marked';
import { PostWithRelations } from '@/repositories/interfaces';
import { postRepository } from '@/repositories/post.repository';
import { Article } from '@/types/article';
import { normalizeSlug } from '@/lib/slug';

export class PostService {
    private mapToArticle(post: PostWithRelations): Article {
        try {
            if (!post) throw new Error('Post object is undefined');
            if (!post.author) throw new Error(`Post ${post.id} missing author`);
            if (!post.category) throw new Error(`Post ${post.id} missing category`);

            // Explicit safety for fields that might cause .replace issues if missing
            const title = String(post.title || '');
            const slug = String(post.slug || '');
            const excerpt = String(post.excerpt || '');
            const rawContent = String(post.content || '');

            // Setup marked with custom renderer to extract headings
            const toc: { id: string; text: string; level: number }[] = [];
            const renderer = new marked.Renderer();

            renderer.heading = ({ text, depth, raw }) => {
                if (depth === 2 || depth === 3) {
                    const id = raw
                        .toLowerCase()
                        .normalize("NFD")
                        .replace(/[\u0300-\u036f]/g, "")
                        .replace(/[^\w\s-]/g, "")
                        .replace(/\s+/g, "-");

                    toc.push({ id, text: raw, level: depth });
                    return `<h${depth} id="${id}">${text}</h${depth}>`;
                }
                return `<h${depth}>${text}</h${depth}>`;
            };

            // Parse Markdown to HTML with the custom renderer
            const content = marked.parse(rawContent, { renderer }) as string;

            return {
                id: post.id.toString(),
                title: title,
                slug: slug,
                excerpt: excerpt,
                content: content,
                thumbnail: post.thumbnail || '/images/placeholder.jpg',
                author: {
                    name: post.author.name || 'Anonymous',
                    avatar: post.author.avatar || '',
                    username: post.author.username || 'anonymous',
                },
                tags: post.category.name ? [post.category.name] : [],
                publishedAt: (post.publishedAt || new Date()).toISOString(),
                readTime: post.readTime || 5,
                views: post.views || 0,
                comments: post.comments || 0,
                bookmarks: post.bookmarks || 0,
                series: post.series ? {
                    id: post.series.id.toString(),
                    title: post.series.title,
                    slug: post.series.slug,
                    articles: post.series.posts.map(p => ({
                        id: p.id.toString(),
                        title: p.title,
                        slug: p.slug,
                    })),
                } : undefined,
                tableOfContents: toc,
            };
        } catch (err) {
            console.error(`[Service] Error mapping post ${post?.id}:`, err);
            throw err;
        }
    }

    async getAllPosts(): Promise<Article[]> {
        const posts = await postRepository.findAll();

        return posts.map((post) => {
            try {
                return this.mapToArticle(post);
            } catch (err) {
                console.error(`[Service] Mapping failed for post:`, err);
                throw err;
            }
        });
    }

    async getPostBySlug(slug: string): Promise<Article | null> {
        const normalizedSlug = normalizeSlug(slug);
        const post = await postRepository.findBySlug(normalizedSlug);
        if (!post) return null;
        return this.mapToArticle(post);
    }

    async getPostsByCategory(slug: string): Promise<Article[]> {
        const normalizedSlug = normalizeSlug(slug);
        try {
            const posts = await postRepository.findByCategory(normalizedSlug);
            return posts.map(this.mapToArticle);
        } catch (error) {
            console.error(`[Service] Error in findByCategory for "${normalizedSlug}":`, error);
            throw error;
        }
    }

    async getPostsByAuthor(username: string): Promise<Article[]> {
        const posts = await postRepository.findByAuthor(username);
        return posts.map(this.mapToArticle);
    }
}

export const postService = new PostService();
