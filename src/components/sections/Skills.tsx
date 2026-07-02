"use client";
import React from "react";
import { SKILLS } from "@/constants";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";

const skillItemVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i: number) => ({
        opacity: 1,
        scale: 1,
        transition: {
            ease: "easeOut" as const,
            duration: 0.3,
            delay: i * 0.04,
        },
    }),
};

export const Skills = () => {
    return (
        <section id="skills" className="py-32 bg-zinc-950/50 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="text-[11px] uppercase tracking-[0.3em] text-zinc-500 font-mono mb-5 block">
                        // 02
                    </span>
                    <h2 className="text-4xl md:text-7xl font-heading font-bold tracking-tighter leading-[0.9]">
                        Technical <br className="md:hidden" />
                        <span className="text-primary italic">Skills</span>
                    </h2>
                    <div className="w-8 h-[1.5px] bg-primary/60 mx-auto mt-6 mb-6" />
                    <p className="text-zinc-500 max-w-xl mx-auto font-sans text-sm leading-relaxed">
                        My expertise spans across full-stack development, cloud computing, and security assessment.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {SKILLS.map((category, index) => {
                        // @ts-expect-error: Icons are indexed dynamically
                        const Icon = Icons[category.icon.charAt(0).toUpperCase() + category.icon.slice(1)];

                        return (
                            <motion.div
                                key={category.category}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.12 }}
                                viewport={{ once: true }}
                                className="group"
                            >
                                <Card className="bg-zinc-900/20 backdrop-blur-sm border border-white/5 p-6 h-full hover:border-white/10 transition-all duration-500 rounded-2xl relative overflow-hidden">
                                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-primary/50 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div
                                        className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-primary/5 blur-3xl group-hover:bg-primary/10 transition-all duration-700"
                                    />

                                    <div className="mb-5 relative">
                                        <div className="relative w-11 h-11 bg-primary/[0.08] rounded-xl flex items-center justify-center text-primary/80 group-hover:bg-primary/[0.15] group-hover:text-primary transition-all duration-500">
                                            {Icon && <Icon size={20} />}
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between mb-5">
                                        <h3 className="text-base font-heading font-bold text-white/90">
                                            {category.category}
                                        </h3>
                                        <span className="text-[9px] font-mono text-zinc-600 bg-zinc-800/50 px-2 py-1 rounded-full border border-white/5">
                                            {category.items.length}
                                        </span>
                                    </div>

                                    <div className="flex flex-wrap gap-1.5">
                                        {category.items.map((skill, i) => (
                                            <motion.span
                                                key={skill}
                                                custom={i}
                                                variants={skillItemVariants}
                                                initial="hidden"
                                                whileInView="visible"
                                                viewport={{ once: true }}
                                                className="px-2.5 py-1 bg-zinc-800/40 border border-white/[0.04] rounded text-[11px] font-sans text-zinc-400 hover:bg-primary/[0.08] hover:border-primary/20 hover:text-primary/90 transition-all duration-300"
                                            >
                                                {skill}
                                            </motion.span>
                                        ))}
                                    </div>
                                </Card>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
