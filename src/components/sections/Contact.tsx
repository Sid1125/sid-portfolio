"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { SOCIALS } from "@/constants";
import { Mail, MapPin, Github, Linkedin, Send, Loader2, Download, Terminal } from "lucide-react";

export const Contact = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formRef.current) return;

        setLoading(true);
        setStatus("idle");

        try {
            await emailjs.sendForm(
                "service_eejqq7p",
                "template_vvvgpbh",
                formRef.current,
                "fBJaEm5XPoetPnNuH"
            );
            setStatus("success");
            formRef.current.reset();
        } catch (error: any) {
            console.error("EmailJS Failed:", error);
            if (error && typeof error === 'object') {
                console.error("Error Details:", JSON.stringify(error, null, 2));
            }
            setStatus("error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="py-20 bg-black relative">
            <div className="container mx-auto px-6">
                <div className="flex items-center gap-4 mb-16">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold">
                        Get In <span className="text-primary">Touch</span>
                    </h2>
                    <div className="h-px flex-1 bg-white/10"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Contact Info */}
                    <div>
                        <h3 className="text-2xl font-bold mb-6">Let&apos;s Connect</h3>
                        <p className="text-zinc-400 mb-8 leading-relaxed">
                            I&apos;m always open to discussing new projects, creative ideas, or opportunities in cybersecurity and web development.
                        </p>

                        <div className="space-y-6 mb-10">
                            <a href={SOCIALS.email} className="flex items-center gap-4 text-zinc-300 hover:text-primary transition-colors group">
                                <div className="p-3 bg-zinc-900 rounded-full border border-white/10 group-hover:border-primary/50 transition-colors">
                                    <Mail size={20} />
                                </div>
                                <span>siddharthsinha1125@gmail.com</span>
                            </a>
                            <div className="flex items-center gap-4 text-zinc-300">
                                <div className="p-3 bg-zinc-900 rounded-full border border-white/10">
                                    <MapPin size={20} />
                                </div>
                                <span>New Delhi, India</span>
                            </div>
                        </div>

                        <div className="flex gap-4 mb-12">
                            <a href={SOCIALS.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-zinc-900 rounded-full border border-white/10 hover:border-primary/50 text-zinc-400 hover:text-white transition-all transform hover:-translate-y-1">
                                <Github size={20} />
                            </a>
                            <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-zinc-900 rounded-full border border-white/10 hover:border-primary/50 text-zinc-400 hover:text-white transition-all transform hover:-translate-y-1">
                                <Linkedin size={20} />
                            </a>
                            <a href={SOCIALS.tryhackme} target="_blank" rel="noopener noreferrer" className="p-3 bg-zinc-900 rounded-full border border-white/10 hover:border-primary/50 text-zinc-400 hover:text-white transition-all transform hover:-translate-y-1" title="TryHackMe">
                                <Terminal size={20} />
                            </a>
                        </div>

                        <a
                            href={SOCIALS.cv}
                            download
                            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold hover:opacity-90 transition-all active:scale-95"
                        >
                            <Download size={20} />
                            Download CV
                        </a>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-zinc-900/30 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="from_name" className="text-sm text-zinc-500 font-medium">Name</label>
                                    <input
                                        type="text"
                                        name="from_name"
                                        required
                                        className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary outline-none transition-colors"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="from_email" className="text-sm text-zinc-500 font-medium">Email</label>
                                    <input
                                        type="email"
                                        name="from_email"
                                        required
                                        className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary outline-none transition-colors"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm text-zinc-500 font-medium">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    required
                                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary outline-none transition-colors"
                                    placeholder="Project Inquiry"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm text-zinc-500 font-medium">Message</label>
                                <textarea
                                    name="message"
                                    required
                                    rows={5}
                                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary outline-none transition-colors resize-none"
                                    placeholder="Tell me about your project..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-white text-black font-bold py-4 rounded-lg hover:bg-zinc-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {loading ? (
                                    <>
                                        <Loader2 size={20} className="animate-spin" /> Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message <Send size={20} />
                                    </>
                                )}
                            </button>

                            {status === "success" && (
                                <div className="p-4 bg-green-500/10 border border-green-500/20 text-green-500 rounded-lg text-sm text-center">
                                    Message sent successfully! I&apos;ll get back to you soon.
                                </div>
                            )}

                            {status === "error" && (
                                <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-500 rounded-lg text-sm text-center">
                                    Something went wrong. Please try again later.
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
