import useSWR from 'swr';
import { GenresResponse } from '@/app/types';
import { getErrorMessage } from '@/lib/utils';

export function useGetGenres() {
  const { data, isLoading, error } = useSWR<GenresResponse>('/api/genres');

  return {
    genres: data ? data.genres : [],
    isLoading,
    error: error ? getErrorMessage(error) : null,
  };
}
