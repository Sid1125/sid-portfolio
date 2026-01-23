'use client'

import { Suspense, lazy, useEffect, useRef, useState } from 'react'
const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
    scene: string
    className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
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

    return (
        <div ref={containerRef} className={className}>
            {isVisible && (
                <Suspense
                    fallback={
                        <div className="w-full h-full flex items-center justify-center bg-black/50">
                            <span className="loader"></span>
                        </div>
                    }
                >
                    <Spline
                        scene={scene}
                        className="w-full h-full"
                    />
                </Suspense>
            )}
        </div>
    )
}
