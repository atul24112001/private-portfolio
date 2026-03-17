"use client";

import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { FREELANCE } from "@/lib/data";

const gradients = ["from-pink-500 to-rose-500", "from-cyan-500 to-blue-500"];

export function Freelance() {
  const projects = FREELANCE.map((item, i) => ({
    client: item.label,
    link: item.link,
    date: item.date,
    skills: item.skills,
    gradient: gradients[i % gradients.length],
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
            Selected Client Work
          </h2>
          <p className="text-xl text-white/50 max-w-2xl mx-auto">
            Trusted by ambitious founders to build their digital products
          </p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10 hover:border-white/20 overflow-hidden transition-all duration-300"
            >
              {/* Gradient accent bar */}
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />

              <div className="p-8 md:p-12">
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 group/link"
                    >
                      <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent group-hover/link:from-violet-300 group-hover/link:to-cyan-300 transition-all">
                        {project.client}
                      </h3>
                      <ExternalLink className="w-5 h-5 text-white/30 group-hover/link:text-violet-400 transition-colors" />
                    </a>
                    <div className="text-sm text-white/40">{project.date}</div>
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-lg bg-gradient-to-r from-white/10 to-white/5 border border-white/10 text-sm text-white/70"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Status */}
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-white/60 text-sm">Live</span>
                  </div>
                </div>
              </div>

              {/* Hover glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
