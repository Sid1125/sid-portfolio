"use client";
import React from "react";

export const ParticleGrid = ({ className }: { className?: string }) => {
    return (
        <div
            className={`absolute inset-0 pointer-events-none ${className || ""}`}
            style={{
                backgroundImage: "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
            }}
        />
    );
};
