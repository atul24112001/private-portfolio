import Link from "next/link";

export const metadata = {
  title: "Cookie Policy | Atul Morchhlay",
};

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-96 h-96 rounded-full bg-cyan-600/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 rounded-full bg-violet-600/10 blur-3xl" />
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
              Cookie Policy
            </h1>
            <p className="text-white/50 text-sm">Last updated: March 2025</p>
          </div>

          <div className="h-px bg-gradient-to-r from-violet-500/30 via-white/10 to-transparent" />

          <Section title="1. What Are Cookies?">
            Cookies are small text files stored on your device when you visit a website. They help
            websites remember your preferences and understand how you interact with their content.
          </Section>

          <Section title="2. How This Site Uses Cookies">
            This portfolio website has minimal cookie usage. It does not use advertising cookies,
            tracking pixels, or any third-party marketing tools. The following types of cookies may
            be present:
            <div className="mt-6 space-y-4">
              <CookieType
                name="Essential Cookies"
                purpose="Required for the website to function correctly. These cannot be disabled."
                examples="Session state, navigation preferences"
                duration="Session"
              />
              <CookieType
                name="Analytics Cookies"
                purpose="Used to understand how visitors interact with the site, in an anonymised and aggregated form."
                examples="Page views, referral source"
                duration="Up to 12 months"
              />
            </div>
          </Section>

          <Section title="3. No Third-Party Advertising Cookies">
            This website does not use cookies from advertising networks, social media platforms, or
            any third-party trackers. Your browsing behaviour on this site is not shared with
            advertisers.
          </Section>

          <Section title="4. Managing Cookies">
            You can control and delete cookies through your browser settings. Note that disabling
            cookies may affect the functionality of some features. Common browser cookie settings:
            <ul className="mt-4 space-y-2 list-none">
              <ListItem>Chrome: Settings → Privacy and Security → Cookies and other site data</ListItem>
              <ListItem>Firefox: Settings → Privacy & Security → Cookies and Site Data</ListItem>
              <ListItem>Safari: Preferences → Privacy → Manage Website Data</ListItem>
              <ListItem>Edge: Settings → Cookies and site permissions</ListItem>
            </ul>
          </Section>

          <Section title="5. Changes to This Policy">
            I may update this Cookie Policy from time to time. Any updates will be reflected on
            this page with a revised date.
          </Section>

          <Section title="6. Contact">
            If you have questions about how this site uses cookies, contact me at{" "}
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

function CookieType({
  name,
  purpose,
  examples,
  duration,
}: {
  name: string;
  purpose: string;
  examples: string;
  duration: string;
}) {
  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 p-5 space-y-3">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-violet-500" />
        <h3 className="font-semibold text-white">{name}</h3>
      </div>
      <p className="text-white/60 text-sm">{purpose}</p>
      <div className="flex flex-wrap gap-4 text-xs text-white/40">
        <span><span className="text-white/60">Examples:</span> {examples}</span>
        <span><span className="text-white/60">Duration:</span> {duration}</span>
      </div>
    </div>
  );
}
