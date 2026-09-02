import { isAxiosError } from 'axios';
import { NextResponse } from 'next/server';
import { tmdbApiClient } from '@/lib/api';
import { MoviesResponse } from '@/app/types';

export async function GET() {
  try {
    const { data } = await tmdbApiClient.get<MoviesResponse>('/discover/movie');
    return NextResponse.json(data);
  } catch (e: unknown) {
    const status = isAxiosError(e) ? (e.response?.status ?? 502) : 500;
    return NextResponse.json(
      { message: 'There was an error fetching movies' },
      { status },
    );
  }
}
