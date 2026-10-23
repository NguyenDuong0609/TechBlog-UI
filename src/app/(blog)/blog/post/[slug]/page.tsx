import PostPageClient from '@/components/pages/post-page';
import { Metadata } from 'next';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    // Note: In a real app we would fetch metadata here too via API or Service.
    // For now we assume defaults or basic dynamic structure
    return {
        title: `Post: ${slug}`,
    };
}

export default async function ArticlePage({ params }: PageProps) {
    const { slug } = await params;
    return <PostPageClient slug={slug} />;
}
