import { useState } from 'react';
import {
  ArrowDownNarrowWide,
  ArrowUpNarrowWide,
  ListFilter,
  ListSortDescending,
  X,
} from 'lucide-react';
import { SortBy } from '@/app/types';
import { GenresPanel } from '@/components/GenresPanel';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useGetGenres } from '@/app/hooks/useGetGenres';

interface MoviesControlProps {
  onSortByChange: (value: SortBy) => void;
  descending: boolean;
  onDescendingChange: (descending: boolean) => void;
  selectedGenres: string[];
  onSelectedGenresChange: (genres: string[]) => void;
}

const items: { label: string; value: SortBy }[] = [
  { label: 'Title', value: 'title' },
  { label: 'Rating', value: 'vote_average' },
  { label: 'Year', value: 'release_date' },
  { label: 'Popularity', value: 'popularity' },
];

export function MoviesControl({
  onSortByChange,
  descending,
  onDescendingChange,
  selectedGenres,
  onSelectedGenresChange,
}: MoviesControlProps) {
  const [genresPanelOpen, setGenresPanelOpen] = useState(false);
  const { genres } = useGetGenres();

  const genreName = (id: string) =>
    genres.find((genre) => String(genre.id) === id)?.name;

  return (
    <div className="mb-4 rounded-2xl border shadow-md">
      <div className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center">
        <div className="flex flex-wrap items-center gap-2">
          {/* filter */}
          <Button
            variant={genresPanelOpen ? 'default' : 'outline'}
            size="sm"
            className="gap-2"
            onClick={() => setGenresPanelOpen((open) => !open)}
          >
            <ListFilter />
            Filter
            {selectedGenres.length > 0 && (
              <div
                className={`min-w-5 rounded-full text-xs font-semibold ${genresPanelOpen ? 'bg-gray-600' : 'bg-muted-foreground/20'}`}
              >
                {selectedGenres.length}
              </div>
            )}
          </Button>

          {/* sort order */}
          <Button
            variant="outline"
            size="sm"
            className="gap-2"
            onClick={() => onDescendingChange(!descending)}
          >
            {descending ? <ArrowDownNarrowWide /> : <ArrowUpNarrowWide />}
            {descending ? 'Descending' : 'Ascending'}
          </Button>

          {/* sort property */}
          <Select
            items={items}
            defaultValue="popularity"
            onValueChange={(val) => onSortByChange(val as SortBy)}
          >
            <SelectTrigger className="w-40 gap-2">
              <ListSortDescending />
              <SelectValue />
            </SelectTrigger>
            <SelectContent alignItemWithTrigger={false}>
              <SelectGroup>
                {items.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      {selectedGenres.length > 0 && (
        <div className="border-t p-4">
          <div className="flex flex-wrap gap-2">
            {selectedGenres.map((id) => (
              <Button
                variant="outline"
                onClick={() =>
                  onSelectedGenresChange(
                    selectedGenres.filter((genre) => genre !== id),
                  )
                }
                key={id}
              >
                {genreName(id)}
                <X className="size-3" />
              </Button>
            ))}
            <Button
              variant="destructive"
              size="sm"
              className="gap-1"
              onClick={() => onSelectedGenresChange([])}
            >
              Clear all
            </Button>
          </div>
        </div>
      )}

      {genresPanelOpen && (
        <div className="border-t p-4">
          <GenresPanel
            selectedGenres={selectedGenres}
            onSelectedGenresChange={onSelectedGenresChange}
          />
        </div>
      )}
    </div>
  );
}
