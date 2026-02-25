"use client";

import React, { useState } from "react";

const genres = [
    {
        name: "Action",
        colors: ["#8B0000", "#2a1a0a", "#0a2a1a", "#1a0a3a"],
    },
    {
        name: "Adventure",
        colors: ["#1a3a1a", "#3a2a0a", "#0a1a3a", "#2a0a2a"],
    },
    {
        name: "Comedy",
        colors: ["#3a3a0a", "#0a3a3a", "#2a1a3a", "#1a3a2a"],
    },
    {
        name: "Drama",
        colors: ["#2a0a0a", "#1a2a3a", "#3a1a2a", "#0a2a2a"],
    },
    {
        name: "Horror",
        colors: ["#0a0a1a", "#1a0a0a", "#0a1a0a", "#2a2a2a"],
    },
];

function GenreCard({ genre }: { genre: (typeof genres)[0] }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`bg-surface border border-border rounded-xl p-6 cursor-pointer transition-all duration-200 ${
                isHovered ? "border-border-light -translate-y-0.5" : ""
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* 2x2 poster grid */}
            <div className="grid grid-cols-2 gap-1 rounded-lg overflow-hidden mb-4">
                {genre.colors.map((color, i) => (
                    <div
                        key={i}
                        className="aspect-[3/4] rounded p-[4px]"
                        style={{ background: `linear-gradient(135deg, ${color}, #000)` }}
                    />
                ))}
            </div>
            {/* Label + arrow */}
            <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-text-primary">{genre.name}</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-text-secondary">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
        </div>
    );
}

export default function Categories() {
    const [page, setPage] = useState(0);

    return (
        <section className="section-container">
            {/* Header row */}
            <div className="flex items-end justify-between mb-12">
                <div>
                    <h2 className="section-heading mb-3">
                        Browse by Category
                    </h2>
                    <p className="section-description">
                        Find your favorite movies and TV shows by category
                    </p>
                </div>
                {/* Carousel navigation */}
                <div className="flex items-center gap-3 flex-shrink-0">
                    <button
                        onClick={() => setPage(Math.max(0, page - 1))}
                        className="w-[44px] h-[44px] rounded-lg bg-[#0F0F0F] border border-border flex items-center justify-center cursor-pointer"
                    >
                        <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="text-text-primary">
                            <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <div className="flex gap-1">
                        {[0, 1, 2, 3].map((i) => (
                            <div
                                key={i}
                                className={`h-1 rounded transition-all duration-300 ${
                                    i === page ? "w-6 bg-primary" : "w-2 bg-border-light"
                                }`}
                            />
                        ))}
                    </div>
                    <button
                        onClick={() => setPage(Math.min(3, page + 1))}
                        className="w-[44px] h-[44px] rounded-lg bg-[#0F0F0F] border border-border flex items-center justify-center cursor-pointer"
                    >
                        <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="text-text-primary">
                            <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Genre cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {genres.map((genre) => (
                    <GenreCard key={genre.name} genre={genre} />
                ))}
            </div>
        </section>
    );
}
