"use client";

import { motion } from "motion/react";
import { Mail, MessageSquare, Calendar, ArrowRight } from "lucide-react";
import { Button } from "./Button";

export function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-6">
            <h2 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-white via-violet-200 to-cyan-200 bg-clip-text text-transparent leading-tight">
              Let&apos;s Build Something<br />Extraordinary
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              Open to full-time opportunities, consulting projects, and collaborations with ambitious teams building the future.
            </p>
          </div>

          {/* CTA cards */}
          <div className="grid md:grid-cols-3 gap-4 mt-12">
            <ContactCard
              icon={<Mail className="w-6 h-6" />}
              title="Email Me"
              description="For opportunities and inquiries"
              gradient="from-violet-500 to-fuchsia-500"
              href="mailto:atulmorchhlay204@gmail.com"
            />
            <ContactCard
              icon={<MessageSquare className="w-6 h-6" />}
              title="Let's Chat"
              description="Quick questions or coffee chat"
              gradient="from-cyan-500 to-blue-500"
              href="https://www.linkedin.com/in/atul-morchhlay"
            />
            <ContactCard
              icon={<Calendar className="w-6 h-6" />}
              title="Schedule Call"
              description="Book a time to discuss projects"
              gradient="from-pink-500 to-rose-500"
              href="mailto:atulmorchhlay204@gmail.com?subject=Schedule%20a%20Call"
            />
          </div>

          {/* Primary CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
          >
            <Button
              variant="primary"
              onClick={() => window.location.href = "mailto:atulmorchhlay204@gmail.com"}
            >
              Get In Touch <ArrowRight className="w-5 h-5 ml-2 inline" />
            </Button>
            <Button
              variant="secondary"
              onClick={() => window.open("https://drive.google.com/file/d/1rRX3mMiQxgsl-e1maGSVPfMkVP_niTsj/view", "_blank")}
            >
              Download Resume
            </Button>
          </motion.div>

          {/* Availability badge */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 mt-8"
          >
            <div className="relative">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
              <div className="absolute inset-0 w-3 h-3 rounded-full bg-green-500 animate-ping" />
            </div>
            <span className="text-white/70">Available for new opportunities</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function ContactCard({
  icon,
  title,
  description,
  gradient,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
  href: string;
}) {
  return (
    <motion.a
      href={href}
      target={href.startsWith("mailto") ? undefined : "_blank"}
      rel="noopener noreferrer"
      whileHover={{ y: -4 }}
      className="group relative rounded-2xl bg-white/5 backdrop-blur-2xl border border-white/10 hover:border-white/20 p-6 cursor-pointer transition-all duration-300 flex flex-col items-center text-center"
    >
      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${gradient} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
        {icon}
      </div>
      <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
      <p className="text-sm text-white/60">{description}</p>

      {/* Hover glow */}
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none`} />
    </motion.a>
  );
}
