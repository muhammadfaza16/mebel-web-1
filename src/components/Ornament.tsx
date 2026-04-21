"use client";

import { motion } from "framer-motion";

interface DotProps {
  className?: string;
  color?: string;
}

/**
 * A reusable architectural dot ornament with a 'breathing' animation.
 * Used for section labels, badges, and separators to create an 'alive' feel.
 */
export function Dot({ className = "w-1 h-1 bg-brand-terracotta", color }: DotProps) {
  return (
    <motion.span
      className={`rounded-full inline-block ${className}`}
      style={color ? { backgroundColor: color } : {}}
      animate={{
        opacity: [0.4, 1, 0.4],
        scale: [1, 1.25, 1],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}
