import { Loader2 } from 'lucide-react';

export default function LoadingSpinner({ label = 'Loading' }) {
  return (
    <div className="flex items-center gap-3 text-muted">
      <Loader2 className="h-5 w-5 animate-spin text-accent" />
      <span>{label}</span>
    </div>
  );
}
