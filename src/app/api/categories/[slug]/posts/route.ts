import { NextResponse } from 'next/server';
import { postService } from '@/services/post.service';

interface Props {
    params: Promise<{ slug: string }>;
}

export async function GET(request: Request, props: Props) {
    const params = await props.params;
    try {
        const posts = await postService.getPostsByCategory(params.slug);
        return NextResponse.json(posts);
    } catch (error) {
        console.error('[API_CATEGORY_POSTS_GET]', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
