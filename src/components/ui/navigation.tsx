"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Download } from "lucide-react";
import { SOCIALS } from "@/constants";

const navItems = [
    { name: "Home", href: "/#home" },
    { name: "Projects", href: "/#projects" },
    { name: "Experience", href: "/#experience" },
    { name: "Skills", href: "/#skills" },
    { name: "Blog", href: "/blog" },
    { name: "Terminal", href: "/terminal" },
    { name: "Contact", href: "/#contact" },
];

export const Navigation = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
                scrolled
                    ? "bg-black/80 backdrop-blur-md border-white/10 py-3"
                    : "bg-transparent border-transparent py-5"
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="text-2xl font-heading font-bold tracking-tighter">
                    SID<span className="text-primary">.</span>
                </Link>
                <div className="hidden lg:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-white/70 hover:text-primary transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}

                    <a
                        href={SOCIALS.cv}
                        download
                        className="flex items-center gap-2 bg-white/5 border border-white/10 hover:bg-white/10 px-4 py-2 rounded-full text-xs font-medium transition-all"
                    >
                        <Download size={14} />
                        CV
                    </a>

                    <Link
                        href="/#contact"
                        className="bg-primary text-primary-foreground px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
                    >
                        Get in touch
                    </Link>
                </div>
            </div>
        </nav>
    );
};
