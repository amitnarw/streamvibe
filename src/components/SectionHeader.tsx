"use client";

import React from "react";
import { motion } from "framer-motion";
interface SectionHeaderProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

export default function SectionHeader({
  title,
  description,
  children,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col md:flex-row md:items-end justify-between mb-10 lg:mb-12 gap-6"
    >
      <div className="flex flex-col gap-3 lg:gap-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight tracking-wide">
          {title}
        </h2>
        <p className="text-sm text-text-secondary leading-relaxed max-w-4xl">
          {description}
        </p>
      </div>
      {children && <div className="flex items-center gap-3">{children}</div>}
    </motion.div>
  );
}
