"use client";

import React, { useState } from "react";

const footerLinks = [
    {
        title: "Home",
        links: ["Categories", "Devices", "Pricing", "FAQ"],
    },
    {
        title: "Movies",
        links: ["Genres", "Trending", "New Release", "Popular"],
    },
    {
        title: "Shows",
        links: ["Genres", "Trending", "New Release", "Popular"],
    },
    {
        title: "Support",
        links: ["Contact Us"],
    },
    {
        title: "Subscription",
        links: ["Plans", "Features"],
    },
];

const socialIcons = [
    {
        name: "Facebook",
        svg: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-text-primary">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
        ),
    },
    {
        name: "Twitter",
        svg: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-text-primary">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
            </svg>
        ),
    },
    {
        name: "LinkedIn",
        svg: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-text-primary">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
            </svg>
        ),
    },
];

export default function Footer() {
    return (
        <footer className="bg-[#0F0F0F] border-t border-surface">
            <div className="max-w-[1440px] mx-auto px-5 pt-[60px]">
                {/* Footer columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8 mb-12">
                    {footerLinks.map((section) => (
                        <div key={section.title}>
                            <h4 className="text-lg font-semibold text-text-primary mb-5">
                                {section.title}
                            </h4>
                            <ul className="list-none flex flex-col gap-3">
                                {section.links.map((link) => {
                                    const [isHovered, setIsHovered] = useState(false);

                                    return (
                                        <li key={link}>
                                            <a
                                                href="#"
                                                className="text-base text-text-secondary text-decoration-none transition-colors duration-200"
                                                style={{ color: isHovered ? "var(--color-text-primary)" : "var(--color-text-secondary)" }}
                                                onMouseEnter={() => setIsHovered(true)}
                                                onMouseLeave={() => setIsHovered(false)}
                                            >
                                                {link}
                                            </a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    ))}

                    {/* Connect With Us */}
                    <div>
                        <h4 className="text-lg font-semibold text-text-primary mb-5">
                            Connect With Us
                        </h4>
                        <div className="flex gap-3">
                            {socialIcons.map((social) => {
                                const [isHovered, setIsHovered] = useState(false);

                                return (
                                    <a
                                        key={social.name}
                                        href="#"
                                        className="w-[44px] h-[44px] rounded-lg border border-border flex items-center justify-center transition-colors duration-200"
                                        style={{ background: isHovered ? "var(--color-border)" : "var(--color-surface)" }}
                                        onMouseEnter={() => setIsHovered(true)}
                                        onMouseLeave={() => setIsHovered(false)}
                                    >
                                        {social.svg}
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-surface py-6 flex flex-col items-center justify-center gap-4">
                    <p className="text-sm text-text-muted">©2023 streamvibe, All Rights Reserved</p>
                    <div className="flex gap-4 flex-wrap justify-center">
                        <a
                            href="#"
                            className="text-sm text-text-muted text-decoration-none transition-colors duration-200 hover:text-text-secondary"
                        >
                            Terms of Use
                        </a>
                        <a
                            href="#"
                            className="text-sm text-text-muted text-decoration-none transition-colors duration-200 hover:text-text-secondary"
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="#"
                            className="text-sm text-text-muted text-decoration-none transition-colors duration-200 hover:text-text-secondary"
                        >
                            Cookie Policy
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
