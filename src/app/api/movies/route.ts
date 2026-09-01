import { NextResponse } from 'next/server';
import { tmdbApiClient } from '@/lib/api';

export async function GET() {
  const { data } = await tmdbApiClient.get('/discover/movie');

  return NextResponse.json(data);
}
