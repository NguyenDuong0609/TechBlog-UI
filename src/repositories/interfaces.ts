import { Prisma } from '@prisma/client';

// Repository Return Types
export type PostWithRelations = Prisma.PostGetPayload<{
    include: {
        author: true;
        category: true;
        series: {
            include: {
                posts: {
                    select: {
                        id: true;
                        title: true;
                        slug: true;
                    };
                };
            };
        };
    };
}>;

// Minimal interface for repo operations
export interface IPostRepository {
    findAll(): Promise<PostWithRelations[]>;
    findBySlug(slug: string): Promise<PostWithRelations | null>;
    findByCategory(categorySlug: string): Promise<PostWithRelations[]>;
    findByAuthor(username: string): Promise<PostWithRelations[]>;
}
