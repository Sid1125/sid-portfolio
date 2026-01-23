"use client";
import React from "react";
import Image from "next/image";
import { PROJECTS } from "@/constants";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export const Projects = () => {
    return (
        <section id="projects" className="py-32 bg-black">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-heading font-bold tracking-tighter mb-6">
                        Featured <span className="text-primary">Projects</span>
                    </h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto font-sans">
                        A selection of my best work in cybersecurity, web development, and utility tools.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROJECTS.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="group bg-zinc-950 border-white/5 overflow-hidden hover:border-primary/30 transition-all duration-300 flex flex-col h-full rounded-2xl">
                                <div className="relative aspect-video overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                                </div>

                                <div className="p-8 flex flex-col flex-1">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="text-[10px] uppercase tracking-widest font-bold text-primary/80 bg-primary/10 px-2 py-1 rounded"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <h3 className="text-2xl font-heading font-bold mb-3">
                                        {project.title}
                                    </h3>

                                    <p className="text-zinc-400 text-sm mb-6 flex-1 font-sans leading-relaxed">
                                        {project.description}
                                    </p>

                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-primary transition-colors mt-auto"
                                    >
                                        {project.link.includes("github") ? <Github size={16} /> : <ExternalLink size={16} />}
                                        {project.linkText}
                                    </a>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
