import { Navigation } from "@/components/ui/navigation";
import { Spotlight } from "@/components/ui/spotlight";
import { UnicornStudio } from "@/components/ui/unicorn-studio";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-red-500/30 overflow-x-hidden" id="main-content">
      <Navigation />

      {/* Editorial Hero Section with Clipping Strategy */}
      <section id="home" className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none z-[1] opacity-30 dot-grid" />
        {/* Immersive Background Animation with Clipping */}
        <div className="absolute inset-x-0 top-0 bottom-20 z-0 overflow-hidden pointer-events-none will-change-transform bg-gradient-to-b from-zinc-950 via-black to-black">
          <UnicornStudio
            projectId="cmbQxPyy8Ts7q2LBBDz1"
            className="w-full h-full object-cover scale-[1.15] translate-y-[-3%]"
          />
          {/* Editorial Overlays/Gradients */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,0,0,0.1)_0%,transparent_50%)] z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20 z-10" />
        </div>

        <Spotlight className="-top-40 left-0 md:left-[10%] md:-top-20 z-20" size={800} />

        <div className="container mx-auto px-6 relative z-30 w-full mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            {/* Left Side: Heading */}
            <div className="lg:col-span-8">
              {/* Tagline/Update */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] md:text-xs uppercase tracking-[0.2em] text-zinc-400 mb-8 animate-fade-in">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                Available for New Projects
              </div>

              <h1 className="text-6xl md:text-[clamp(4.5rem,10vw,12rem)] font-heading font-bold tracking-tighter leading-[0.85] mb-4 translate-x-[-0.05em]">
                Building <br />
                <span className="text-primary italic">Intentional</span> <br />
                Digital Experiences
              </h1>
            </div>

            {/* Right Side: Description & CTAs */}
            <div className="lg:col-span-4 lg:pb-12 lg:pr-20">
              <p className="text-xl md:text-2xl text-zinc-400 leading-[1.5] font-sans mb-10 opacity-80 lg:text-right">
                Computer science undergraduate focused on <br className="hidden xl:block" />
                cybersecurity, digital forensics, and AI-enabled systems.
              </p>

              <div className="flex flex-wrap items-center gap-8 lg:justify-end mb-4">
                <a href="#projects" className="group relative bg-primary text-primary-foreground px-10 py-5 rounded-full font-semibold text-lg hover:opacity-90 transition-all active:scale-95 overflow-hidden">
                  <span className="relative z-10">View My Work</span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </a>
                <a href="#contact" className="text-white/60 hover:text-white font-semibold text-lg transition-colors flex items-center gap-2 group">
                  Contact Me
                  <span className="w-8 h-px bg-white/20 group-hover:w-12 group-hover:bg-primary transition-all duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Vertical Socials/Nav Hint - Positioned at edge to avoid button conflict */}
        <div className="absolute right-4 bottom-24 hidden lg:flex flex-col items-center gap-8 z-30 pointer-events-none">
          <div className="h-24 w-px bg-gradient-to-t from-zinc-500 to-transparent" />
          <span className="rotate-90 origin-center whitespace-nowrap text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-mono">
            Scroll to Navigate
          </span>
        </div>
      </section>

      {/* Projects Section */}
      <Projects />

      {/* Skills Section */}
      <Skills />

      {/* Experience Section */}
      <Experience />

      {/* Contact Section */}
      <Contact />

      <footer className="py-16 border-t border-white/5 text-center bg-black relative z-10">
        <div className="absolute inset-0 pointer-events-none opacity-10 dot-grid" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="w-8 h-[1.5px] bg-primary/40 mx-auto mb-8" />
          <p className="text-sm text-zinc-500 mb-2">© {new Date().getFullYear()} Siddharth Sinha</p>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-600">Built with Next.js & Passion</p>
          <div className="flex items-center justify-center gap-3 mt-6">
            <span className="w-2 h-2 rounded-full bg-primary/40" />
            <span className="w-2 h-2 rounded-full bg-primary/20" />
            <span className="w-2 h-2 rounded-full bg-primary/10" />
          </div>
        </div>
      </footer>
    </main>
  );
}
