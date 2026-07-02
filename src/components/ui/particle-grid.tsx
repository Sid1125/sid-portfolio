"use client";
import React from "react";

export const ParticleGrid = ({ className }: { className?: string }) => {
    return (
        <div
            className={`absolute inset-0 pointer-events-none dot-grid-lg ${className || ""}`}
        />
    );
};
