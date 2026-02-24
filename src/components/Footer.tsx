"use client";

import React from "react";

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
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
        ),
    },
    {
        name: "Twitter",
        svg: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
            </svg>
        ),
    },
    {
        name: "LinkedIn",
        svg: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
            </svg>
        ),
    },
];

export default function Footer() {
    return (
        <footer
            style={{
                background: "#0F0F0F",
                borderTop: "1px solid #1f1f1f",
            }}
        >
            <div
                style={{
                    maxWidth: 1440,
                    margin: "0 auto",
                    padding: "60px 20px 0",
                }}
            >
                {/* Footer columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8 mb-12">
                    {footerLinks.map((section) => (
                        <div key={section.title}>
                            <h4
                                style={{
                                    fontSize: 18,
                                    fontWeight: 600,
                                    color: "#fff",
                                    marginBottom: 20,
                                }}
                            >
                                {section.title}
                            </h4>
                            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
                                {section.links.map((link) => (
                                    <li key={link}>
                                        <a
                                            href="#"
                                            style={{
                                                fontSize: 15,
                                                color: "#999",
                                                textDecoration: "none",
                                                transition: "color 0.2s",
                                            }}
                                            onMouseEnter={(e) => {
                                                (e.target as HTMLAnchorElement).style.color = "#fff";
                                            }}
                                            onMouseLeave={(e) => {
                                                (e.target as HTMLAnchorElement).style.color = "#999";
                                            }}
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Connect With Us */}
                    <div>
                        <h4
                            style={{
                                fontSize: 18,
                                fontWeight: 600,
                                color: "#fff",
                                marginBottom: 20,
                            }}
                        >
                            Connect With Us
                        </h4>
                        <div style={{ display: "flex", gap: 12 }}>
                            {socialIcons.map((social) => (
                                <a
                                    key={social.name}
                                    href="#"
                                    style={{
                                        width: 44,
                                        height: 44,
                                        borderRadius: 8,
                                        background: "#1A1A1A",
                                        border: "1px solid #262626",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        transition: "background 0.2s",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = "#262626";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = "#1A1A1A";
                                    }}
                                >
                                    {social.svg}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div
                    style={{
                        borderTop: "1px solid #1f1f1f",
                        padding: "24px 0",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 16,
                    }}
                >
                    <p style={{ fontSize: 14, color: "#666" }}>©2023 streamvibe, All Rights Reserved</p>
                    <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
                        <a
                            href="#"
                            style={{ fontSize: 14, color: "#666", textDecoration: "none" }}
                            onMouseEnter={(e) => {
                                (e.target as HTMLAnchorElement).style.color = "#999";
                            }}
                            onMouseLeave={(e) => {
                                (e.target as HTMLAnchorElement).style.color = "#666";
                            }}
                        >
                            Terms of Use
                        </a>
                        <a
                            href="#"
                            style={{ fontSize: 14, color: "#666", textDecoration: "none" }}
                            onMouseEnter={(e) => {
                                (e.target as HTMLAnchorElement).style.color = "#999";
                            }}
                            onMouseLeave={(e) => {
                                (e.target as HTMLAnchorElement).style.color = "#666";
                            }}
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="#"
                            style={{ fontSize: 14, color: "#666", textDecoration: "none" }}
                            onMouseEnter={(e) => {
                                (e.target as HTMLAnchorElement).style.color = "#999";
                            }}
                            onMouseLeave={(e) => {
                                (e.target as HTMLAnchorElement).style.color = "#666";
                            }}
                        >
                            Cookie Policy
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
