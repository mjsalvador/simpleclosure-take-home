import { AlertCircle } from 'lucide-react';
import { Movie } from '@/app/types';
import { MovieCard } from '@/components/MovieCard';
import { SkeletonCard } from '@/components/ui/skeleton-card';

interface MoviesGridProps {
  movies: Movie[];
  isLoading: boolean;
  isError?: string | null;
}

export function MoviesGrid({ movies, isLoading, isError }: MoviesGridProps) {
  if (isError) {
    return (
      <div className="border-destructive bg-destructive/10 text-destructive flex flex-col items-center gap-2 rounded-2xl border p-12">
        <AlertCircle className="size-6" />
        <p className="text-sm font-medium">Oops! Something went wrong</p>
        <p className="text-destructive text-xs">{isError}</p>
      </div>
    );
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

  return (
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </div>
  );
}
