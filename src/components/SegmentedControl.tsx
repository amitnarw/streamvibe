"use client";

import React, { useId } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Option = string | { label: React.ReactNode; value: string };

interface SegmentedControlProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
  itemClassName?: string;
  activeItemClassName?: string;
}

export default function SegmentedControl({
  options,
  value,
  onChange,
  className,
  itemClassName,
  activeItemClassName,
}: SegmentedControlProps) {
  const layoutId = useId();
  const normalizedOptions = options.map((opt) =>
    typeof opt === "string" ? { label: opt, value: opt } : opt,
  );

  return (
    <div
      className={cn(
        "bg-dark-background border-4 border-surface-light rounded-xl p-2 flex items-center gap-1 shrink-0",
        className,
      )}
    >
      {normalizedOptions.map((option) => {
        const isActive = value === option.value;
        return (
          <button
            key={option.value}
            onClick={() => onChange(option.value)}
            className={cn(
              "relative px-5 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition-colors duration-200 outline-none cursor-pointer",
              isActive ? "text-white" : "text-gray-400 hover:text-white",
              itemClassName,
              isActive && activeItemClassName,
            )}
            style={{ WebkitTapHighlightColor: "transparent" }}
          >
            {isActive && (
              <motion.div
                layoutId={`active-${layoutId}`}
                className="absolute inset-0 bg-surface rounded-lg"
                initial={false}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                  mass: 1,
                }}
              />
            )}
            <span className="relative z-10">{option.label}</span>
          </button>
        );
      })}
    </div>
  );
}
