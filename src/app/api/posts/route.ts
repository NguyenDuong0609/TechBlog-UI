import { NextResponse } from 'next/server';
import { postService } from '@/services/post.service';

export async function GET() {
    try {
        const posts = await postService.getAllPosts();
        return NextResponse.json(posts);
    } catch (error: any) {
        console.error('[API_POSTS_GET] Full Error:', error);
        if (error.stack) {
            console.error('[API_POSTS_GET] Stack Trace:', error.stack);
        }
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
