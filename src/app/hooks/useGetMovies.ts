import useSWR from 'swr';
import { MoviesResponse } from '@/app/types';

export function useGetMovies() {
  const { data, isLoading, error } = useSWR<MoviesResponse>('/api/movies');

  return {
    movies: data ? data.results : [],
    isLoading,
    isError: error,
  };
}
