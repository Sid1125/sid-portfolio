"use client";
import React from "react";
import { motion } from "framer-motion";

export const GradientMesh = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
            <motion.div
                className="absolute -top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.08)_0%,transparent_70%)] blur-3xl"
                animate={{
                    x: [0, 100, -50, 0],
                    y: [0, -80, 60, 0],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
                className="absolute -bottom-1/4 -right-1/4 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.05)_0%,transparent_70%)] blur-3xl"
                animate={{
                    x: [0, -70, 90, 0],
                    y: [0, 60, -100, 0],
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.03)_0%,transparent_70%)] blur-3xl"
                animate={{
                    x: [0, 50, -80, 0],
                    y: [0, -50, 30, 0],
                }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />
        </div>
    );
};
