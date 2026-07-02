"use client";
import React from "react";
import { motion } from "framer-motion";

export const GradientMesh = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
            <motion.div
                className="absolute -top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.08)_0%,transparent_70%)] blur-3xl will-change-transform"
                animate={{
                    x: [0, 80, -40, 0],
                    y: [0, -60, 50, 0],
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
                className="absolute -bottom-1/4 -right-1/4 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.05)_0%,transparent_70%)] blur-3xl will-change-transform"
                animate={{
                    x: [0, -60, 70, 0],
                    y: [0, 50, -80, 0],
                }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />
        </div>
    );
};
