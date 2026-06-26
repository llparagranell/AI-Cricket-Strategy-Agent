import { AlertTriangle, Search } from 'lucide-react';
import GlassCard from './GlassCard';

export function EmptyState({ title = 'Nothing here yet', description = 'Start a new analysis to populate this area.' }) {
  return (
    <GlassCard className="grid place-items-center py-10 text-center">
      <Search className="mb-4 h-9 w-9 text-accent" />
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="mt-2 max-w-sm text-sm text-muted">{description}</p>
    </GlassCard>
  );
}

export function ErrorState({ title = 'Something went wrong', description = 'Please try again in a moment.' }) {
  return (
    <GlassCard className="border-primary/40 bg-primary/10">
      <div className="flex items-start gap-3">
        <AlertTriangle className="mt-1 h-5 w-5 text-accent" />
        <div>
          <h3 className="font-bold">{title}</h3>
          <p className="mt-1 text-sm text-muted">{description}</p>
        </div>
      </div>
    </GlassCard>
  );
}
