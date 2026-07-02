"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { SOCIALS } from "@/constants";
import { Mail, MapPin, Github, Linkedin, Send, Loader2, Download, Terminal, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { ParticleGrid } from "@/components/ui/particle-grid";

const MagneticAnchor = ({ children, className, ...props }: React.ComponentPropsWithoutRef<"a"> & { children: React.ReactNode }) => {
    const ref = useRef<HTMLAnchorElement>(null);
    const [pos, setPos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) * 0.3;
        const y = (e.clientY - rect.top - rect.height / 2) * 0.3;
        setPos({ x, y });
    };

    const handleMouseLeave = () => setPos({ x: 0, y: 0 });

    return (
        <a
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={className}
            style={{
                transform: `translate(${pos.x}px, ${pos.y}px)`,
                transition: pos.x === 0 && pos.y === 0 ? "transform 0.3s ease" : "none",
            }}
            {...props}
        >
            {children}
        </a>
    );
};

const MagneticButton = ({ children, className, ...props }: React.ComponentPropsWithoutRef<"button"> & { children: React.ReactNode }) => {
    const ref = useRef<HTMLButtonElement>(null);
    const [pos, setPos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) * 0.3;
        const y = (e.clientY - rect.top - rect.height / 2) * 0.3;
        setPos({ x, y });
    };

    const handleMouseLeave = () => setPos({ x: 0, y: 0 });

    return (
        <button
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={className}
            style={{
                transform: `translate(${pos.x}px, ${pos.y}px)`,
                transition: pos.x === 0 && pos.y === 0 ? "transform 0.3s ease" : "none",
            }}
            {...props}
        >
            {children}
        </button>
    );
};

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
        <section id="contact" className="py-32 bg-black relative overflow-hidden">
            <ParticleGrid />
            <div
                className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
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
                        // 04
                    </span>
                    <h2 className="text-4xl md:text-7xl font-heading font-bold tracking-tighter leading-[0.9]">
                        Get In <br className="md:hidden" />
                        <span className="text-primary italic">Touch</span>
                    </h2>
                    <div className="w-8 h-[1.5px] bg-primary/60 mx-auto mt-6 mb-6" />
                    <p className="text-zinc-500 max-w-xl mx-auto font-sans text-sm leading-relaxed">
                        Have a project in mind or just want to connect? I&apos;m always open to new opportunities.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2"
                    >
                        <div className="bg-zinc-900/20 backdrop-blur-sm border border-white/5 rounded-2xl p-8 h-full">
                            <h3 className="text-lg font-heading font-bold mb-4">Let&apos;s Connect</h3>
                            <p className="text-zinc-500 text-sm leading-relaxed mb-8">
                                I&apos;m always open to discussing new projects, creative ideas, or opportunities in cybersecurity and web development.
                            </p>

                            <div className="space-y-5 mb-8">
                                <a href={SOCIALS.email} className="flex items-center gap-3.5 text-zinc-400 hover:text-primary transition-colors group">
                                    <div className="w-9 h-9 bg-zinc-800/50 rounded-lg border border-white/5 flex items-center justify-center group-hover:border-primary/30 group-hover:bg-primary/[0.08] transition-all">
                                        <Mail size={15} />
                                    </div>
                                    <span className="text-sm">siddharthsinha1125@gmail.com</span>
                                </a>
                                <div className="flex items-center gap-3.5 text-zinc-400">
                                    <div className="w-9 h-9 bg-zinc-800/50 rounded-lg border border-white/5 flex items-center justify-center">
                                        <MapPin size={15} />
                                    </div>
                                    <span className="text-sm">New Delhi, India</span>
                                </div>
                            </div>

                            <div className="flex gap-3 mb-10">
                                {[
                                    { href: SOCIALS.github, icon: Github, label: "GitHub" },
                                    { href: SOCIALS.linkedin, icon: Linkedin, label: "LinkedIn" },
                                    { href: SOCIALS.tryhackme, icon: Terminal, label: "TryHackMe" },
                                ].map(({ href, icon: Icon, label }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={label}
                                        className="w-9 h-9 bg-zinc-800/50 rounded-lg border border-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:border-primary/30 hover:bg-primary/[0.08] hover:-translate-y-0.5 transition-all duration-300"
                                    >
                                        <Icon size={15} />
                                    </a>
                                ))}
                            </div>

                            <MagneticAnchor
                                href={SOCIALS.cv}
                                download
                                className="inline-flex items-center gap-2 px-6 py-3 bg-primary/90 text-white text-sm font-medium rounded-full hover:bg-primary transition-all active:scale-95 cursor-pointer"
                            >
                                <Download size={14} />
                                Download CV
                            </MagneticAnchor>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="lg:col-span-3"
                    >
                        <div className="bg-zinc-900/20 backdrop-blur-sm p-8 rounded-2xl border border-white/5">
                            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5" suppressHydrationWarning>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <InputField
                                        label="Name"
                                        name="from_name"
                                        type="text"
                                        required
                                        placeholder="John Doe"
                                    />
                                    <InputField
                                        label="Email"
                                        name="from_email"
                                        type="email"
                                        required
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <InputField
                                    label="Subject"
                                    name="subject"
                                    type="text"
                                    required
                                    placeholder="Project Inquiry"
                                />

                                <TextAreaField
                                    label="Message"
                                    name="message"
                                    required
                                    rows={4}
                                    placeholder="Tell me about your project..."
                                />

                                <MagneticButton
                                    type="submit"
                                    disabled={loading}
                                    className="w-full bg-white text-black font-medium py-3.5 rounded-xl hover:bg-zinc-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer text-sm"
                                >
                                    {loading ? (
                                        <>
                                            <Loader2 size={15} className="animate-spin" /> Sending...
                                        </>
                                    ) : (
                                        <>
                                            Send Message <ArrowUpRight size={15} />
                                        </>
                                    )}
                                </MagneticButton>

                                {status === "success" && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="p-3.5 bg-green-500/5 border border-green-500/10 text-green-400 rounded-xl text-xs text-center"
                                    >
                                        Message sent successfully! I&apos;ll get back to you soon.
                                    </motion.div>
                                )}

                                {status === "error" && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="p-3.5 bg-red-500/5 border border-red-500/10 text-red-400 rounded-xl text-xs text-center"
                                    >
                                        Something went wrong. Please try again later.
                                    </motion.div>
                                )}
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const InputField = ({ label, ...props }: React.ComponentPropsWithoutRef<"input"> & { label: string }) => {
    const [focused, setFocused] = useState(false);
    const fieldId = props.name || label.toLowerCase().replace(/\s+/g, "_");

    return (
        <div className="space-y-1.5 relative">
            <label htmlFor={fieldId} className="text-[11px] font-medium text-zinc-500 uppercase tracking-wider">{label}</label>
            <div className="relative">
                <div
                    className={`absolute inset-0 rounded-xl transition-opacity duration-300 pointer-events-none ${
                        focused ? "opacity-100" : "opacity-0"
                    }`}
                    style={{
                        background: "radial-gradient(ellipse at center, rgba(255,0,0,0.06), transparent 70%)",
                        filter: "blur(4px)",
                    }}
                />
                <input
                    id={fieldId}
                    {...props}
                    onFocus={(e) => { setFocused(true); props.onFocus?.(e); }}
                    onBlur={(e) => { setFocused(false); props.onBlur?.(e); }}
                    className="w-full bg-black/40 border border-white/[0.06] rounded-xl px-4 py-3 text-white text-sm placeholder:text-zinc-600 focus:border-primary/40 outline-none transition-all duration-300 relative z-10"
                />
            </div>
        </div>
    );
};

const TextAreaField = ({ label, ...props }: React.ComponentPropsWithoutRef<"textarea"> & { label: string }) => {
    const [focused, setFocused] = useState(false);
    const fieldId = props.name || label.toLowerCase().replace(/\s+/g, "_");

    return (
        <div className="space-y-1.5 relative">
            <label htmlFor={fieldId} className="text-[11px] font-medium text-zinc-500 uppercase tracking-wider">{label}</label>
            <div className="relative">
                <div
                    className={`absolute inset-0 rounded-xl transition-opacity duration-300 pointer-events-none ${
                        focused ? "opacity-100" : "opacity-0"
                    }`}
                    style={{
                        background: "radial-gradient(ellipse at center, rgba(255,0,0,0.06), transparent 70%)",
                        filter: "blur(4px)",
                    }}
                />
                <textarea
                    id={fieldId}
                    {...props}
                    onFocus={(e) => { setFocused(true); props.onFocus?.(e); }}
                    onBlur={(e) => { setFocused(false); props.onBlur?.(e); }}
                    className="w-full bg-black/40 border border-white/[0.06] rounded-xl px-4 py-3 text-white text-sm placeholder:text-zinc-600 focus:border-primary/40 outline-none transition-all duration-300 resize-none relative z-10"
                />
            </div>
        </div>
    );
};
