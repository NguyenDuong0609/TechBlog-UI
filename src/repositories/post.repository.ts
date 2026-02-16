import { prisma } from '@/lib/prisma';
import { IPostRepository, PostWithRelations } from './interfaces';

export class PostRepository implements IPostRepository {
    async findAll(): Promise<PostWithRelations[]> {
        const results = await prisma.post.findMany({
            include: {
                author: true,
                category: true,
                series: {
                    include: {
                        posts: {
                            select: {
                                id: true,
                                title: true,
                                slug: true,
                            },
                        },
                    },
                },
            },
            orderBy: {
                publishedAt: 'desc',
            },
        });
        return results;
    }

    async findBySlug(slug: string): Promise<PostWithRelations | null> {
        const post = await prisma.post.findUnique({
            where: { slug },
            include: {
                author: true,
                category: true,
                series: {
                    include: {
                        posts: {
                            select: {
                                id: true,
                                title: true,
                                slug: true,
                            },
                        },
                    },
                },
            },
        });
        return post;
    }

    async findByCategory(categorySlug: string): Promise<PostWithRelations[]> {
        const results = await prisma.post.findMany({
            where: {
                category: {
                    slug: categorySlug,
                },
            },
            include: {
                author: true,
                category: true,
                series: {
                    include: {
                        posts: {
                            select: {
                                id: true,
                                title: true,
                                slug: true,
                            },
                        },
                    },
                },
            },
            orderBy: {
                publishedAt: 'desc',
            },
        });
        return results;
    }

    async findByAuthor(username: string): Promise<PostWithRelations[]> {
        const results = await prisma.post.findMany({
            where: {
                author: {
                    username,
                },
            },
            include: {
                author: true,
                category: true,
                series: {
                    include: {
                        posts: {
                            select: {
                                id: true,
                                title: true,
                                slug: true,
                            },
                        },
                    },
                },
            },
            orderBy: {
                publishedAt: 'desc',
            },
        });
        return results;
    }
}

export const postRepository = new PostRepository();
