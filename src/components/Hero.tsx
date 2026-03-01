"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import LogoBig from "./LogoBig";
import { FaPlay } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative">
      <section className="relative overflow-hidden pt-24 h-screen min-h-140 flex flex-col">
        {/* Movie poster grid background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero.webp"
            alt="Movie poster grid"
            fill
            className="object-cover object-top"
            priority
            quality={100}
            sizes="(max-width: 768px) 100vw, 100vw"
          />
        </div>

        {/* Gradient overlays for depth — aggressive bottom fade + side vignettes */}
        <div className="absolute inset-0 bg-linear-to-b from-background/80 via-background/0 to-background h-screen pointer-events-none z-10" />
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/80 via-30% to-transparent pointer-events-none z-10" />

        {/* Central big icon */}
        <div className="absolute top-6/12 sm:top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none drop-shadow-2xl scale-75 md:scale-95 lg:scale-125">
          <motion.div
            initial={{ opacity: 0, filter: "blur(20px)" }}
            animate={{ opacity: 0.7, filter: "blur(0px)" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <LogoBig />
          </motion.div>
        </div>
      </section>

      {/* Text content */}
      <div className="absolute top-10/12 sm:top-160 left-1/2 -translate-x-1/2 text-center px-3 md:px-8 pb-12 md:pb-20 z-30 flex flex-col items-center w-full">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="flex flex-col items-center w-full gap-4"
        >
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: "easeOut" },
              },
            }}
            className="text-3xl md:text-5xl font-bold text-white mb-3 md:mb-5 leading-tight tracking-tight"
          >
            The Best Streaming Experience
          </motion.h1>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: "easeOut" },
              },
            }}
            className="hidden md:block text-sm text-text-secondary leading-relaxed max-w-5xl mx-auto mb-8 md:mb-10"
          >
            StreamVibe is the best streaming experience for watching your
            favorite movies and shows on demand, anytime, anywhere. With
            StreamVibe, you can enjoy a wide variety of content, including the
            latest blockbusters, classic movies, popular TV shows, and more. You
            can also create your own watchlists, so you can easily find the
            content you want to watch.
          </motion.p>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: "easeOut" },
              },
            }}
            className="block md:hidden text-sm text-text-secondary leading-relaxed max-w-5xl mx-auto mb-8 md:mb-10"
          >
            StreamVibe is the best streaming experience for watching your
            favorite movies and shows on demand, anytime, anywhere.
          </motion.p>
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
          >
            <Button
              size="xl"
              className="bg-primary hover:bg-primary-hover text-white text-sm! font-semibold md:text-lg px-6 md:px-8 py-4 rounded-lg mt-5!"
            >
              <FaPlay />
              Start Watching Now
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
