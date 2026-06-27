"use client";
import React from "react";
import { motion } from "framer-motion";

interface TextRevealProps {
    text: string;
    className?: string;
    as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
    once?: boolean;
}

export const TextReveal = ({ text, className, as: Tag = "p", once = true }: TextRevealProps) => {
    const words = text.split(" ");

    const container = {
        hidden: {},
        visible: {
            transition: { staggerChildren: 0.04 },
        },
    };

    const child = {
        hidden: { y: "100%" },
        visible: {
            y: 0,
            transition: { type: "spring" as const, damping: 15, stiffness: 100 },
        },
    };

    return (
        <motion.div
            className={`inline-flex flex-wrap ${className || ""}`}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once }}
        >
            {words.map((word, index) => (
                <span key={index} className="inline-block overflow-hidden mr-[0.25em] last:mr-0">
                    <motion.span className="inline-block" variants={child}>
                        {word}
                    </motion.span>
                </span>
            ))}
        </motion.div>
    );
};
