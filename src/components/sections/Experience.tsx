"use client";
import React from "react";
import { EXPERIENCE, EDUCATION, ACHIEVEMENTS, CERTIFICATIONS } from "@/constants";
import { motion } from "framer-motion";

export const Experience = () => {
    return (
        <section id="experience" className="py-32 bg-black">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-heading font-bold tracking-tighter mb-6">
                        Educational Journey<span className="text-primary"> & Experiences</span>
                    </h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto font-sans">
                        My professional and academic experience so far.
                    </p>
                </motion.div>

                {/* Experience & Education Wrapper */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 max-w-6xl mx-auto mb-32">
                    {/* Experience Column */}
                    <div>
                        <h3 className="text-2xl font-heading font-bold mb-10 text-white flex items-center gap-3">
                            <span className="w-8 h-1 bg-primary rounded-full"></span>
                            Experience
                        </h3>
                        <div className="space-y-12">
                            {EXPERIENCE.map((exp, index) => (
                                <motion.div
                                    key={exp.title + exp.company}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="relative pl-8 border-l border-white/10"
                                >
                                    <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] bg-primary rounded-full shadow-[0_0_10px_rgba(255,0,0,0.5)]" />

                                    <h4 className="text-xl font-heading font-bold text-white mb-2">{exp.title}</h4>
                                    <div className="text-primary font-mono text-xs mb-2 opacity-80">{exp.period}</div>
                                    <h5 className="text-lg font-semibold text-zinc-300 mb-4">{exp.company}</h5>
                                    <p className="text-zinc-400 text-sm leading-relaxed">{exp.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Education Column */}
                    <div>
                        <h3 className="text-2xl font-heading font-bold mb-10 text-white flex items-center gap-3">
                            <span className="w-8 h-1 bg-primary rounded-full"></span>
                            Education
                        </h3>
                        <div className="space-y-12">
                            {EDUCATION.map((edu, index) => (
                                <motion.div
                                    key={edu.degree + edu.institution}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="relative pl-8 border-l border-white/10"
                                >
                                    <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] bg-primary rounded-full shadow-[0_0_10px_rgba(255,0,0,0.5)]" />

                                    <h4 className="text-xl font-heading font-bold text-white mb-2">{edu.degree}</h4>
                                    <div className="text-primary font-mono text-xs mb-2 opacity-80">{edu.period}</div>
                                    <h5 className="text-lg font-semibold text-zinc-300 mb-1">{edu.institution}</h5>
                                    <div className="text-zinc-500 text-sm mb-4 font-mono">{edu.score}</div>
                                    {edu.description && <p className="text-zinc-400 text-sm leading-relaxed">{edu.description}</p>}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Achievements & Certifications */}
                <div className="max-w-6xl mx-auto">
                    <h3 className="text-3xl font-heading font-bold mb-12 text-center">Achievements & Certifications</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Achievements */}
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
                            <h4 className="text-xl font-heading font-bold mb-6 text-primary flex items-center gap-2">
                                Achievements
                            </h4>
                            <div className="space-y-6">
                                {ACHIEVEMENTS.map((ach, index) => (
                                    <div key={index} className="border-b border-white/10 last:border-0 pb-4 last:pb-0">
                                        <h5 className="font-bold text-white mb-1">{ach.title}</h5>
                                        <p className="text-zinc-400 text-sm mb-2">{ach.description}</p>
                                        {ach.link !== "#" && (
                                            <a href={ach.link} target="_blank" rel="noopener noreferrer" className="text-primary text-xs hover:underline">View Details →</a>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Certifications */}
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
                            <h4 className="text-xl font-heading font-bold mb-6 text-primary flex items-center gap-2">
                                Certifications
                            </h4>
                            <div className="space-y-6">
                                {CERTIFICATIONS.map((cert, index) => (
                                    <div key={index} className="border-b border-white/10 last:border-0 pb-4 last:pb-0">
                                        <h5 className="font-bold text-white mb-1">{cert.title}</h5>
                                        <div className="flex justify-between items-center text-xs text-zinc-500 mb-2">
                                            <span>{cert.issuer}</span>
                                            <span className="font-mono">{cert.date}</span>
                                        </div>
                                        {cert.link !== "#" && (
                                            <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-primary text-xs hover:underline">View Certificate →</a>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
