import { Navigation } from "@/components/ui/navigation";
import { Blog } from "@/components/sections/Blog";

export default function BlogPage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-red-500/30">
            <Navigation />
            <div className="pt-20">
                <Blog />
            </div>

            <footer className="py-10 border-t border-white/5 text-center text-zinc-600 text-sm bg-black">
                <div className="container mx-auto px-6">
                    <p>© {new Date().getFullYear()} Siddharth Sinha. All rights reserved.</p>
                </div>
            </footer>
        </main>
    );
}
