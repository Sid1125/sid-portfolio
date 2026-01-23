"use client";
import React from "react";
import { SKILLS } from "@/constants";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";

export const Skills = () => {
    return (
        <section id="skills" className="py-32 bg-zinc-950/50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-heading font-bold tracking-tighter mb-6">
                        Technical <span className="text-primary">Skills</span>
                    </h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto font-sans">
                        My expertise spans across full-stack development, cloud computing, and security assessment.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {SKILLS.map((category, index) => {
                        // @ts-expect-error: Icons are indexed dynamically
                        const Icon = Icons[category.icon.charAt(0).toUpperCase() + category.icon.slice(1)];

                        return (
                            <motion.div
                                key={category.category}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Card className="bg-black border-white/5 p-8 h-full hover:border-primary/30 transition-all rounded-2xl">
                                    <div className="mb-6">
                                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                                            {Icon && <Icon size={24} />}
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-heading font-bold mb-6">
                                        {category.category}
                                    </h3>

                                    <div className="flex flex-wrap gap-2">
                                        {category.items.map((skill) => (
                                            <span
                                                key={skill}
                                                className="px-3 py-1 bg-zinc-900 border border-white/5 rounded-full text-xs font-sans text-zinc-300"
                                            >
                                                {skill}
                                            </span>
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
