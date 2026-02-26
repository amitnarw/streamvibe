"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import LogoBig from "./LogoBig";
import { FaPlay } from "react-icons/fa6";

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative overflow-hidden pt-24 h-screen min-h-240 flex flex-col">
      {/* Movie poster grid background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.webp"
          alt="Movie poster grid"
          fill
          className="object-contain object-top"
          priority
        />
      </div>

      {/* Gradient overlays for depth — aggressive bottom fade + side vignettes */}
      <div className="absolute inset-0 bg-linear-to-b from-background/80 via-background/0 to-background h-screen pointer-events-none z-10" />
      <div className="absolute inset-0 bg-linear-to-t from-background via-background/80 via-30% to-transparent pointer-events-none z-10" />

      {/* Central big icon */}
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 opacity-70 pointer-events-none drop-shadow-2xl scale-75 md:scale-95 lg:scale-125">
        <LogoBig />
      </div>

      {/* Text content pinned to bottom */}
      <div className="absolute bottom-0 left-0 right-0 text-center px-6 md:px-8 pb-12 md:pb-20 z-30 flex flex-col items-center gap-4">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-3 md:mb-5 leading-tight tracking-tight">
          The Best Streaming Experience
        </h1>
        <p className="text-sm text-text-secondary leading-relaxed max-w-5xl mx-auto mb-8 md:mb-10">
          StreamVibe is the best streaming experience for watching your favorite
          movies and shows on demand, anytime, anywhere. With StreamVibe, you
          can enjoy a wide variety of content, including the latest
          blockbusters, classic movies, popular TV shows, and more. You can also
          create your own watchlists, so you can easily find the content you
          want to watch.
        </p>
        <Button
          size="xl"
          className="bg-primary hover:bg-primary-hover text-white !text-sm font-semibold md:text-lg px-6 md:px-8 py-4 rounded-lg !mt-5"
        >
          <FaPlay />
          Start Watching Now
        </Button>
      </div>
    </section>
  );
}
