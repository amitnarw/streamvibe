"use client";

import React, { useState } from "react";

export default function Navbar() {
    const [active, setActive] = useState("Home");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const links = ["Home", "Browse", "Trending", "My List"];

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
                    padding: "0 20px",
                    height: 80,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                {/* Logo */}
                <a href="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
                    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="21" cy="21" r="20" fill="#E50000" opacity="0.9"/>
                        <path d="M18 14L28 21L18 28V14Z" fill="white"/>
                        <circle cx="21" cy="21" r="8" fill="white" opacity="0.2"/>
                    </svg>
                    <span style={{ fontSize: 22, fontWeight: 700, color: "#fff" }}>StreamVibe</span>
                </a>

                {/* Desktop Nav Links */}
                <div className="hidden md:flex items-center gap-1 bg-[#0F0F0F] border border-[#1f1f1f] rounded-xl p-[6px_8px]">
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
                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden"
                        style={{
                            background: "transparent",
                            border: "none",
                            cursor: "pointer",
                            padding: 8,
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        {mobileMenuOpen ? (
                            <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="#fff" strokeWidth="2">
                                <line x1="18" y1="6" x2="6" y2="18" strokeLinecap="round" strokeLinejoin="round" />
                                <line x1="6" y1="6" x2="18" y2="18" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        ) : (
                            <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="#fff" strokeWidth="2">
                                <line x1="4" y1="6" x2="20" y2="6" strokeLinecap="round" strokeLinejoin="round" />
                                <line x1="4" y1="12" x2="20" y2="12" strokeLinecap="round" strokeLinejoin="round" />
                                <line x1="4" y1="18" x2="20" y2="18" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-[#0F0F0F] border-t border-[#1f1f1f] p-5">
                    {links.map((link) => (
                        <button
                            key={link}
                            onClick={() => {
                                setActive(link);
                                setMobileMenuOpen(false);
                            }}
                            style={{
                                width: "100%",
                                padding: "15px 20px",
                                borderRadius: 8,
                                border: "none",
                                cursor: "pointer",
                                fontSize: 15,
                                fontWeight: 500,
                                fontFamily: "inherit",
                                transition: "all 0.2s",
                                background: active === link ? "#1A1A1A" : "transparent",
                                color: active === link ? "#fff" : "#999",
                                textAlign: "left",
                                marginBottom: 8,
                            }}
                        >
                            {link}
                        </button>
                    ))}
                </div>
            )}
        </nav>
    );
}
