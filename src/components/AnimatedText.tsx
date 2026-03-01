"use client";

import { motion, AnimatePresence } from "framer-motion";

interface AnimatedTextProps {
  text: string | React.ReactNode;
  activeKey: string;
  delay?: number;
  className?: string;
  yOffset?: number;
}

export default function AnimatedText({
  text,
  activeKey,
  delay = 0,
  className = "inline-block",
  yOffset = 20,
}: AnimatedTextProps) {
  return (
    <AnimatePresence mode="popLayout" initial={false}>
      <motion.span
        key={activeKey}
        initial={{ y: yOffset, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -yOffset, opacity: 0 }}
        transition={{ duration: 0.25, type: "spring", bounce: 0, delay }}
        className={className}
      >
        {text}
      </motion.span>
    </AnimatePresence>
  );
}
