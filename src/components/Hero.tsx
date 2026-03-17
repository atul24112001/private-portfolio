"use client";

import { motion } from "motion/react";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Twitter,
} from "lucide-react";
import { Button } from "./Button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-20">
      {/* Animated background gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-1/2 -left-1/4 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-violet-600/20 to-fuchsia-600/20 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-1/2 -right-1/4 w-[900px] h-[900px] rounded-full bg-gradient-to-r from-cyan-600/20 to-blue-600/20 blur-3xl"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0),rgba(0,0,0,1))]" />

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3 text-violet-400">
                <div className="h-px w-12 bg-gradient-to-r from-violet-500 to-transparent" />
                <span className="tracking-widest uppercase text-sm">
                  Full-Stack Engineer
                </span>
              </div>

              <h1 className="text-7xl lg:text-8xl font-bold bg-gradient-to-r from-white via-violet-200 to-cyan-200 bg-clip-text text-transparent leading-tight">
                Atul
                <br />
                Morchhlay
              </h1>

              <p className="text-xl text-white/60 max-w-xl leading-relaxed">
                Building scalable digital products at the intersection of
                engineering excellence and user-centric design. From concept to
                production.
              </p>

              <div className="flex items-center gap-2 text-white/50">
                <MapPin className="w-4 h-4" />
                <span>India</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                variant="primary"
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View Projects <ArrowRight className="w-5 h-5 ml-2 inline" />
              </Button>
              <Button
                variant="secondary"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Work With Me
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex gap-4"
            >
              <SocialLink
                icon={<Github className="w-5 h-5" />}
                href="https://github.com/atul24112001"
              />
              <SocialLink
                icon={<Linkedin className="w-5 h-5" />}
                href="https://www.linkedin.com/in/atul-morchhlay"
              />
              <SocialLink
                icon={<Twitter className="w-5 h-5" />}
                href="https://x.com/MorchhlayAtul"
              />
              <SocialLink
                icon={<Mail className="w-5 h-5" />}
                href="mailto:atulmorchhlay204@gmail.com"
              />
            </motion.div>
          </div>

          {/* Right: Futuristic profile card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="relative"
          >
            <div className="relative rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 p-8 shadow-2xl">
              {/* Holographic accent */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-600 rounded-3xl opacity-20 blur-xl" />

              <div className="relative space-y-6">
                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-4">
                  <StatCard value="3+" label="Years Experience" />
                  <StatCard value="5+" label="Products Shipped" />
                  <StatCard value="10K+" label="Users Impacted" />
                  <StatCard value="8+" label="Technologies" />
                </div>

                {/* Status indicator */}
                <div className="flex items-center gap-3 pt-6 border-t border-white/10">
                  <div className="relative">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                    <div className="absolute inset-0 w-3 h-3 rounded-full bg-green-500 animate-ping" />
                  </div>
                  <span className="text-white/70">
                    Available for new opportunities
                  </span>
                </div>
              </div>
            </div>

            {/* Floating orbs */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 opacity-30 blur-3xl"
            />
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -left-8 w-40 h-40 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 opacity-30 blur-3xl"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-white/50"
          />
        </div>
      </motion.div>
    </section>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
      <div className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
        {value}
      </div>
      <div className="text-sm text-white/50 mt-1">{label}</div>
    </div>
  );
}

function SocialLink({ icon, href }: { icon: React.ReactNode; href: string }) {
  return (
    <motion.a
      href={href}
      target={href.startsWith("mailto") ? undefined : "_blank"}
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1, y: -2 }}
      className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
    >
      {icon}
    </motion.a>
  );
}
