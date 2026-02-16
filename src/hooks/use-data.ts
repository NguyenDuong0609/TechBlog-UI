import { useQuery } from '@tanstack/react-query';
import { ApiClient } from '@/lib/api-client';
import { Article } from '@/types/article';

export const usePosts = () => {
    return useQuery({
        queryKey: ['posts'],
        queryFn: () => ApiClient.get<Article[]>('/posts'),
    });
};

export const usePost = (slug: string) => {
    return useQuery({
        queryKey: ['post', slug],
        queryFn: () => ApiClient.get<Article>(`/posts/${slug}`),
        enabled: !!slug,
    });
};

export const useCategoryPosts = (slug: string) => {
    return useQuery({
        queryKey: ['category-posts', slug],
        queryFn: () => ApiClient.get<Article[]>(`/categories/${slug}/posts`),
        enabled: !!slug,
    });
};

export const useAuthorPosts = (slug: string) => {
    return useQuery({
        queryKey: ['author-posts', slug],
        queryFn: () => ApiClient.get<Article[]>(`/authors/${slug}/posts`),
        enabled: !!slug,
    });
};
