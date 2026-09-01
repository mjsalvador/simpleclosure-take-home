import { NextResponse } from 'next/server';
import { tmdbApiClient } from '@/lib/api';

export async function GET() {
  const { data } = await tmdbApiClient.get('/genre/movie/list');

  return NextResponse.json(data);
}
