"use client";

import { motion } from "motion/react";
import { GlassCard } from "./GlassCard";
import { Calendar, ExternalLink, MapPin } from "lucide-react";
import { WE } from "@/lib/data";

const colors = [
  "from-violet-500 to-fuchsia-500",
  "from-cyan-500 to-blue-500",
  "from-emerald-500 to-teal-500",
];

export function Experience() {
  const experiences = WE.map((item, i) => ({
    company: item.companyName,
    role: item.designation,
    period: item.date,
    location: item.location,
    companyLink: item.companyLink,
    stack: item.skills,
    color: colors[i % colors.length],
  }));

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
            Experience
          </h2>
          <p className="text-xl text-white/50 max-w-2xl mx-auto">
            Building products that matter at fast-paced startups
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <GlassCard key={index} delay={index * 0.2} glow>
              <div className="space-y-6">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <a
                        href={exp.companyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 group/link"
                      >
                        <h3 className="text-3xl font-bold text-white group-hover/link:text-violet-300 transition-colors">
                          {exp.company}
                        </h3>
                        <ExternalLink className="w-5 h-5 text-white/30 group-hover/link:text-violet-400 transition-colors" />
                      </a>
                      <div className={`h-2 w-2 rounded-full bg-gradient-to-r ${exp.color}`} />
                    </div>
                    <p className="text-xl text-violet-400">{exp.role}</p>
                  </div>

                  <div className="flex flex-col gap-2 text-white/50">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Tech stack */}
                <div className="pt-6 border-t border-white/10">
                  <div className="text-sm text-white/40 mb-3">TECH STACK</div>
                  <div className="flex flex-wrap gap-2">
                    {exp.stack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-lg bg-gradient-to-r from-white/10 to-white/5 border border-white/10 text-sm text-white/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Timeline connector */}
        <div className="absolute left-0 top-1/4 h-1/2 w-px bg-gradient-to-b from-transparent via-violet-500/30 to-transparent hidden lg:block" />
      </div>
    </section>
  );
}
