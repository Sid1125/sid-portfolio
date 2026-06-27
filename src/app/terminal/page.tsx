import { Navigation } from "@/components/ui/navigation";
import { Terminal } from "@/components/sections/Terminal";

export default function TerminalPage() {
    return (
        <main className="h-screen flex flex-col overflow-hidden bg-black text-white selection:bg-red-500/30">
            <Navigation />
            <div className="flex-1 flex flex-col min-h-0 pt-20">
                <Terminal className="flex-1 h-full" />
            </div>

            <footer className="py-3 border-t border-white/5 text-center bg-black shrink-0 relative z-10">
                <div className="absolute inset-0 pointer-events-none opacity-10" style={{
                    backgroundImage: "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                }} />
                <div className="container mx-auto px-6 relative z-10">
                    <p className="text-xs text-zinc-600 font-mono">© {new Date().getFullYear()} Siddharth Sinha</p>
                </div>
            </footer>
        </main>
    );
}
