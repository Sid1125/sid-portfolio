"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-red-500/30 flex flex-col items-center justify-center px-6 relative overflow-hidden" id="main-content">
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 text-center">
        <p className="font-mono text-xs text-primary/60 tracking-[0.2em] mb-4">
          // error
        </p>

        <h1 className="text-6xl md:text-8xl font-heading font-bold tracking-tighter leading-[0.85] mb-6">
          Something
          <br />
          <span className="text-primary italic">Broke</span>
        </h1>

        <p className="text-zinc-400 text-lg max-w-md mx-auto mb-10">
          An unexpected error occurred. Please try again.
        </p>

        <button
          onClick={reset}
          className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-all active:scale-95 cursor-pointer"
        >
          Try Again
        </button>
      </div>
    </main>
  );
}
