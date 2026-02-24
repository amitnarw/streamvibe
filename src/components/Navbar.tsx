"use client";

import React, { useState } from "react";

export default function Navbar() {
    const [active, setActive] = useState("Home");
    const links = ["Home", "Movies & Shows", "Support", "Subscriptions"];

    return (
        <nav
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 100,
                background: "rgba(0,0,0,0.85)",
                backdropFilter: "blur(12px)",
                borderBottom: "1px solid #1f1f1f",
            }}
        >
            <div
                style={{
                    maxWidth: 1440,
                    margin: "0 auto",
                    padding: "0 80px",
                    height: 80,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                {/* Logo */}
                <a href="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
                    <div
                        style={{
                            width: 42,
                            height: 42,
                            background: "#E50000",
                            borderRadius: 8,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <svg width="18" height="20" viewBox="0 0 18 20" fill="none">
                            <path d="M17 8.268a2 2 0 010 3.464l-13.5 7.794A2 2 0 010 17.794V2.206A2 2 0 013.5.474L17 8.268z" fill="#fff" />
                        </svg>
                    </div>
                    <span style={{ fontSize: 22, fontWeight: 700, color: "#fff" }}>StreamVibe</span>
                </a>

                {/* Nav Links */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 4,
                        background: "#0F0F0F",
                        border: "1px solid #1f1f1f",
                        borderRadius: 12,
                        padding: "6px 8px",
                    }}
                >
                    {links.map((link) => (
                        <button
                            key={link}
                            onClick={() => setActive(link)}
                            style={{
                                padding: "10px 20px",
                                borderRadius: 8,
                                border: "none",
                                cursor: "pointer",
                                fontSize: 15,
                                fontWeight: 500,
                                fontFamily: "inherit",
                                transition: "all 0.2s",
                                background: active === link ? "#1A1A1A" : "transparent",
                                color: active === link ? "#fff" : "#999",
                            }}
                        >
                            {link}
                        </button>
                    ))}
                </div>

                {/* Icons */}
                <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                    <button
                        style={{
                            background: "transparent",
                            border: "none",
                            cursor: "pointer",
                            padding: 8,
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="#fff" strokeWidth="2">
                            <circle cx="11" cy="11" r="8" />
                            <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
                        </svg>
                    </button>
                    <button
                        style={{
                            background: "transparent",
                            border: "none",
                            cursor: "pointer",
                            padding: 8,
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="#fff" strokeWidth="2">
                            <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M13.73 21a2 2 0 01-3.46 0" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
}
