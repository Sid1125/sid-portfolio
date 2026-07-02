"use client";
import React, { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { PROJECTS } from "@/constants";
import { Card } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight, X, CheckCircle2 } from "lucide-react";

const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            ease: "easeOut" as const,
            duration: 0.5,
            delay: i * 0.08,
        },
    }),
};

export const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);

    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [selectedProject]);

    return (
        <section id="projects" className="py-32 bg-black relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none opacity-30 dot-grid-sm" />
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="text-[11px] uppercase tracking-[0.3em] text-zinc-500 font-mono mb-5 block">
                        // 01
                    </span>
                    <h2 className="text-4xl md:text-7xl font-heading font-bold tracking-tighter leading-[0.9]">
                        Featured <br className="md:hidden" />
                        <span className="text-primary italic">Projects</span>
                    </h2>
                    <div className="w-8 h-[1.5px] bg-primary/60 mx-auto mt-6 mb-6" />
                    <p className="text-zinc-500 max-w-xl mx-auto font-sans text-sm leading-relaxed">
                        A selection of my best work in cybersecurity, web development, and utility tools.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {PROJECTS.map((project, index) => (
                        <ProjectCard
                            key={project.title}
                            project={project}
                            index={index}
                            onSelect={() => setSelectedProject(project)}
                        />
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <ProjectModal
                        project={selectedProject}
                        onClose={() => setSelectedProject(null)}
                    />
                )}
            </AnimatePresence>
        </section>
    );
};

const glowCache = new WeakMap<HTMLElement, { x: number; y: number; raf: number }>();

const ProjectCard = ({ project, index, onSelect }: {
    project: typeof PROJECTS[0];
    index: number;
    onSelect: () => void;
}) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const glowRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = useCallback((e: React.MouseEvent) => {
        const el = e.currentTarget as HTMLElement;
        let entry = glowCache.get(el);
        if (!entry) {
            entry = { x: 50, y: 50, raf: 0 };
            glowCache.set(el, entry);
        }
        const rect = el.getBoundingClientRect();
        entry.x = ((e.clientX - rect.left) / rect.width) * 100;
        entry.y = ((e.clientY - rect.top) / rect.height) * 100;

        if (entry.raf) cancelAnimationFrame(entry.raf);
        entry.raf = requestAnimationFrame(() => {
            if (glowRef.current) {
                glowRef.current.style.setProperty("--gx", `${entry!.x}%`);
                glowRef.current.style.setProperty("--gy", `${entry!.y}%`);
            }
        });
    }, []);

    const handleMouseLeave = useCallback(() => {
        const el = cardRef.current;
        if (!el) return;
        const entry = glowCache.get(el);
        if (entry && entry.raf) cancelAnimationFrame(entry.raf);
    }, []);

    return (
        <motion.div
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            <div
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onClick={onSelect}
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onSelect(); } }}
                role="button"
                tabIndex={0}
                aria-label={`View details for ${project.title}`}
                className="relative group cursor-pointer"
            >
                <div
                    className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-white/5 via-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                        maskImage: "linear-gradient(to bottom, black 0%, transparent 80%)",
                        WebkitMaskImage: "linear-gradient(to bottom, black 0%, transparent 80%)",
                    }}
                />
                <Card ref={cardRef} className="bg-zinc-900/30 backdrop-blur-xl border border-white/5 overflow-hidden hover:border-white/10 transition-all duration-500 flex flex-col h-full rounded-2xl relative">
                    <div
                        ref={glowRef}
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                        style={{
                            background: "radial-gradient(600px circle at var(--gx, 50%) var(--gy, 50%), rgba(255,0,0,0.06), transparent 40%)",
                        }}
                    />
                    <div className="relative aspect-[16/10] overflow-hidden">
                        {project.image ? (
                            <>
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/20 to-transparent" />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                            </>
                        ) : (
                            <div className="w-full h-full bg-gradient-to-br from-zinc-800 via-zinc-900 to-black flex items-center justify-center">
                                <span className="text-7xl font-heading font-bold text-zinc-700/30 select-none tracking-tighter">
                                    {project.title.charAt(0)}
                                </span>
                            </div>
                        )}
                        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center">
                                <ArrowUpRight size={14} className="text-white" />
                            </div>
                        </div>
                    </div>

                    <div className="p-6 flex flex-col flex-1 relative z-10">
                        <div className="flex flex-wrap gap-1.5 mb-3">
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="text-[9px] uppercase tracking-[0.15em] font-mono text-zinc-500 bg-zinc-800/50 px-2 py-1 rounded"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <h3 className="text-lg font-heading font-bold mb-2 text-white group-hover:text-primary transition-colors duration-300">
                            {project.title}
                        </h3>

                        <p className="text-zinc-500 text-sm mb-5 flex-1 font-sans leading-relaxed line-clamp-3">
                            {project.description}
                        </p>

                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-400 hover:text-primary transition-colors mt-auto group/link"
                        >
                            <span className="flex items-center gap-1.5">
                                {project.link.includes("github") ? <Github size={12} /> : <ExternalLink size={12} />}
                                {project.linkText}
                            </span>
                            <span className="w-4 h-px bg-zinc-600 group-hover/link:w-6 group-hover/link:bg-primary transition-all duration-300" />
                        </a>
                    </div>
                </Card>
            </div>
        </motion.div>
    );
};

const ProjectModal = ({ project, onClose }: { project: typeof PROJECTS[0]; onClose: () => void }) => {
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [onClose]);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                onClick={onClose}
            />
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring" as const, damping: 25, stiffness: 300 }}
                className="relative bg-zinc-900/90 backdrop-blur-xl border border-white/10 rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl"
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors z-10"
                    aria-label="Close modal"
                >
                    <X size={18} />
                </button>

                {/* Image */}
                {project.image && (
                    <div className="relative w-full aspect-[16/9] overflow-hidden rounded-t-2xl">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
                    </div>
                )}

                <div className="p-8 md:p-10">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-5">
                        {project.tags.map((tag) => (
                            <span
                                key={tag}
                                className="text-[10px] uppercase tracking-[0.15em] font-mono text-primary/70 bg-primary/10 px-2.5 py-1 rounded-full border border-primary/10"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl md:text-3xl font-heading font-bold mb-5">
                        {project.title}
                    </h2>

                    {/* Description */}
                    <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                        {project.details || project.description}
                    </p>

                    {/* Features */}
                    {project.features && project.features.length > 0 && (
                        <div className="mb-8">
                            <h3 className="text-sm font-heading font-bold text-white/80 mb-4 flex items-center gap-2">
                                <span className="w-5 h-[1.5px] bg-primary/60" />
                                Key Features
                            </h3>
                            <ul className="space-y-2.5">
                                {project.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-zinc-400 text-sm">
                                        <CheckCircle2 size={14} className="text-primary/60 mt-0.5 shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Tech Stack */}
                    {project.techStack && project.techStack.length > 0 && (
                        <div className="mb-8">
                            <h3 className="text-sm font-heading font-bold text-white/80 mb-4 flex items-center gap-2">
                                <span className="w-5 h-[1.5px] bg-primary/60" />
                                Tech Stack
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="text-[11px] font-mono text-zinc-400 bg-zinc-800/50 border border-white/[0.04] px-3 py-1.5 rounded-lg hover:bg-primary/[0.08] hover:border-primary/20 hover:text-primary/80 transition-all duration-300"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Links */}
                    {project.links && project.links.length > 0 && (
                        <div className="flex flex-wrap gap-3 pt-6 border-t border-white/[0.04]">
                            {project.links.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/[0.06] hover:bg-white/10 rounded-xl text-xs font-medium text-zinc-300 hover:text-white transition-all"
                                >
                                    {link.url.includes("github") ? <Github size={13} /> : <ExternalLink size={13} />}
                                    {link.label}
                                    <ArrowUpRight size={12} className="opacity-60" />
                                </a>
                            ))}
                        </div>
                    )}
                </div>
            </motion.div>
        </div>
    );
};
