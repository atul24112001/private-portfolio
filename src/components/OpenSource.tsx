"use client";

import { motion } from "motion/react";
import { GlassCard } from "./GlassCard";
import { GitPullRequest, Plus, Minus } from "lucide-react";
import { PRs } from "@/lib/data";

export function OpenSource() {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent mb-6">
            Open Source
          </h2>
          <p className="text-xl text-white/50 max-w-2xl mx-auto">
            Contributing to the developer ecosystem and building in public
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {PRs.map((pr, index) => (
            <GlassCard key={index} delay={index * 0.2} glow>
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <GitPullRequest className="w-6 h-6 text-violet-400 flex-shrink-0" />
                  <a
                    href={pr.link.trim()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-bold text-white hover:text-violet-300 transition-colors font-mono"
                  >
                    {pr.title}
                  </a>
                </div>

                <div className="flex gap-6 pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2 text-green-400 font-mono text-sm">
                    <Plus className="w-4 h-4" />
                    {pr.addition}
                  </div>
                  <div className="flex items-center gap-2 text-red-400 font-mono text-sm">
                    <Minus className="w-4 h-4" />
                    {pr.subtraction}
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
