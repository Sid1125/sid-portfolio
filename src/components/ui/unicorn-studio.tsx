"use client";
import React, { useEffect, useRef, useState } from "react";

interface UnicornStudioProps {
    projectId: string;
    className?: string;
    style?: React.CSSProperties;
}

export const UnicornStudio = ({ projectId, className, style }: UnicornStudioProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        const initStudio = () => {
            if (window.UnicornStudio && typeof window.UnicornStudio.init === 'function') {
                window.UnicornStudio.init();
            }
        };

        if (!window.UnicornStudio) {
            window.UnicornStudio = { isInitialized: false, init: () => { } };
            const script = document.createElement("script");
            script.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.0.2/dist/unicornStudio.umd.js";
            script.async = true; // Optimize loading
            script.onload = () => {
                // Small delay to ensure heavy initial rendering doesn't block main thread immediately
                setTimeout(() => {
                    initStudio();
                    window.UnicornStudio.isInitialized = true;
                }, 100);
            };
            (document.head || document.body).appendChild(script);
        } else {
            initStudio();
        }
    }, [isVisible]);

    return (
        <div
            ref={containerRef}
            data-us-project={projectId}
            className={className}
            style={{
                width: "110%",
                height: "110%",
                willChange: "transform", // Hint browser for optimization
                ...style
            }}
        ></div>
    );
};
