import { Navigation } from "@/components/ui/navigation";
import { Blog } from "@/components/sections/Blog";

export default function BlogPage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-red-500/30">
            <Navigation />
            <div className="pt-20">
                <Blog />
            </div>

            <footer className="py-10 border-t border-white/5 text-center bg-black relative">
                <div className="absolute inset-0 pointer-events-none opacity-10" style={{
                    backgroundImage: "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                }} />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="w-6 h-[1.5px] bg-primary/40 mx-auto mb-6" />
                    <p className="text-sm text-zinc-500">© {new Date().getFullYear()} Siddharth Sinha. All rights reserved.</p>
                </div>
            </footer>
        </main>
    );
}
