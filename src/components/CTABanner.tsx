"use client";

import React from "react";

export default function CTABanner() {
    return (
        <section className="section-container">
            <div
                style={{
                    position: "relative",
                    borderRadius: 12,
                    overflow: "hidden",
                    padding: "80px 60px",
                    textAlign: "center",
                    background: "linear-gradient(135deg, #1a0000 0%, #0a0a0a 40%, #0a0a0a 60%, #1a0000 100%)",
                    border: "1px solid #262626",
                }}
            >
                {/* Abstract gradient orbs */}
                <div
                    style={{
                        position: "absolute",
                        top: -100,
                        left: -100,
                        width: 400,
                        height: 400,
                        borderRadius: "50%",
                        background: "radial-gradient(circle, rgba(229,0,0,0.12) 0%, transparent 70%)",
                        pointerEvents: "none",
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        bottom: -100,
                        right: -100,
                        width: 400,
                        height: 400,
                        borderRadius: "50%",
                        background: "radial-gradient(circle, rgba(229,0,0,0.12) 0%, transparent 70%)",
                        pointerEvents: "none",
                    }}
                />

                <h2
                    style={{
                        fontSize: 38,
                        fontWeight: 700,
                        color: "#fff",
                        marginBottom: 16,
                        position: "relative",
                        zIndex: 1,
                    }}
                >
                    Start your free trial today!
                </h2>
                <p
                    style={{
                        fontSize: 18,
                        color: "#999",
                        maxWidth: 600,
                        margin: "0 auto 32px",
                        lineHeight: 1.6,
                        position: "relative",
                        zIndex: 1,
                    }}
                >
                    This is a clear and concise call to action that encourages users to sign up for a free
                    trial of StreamVibe.
                </p>
                <button className="btn-primary" style={{ position: "relative", zIndex: 1 }}>
                    Start a Free Trial
                </button>
            </div>
        </section>
    );
}
