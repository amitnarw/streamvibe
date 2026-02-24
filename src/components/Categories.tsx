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
    return (
        <div
            style={{
                background: "#1A1A1A",
                border: "1px solid #262626",
                borderRadius: 12,
                padding: 24,
                cursor: "pointer",
                transition: "border-color 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#333";
                e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#262626";
                e.currentTarget.style.transform = "translateY(0)";
            }}
        >
            {/* 2x2 poster grid */}
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 4,
                    borderRadius: 8,
                    overflow: "hidden",
                    marginBottom: 16,
                }}
            >
                {genre.colors.map((color, i) => (
                    <div
                        key={i}
                        style={{
                            aspectRatio: "3/4",
                            background: `linear-gradient(135deg, ${color}, #000)`,
                            borderRadius: 4,
                        }}
                    />
                ))}
            </div>
            {/* Label + arrow */}
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <span style={{ fontSize: 18, fontWeight: 600, color: "#fff" }}>{genre.name}</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2">
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
            <div
                style={{
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "space-between",
                    marginBottom: 48,
                }}
            >
                <div>
                    <h2 className="section-heading" style={{ marginBottom: 12 }}>
                        Explore our wide variety of categories
                    </h2>
                    <p className="section-description">
                        Whether you&apos;re looking for a comedy to make you laugh, a drama to make you think, or a
                        documentary to learn something new
                    </p>
                </div>
                {/* Carousel navigation */}
                <div style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
                    <button
                        onClick={() => setPage(Math.max(0, page - 1))}
                        style={{
                            width: 44,
                            height: 44,
                            borderRadius: 8,
                            background: "#0F0F0F",
                            border: "1px solid #262626",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer",
                        }}
                    >
                        <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#fff" strokeWidth="2">
                            <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <div style={{ display: "flex", gap: 4 }}>
                        {[0, 1, 2, 3].map((i) => (
                            <div
                                key={i}
                                style={{
                                    width: i === page ? 24 : 8,
                                    height: 4,
                                    borderRadius: 2,
                                    background: i === page ? "#E50000" : "#333",
                                    transition: "all 0.3s",
                                }}
                            />
                        ))}
                    </div>
                    <button
                        onClick={() => setPage(Math.min(3, page + 1))}
                        style={{
                            width: 44,
                            height: 44,
                            borderRadius: 8,
                            background: "#0F0F0F",
                            border: "1px solid #262626",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer",
                        }}
                    >
                        <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#fff" strokeWidth="2">
                            <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Genre cards grid */}
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(5, 1fr)",
                    gap: 24,
                }}
            >
                {genres.map((genre) => (
                    <GenreCard key={genre.name} genre={genre} />
                ))}
            </div>
        </section>
    );
}
