'use client';

import { useState, useMemo } from 'react';
import { SortBy } from '@/app/types';
import { useGetMovies } from '@/app/hooks/useGetMovies';
import { MoviesControl } from '@/components/MoviesControl';
import { MoviesGrid } from '@/components/MoviesGrid';

export default function Home() {
  const [descending, setDescending] = useState(true);
  const [sortBy, setSortBy] = useState<SortBy>('popularity');
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

  const { movies, isLoading, isError } = useGetMovies();

  const filteredMovies = useMemo(() => {
    const genres = new Set(selectedGenres);

    // filter movies whose genres are selected
    const filtered =
      genres.size === 0
        ? movies
        : movies.filter((movie) => {
            const moviesGenres = new Set(movie.genre_ids.map(String));
            return selectedGenres.every((id) => moviesGenres.has(id));
          });

    const direction = descending ? -1 : 1;

    return [...filtered].sort((a, b) => {
      if (a[sortBy] < b[sortBy]) return -direction;
      if (a[sortBy] > b[sortBy]) return direction;
      return 0;
    });
  }, [descending, sortBy, selectedGenres, movies]);

  return (
    <div className="container mx-auto flex flex-col px-6 py-10 lg:py-14">
      <section className="mb-8 flex flex-col gap-4">
        <span className="text-xs font-semibold tracking-widest uppercase">
          Popular Movies
        </span>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Discover your next favorite movie
        </h1>
        <p className="max-w-2xl text-sm sm:text-base">
          Explore a curated feed from The Movie Database. Filter by genre and
          sort the results to match what you&apos;re in the mood for.
        </p>
      </section>

      <div className="flex flex-col gap-6">
        <MoviesControl
          onSortByChange={setSortBy}
          descending={descending}
          onDescendingChange={setDescending}
          selectedGenres={selectedGenres}
          onSelectedGenresChange={setSelectedGenres}
        />
        <MoviesGrid
          movies={filteredMovies}
          isLoading={isLoading}
          isError={isError}
        />
      </div>
    </div>
  );
}
