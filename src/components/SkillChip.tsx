"use client";

import { motion } from "motion/react";

interface SkillChipProps {
  name: string;
  category?: "frontend" | "backend" | "cloud" | "mobile" | "database" | "testing";
  delay?: number;
}

export function SkillChip({ name, category = "frontend", delay = 0 }: SkillChipProps) {
  const categoryColors = {
    frontend: "from-cyan-500/20 to-blue-500/20 border-cyan-500/30 text-cyan-300",
    backend: "from-violet-500/20 to-purple-500/20 border-violet-500/30 text-violet-300",
    cloud: "from-orange-500/20 to-amber-500/20 border-orange-500/30 text-orange-300",
    mobile: "from-fuchsia-500/20 to-pink-500/20 border-fuchsia-500/30 text-fuchsia-300",
    database: "from-green-500/20 to-emerald-500/20 border-green-500/30 text-green-300",
    testing: "from-yellow-500/20 to-amber-500/20 border-yellow-500/30 text-yellow-300"
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4 }}
      whileHover={{ scale: 1.05, y: -2 }}
      className={`px-6 py-3 rounded-full bg-gradient-to-r ${categoryColors[category]} border backdrop-blur-xl transition-all cursor-default`}
    >
      {name}
    </motion.div>
  );
}
