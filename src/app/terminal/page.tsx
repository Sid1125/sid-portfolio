import { Navigation } from "@/components/ui/navigation";
import { Terminal } from "@/components/sections/Terminal";

export default function TerminalPage() {
    return (
        <main className="h-screen flex flex-col overflow-hidden bg-black text-white selection:bg-red-500/30">
            <Navigation />
            <div className="flex-1 flex flex-col min-h-0 pt-20">
                <Terminal className="flex-1 h-full" />
            </div>

            <footer className="py-4 border-t border-white/5 text-center text-zinc-600 text-sm bg-black shrink-0 relative z-10">
                <div className="container mx-auto px-6">
                    <p>© {new Date().getFullYear()} Siddharth Sinha. All rights reserved.</p>
                </div>
            </footer>
        </main>
    );
}
