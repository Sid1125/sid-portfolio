"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Download, Menu, X } from "lucide-react";
import { SOCIALS } from "@/constants";
import { motion, AnimatePresence } from "framer-motion";

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
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            const sections = navItems
                .filter((item) => item.href.startsWith("/#"))
                .map((item) => item.href.slice(2));
            for (const id of sections.reverse()) {
                const el = document.getElementById(id);
                if (el && el.getBoundingClientRect().top <= 150) {
                    setActiveSection(id);
                    return;
                }
            }
            setActiveSection("");
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [mobileOpen]);

    return (
        <nav
            aria-label="Main navigation"
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                scrolled
                    ? "bg-black/70 backdrop-blur-xl border-b border-white/[0.04] py-3"
                    : "bg-transparent border-b border-transparent py-5"
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link
                    href="/"
                    className="text-xl font-heading font-bold tracking-tighter"
                    onClick={() => setMobileOpen(false)}
                >
                    SID<span className="text-primary">.</span>
                </Link>

                <div className="hidden lg:flex items-center gap-1">
                    {navItems.map((item) => {
                        const isActive = item.href.startsWith("/#") && activeSection === item.href.slice(2);
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300",
                                    isActive
                                        ? "text-white"
                                        : "text-zinc-400 hover:text-white hover:bg-white/[0.03]"
                                )}
                            >
                                {item.name}
                                {isActive && (
                                    <motion.div
                                        layoutId="nav-active"
                                        className="absolute inset-0 bg-white/[0.05] rounded-lg -z-10"
                                        transition={{ type: "spring" as const, damping: 20, stiffness: 300 }}
                                    />
                                )}
                            </Link>
                        );
                    })}

                    <div className="w-px h-5 bg-white/10 mx-3" />

                    <a
                        href={SOCIALS.cv}
                        download
                        className="flex items-center gap-2 bg-white/5 border border-white/[0.06] hover:bg-white/10 px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-400 hover:text-white transition-all"
                    >
                        <Download size={12} />
                        CV
                    </a>

                    <Link
                        href="/#contact"
                        className="bg-primary text-primary-foreground px-4 py-1.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
                    >
                        Get in touch
                    </Link>
                </div>

                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="lg:hidden p-2 text-zinc-400 hover:text-white transition-colors"
                    aria-label={mobileOpen ? "Close menu" : "Open menu"}
                    aria-expanded={mobileOpen}
                >
                    {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 right-0 bg-black/90 backdrop-blur-xl border-b border-white/[0.04] lg:hidden"
                    >
                        <div className="container mx-auto px-6 py-6 flex flex-col gap-1">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="px-4 py-3 text-sm text-zinc-400 hover:text-white hover:bg-white/[0.03] rounded-lg transition-all"
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="h-px bg-white/[0.04] my-3" />
                            <a
                                href={SOCIALS.cv}
                                download
                                onClick={() => setMobileOpen(false)}
                                className="flex items-center gap-2 px-4 py-3 text-sm text-zinc-400 hover:text-white transition-colors"
                            >
                                <Download size={14} />
                                Download CV
                            </a>
                            <Link
                                href="/#contact"
                                onClick={() => setMobileOpen(false)}
                                className="mt-2 bg-primary text-primary-foreground px-4 py-3 rounded-lg text-sm font-semibold text-center hover:opacity-90 transition-opacity"
                            >
                                Get in touch
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
