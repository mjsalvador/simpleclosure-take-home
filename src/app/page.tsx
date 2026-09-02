'use client';

import { useGetMovies } from '@/app/hooks/useGetMovies';
import { MoviesGrid } from '@/components/MoviesGrid';

export default function Home() {
  const { movies, isLoading, isError } = useGetMovies();

  return (
    <div className="container mx-auto flex flex-col px-6 py-10">
      <div className="flex flex-col gap-6">
        <MoviesGrid movies={movies} isLoading={isLoading} isError={isError} />
      </div>
    </div>
  );
}
