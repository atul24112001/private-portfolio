import Link from "next/link";

export const metadata = {
  title: "Terms of Service | Atul Morchhlay",
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-fuchsia-600/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 py-24">
        {/* Back */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors text-sm mb-12"
        >
          ← Back to Home
        </Link>

        <div className="space-y-10">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-widest text-violet-400">Legal</p>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-white via-violet-200 to-cyan-200 bg-clip-text text-transparent">
              Terms of Service
            </h1>
            <p className="text-white/50 text-sm">Last updated: March 2025</p>
          </div>

          <div className="h-px bg-gradient-to-r from-violet-500/30 via-white/10 to-transparent" />

          <Section title="1. Acceptance of Terms">
            By accessing and using this portfolio website, you accept and agree to be bound by these
            Terms of Service. If you do not agree, please refrain from using this site.
          </Section>

          <Section title="2. Use of This Website">
            This website is a personal portfolio intended to showcase the work, skills, and experience
            of Atul Morchhlay. You may browse this site for informational and professional purposes only.
            You agree not to:
            <ul className="mt-4 space-y-2 list-none">
              <ListItem>Use this site for any unlawful purpose.</ListItem>
              <ListItem>Attempt to gain unauthorised access to any part of this site.</ListItem>
              <ListItem>Scrape, reproduce, or distribute content from this site without explicit permission.</ListItem>
              <ListItem>Transmit any harmful, offensive, or disruptive content via contact forms or email.</ListItem>
            </ul>
          </Section>

          <Section title="3. Intellectual Property">
            All content on this website — including text, design, code, and project descriptions — is
            the intellectual property of Atul Morchhlay unless otherwise noted. You may not reproduce
            or redistribute this content without prior written consent.
          </Section>

          <Section title="4. Project Work & Code">
            Open-source projects linked from this site are subject to their individual licenses as
            specified in their respective repositories. Commercial or proprietary work showcased here
            remains the property of the respective clients or organisations.
          </Section>

          <Section title="5. Third-Party Links">
            This site may link to third-party platforms (GitHub, LinkedIn, Google Play, App Store, etc.).
            These links are provided for convenience only. I am not responsible for the content,
            availability, or practices of those external sites.
          </Section>

          <Section title="6. Disclaimer of Warranties">
            This website is provided &quot;as is&quot; without any warranties, express or implied. I do not
            warrant that the site will be uninterrupted, error-free, or free of viruses or other
            harmful components.
          </Section>

          <Section title="7. Limitation of Liability">
            To the fullest extent permitted by law, Atul Morchhlay shall not be liable for any
            direct, indirect, incidental, or consequential damages arising from your use of this website.
          </Section>

          <Section title="8. Changes to Terms">
            I reserve the right to update these Terms at any time. Continued use of the site after
            changes are posted constitutes acceptance of the revised terms.
          </Section>

          <Section title="9. Contact">
            For any questions regarding these Terms, contact me at{" "}
            <a href="mailto:atulmorchhlay204@gmail.com" className="text-violet-400 hover:text-violet-300 underline underline-offset-2">
              atulmorchhlay204@gmail.com
            </a>.
          </Section>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-3">
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      <div className="text-white/60 leading-relaxed">{children}</div>
    </div>
  );
}

function ListItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2 text-white/60">
      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-violet-500 flex-shrink-0" />
      {children}
    </li>
  );
}
