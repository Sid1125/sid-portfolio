export default function Loading() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-500">
          Loading
        </p>
      </div>
    </div>
  );
}
