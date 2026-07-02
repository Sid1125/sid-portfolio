"use client";
import React, { useEffect, useRef, useState } from "react";

interface UnicornStudioProps {
    projectId: string;
    className?: string;
    style?: React.CSSProperties;
}

export const UnicornStudio = ({ projectId, className, style }: UnicornStudioProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (typeof window === "undefined") return;

        // Desktop only — skip on mobile/tablet to save perf
        const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
        if (!isDesktop) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) return;
                observer.disconnect();

                // Defer script load to idle time
                const idleId = requestIdleCallback ? requestIdleCallback(() => initStudio(), { timeout: 2000 }) : setTimeout(initStudio, 1000);
                return () => {
                    if (typeof idleId === "number") clearTimeout(idleId);
                    else cancelIdleCallback(idleId as unknown as number);
                };
            },
            { threshold: 0.1 }
        );

        if (containerRef.current) observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, []);

    const initStudio = () => {
        const tryInit = () => {
            if (window.UnicornStudio && typeof window.UnicornStudio.init === "function") {
                window.UnicornStudio.init();
                setLoaded(true);
            }
        };

        if (window.UnicornStudio) {
            tryInit();
            return;
        }

        window.UnicornStudio = { isInitialized: false, init: () => {} };
        const script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.2.6/dist/unicornStudio.umd.js";
        script.async = true;
        script.onload = () => {
            setTimeout(() => {
                try { tryInit(); } catch (e) { console.error("UnicornStudio init:", e); }
            }, 100);
        };
        script.onerror = () => console.error("UnicornStudio script failed to load");
        (document.head || document.body).appendChild(script);
    };

    return (
        <>
            {/* CSS gradient fallback — shown while loading, hidden after */}
            <div
                className={className}
                aria-hidden="true"
                style={{
                    position: "absolute",
                    inset: 0,
                    background: `
                        radial-gradient(ellipse 80% 60% at 10% 20%, rgba(255,0,0,0.06) 0%, transparent 60%),
                        radial-gradient(ellipse 60% 50% at 90% 80%, rgba(255,0,0,0.04) 0%, transparent 60%),
                        radial-gradient(ellipse 50% 40% at 50% 50%, rgba(100,0,0,0.03) 0%, transparent 50%)
                    `,
                    animation: "heroDrift 30s ease-in-out infinite",
                    opacity: loaded ? 0 : 1,
                    transition: "opacity 1s ease",
                    ...style,
                }}
            />
            {/* WebGL canvas — hidden initially, fades in after load */}
            <div
                ref={containerRef}
                data-us-project={projectId}
                className={className}
                aria-hidden="true"
                style={{
                    position: "absolute",
                    inset: 0,
                    opacity: loaded ? 1 : 0,
                    transition: "opacity 1s ease",
                    willChange: "transform",
                    ...style,
                }}
            />
        </>
    );
};
