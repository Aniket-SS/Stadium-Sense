import { NextResponse } from 'next/server';
import { getVenueGraph } from '@/lib/data/loaders';

export async function GET() {
  const data = getVenueGraph();
  return NextResponse.json(data, {
    status: 200,
    headers: {
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
