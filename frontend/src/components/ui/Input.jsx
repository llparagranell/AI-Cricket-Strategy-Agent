import { cn } from '../../utils/cn';

export function Input({ className, ...props }) {
  return (
    <input
      className={cn(
        'focus-ring h-11 w-full rounded-2xl border border-border bg-white/[0.06] px-4 text-sm text-text placeholder:text-muted',
        className,
      )}
      {...props}
    />
  );
}

export function Textarea({ className, ...props }) {
  return (
    <textarea
      className={cn(
        'focus-ring min-h-28 w-full resize-none rounded-2xl border border-border bg-white/[0.06] px-4 py-3 text-sm text-text placeholder:text-muted',
        className,
      )}
      {...props}
    />
  );
}
