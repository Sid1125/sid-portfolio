"use client";
import React from "react";

export const GradientMesh = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
            <div className="gradient-orb gradient-orb-1" />
            <div className="gradient-orb gradient-orb-2" />
        </div>
    );
};
