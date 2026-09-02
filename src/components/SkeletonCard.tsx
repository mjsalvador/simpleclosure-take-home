import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export function SkeletonCard() {
  return (
    <Card className="border-0.5 gap-0 rounded-2xl py-0 shadow-none">
      <CardHeader className="p-0">
        <Skeleton className="aspect-2/3 w-full" />
      </CardHeader>
      <CardContent className="flex flex-col gap-2 p-3">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
      </CardContent>
    </Card>
  );
}
