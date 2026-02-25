"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function Navbar() {
    const [active, setActive] = useState("Home");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const links = ["Home", "Movies", "TV Shows", "Sports", "News", "Kids"];

    return (
        <nav className="fixed top-0 left-0 right-0 z-100">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-between px-[70px] h-20">
                {/* Logo */}
                <a href="/" className="flex items-center gap-2.5">
                    <Image 
                        src="/logo.svg" 
                        alt="StreamVibe" 
                        width={38} 
                        height={38}
                        priority
                    />
                    <span className="text-[22px] font-bold text-white tracking-tight">STREAMVIBE</span>
                </a>

                {/* Nav Links - Centered */}
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-1">
                    {links.map((link) => (
                        <button
                            key={link}
                            onClick={() => setActive(link)}
                            className={`px-[18px] py-2.5 rounded-lg border-none cursor-pointer text-[15px] font-medium font-inherit transition-all duration-200 ${
                                active === link 
                                    ? "text-white bg-surface" 
                                    : "text-text-secondary hover:text-white hover:bg-surface/50"
                            }`}
                        >
                            {link}
                        </button>
                    ))}
                </div>

                {/* Right Side Icons & Buttons */}
                <div className="flex items-center gap-3.5">
                    <button className="bg-transparent border-none cursor-pointer p-2 flex items-center justify-center">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8" />
                            <path d="M21 21l-4.35-4.35" />
                        </svg>
                    </button>
                    <button className="bg-transparent border-none cursor-pointer p-2 flex items-center justify-center">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
                            <path d="M13.73 21a2 2 0 01-3.46 0" />
                        </svg>
                    </button>
                    <div className="w-1.5 h-1.5 rounded-full bg-[#E60000]" />
                    <button className="bg-transparent border-none cursor-pointer px-3.5 py-2.5 text-[14px] font-medium text-[#999999] hover:text-white transition-colors duration-200">
                        Sign In
                    </button>
                    <button className="bg-[#E60000] border-none cursor-pointer px-[18px] py-2.5 rounded-lg text-[14px] font-medium text-white hover:bg-[#CC0000] transition-colors duration-200">
                        Subscribe
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden flex items-center justify-between px-5 h-[64px]">
                {/* Logo */}
                <a href="/" className="flex items-center gap-[8px]">
                    <Image 
                        src="/logo.svg" 
                        alt="StreamVibe" 
                        width={32} 
                        height={32}
                        priority
                    />
                    <span className="text-[18px] font-bold text-white tracking-tight">STREAMVIBE</span>
                </a>

                {/* Icons */}
                <div className="flex items-center gap-3">
                    <button className="bg-transparent border-none cursor-pointer p-1 flex items-center justify-center">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8" />
                            <path d="M21 21l-4.35-4.35" />
                        </svg>
                    </button>
                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="bg-transparent border-none cursor-pointer p-1 flex items-center justify-center"
                    >
                        {mobileMenuOpen ? (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        ) : (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="3" y1="6" x2="21" y2="6" />
                                <line x1="3" y1="12" x2="21" y2="12" />
                                <line x1="3" y1="18" x2="21" y2="18" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-[64px] left-0 right-0 bg-[#0F0F0F] border-t border-[#1F1F1F] px-5 py-4">
                    <div className="flex flex-col gap-1">
                        {links.map((link) => (
                            <button
                                key={link}
                                onClick={() => {
                                    setActive(link);
                                    setMobileMenuOpen(false);
                                }}
                                className={`w-full px-4 py-3 rounded-lg border-none cursor-pointer text-[15px] font-medium font-inherit transition-all duration-200 text-left ${
                                active === link 
                                    ? "text-white bg-[#1F1F1F]" 
                                    : "text-[#999999]"
                                }`}
                            >
                                {link}
                            </button>
                        ))}
                    </div>
                    <div className="flex items-center gap-3 mt-4 pt-4 border-t border-[#1F1F1F]">
                        <button className="bg-transparent border-none cursor-pointer p-1 flex items-center justify-center">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
                                <path d="M13.73 21a2 2 0 01-3.46 0" />
                            </svg>
                        </button>
                        <span className="text-[13px] text-[#999999]">Notifications</span>
                    </div>
                    <div className="flex flex-col gap-2 mt-4">
                        <button className="w-full bg-transparent border border-[#333333] px-4 py-3 rounded-lg text-[15px] font-medium text-white">
                            Sign In
                        </button>
                        <button className="w-full bg-[#E60000] border-none px-4 py-3 rounded-lg text-[15px] font-medium text-white">
                            Subscribe
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}
