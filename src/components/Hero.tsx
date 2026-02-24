"use client";

import React from "react";
import Image from "next/image";

export default function Hero() {
    return (
        <section
            style={{
                position: "relative",
                overflow: "hidden",
                paddingTop: 80,
                height: "100vh",
                minHeight: 700,
                display: "flex",
                flexDirection: "column",
            }}
        >
            {/* Movie poster grid background image */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 0,
                }}
            >
                <Image
                    src="/hero-bg.png"
                    alt="Movie poster grid"
                    fill
                    style={{ objectFit: "cover", objectPosition: "center top" }}
                    priority
                />
            </div>

            {/* Gradient overlays for depth */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    background:
                        "linear-gradient(to bottom, rgba(20,20,20,0.2) 0%, rgba(20,20,20,0.5) 40%, rgba(20,20,20,0.85) 65%, #141414 90%)",
                    pointerEvents: "none",
                    zIndex: 1,
                }}
            />
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    background:
                        "linear-gradient(to right, #141414 0%, transparent 12%, transparent 88%, #141414 100%)",
                    pointerEvents: "none",
                    zIndex: 1,
                }}
            />

            {/* Central play icon */}
            <div
                style={{
                    position: "absolute",
                    top: "38%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 100,
                    height: 100,
                    borderRadius: "50%",
                    background: "rgba(20,20,20,0.5)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    backdropFilter: "blur(8px)",
                    zIndex: 2,
                    transition: "transform 0.3s, background 0.3s",
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translate(-50%, -50%) scale(1.08)";
                    e.currentTarget.style.background = "rgba(229,0,0,0.25)";
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translate(-50%, -50%) scale(1)";
                    e.currentTarget.style.background = "rgba(20,20,20,0.5)";
                }}
            >
                <svg width="32" height="36" viewBox="0 0 18 20" fill="none">
                    <path
                        d="M17 8.268a2 2 0 010 3.464l-13.5 7.794A2 2 0 010 17.794V2.206A2 2 0 013.5.474L17 8.268z"
                        fill="#fff"
                    />
                </svg>
            </div>

            {/* Text content pinned to bottom */}
            <div
                style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    textAlign: "center",
                    padding: "0 20px 60px",
                    zIndex: 3,
                }}
            >
                <h1
                    style={{
                        fontSize: "clamp(2rem, 5vw, 3rem)",
                        fontWeight: 700,
                        color: "#fff",
                        marginBottom: 14,
                        lineHeight: 1.15,
                        letterSpacing: "-0.5px",
                    }}
                >
                    StreamVibe - Watch Movies & TV Shows
                </h1>
                <p
                    style={{
                        fontSize: "clamp(1rem, 2.5vw, 1.125rem)",
                        color: "#999",
                        lineHeight: 1.65,
                        maxWidth: 860,
                        margin: "0 auto 28px",
                    }}
                >
                    Watch your favorite movies and TV shows on StreamVibe. With thousands of titles to choose from, there's something for everyone.
                </p>
                <button
                    className="btn-primary"
                    style={{
                        fontSize: 17,
                        padding: "16px 28px",
                        borderRadius: 8,
                    }}
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M8 5.14v13.72a1 1 0 001.5.86l11.5-6.86a1 1 0 000-1.72L9.5 4.28A1 1 0 008 5.14z"
                            fill="#fff"
                        />
                    </svg>
                    Start Watching Now
                </button>
            </div>
        </section>
    );
}
