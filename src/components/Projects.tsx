"use client";

import { motion } from "motion/react";
import { ExternalLink, Github, Smartphone } from "lucide-react";
import { PROJECTS } from "@/lib/data";

type Project = (typeof PROJECTS)[number] & { image: string };

const gradients = [
  "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
  "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
  "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
  "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
];

export function Projects() {
  const projects = PROJECTS.map((p, i) => ({
    ...p,
    image: gradients[i % gradients.length],
  }));

  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-white/50 max-w-2xl mx-auto">
            Product-focused engineering across web, mobile, and cloud platforms
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -8 }}
      className="group relative rounded-3xl overflow-hidden bg-white/5 backdrop-blur-2xl border border-white/10 hover:border-white/20 transition-all duration-300"
    >
      {/* Project thumbnail gradient */}
      <div
        className="h-48 relative overflow-hidden"
        style={{ background: project.image }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute top-4 right-4 flex gap-2">
          {project.link && (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
            >
              <ExternalLink className="w-5 h-5" />
            </motion.a>
          )}
          {(project.ios || project.android) && (
            <motion.a
              href={project.android || project.ios}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
            >
              <Smartphone className="w-5 h-5" />
            </motion.a>
          )}
          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
            >
              <Github className="w-5 h-5" />
            </motion.a>
          )}
        </div>
      </div>

      <div className="p-6 space-y-4">
        {/* Title */}
        <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-violet-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-white/60 leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="pt-4 border-t border-white/10">
          <div className="flex flex-wrap gap-2">
            {project.skills.map((skill: string, i: number) => (
              <span
                key={i}
                className="px-2 py-1 rounded-lg bg-gradient-to-r from-violet-500/10 to-cyan-500/10 border border-violet-500/20 text-xs text-violet-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/0 via-transparent to-cyan-500/0 group-hover:from-violet-500/5 group-hover:to-cyan-500/5 transition-all duration-300 pointer-events-none" />
    </motion.div>
  );
}
