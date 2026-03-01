"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";

export default function CTABanner() {
  return (
    <section className="section-container">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 40 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative rounded-xl overflow-hidden border border-border/50"
      >
        <Image
          src="/bottom_cta.webp"
          alt="bottom-cta-image"
          fill
          className="absolute inset-0 z-0 object-cover"
          quality={100}
          sizes="(max-width: 768px) 100vw, 100vw"
        />

        <div className="absolute inset-0 z-10 bg-primary/50"></div>
        <div className="absolute inset-0 z-10 bg-linear-to-b sm:bg-linear-to-r from-dark-background via-dark-background/90 to-dark-background/50"></div>

        <div className="relative z-20 flex flex-col md:flex-row items-center justify-between gap-6 py-10 sm:py-20 px-8 md:px-14">
          <div className="flex-1 space-y-3!">
            <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight tracking-wide text-center sm:text-start">
              Start your free trial today!
            </h2>
            <p className="text-sm text-text-secondary leading-relaxed text-center sm:text-start">
              This is a clear and concise call to action that encourages users
              to sign up for a free trial of StreamVibe.
            </p>
          </div>
          <Button className="bg-primary hover:bg-primary-hover text-white shrink-0 px-6 shadow-2xl">
            Start a Free Trial
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
