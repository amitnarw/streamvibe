"use client";

import React from "react";
import { Button } from "@/components/ui/button";

export default function CTABanner() {
  return (
    <section className="section-container">
      <div
        className="relative rounded-xl overflow-hidden border border-border"
        style={{
          background:
            "linear-gradient(135deg, #1a0000 0%, #0a0a0a 40%, #0a0a0a 60%, #1a0000 100%)",
        }}
      >
        <img
          src="/bottom_cta.webp"
          alt="bottom-cta-image"
          className="absolute inset-0 z-0"
        ></img>

        <div className="absolute inset-0 z-10 bg-linear-to-r from-background via-background/95 to-primary/40"></div>

        <div className="relative z-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 py-20 px-8 md:px-14">
          <div className="flex-1">
            <h2 className="text-[clamp(1.5rem,3.5vw,2.25rem)] font-bold text-white mb-3">
              Start your free trial today!
            </h2>
            <p className="text-sm text-text-secondary leading-relaxed">
              This is a clear and concise call to action that encourages users
              to sign up for a free trial of StreamVibe.
            </p>
          </div>
          <Button className="bg-primary hover:bg-primary-hover text-white shrink-0 px-6 shadow-2xl">
            Start a Free Trial
          </Button>
        </div>
      </div>
    </section>
  );
}
