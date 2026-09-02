import { ErrorCard } from '@/components/ErrorCard';
import { Badge } from '@/components/ui/badge';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { useGetGenres } from '@/app/hooks/useGetGenres';

interface GenresPanelProps {
  selectedGenres: string[];
  onSelectedGenresChange: (genres: string[]) => void;
}

export function GenresPanel({
  selectedGenres,
  onSelectedGenresChange,
}: GenresPanelProps) {
  const { genres, isLoading, isError } = useGetGenres();

  if (isError) {
    return <ErrorCard isError={isError} />;
  }

  if (isLoading) {
    return (
      <div className="flex flex-wrap gap-4">
        {Array.from({ length: 12 }).map((_, i) => (
          <Badge className="bg-muted h-9 w-26 animate-pulse" key={i} />
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      <span className="p-2 pb-3 text-sm font-medium tracking-tight uppercase">
        Filter by genre
      </span>
      <ToggleGroup
        multiple
        className="flex flex-wrap gap-4"
        value={selectedGenres}
        onValueChange={(values) => onSelectedGenresChange(values)}
      >
        {genres.map((genre) => (
          <ToggleGroupItem
            key={genre.id}
            value={`${genre.id}`}
            variant="outline"
            size="sm"
          >
            {genre.name}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </div>
  );
}
