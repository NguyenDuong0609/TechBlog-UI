import { NextResponse } from 'next/server';
import { postService } from '@/services/post.service';

interface Props {
    params: Promise<{ slug: string }>;
}

export async function GET(request: Request, props: Props) {
    const params = await props.params;
    try {
        const post = await postService.getPostBySlug(params.slug);
        if (!post) {
            return NextResponse.json({ error: 'Post not found' }, { status: 404 });
        }
        return NextResponse.json(post);
    } catch (error) {
        console.error('[API_POST_GET]', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
