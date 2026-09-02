import { Movie } from '@/app/types';
import { MovieCard } from '@/components/MovieCard';
import { SkeletonCard } from '@/components/SkeletonCard';
import { ErrorCard } from '@/components/ErrorCard';
import { SearchX } from 'lucide-react';

interface MoviesGridProps {
  movies: Movie[];
  isLoading: boolean;
  isError?: string | null;
}

export function MoviesGrid({ movies, isLoading, isError }: MoviesGridProps) {
  if (isError) {
    return <ErrorCard isError={isError} />;
  }

  if (isLoading) {
    return (
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {Array.from({ length: 20 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }

  if (movies.length === 0) {
    return (
      <div className="flex flex-col items-center gap-2 rounded-2xl border p-8 text-center">
        <SearchX className="size-6" />
        <p className="text-sm font-medium">No movies match your filters</p>
        <p className="text-xs">Try removing a genre or two.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </div>
  );
}
