"use client";

import React, { useState } from "react";

const devices = [
    {
        name: "Smartphones",
        description:
            "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store.",
        icon: (
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                <line x1="12" y1="18" x2="12.01" y2="18" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        name: "Tablet",
        description:
            "StreamVibe is optimized for both Android and iOS tablets. Download our app from the Google Play Store or the Apple App Store.",
        icon: (
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary">
                <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
                <line x1="12" y1="18" x2="12.01" y2="18" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        name: "Smart TV",
        description:
            "StreamVibe is optimized for Smart TVs. Download our app from the Google Play Store or the Apple App Store.",
        icon: (
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" strokeLinecap="round" />
                <line x1="12" y1="17" x2="12" y2="21" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        name: "Laptops",
        description:
            "StreamVibe is optimized for both Windows and macOS laptops. Download our app from the Google Play Store or the Apple App Store.",
        icon: (
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary">
                <path d="M20 16V4a2 2 0 00-2-2H6a2 2 0 00-2 2v12" />
                <rect x="1" y="16" width="22" height="4" rx="1" />
            </svg>
        ),
    },
    {
        name: "Gaming Consoles",
        description:
            "StreamVibe is optimized for gaming consoles. Download our app from the Google Play Store or the Apple App Store.",
        icon: (
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary">
                <line x1="6" y1="11" x2="10" y2="11" strokeLinecap="round" />
                <line x1="8" y1="9" x2="8" y2="13" strokeLinecap="round" />
                <line x1="15" y1="12" x2="15.01" y2="12" strokeLinecap="round" />
                <line x1="18" y1="10" x2="18.01" y2="10" strokeLinecap="round" />
                <path d="M17.32 5H6.68a4 4 0 00-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 003 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 019.828 16h4.344a2 2 0 011.414.586L17 18c.5.5 1 1 2 1a3 3 0 003-3c0-1.544-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0017.32 5z" />
            </svg>
        ),
    },
    {
        name: "VR Headsets",
        description:
            "StreamVibe is optimized for VR headsets. Download our app from the Google Play Store or the Apple App Store.",
        icon: (
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary">
                <path d="M2 10a4 4 0 014-4h12a4 4 0 014 4v2a4 4 0 01-4 4h-2.5l-1.5 2-1.5-2H8a4 4 0 01-4-4v-2z" />
                <circle cx="9" cy="11" r="2" />
                <circle cx="15" cy="11" r="2" />
            </svg>
        ),
    },
];

export default function Devices() {
    return (
        <section className="section-container">
            {/* Header */}
            <div className="mb-12">
                <h2 className="section-heading mb-3">
                    We Provide you streaming experience across various devices.
                </h2>
                <p className="section-description">
                    With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our
                    platform is designed to be compatible with a wide range of devices, ensuring that you never
                    miss a moment of entertainment.
                </p>
            </div>

            {/* Device cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {devices.map((device) => {
                    const [isHovered, setIsHovered] = useState(false);

                    return (
                        <div
                            key={device.name}
                            className={`rounded-xl p-10 transition-all duration-200 cursor-default ${
                                isHovered ? "border-border-light -translate-y-0.5" : "border-border"
                            }`}
                            style={{
                                background: "linear-gradient(145deg, #1A1A1A 0%, #141414 100%)",
                                border: "1px solid #262626",
                            }}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <div className="w-[56px] h-[56px] rounded-xl border border-border flex items-center justify-center mb-5" style={{
                                background: "linear-gradient(145deg, #1f1f1f, #141414)"
                            }}>
                                {device.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-text-primary mb-2">
                                {device.name}
                            </h3>
                            <p className="text-base text-text-secondary leading-[1.6]">{device.description}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
