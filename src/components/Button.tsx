"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  onClick?: () => void;
  className?: string;
}

export function Button({ children, variant = "primary", onClick, className = "" }: ButtonProps) {
  const baseStyles = "relative px-8 py-4 rounded-2xl overflow-hidden transition-all duration-300";

  const variants = {
    primary: "bg-gradient-to-r from-violet-600 via-fuchsia-600 to-purple-600 text-white shadow-lg shadow-violet-500/50 hover:shadow-xl hover:shadow-violet-500/60",
    secondary: "bg-white/5 backdrop-blur-xl border border-white/10 text-white hover:bg-white/10 hover:border-white/20",
    ghost: "text-white/70 hover:text-white hover:bg-white/5"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      <span className="relative z-10">{children}</span>
      {variant === "primary" && (
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-violet-600 opacity-0 hover:opacity-20 transition-opacity" />
      )}
    </motion.button>
  );
}
