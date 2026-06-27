"use client";
import React from "react";
import { EXPERIENCE, EDUCATION, ACHIEVEMENTS, CERTIFICATIONS, LANGUAGES } from "@/constants";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award, Shield, Globe } from "lucide-react";
import { GradientMesh } from "@/components/ui/gradient-mesh";

export const Experience = () => {
    return (
        <section id="experience" className="py-32 bg-black relative overflow-hidden">
            <GradientMesh />
            <div
                className="absolute inset-0 pointer-events-none opacity-20"
                style={{
                    backgroundImage: "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                }}
            />
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="text-[11px] uppercase tracking-[0.3em] text-zinc-500 font-mono mb-5 block">
                        // 03
                    </span>
                    <h2 className="text-4xl md:text-7xl font-heading font-bold tracking-tighter leading-[0.9]">
                        Journey <br className="md:hidden" />
                        <span className="text-primary italic">& Experience</span>
                    </h2>
                    <div className="w-8 h-[1.5px] bg-primary/60 mx-auto mt-6 mb-6" />
                    <p className="text-zinc-500 max-w-xl mx-auto font-sans text-sm leading-relaxed">
                        My professional and academic experience so far.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto mb-32">
                    <div>
                        <div className="flex items-center gap-3 mb-10">
                            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                                <Briefcase size={14} className="text-primary" />
                            </div>
                            <h3 className="text-lg font-heading font-bold text-white/90">Experience</h3>
                            <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
                        </div>
                        <div className="relative">
                            <div className="absolute left-[3px] top-0 bottom-0 w-px overflow-hidden">
                                <motion.div
                                    initial={{ scaleY: 0 }}
                                    whileInView={{ scaleY: 1 }}
                                    transition={{ duration: 1.2, ease: "easeOut" }}
                                    viewport={{ once: true }}
                                    className="w-full h-full bg-gradient-to-b from-primary via-primary/30 to-transparent origin-top"
                                />
                            </div>
                            <div className="space-y-10">
                                {EXPERIENCE.map((exp, index) => (
                                    <motion.div
                                        key={exp.title + exp.company}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="relative pl-8"
                                    >
                                        <div className="absolute left-[-5px] top-1">
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                whileInView={{ scale: 1 }}
                                                transition={{ type: "spring" as const, damping: 10, stiffness: 200, delay: index * 0.1 }}
                                                viewport={{ once: true }}
                                                className="w-[10px] h-[10px] bg-primary rounded-full relative"
                                            >
                                                <motion.div
                                                    className="absolute inset-[-5px] rounded-full border border-primary/20"
                                                    animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0, 0.4] }}
                                                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                                                />
                                            </motion.div>
                                        </div>

                                        <span className="text-[11px] font-mono text-primary/60 mb-1.5 block">{exp.period}</span>
                                        <h4 className="text-lg font-heading font-bold text-white mb-0.5">{exp.title}</h4>
                                        <h5 className="text-sm font-medium text-zinc-400 mb-3">{exp.company}</h5>
                                        <p className="text-zinc-500 text-sm leading-relaxed">{exp.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center gap-3 mb-10">
                            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                                <GraduationCap size={14} className="text-primary" />
                            </div>
                            <h3 className="text-lg font-heading font-bold text-white/90">Education</h3>
                            <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
                        </div>
                        <div className="relative">
                            <div className="absolute left-[3px] top-0 bottom-0 w-px overflow-hidden">
                                <motion.div
                                    initial={{ scaleY: 0 }}
                                    whileInView={{ scaleY: 1 }}
                                    transition={{ duration: 1.2, ease: "easeOut" }}
                                    viewport={{ once: true }}
                                    className="w-full h-full bg-gradient-to-b from-primary via-primary/30 to-transparent origin-top"
                                />
                            </div>
                            <div className="space-y-10">
                                {EDUCATION.map((edu, index) => (
                                    <motion.div
                                        key={edu.degree + edu.institution}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="relative pl-8"
                                    >
                                        <div className="absolute left-[-5px] top-1">
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                whileInView={{ scale: 1 }}
                                                transition={{ type: "spring" as const, damping: 10, stiffness: 200, delay: index * 0.1 }}
                                                viewport={{ once: true }}
                                                className="w-[10px] h-[10px] bg-primary rounded-full relative"
                                            >
                                                <motion.div
                                                    className="absolute inset-[-5px] rounded-full border border-primary/20"
                                                    animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0, 0.4] }}
                                                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                                                />
                                            </motion.div>
                                        </div>

                                        <span className="text-[11px] font-mono text-primary/60 mb-1.5 block">{edu.period}</span>
                                        <h4 className="text-lg font-heading font-bold text-white mb-0.5">{edu.degree}</h4>
                                        <h5 className="text-sm font-medium text-zinc-400 mb-2">{edu.institution}</h5>
                                        <span className="inline-block px-2 py-0.5 bg-primary/10 rounded text-[11px] font-mono text-primary/70 mb-3">
                                            {edu.score}
                                        </span>
                                        {edu.description && <p className="text-zinc-500 text-sm leading-relaxed mt-2">{edu.description}</p>}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center gap-3 mb-12 justify-center">
                        <div className="h-px flex-1 bg-gradient-to-l from-white/10 to-transparent max-w-20" />
                        <h3 className="text-lg font-heading font-bold text-white/80 text-center">Achievements &amp; Certifications</h3>
                        <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent max-w-20" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            [Award, "Achievements", ACHIEVEMENTS],
                            [Shield, "Certifications", CERTIFICATIONS],
                            [Globe, "Languages", LANGUAGES],
                        ].map(([Icon, title, data]: any, sIndex: number) => (
                            <motion.div
                                key={title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: sIndex * 0.1 }}
                                viewport={{ once: true }}
                                className="group"
                            >
                                <div className="bg-zinc-900/20 backdrop-blur-sm border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-all duration-500 h-full">
                                    <div className="flex items-center gap-2.5 mb-5">
                                        <div className="w-7 h-7 rounded-lg bg-primary/[0.08] flex items-center justify-center">
                                            <Icon size={13} className="text-primary/70" />
                                        </div>
                                        <h4 className="text-sm font-heading font-bold text-white/80">{title}</h4>
                                        <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
                                    </div>
                                    <div className="space-y-4">
                                        {data.map((item: any, i: number) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.3, delay: i * 0.05 }}
                                                viewport={{ once: true }}
                                                className="border-b border-white/[0.04] last:border-0 pb-3 last:pb-0"
                                            >
                                                {title === "Achievements" && (
                                                    <>
                                                        <h5 className="font-bold text-white text-sm mb-1">{item.title}</h5>
                                                        <p className="text-zinc-500 text-xs leading-relaxed mb-2">{item.description}</p>
                                                        {item.link !== "#" && (
                                                            <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-primary/70 text-[10px] hover:text-primary transition-colors">View Details →</a>
                                                        )}
                                                    </>
                                                )}
                                                {title === "Certifications" && (
                                                    <>
                                                        <h5 className="font-bold text-white text-sm mb-0.5">{item.title}</h5>
                                                        <div className="flex justify-between items-center text-[10px] text-zinc-500 mb-1.5">
                                                            <span className="font-medium">{item.issuer}</span>
                                                            <span className="font-mono">{item.date}</span>
                                                        </div>
                                                        {item.link !== "#" && (
                                                            <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-primary/70 text-[10px] hover:text-primary transition-colors">View Certificate →</a>
                                                        )}
                                                    </>
                                                )}
                                                {title === "Languages" && (
                                                    <>
                                                        <h5 className="font-bold text-white text-sm mb-0.5">{item.language}</h5>
                                                        <p className="text-zinc-500 text-xs">{item.proficiency}</p>
                                                    </>
                                                )}
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
