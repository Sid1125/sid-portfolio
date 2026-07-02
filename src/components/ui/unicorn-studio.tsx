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
                script.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.2.6/dist/unicornStudio.umd.js";
                script.async = true;
                script.onload = () => {
                    setTimeout(() => {
                        try {
                            initStudio();
                            window.UnicornStudio.isInitialized = true;
                        } catch (e) {
                            console.error("UnicornStudio init failed:", e);
                        }
                    }, 100);
                };
                script.onerror = () => {
                    console.error("UnicornStudio script failed to load from CDN");
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
