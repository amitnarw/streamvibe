"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function Hero() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section className="relative overflow-hidden pt-[80px] h-screen min-h-[700px] flex flex-col">
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
            <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/50 via-[65%] to-background pointer-events-none z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent via-[12%] to-transparent via-[88%] to-background pointer-events-none z-10" />

            {/* Central play icon */}
            <div
                className={`absolute top-[38%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] rounded-full bg-background/50 border border-white/12 flex items-center justify-center cursor-pointer backdrop-blur-md z-20 transition-all duration-300 ${
                    isHovered ? "scale-108 bg-primary/25" : "scale-100"
                }`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <svg width="32" height="36" viewBox="0 0 18 20" fill="none">
                    <path
                        d="M17 8.268a2 2 0 010 3.464l-13.5 7.794A2 2 0 010 17.794V2.206A2 2 0 013.5.474L17 8.268z"
                        fill="currentColor"
                        className="text-text-primary"
                    />
                </svg>
            </div>

            {/* Text content pinned to bottom */}
            <div className="absolute bottom-0 left-0 right-0 text-center px-5 pb-[60px] z-30">
                <h1 className="text-[clamp(2rem,5vw,3rem)] font-bold text-text-primary mb-[14px] leading-[1.15] tracking-[-0.5px]">
                    StreamVibe - Watch Movies & TV Shows
                </h1>
                <p className="text-[clamp(1rem,2.5vw,1.125rem)] text-text-secondary leading-[1.65] max-w-[860px] mx-auto mb-[28px]">
                    Watch your favorite movies and TV shows on StreamVibe. With thousands of titles to choose from, there's something for everyone.
                </p>
                <button className="btn-primary text-[17px] px-[28px] py-[16px] rounded-lg">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M8 5.14v13.72a1 1 0 001.5.86l11.5-6.86a1 1 0 000-1.72L9.5 4.28A1 1 0 008 5.14z"
                            fill="currentColor"
                            className="text-text-primary"
                        />
                    </svg>
                    Start Watching Now
                </button>
            </div>
        </section>
    );
}
