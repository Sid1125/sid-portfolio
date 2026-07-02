"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { PROJECTS } from "@/constants";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { GradientMesh } from "@/components/ui/gradient-mesh";

const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring" as const,
            damping: 20,
            stiffness: 100,
            delay: i * 0.08,
        } as const,
    }),
};

export const Projects = () => {
    return (
        <section id="projects" className="py-32 bg-black relative overflow-hidden">
            <GradientMesh />
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
                        <ProjectCard key={project.title} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const ProjectCard = ({ project, index }: { project: typeof PROJECTS[0]; index: number }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [glowPos, setGlowPos] = useState({ x: "50%", y: "50%" });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setGlowPos({ x: `${x}%`, y: `${y}%` });

        if (cardRef.current) {
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rx = ((e.clientY - rect.top - centerY) / centerY) * -8;
            const ry = ((e.clientX - rect.left - centerX) / centerX) * 8;
            cardRef.current.style.setProperty("--rx", `${rx}deg`);
            cardRef.current.style.setProperty("--ry", `${ry}deg`);
        }
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        if (cardRef.current) {
            cardRef.current.style.setProperty("--rx", "0deg");
            cardRef.current.style.setProperty("--ry", "0deg");
        }
    };

    return (
        <motion.div
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            <div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={handleMouseLeave}
                className="relative group"
                style={{
                    transform: "perspective(1000px) rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg))",
                    transition: "transform 0.3s ease",
                }}
            >
                <div
                    className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-white/5 via-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                        maskImage: "linear-gradient(to bottom, black 0%, transparent 80%)",
                        WebkitMaskImage: "linear-gradient(to bottom, black 0%, transparent 80%)",
                    }}
                />
                <Card className="bg-zinc-900/30 backdrop-blur-xl border border-white/5 overflow-hidden hover:border-white/10 transition-all duration-500 flex flex-col h-full rounded-2xl relative">
                    <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                        style={{
                            background: `radial-gradient(600px circle at ${glowPos.x} ${glowPos.y}, rgba(255,0,0,0.06), transparent 40%)`,
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
