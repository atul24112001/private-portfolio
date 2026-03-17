import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left: Brand */}
          <div className="space-y-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Atul Morchhlay
            </div>
            <p className="text-sm text-white/40">
              Full-Stack Engineer • Product Builder
            </p>
          </div>

          {/* Center: Social links */}
          <div className="flex gap-4">
            <SocialLink icon={<Github className="w-5 h-5" />} href="https://github.com/atul24112001" label="GitHub" />
            <SocialLink icon={<Linkedin className="w-5 h-5" />} href="https://www.linkedin.com/in/atul-morchhlay" label="LinkedIn" />
            <SocialLink icon={<Twitter className="w-5 h-5" />} href="https://x.com/MorchhlayAtul" label="Twitter" />
            <SocialLink icon={<Mail className="w-5 h-5" />} href="mailto:atulmorchhlay204@gmail.com" label="Email" />
          </div>

          {/* Right: Copyright */}
          <div className="text-sm text-white/40">
            © {currentYear} All rights reserved
          </div>
        </div>

        {/* Bottom: Additional links */}
        <div className="mt-8 pt-8 border-t border-white/5 flex flex-wrap justify-center gap-6 text-sm text-white/40">
          <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
          <Link href="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link>
        </div>
      </div>

      {/* Background gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
    </footer>
  );
}

function SocialLink({ icon, href, label }: { icon: React.ReactNode; href: string; label: string }) {
  return (
    <a
      href={href}
      aria-label={label}
      target={href.startsWith("mailto") ? undefined : "_blank"}
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
    >
      {icon}
    </a>
  );
}
