import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Atul Morchhlay",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-violet-600/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-cyan-600/10 blur-3xl" />
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
              Privacy Policy
            </h1>
            <p className="text-white/50 text-sm">Last updated: March 2025</p>
          </div>

          <div className="h-px bg-gradient-to-r from-violet-500/30 via-white/10 to-transparent" />

          <Section title="1. Overview">
            This Privacy Policy explains how Atul Morchhlay (&quot;I&quot;, &quot;me&quot;, or &quot;my&quot;) handles information
            when you visit this personal portfolio website. I am committed to protecting your privacy
            and being transparent about the minimal data this site may collect.
          </Section>

          <Section title="2. Information I Collect">
            This portfolio website does not collect any personally identifiable information unless
            you voluntarily contact me. The only data that may be collected includes:
            <ul className="mt-4 space-y-2 list-none">
              <ListItem>Basic analytics data (page views, referral sources) via privacy-friendly tools, if enabled.</ListItem>
              <ListItem>Contact information (name, email, message) only when you choose to reach out via email.</ListItem>
            </ul>
          </Section>

          <Section title="3. How I Use Your Information">
            Any information you provide by contacting me is used solely to respond to your inquiry.
            I do not sell, share, or distribute your personal data to any third parties.
          </Section>

          <Section title="4. Cookies">
            This website may use minimal session cookies required for basic functionality. No
            tracking or advertising cookies are used. See the{" "}
            <Link href="/cookie-policy" className="text-violet-400 hover:text-violet-300 underline underline-offset-2">
              Cookie Policy
            </Link>{" "}
            for more details.
          </Section>

          <Section title="5. Third-Party Links">
            This site contains links to external services (GitHub, LinkedIn, Google Drive, etc.).
            I am not responsible for the privacy practices of those sites and encourage you to review
            their respective privacy policies.
          </Section>

          <Section title="6. Data Retention">
            I do not store any personal data on servers owned by this website. Any email
            correspondence is retained only as long as necessary to fulfill your request.
          </Section>

          <Section title="7. Your Rights">
            You have the right to request deletion of any personal data you have submitted to me.
            To do so, contact me at{" "}
            <a href="mailto:atulmorchhlay204@gmail.com" className="text-violet-400 hover:text-violet-300 underline underline-offset-2">
              atulmorchhlay204@gmail.com
            </a>.
          </Section>

          <Section title="8. Changes to This Policy">
            I may update this policy from time to time. Any changes will be reflected on this page
            with an updated date.
          </Section>

          <Section title="9. Contact">
            For any questions regarding this Privacy Policy, reach out at{" "}
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
