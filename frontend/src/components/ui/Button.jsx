import { Loader2 } from 'lucide-react';
import { cn } from '../../utils/cn';

const variants = {
  primary: 'bg-accent text-background hover:bg-primary',
  secondary: 'bg-white/[0.07] text-text hover:bg-white/[0.12]',
  ghost: 'text-muted hover:bg-white/[0.08] hover:text-text',
};

export default function Button({ className, variant = 'primary', isLoading, children, ...props }) {
  return (
    <button
      className={cn(
        'focus-ring inline-flex h-11 items-center justify-center gap-2 rounded-2xl px-5 text-sm font-bold transition disabled:cursor-not-allowed disabled:opacity-60',
        variants[variant],
        className,
      )}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
      {children}
    </button>
  );
}
