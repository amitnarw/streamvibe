"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Navbar() {
    const [active, setActive] = useState("Home");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const links = ["Home", "Movies & Shows", "Support", "Subscriptions"];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/90 via-black/50 to-transparent">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-between px-6 lg:px-8 relative py-2">
                {/* Logo */}
                <a href="/" className="flex items-center flex-shrink-0 z-10 transition-transform hover:scale-105">
                    <Image
                        src="/logo.svg"
                        alt="StreamVibe"
                        width={65}
                        height={65}
                        priority
                    />
                </a>

                {/* Nav Links - Centered in a pill container */}
                <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-[#0A0A0A] border border-[#1F1F1F] rounded-full p-2 flex items-center gap-2 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
                    {links.map((link) => (
                        <Button
                            key={link}
                            variant="ghost"
                            onClick={() => setActive(link)}
                            className={`px-6 py-3 rounded-full text-base font-semibold whitespace-nowrap transition-all duration-200 ${
                                active === link
                                    ? "text-white bg-[#1A1A1A]"
                                    : "text-gray-400 hover:text-white hover:bg-transparent"
                            }`}
                        >
                            {link}
                        </Button>
                    ))}
                </div>

                {/* Right Side - Empty for balance */}
                <div className="w-16 flex-shrink-0"></div>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden flex items-center justify-between px-6 h-20 bg-black/95 backdrop-blur-xl border-b border-[#1F1F1F]">
                {/* Logo */}
                <a href="/" className="flex items-center">
                    <Image
                        src="/logo.svg"
                        alt="StreamVibe"
                        width={45}
                        height={45}
                        priority
                    />
                </a>

                {/* Mobile Menu Button */}
                <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="bg-[#1A1A1A] border-[#333333] rounded-xl"
                >
                    {mobileMenuOpen ? (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                            <line x1="18" y1="6" x2="6" y2="18" strokeLinecap="round" />
                            <line x1="6" y1="6" x2="18" y2="18" strokeLinecap="round" />
                        </svg>
                    ) : (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                            <line x1="3" y1="7" x2="21" y2="7" strokeLinecap="round" />
                            <line x1="3" y1="12" x2="21" y2="12" strokeLinecap="round" />
                            <line x1="3" y1="17" x2="21" y2="17" strokeLinecap="round" />
                        </svg>
                    )}
                </Button>
            </div>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div className="md:hidden fixed inset-0 top-20 bg-[#0A0A0A] z-50 px-6 py-8 overflow-y-auto">
                    <div className="flex flex-col gap-4">
                        {links.map((link) => (
                            <Button
                                key={link}
                                variant={active === link ? "secondary" : "ghost"}
                                size="lg"
                                onClick={() => {
                                    setActive(link);
                                    setMobileMenuOpen(false);
                                }}
                                className={`w-full px-8 py-6 rounded-3xl text-xl font-bold justify-start ${
                                    active === link
                                        ? "text-white border-[#333333]"
                                        : "text-gray-400"
                                }`}
                            >
                                {link}
                            </Button>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
