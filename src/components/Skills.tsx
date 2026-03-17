"use client";

import { motion } from "motion/react";
import { SkillChip } from "./SkillChip";
import { SKILLS } from "@/lib/data";

export function Skills() {
  const skillGroups = {
    frontend: SKILLS.filter(s => ["ReactJs", "NextJs", "Typescript"].includes(s)),
    backend: SKILLS.filter(s => ["NodeJs", "Golang", "CI/CD"].includes(s)),
    cloud: SKILLS.filter(s => ["AWS", "Devops", "Docker", "Kubernetes"].includes(s)),
    mobile: SKILLS.filter(s => ["Dart/Flutter", "React Native", "Android", "iOS"].includes(s)),
    database: SKILLS.filter(s => ["SQL/NoSQL", "Redis"].includes(s)),
    testing: SKILLS.filter(s => ["Cypress", "Jest"].includes(s)),
  };

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-violet-600/10 to-cyan-600/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent mb-6">
            Tech Ecosystem
          </h2>
          <p className="text-xl text-white/50 max-w-2xl mx-auto">
            A versatile toolkit for building modern, scalable applications across the full stack
          </p>
        </motion.div>

        {/* Constellation layout */}
        <div className="space-y-16">
          {Object.entries(skillGroups).map(([category, skills], groupIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, x: groupIndex % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: groupIndex * 0.1, duration: 0.6 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-4">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <h3 className="text-sm uppercase tracking-widest text-white/40">
                  {category}
                </h3>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </div>

              <div className="flex flex-wrap justify-center gap-3">
                {skills.map((skill, index) => (
                  <SkillChip
                    key={skill}
                    name={skill}
                    category={category as "frontend" | "backend" | "cloud" | "mobile" | "database" | "testing"}
                    delay={groupIndex * 0.1 + index * 0.05}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Orbital rings decoration */}
        <div className="relative mt-20 h-64 flex items-center justify-center">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ rotate: 360 }}
              transition={{
                duration: 20 + i * 10,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute"
              style={{
                width: `${200 + i * 80}px`,
                height: `${200 + i * 80}px`,
              }}
            >
              <div className="w-full h-full rounded-full border border-white/5" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-violet-500 shadow-lg shadow-violet-500/50" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
