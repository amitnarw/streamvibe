"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section className="relative overflow-hidden pt-24 h-screen min-h-[800px] flex flex-col">
            {/* Movie poster grid background image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero-bg.png"
                    alt="Movie poster grid"
                    fill
                    className="object-cover object-center-top"
                    priority
                />
            </div>

            {/* Gradient overlays for depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 via-[60%] to-background pointer-events-none z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent via-[15%] to-transparent via-[85%] to-background/60 pointer-events-none z-10" />

            {/* Central play icon */}
            <div
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full bg-background/40 border-2 border-white/20 flex items-center justify-center cursor-pointer backdrop-blur-md z-20 transition-all duration-300 ${
                    isHovered ? "scale-110 bg-primary/20" : "scale-100"
                }`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <svg width="36" height="40" viewBox="0 0 18 20" fill="none">
                    <path
                        d="M17 8.268a2 2 0 010 3.464l-13.5 7.794A2 2 0 010 17.794V2.206A2 2 0 013.5.474L17 8.268z"
                        fill="currentColor"
                        className="text-white"
                    />
                </svg>
            </div>

            {/* Text content pinned to bottom */}
            <div className="absolute bottom-0 left-0 right-0 text-center px-8 pb-20 z-30">
                <h1 className="text-[clamp(2.5rem,6vw,4rem)] font-bold text-text-primary mb-6 leading-tight tracking-tight">
                    The Best Streaming Experience
                </h1>
                <p className="text-[clamp(1rem,2vw,1.25rem)] text-text-secondary leading-relaxed max-w-3xl mx-auto mb-8">
                    StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere.
                </p>
                <Button size="xl" className="bg-gradient-to-r from-[#E50000] to-[#B40000] hover:from-[#CC0000] hover:to-[#990000] text-lg px-8 py-4 h-auto">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M8 5.14v13.72a1 1 0 001.5.86l11.5-6.86a1 1 0 000-1.72L9.5 4.28A1 1 0 008 5.14z"
                            fill="currentColor"
                            className="text-white"
                        />
                    </svg>
                    Start Watching Now
                </Button>
            </div>
        </section>
    );
}
