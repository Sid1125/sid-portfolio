import Link from "next/link";

export default function NotFound() {
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
          // 404
        </p>

        <h1 className="text-7xl md:text-[clamp(5rem,12vw,10rem)] font-heading font-bold tracking-tighter leading-[0.85] mb-6">
          Lost in
          <br />
          <span className="text-primary italic">Cyberspace</span>
        </h1>

        <p className="text-zinc-400 text-lg md:text-xl max-w-md mx-auto mb-10">
          The page you are looking for does not exist or has been moved.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/"
            className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-all active:scale-95"
          >
            Back to Home
          </Link>
          <Link
            href="/#contact"
            className="text-white/60 hover:text-white font-semibold transition-colors px-8 py-4"
          >
            Report a broken link
          </Link>
        </div>
      </div>

      <footer className="absolute bottom-8 text-center">
        <div className="w-8 h-[1.5px] bg-primary/40 mx-auto mb-4" />
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-600">
          HTTP 404 &mdash; Page Not Found
        </p>
      </footer>
    </main>
  );
}
