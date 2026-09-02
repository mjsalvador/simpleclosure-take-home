import useSWR from 'swr';
import { MoviesResponse } from '@/app/types';
import { getErrorMessage } from '@/lib/utils';

export function useGetMovies() {
  const { data, isLoading, error } = useSWR<MoviesResponse>('/api/movies');

  return {
    movies: data ? data.results : [],
    isLoading,
    error: error ? getErrorMessage(error) : null,
  };
}
