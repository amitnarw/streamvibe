"use client";

import React from "react";

export default function CTABanner() {
    return (
        <section className="section-container">
            <div className="relative rounded-xl overflow-hidden py-[80px] px-[60px] text-center border border-border" style={{
                background: "linear-gradient(135deg, #1a0000 0%, #0a0a0a 40%, #0a0a0a 60%, #1a0000 100%)"
            }}>
                {/* Abstract gradient orbs */}
                <div className="absolute -top-[100px] -left-[100px] w-[400px] h-[400px] rounded-full" style={{
                    background: "radial-gradient(circle, rgba(229,0,0,0.12) 0%, transparent 70%)"
                }} />
                <div className="absolute -bottom-[100px] -right-[100px] w-[400px] h-[400px] rounded-full" style={{
                    background: "radial-gradient(circle, rgba(229,0,0,0.12) 0%, transparent 70%)"
                }} />

                <h2 className="text-[38px] font-bold text-text-primary mb-4 relative z-10">
                    Start your free trial today!
                </h2>
                <p className="text-lg text-text-secondary max-w-[600px] mx-auto mb-8 leading-[1.6] relative z-10">
                    This is a clear and concise call to action that encourages users to sign up for a free
                    trial of StreamVibe.
                </p>
                <button className="btn-primary relative z-10">
                    Start a Free Trial
                </button>
            </div>
        </section>
    );
}
