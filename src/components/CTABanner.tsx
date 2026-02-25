"use client";

import React from "react";
import { Button } from "@/components/ui/button";

export default function CTABanner() {
    return (
        <section className="section-container">
            <div className="relative rounded-2xl overflow-hidden py-16 px-8 md:py-20 md:px-16 text-center border border-border" style={{
                background: "linear-gradient(135deg, #1a0000 0%, #0a0a0a 40%, #0a0a0a 60%, #1a0000 100%)"
            }}>
                {/* Abstract gradient orbs */}
                <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full" style={{
                    background: "radial-gradient(circle, rgba(229,0,0,0.15) 0%, transparent 70%)"
                }} />
                <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full" style={{
                    background: "radial-gradient(circle, rgba(229,0,0,0.15) 0%, transparent 70%)"
                }} />

                <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold text-text-primary mb-4 relative z-10">
                    Start your free trial today!
                </h2>
                <p className="text-lg text-text-secondary max-w-xl mx-auto mb-8 leading-relaxed relative z-10">
                    This is a clear and concise call to action that encourages users to sign up for a free
                    trial of StreamVibe.
                </p>
                <Button size="xl" className="relative z-10 bg-gradient-to-r from-[#E50000] to-[#B40000] hover:from-[#CC0000] hover:to-[#990000]">
                    Start a Free Trial
                </Button>
            </div>
        </section>
    );
}
