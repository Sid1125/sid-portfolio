"use client";

import React, { useState } from "react";
import { BLOG_POSTS } from "@/constants";
import { Calendar, Clock, ArrowRight, X } from "lucide-react";

export const Blog = () => {
    const [selectedPost, setSelectedPost] = useState<typeof BLOG_POSTS[0] | null>(null);

    return (
        <section id="blog" className="py-20 bg-black relative">
            <div className="container mx-auto px-6">
                <div className="flex items-center gap-4 mb-16">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold">
                        Latest <span className="text-primary">Thoughts</span>
                    </h2>
                    <div className="h-px flex-1 bg-white/10"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {BLOG_POSTS.map((post, index) => (
                        <div
                            key={index}
                            className="group bg-zinc-900/30 border border-white/10 rounded-2xl overflow-hidden hover:border-primary/50 transition-colors cursor-pointer"
                            onClick={() => setSelectedPost(post)}
                        >
                            <div className="p-8 h-full flex flex-col">
                                <div className="flex items-center gap-4 text-xs text-zinc-500 mb-4">
                                    <span className="flex items-center gap-1">
                                        <Calendar size={12} /> {post.date}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Clock size={12} /> {post.readTime}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                                    {post.title}
                                </h3>

                                <p className="text-zinc-400 text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
                                    {post.excerpt}
                                </p>

                                <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                                    <span className="text-xs text-primary font-medium flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                                        Read Article <ArrowRight size={14} />
                                    </span>
                                    <div className="flex gap-2">
                                        {post.tags.map(tag => (
                                            <span key={tag} className="text-[10px] bg-white/5 px-2 py-1 rounded-full text-zinc-400">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Article Modal */}
            {selectedPost && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedPost(null)}></div>
                    <div className="relative bg-zinc-900 border border-white/10 rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl animate-fade-in">
                        <button
                            onClick={() => setSelectedPost(null)}
                            className="absolute top-4 right-4 p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors z-10"
                        >
                            <X size={20} />
                        </button>

                        <div className="p-8 md:p-12">
                            <div className="flex items-center gap-4 text-sm text-zinc-500 mb-6">
                                <span className="flex items-center gap-1">
                                    <Calendar size={14} /> {selectedPost.date}
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock size={14} /> {selectedPost.readTime}
                                </span>
                            </div>

                            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">
                                {selectedPost.title}
                            </h2>

                            <div
                                className="prose prose-invert prose-lg max-w-none text-zinc-300 [&>h3]:text-white [&>h3]:mt-8 [&>h3]:mb-4 [&>p]:mb-4 [&>p]:leading-relaxed"
                                dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                            />
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};
