import { Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Movie } from '@/app/types';

interface MovieCardProps {
  movie: Movie;
}

const BASE_URL = 'https://image.tmdb.org/t/p/w500';

export function MovieCard({ movie }: MovieCardProps) {
  const year = new Date(movie.release_date).getFullYear();
  const rating = movie.vote_average.toFixed(1);

  return (
    <div className="relative flex flex-col overflow-hidden rounded-2xl border shadow-md">
      <div className="relative aspect-2/3">
        {/* poster */}
        <img
          className="h-full w-full object-cover"
          src={`${BASE_URL}${movie.poster_path}`}
        />

        {/* rating badge */}
        <Badge className="absolute top-3 left-3 bg-amber-300 text-black">
          <Star className="size-3" fill="black" strokeWidth={0} />
          {rating}
        </Badge>

        {/* year badge */}
        <Badge className="absolute top-3 right-3 bg-black/50">{year}</Badge>

        {/* overview overlay */}
        <div className="absolute inset-0 flex flex-col justify-end bg-black/70 p-4 text-sm leading-relaxed tracking-tight text-zinc-200 opacity-0 duration-300 hover:opacity-100">
          {movie.overview}
        </div>
      </div>

      {/* details */}
      <div className="flex flex-col gap-1 p-3">
        <h3 className="text-sm font-semibold tracking-tight">{movie.title}</h3>
        <div className="flex items-center gap-1.5 text-xs">
          <Star className="size-4 fill-amber-300" strokeWidth={0} />
          <span className="font-medium">{rating}</span>
          <span>·</span>
          <span className="text-muted-foreground">
            {movie.vote_count.toLocaleString()} votes
          </span>
        </div>
      </div>
    </div>
  );
}
