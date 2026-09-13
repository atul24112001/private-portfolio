"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail, Twitter } from "lucide-react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValueEvent,
  type MotionValue,
} from "motion/react";

// Social / contact links (kept in sync with the portfolio Hero)
const LINKS = {
  github: "https://github.com/atul24112001",
  linkedin: "https://www.linkedin.com/in/atul-morchhlay",
  twitter: "https://x.com/MorchhlayAtul",
  email: "mailto:atulmorchhlay204@gmail.com",
};

/* ============================================================================
   ScrollFilm — scroll-driven image-sequence "film" + portfolio reveal
   ----------------------------------------------------------------------------
   As the visitor scrolls this section, all FRAME_COUNT frames are drawn to a
   single sticky <canvas> so the sequence plays like a video in the background
   (the technique Apple uses on product pages). On top of it, a sequence of
   "beats" fades in and out — synced to scroll — teasing the real portfolio:
   who Atul is, what he builds, the numbers, the stack, and selected work.

   Frames live in /public/frames/frame-001.webp … frame-300.webp
   ========================================================================== */

const FRAME_COUNT = 300;
const framePath = (i: number) =>
  `/frames/frame-${String(i + 1).padStart(3, "0")}.webp`;
const clamp01 = (n: number) => (n < 0 ? 0 : n > 1 ? 1 : n);

// How far you scroll through the film (in viewport heights). Higher = slower.
const SCROLL_VH = 560;
// Progress-smoothing spring. Snappier stiffness = tighter to the scrollbar,
// softer = more "video glide". This single spring drives frame AND text.
const SPRING = { stiffness: 190, damping: 34, restDelta: 0.0004 };

export function ScrollFilm() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const drawRef = useRef<(index: number) => void>(() => {});

  const [ready, setReady] = useState(false); // first frame drawn?

  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start start", "end end"],
  });

  // ONE source of truth: a smoothed playhead in [0, 1]. The film frame and
  // every text beat below read from THIS, in Framer's single update pass, so
  // they are always locked together — no rival rAF loop, no drift.
  const progress = useSpring(scrollYProgress, SPRING);

  // Playhead → film frame
  useMotionValueEvent(progress, "change", (p) => {
    const idx = Math.round(clamp01(p) * (FRAME_COUNT - 1));
    drawRef.current(idx);
  });

  const fadeToBlack = useTransform(progress, [0.9, 1], [0, 1]);
  const hintOpacity = useTransform(progress, [0, 0.03], [1, 0]);

  /* ---- Canvas: preload frames + cover-draw (no animation loop) ----------- */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let mounted = true;
    let lastDrawn = -1;
    const imgs: HTMLImageElement[] = new Array(FRAME_COUNT);

    // Draw a frame so it COVERS the canvas (fill + center-crop)
    function draw(index: number) {
      if (!ctx || !canvas || index === lastDrawn) return;
      const img = imgs[index];
      if (!img || !img.complete || !img.naturalWidth) return;
      const cw = canvas.width;
      const ch = canvas.height;
      const ir = img.naturalWidth / img.naturalHeight;
      const cr = cw / ch;
      let dw: number, dh: number, dx: number, dy: number;
      if (cr > ir) {
        dw = cw; dh = cw / ir; dx = 0; dy = (ch - dh) / 2;
      } else {
        dh = ch; dw = ch * ir; dy = 0; dx = (cw - dw) / 2;
      }
      ctx.drawImage(img, dx, dy, dw, dh);
      lastDrawn = index;
    }
    drawRef.current = draw; // let the motion-value handler paint frames

    const frameForNow = () =>
      Math.round(clamp01(progress.get()) * (FRAME_COUNT - 1));

    function resize() {
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(window.innerWidth * dpr);
      canvas.height = Math.round(window.innerHeight * dpr);
      lastDrawn = -1; // force a repaint at the new size
      draw(frameForNow());
    }

    // Preload every frame; paint whichever one we currently need as it decodes
    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.onload = () => {
        if (!mounted) return;
        if (i === 0) setReady(true);
        if (i === frameForNow()) draw(i);
      };
      img.src = framePath(i);
      imgs[i] = img;
    }

    resize();
    window.addEventListener("resize", resize);

    return () => {
      mounted = false;
      drawRef.current = () => {};
      window.removeEventListener("resize", resize);
    };
  }, [progress]);

  return (
    <section ref={wrapRef} className="relative bg-black" style={{ height: `${SCROLL_VH}vh` }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-black">
        {/* The film */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full transition-opacity duration-700"
          style={{ opacity: ready ? 1 : 0 }}
        />

        {/* Cinematic vignette + bottom scrim for text legibility */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_40%,transparent_50%,rgba(0,0,0,0.62))]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/85" />

        {/* Dissolve into the black Hero at the end */}
        <motion.div style={{ opacity: fadeToBlack }} className="pointer-events-none absolute inset-0 bg-black" />

        {/* Scroll progress bar */}
        <motion.div
          style={{ scaleX: progress }}
          className="absolute left-0 top-0 z-20 h-[2px] w-full origin-left bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400"
        />

        {/* Persistent header: wordmark · socials · link to the full portfolio */}
        <header className="absolute inset-x-0 top-0 z-30 flex items-center justify-between px-5 py-4 md:px-10 md:py-6">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/75 drop-shadow-[0_1px_10px_rgba(0,0,0,0.7)]">
            Atul M.
          </span>
          <nav className="flex items-center gap-2 md:gap-3">
            <SocialIcon href={LINKS.github} label="GitHub">
              <Github className="h-4 w-4" />
            </SocialIcon>
            <SocialIcon href={LINKS.linkedin} label="LinkedIn">
              <Linkedin className="h-4 w-4" />
            </SocialIcon>
            <SocialIcon href={LINKS.twitter} label="Twitter / X">
              <Twitter className="h-4 w-4" />
            </SocialIcon>
            <SocialIcon href={LINKS.email} label="Email">
              <Mail className="h-4 w-4" />
            </SocialIcon>
            <Link
              href="/portfolio"
              className="ml-1 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.2em] text-white backdrop-blur-md transition hover:bg-white/20 md:ml-2"
            >
              Portfolio
            </Link>
          </nav>
        </header>

        {/* ============================ BEATS ============================ */}

        {/* 1 · Identity */}
        <Beat progress={progress} band={[0, 0.13]} anchor="bl">
          <Label>Portfolio</Label>
          <h2 className="mt-4 bg-gradient-to-r from-white via-violet-200 to-cyan-200 bg-clip-text text-6xl font-bold leading-[0.92] text-transparent drop-shadow-[0_2px_30px_rgba(0,0,0,0.6)] md:text-8xl">
            Atul
            <br />
            Morchhlay
          </h2>
          <p className="mt-5 text-base tracking-wide text-white/75 md:text-lg">
            Full-Stack Engineer · India
          </p>
        </Beat>

        {/* 2 · What I build */}
        <Beat progress={progress} band={[0.17, 0.31]} anchor="bl">
          <Label>What I build</Label>
          <p className="mt-4 max-w-3xl text-3xl font-semibold leading-[1.1] text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.7)] md:text-5xl">
            Scalable digital products —
            <br />
            from concept to production.
          </p>
        </Beat>

        {/* 3 · The numbers */}
        <Beat progress={progress} band={[0.35, 0.5]} anchor="bl">
          <Label>By the numbers</Label>
          <div className="mt-5 flex flex-wrap gap-x-10 gap-y-5 md:gap-x-16">
            <Stat n="3+" l="Years experience" />
            <Stat n="5+" l="Products shipped" />
            <Stat n="10K+" l="Users impacted" />
            <Stat n="8+" l="Technologies" />
          </div>
        </Beat>

        {/* 4 · Stack */}
        <Beat progress={progress} band={[0.54, 0.68]} anchor="bl">
          <Label>Stack</Label>
          <p className="mt-4 max-w-3xl text-2xl font-medium leading-snug text-white/95 drop-shadow-[0_2px_24px_rgba(0,0,0,0.7)] md:text-4xl">
            React · Node.js · Golang · TypeScript · Next.js · AWS · Docker · Kubernetes
          </p>
        </Beat>

        {/* 5 · Selected work */}
        <Beat progress={progress} band={[0.72, 0.86]} anchor="bl">
          <Label>Selected work</Label>
          <ul className="mt-4 space-y-2 text-xl text-white/90 drop-shadow-[0_2px_24px_rgba(0,0,0,0.7)] md:text-3xl">
            <li>
              <span className="font-semibold text-white">Fixlaa</span>
              <span className="text-white/60"> — web & mobile app, shipped solo</span>
            </li>
            <li>
              <span className="font-semibold text-white">Winners</span>
              <span className="text-white/60"> — site + admin portal, end to end</span>
            </li>
            <li>
              <span className="font-semibold text-white">Mari Arena</span>
              <span className="text-white/60"> — competitive Solana game</span>
            </li>
            <li>
              <span className="font-semibold text-white">Trackpack</span>
              <span className="text-white/60"> — web3 wallet + Telegram bot</span>
            </li>
          </ul>
        </Beat>

        {/* 6 · Close (over the fade to black) */}
        <Beat progress={progress} band={[0.9, 1]} anchor="center">
          <h3 className="bg-gradient-to-r from-white via-violet-200 to-cyan-200 bg-clip-text text-5xl font-bold leading-[0.95] text-transparent md:text-7xl">
            Let&apos;s build
            <br />
            something.
          </h3>
          <p className="mt-6 flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-white/70 md:text-base">
            <span className="h-2 w-2 rounded-full bg-green-400" />
            Available for new opportunities
          </p>
          <Link
            href="/portfolio"
            className="pointer-events-auto mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-medium uppercase tracking-[0.15em] text-black transition hover:bg-white/90"
          >
            Explore full portfolio
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Beat>

        {/* Scroll hint (start) */}
        <motion.div
          style={{ opacity: hintOpacity }}
          className="pointer-events-none absolute inset-x-0 bottom-8 z-10 flex flex-col items-center gap-2 text-white/50"
        >
          <div className="flex h-9 w-5 items-start justify-center rounded-full border border-white/40 p-1.5">
            <motion.div
              animate={{ y: [0, 10, 0], opacity: [0, 1, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              className="h-1.5 w-1 rounded-full bg-white/70"
            />
          </div>
          <span className="text-[10px] uppercase tracking-[0.35em]">Scroll</span>
        </motion.div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------------------
   Beat — a block of overlay content that fades in/out over a scroll band.
   band = [start, end] in scroll progress (0..1). If start is 0 it is shown
   immediately (title card); if end is 1 it stays until the very end.
   -------------------------------------------------------------------------- */
function Beat({
  progress,
  band,
  anchor = "bl",
  children,
}: {
  progress: MotionValue<number>;
  band: [number, number];
  anchor?: "bl" | "center";
  children: React.ReactNode;
}) {
  const [start, end] = band;
  const span = end - start;
  const inAt = start + span * 0.2;
  const outAt = end - span * 0.2;
  const vIn = start <= 0.001 ? 1 : 0; // full immediately if it's the first beat
  const vOut = end >= 0.999 ? 1 : 0; // hold to the end if it's the last beat

  const opacity = useTransform(progress, [start, inAt, outAt, end], [vIn, 1, 1, vOut]);
  const y = useTransform(progress, [start, end], [vIn === 1 ? 0 : 28, vOut === 1 ? 0 : -28]);

  const anchorCls =
    anchor === "center"
      ? "items-center justify-center text-center"
      : "items-start justify-end pb-24 text-left md:pb-28";

  return (
    <motion.div
      style={{ opacity, y }}
      className={`pointer-events-none absolute inset-0 z-10 flex flex-col px-8 md:px-20 ${anchorCls}`}
    >
      {children}
    </motion.div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-violet-300/90">
      <span className="h-px w-10 bg-gradient-to-r from-transparent to-violet-400" />
      {children}
    </span>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div className="drop-shadow-[0_2px_24px_rgba(0,0,0,0.7)]">
      <div className="bg-gradient-to-r from-violet-300 to-cyan-300 bg-clip-text text-4xl font-bold text-transparent md:text-6xl">
        {n}
      </div>
      <div className="mt-1 text-xs uppercase tracking-widest text-white/60 md:text-sm">
        {l}
      </div>
    </div>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  const external = !href.startsWith("mailto");
  return (
    <a
      href={href}
      aria-label={label}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 backdrop-blur-md transition hover:bg-white/15 hover:text-white"
    >
      {children}
    </a>
  );
}
