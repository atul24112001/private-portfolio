"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  glow?: boolean;
}

export function GlassCard({ children, className = "", delay = 0, glow = false }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      className={`relative rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10 p-8 hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300 ${className} ${
        glow ? "shadow-xl shadow-violet-500/10" : ""
      }`}
    >
      {glow && (
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-violet-500/5 via-transparent to-cyan-500/5 pointer-events-none" />
      )}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
