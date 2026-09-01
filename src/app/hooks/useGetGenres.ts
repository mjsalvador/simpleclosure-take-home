import useSWR from 'swr';
import { GenresResponse } from '@/app/types';

export function useGetGenres() {
  const { data, isLoading, error } = useSWR<GenresResponse>('/api/genres');

  return {
    genres: data ? data.genres : [],
    isLoading,
    isError: error,
  };
}
