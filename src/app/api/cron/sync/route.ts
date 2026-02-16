
import { NextResponse } from 'next/server';
import { syncData } from '@/services/sync';

export const dynamic = 'force-dynamic';
export const maxDuration = 300; // 5 minutes timeout if supported by platform

export async function GET() {
    try {
        // In a real app, we should check for a secret token
        // const authHeader = request.headers.get('authorization');
        // if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
        //   return new NextResponse('Unauthorized', { status: 401 });
        // }

        // Trigger sync
        // detailed logging is in the server logs
        await syncData();

        return NextResponse.json({ success: true, message: 'Data synced successfully' });
    } catch (error) {
        console.error('Sync failed:', error);
        return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
    }
}
