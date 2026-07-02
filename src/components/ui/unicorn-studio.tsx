"use client";
import React from "react";

export const UnicornStudio = ({ className }: { projectId?: string; className?: string; style?: React.CSSProperties }) => {
    return (
        <div
            className={className}
            style={{
                position: "absolute",
                inset: 0,
                background: `
                    radial-gradient(ellipse 80% 60% at 10% 20%, rgba(255,0,0,0.06) 0%, transparent 60%),
                    radial-gradient(ellipse 60% 50% at 90% 80%, rgba(255,0,0,0.04) 0%, transparent 60%),
                    radial-gradient(ellipse 50% 40% at 50% 50%, rgba(100,0,0,0.03) 0%, transparent 50%)
                `,
                animation: "heroDrift 30s ease-in-out infinite",
            }}
        />
    );
};
