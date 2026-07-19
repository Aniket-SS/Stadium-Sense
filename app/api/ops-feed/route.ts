import { NextResponse } from 'next/server';
import { getOpsFeed } from '@/lib/data/loaders';

export async function GET() {
  const data = getOpsFeed();
  return NextResponse.json(data, {
    status: 200,
    headers: {
      'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300',
    },
  });
}
