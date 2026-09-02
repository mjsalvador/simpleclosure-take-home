import { isAxiosError } from 'axios';
import { NextResponse } from 'next/server';
import { tmdbApiClient } from '@/lib/api';
import { GenresResponse } from '@/app/types';

export async function GET() {
  try {
    const { data } =
      await tmdbApiClient.get<GenresResponse>('/genre/movie/list');
    return NextResponse.json(data);
  } catch (e: unknown) {
    const status = isAxiosError(e) ? (e.response?.status ?? 502) : 500;
    return NextResponse.json(
      { message: 'There was an error fetching genres' },
      { status },
    );
  }
}
