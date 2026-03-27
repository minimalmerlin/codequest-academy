/**
 * Shown while auth state is loading — prevents white flash.
 */
export function PageSkeleton() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10 animate-pulse">
      <div className="h-8 w-48 rounded-xl bg-white/10 mb-6" />
      <div className="grid gap-4 sm:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-48 rounded-3xl bg-white/5 border border-white/10" />
        ))}
      </div>
      <div className="mt-6 h-32 rounded-3xl bg-white/5 border border-white/10" />
    </div>
  );
}
