"use client";

import React, { useState } from "react";
import { BLOG_POSTS } from "@/constants";
import { Calendar, Clock, ArrowRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { GradientMesh } from "@/components/ui/gradient-mesh";

export const Blog = () => {
    const [selectedPost, setSelectedPost] = useState<typeof BLOG_POSTS[0] | null>(null);

    return (
        <section id="blog" className="py-32 bg-black relative overflow-hidden min-h-screen">
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
                        // thoughts
                    </span>
                    <h2 className="text-4xl md:text-7xl font-heading font-bold tracking-tighter leading-[0.9]">
                        Latest <br className="md:hidden" />
                        <span className="text-primary italic">Posts</span>
                    </h2>
                    <div className="w-8 h-[1.5px] bg-primary/60 mx-auto mt-6 mb-6" />
                    <p className="text-zinc-500 max-w-xl mx-auto font-sans text-sm leading-relaxed">
                        Thoughts, insights, and stories from my journey in tech.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {BLOG_POSTS.map((post, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div
                                role="button"
                                tabIndex={0}
                                aria-expanded={selectedPost?.title === post.title}
                                className="group bg-zinc-900/20 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-all duration-500 cursor-pointer h-full"
                                onClick={() => setSelectedPost(post)}
                                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setSelectedPost(post); } }}
                            >
                                <div className="p-6 h-full flex flex-col">
                                    <div className="flex items-center gap-3 text-[11px] text-zinc-500 mb-4">
                                        <span className="flex items-center gap-1.5">
                                            <Calendar size={11} /> {post.date}
                                        </span>
                                        <span className="flex items-center gap-1.5">
                                            <Clock size={11} /> {post.readTime}
                                        </span>
                                    </div>

                                    <h3 className="text-lg font-heading font-bold mb-3 group-hover:text-primary transition-colors">
                                        {post.title}
                                    </h3>

                                    <p className="text-zinc-500 text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
                                        {post.excerpt}
                                    </p>

                                    <div className="flex items-center justify-between mt-auto pt-5 border-t border-white/[0.04]">
                                        <span className="text-xs text-zinc-400 group-hover:text-primary font-medium flex items-center gap-1.5 group-hover:translate-x-1 transition-all duration-300">
                                            Read Article <ArrowRight size={12} />
                                        </span>
                                        <div className="flex gap-1.5">
                                            {post.tags.map(tag => (
                                                <span key={tag} className="text-[9px] font-mono text-zinc-600 bg-zinc-800/50 px-2 py-1 rounded">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedPost && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                            onClick={() => setSelectedPost(null)}
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ type: "spring" as const, damping: 25, stiffness: 300 }}
                            className="relative bg-zinc-900/90 backdrop-blur-xl border border-white/10 rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl"
                        >
                            <button
                                onClick={() => setSelectedPost(null)}
                                className="absolute top-4 right-4 p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors z-10"
                            >
                                <X size={18} />
                            </button>

                            <div className="p-8 md:p-12">
                                <div className="flex items-center gap-4 text-sm text-zinc-500 mb-6">
                                    <span className="flex items-center gap-1.5">
                                        <Calendar size={13} /> {selectedPost.date}
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <Clock size={13} /> {selectedPost.readTime}
                                    </span>
                                </div>

                                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8">
                                    {selectedPost.title}
                                </h2>

                                <div
                                    className="prose prose-invert prose-lg max-w-none text-zinc-400 [&>h3]:text-white [&>h3]:text-xl [&>h3]:font-heading [&>h3]:mt-8 [&>h3]:mb-4 [&>p]:mb-4 [&>p]:leading-relaxed [&>p]:text-sm"
                                    dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                                />
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};
