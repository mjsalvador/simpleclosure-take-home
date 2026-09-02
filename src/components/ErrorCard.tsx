import { AlertCircle } from 'lucide-react';

export function ErrorCard({ error }: { error?: string | null }) {
  return (
    <div className="border-destructive bg-destructive/10 text-destructive flex flex-col items-center gap-2 rounded-2xl border p-8 text-center">
      <AlertCircle className="size-6" />
      <p className="text-sm font-medium">Oops! Something went wrong</p>
      <p className="text-destructive text-xs">{error}</p>
    </div>
  );
}
