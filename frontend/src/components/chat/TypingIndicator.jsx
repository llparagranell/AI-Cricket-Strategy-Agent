export default function TypingIndicator() {
  return (
    <div className="flex items-center gap-2 rounded-2xl bg-white/[0.06] px-4 py-3">
      {[0, 1, 2].map((dot) => (
        <span
          key={dot}
          className="h-2 w-2 animate-pulse rounded-full bg-accent"
          style={{ animationDelay: `${dot * 120}ms` }}
        />
      ))}
    </div>
  );
}
