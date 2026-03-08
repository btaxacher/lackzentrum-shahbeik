"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import MagneticButton from "@/components/ui/MagneticButton";
import { EASE_SMOOTH } from "@/lib/utils";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full animate-pulse rounded-lg bg-surface" />
  ),
});

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_SMOOTH },
  },
};

// Set your Spline scene URL here, or leave empty to use the fallback gradient
const SPLINE_SCENE_URL = "";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Spline 3D or Fallback */}
      <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-[55%] lg:block">
        {SPLINE_SCENE_URL ? (
          <Spline scene={SPLINE_SCENE_URL} />
        ) : (
          <div className="relative h-full w-full overflow-hidden">
            {/* Fallback Image instead of gradient */}
            <Image
              src="/images/hero-bg.jpg"
              alt="Luxury auto background"
              fill
              className="object-cover opacity-[0.85]"
              priority
            />
            {/* Radial glow */}
            <div
              className="absolute inset-0 z-10"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 50%, rgba(255,107,0,0.08) 0%, transparent 60%)",
              }}
            />
          </div>
        )}
      </div>

      {/* Orange glow bottom-left (mobile too) */}
      <div
        className="absolute bottom-0 left-0 h-[50%] w-[50%]"
        style={{
          background:
            "radial-gradient(ellipse at 20% 80%, rgba(255,107,0,0.06) 0%, transparent 60%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >
          {/* Eyebrow */}
          <motion.p
            variants={item}
            className="mb-6 font-mono text-xs tracking-[0.2em] text-accent"
          >
            KFZ SMART REPAIR · KÖLN
          </motion.p>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="font-display text-[clamp(4rem,10vw,9rem)] leading-[0.9] tracking-wider"
          >
            <span className="block text-text-primary">PERFEKTION</span>
            <span className="block text-text-primary">IN LACK &</span>
            <span className="block text-accent">KAROSSERIE</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={item}
            className="mt-6 max-w-lg text-base leading-relaxed text-text-secondary sm:text-lg"
          >
            Professionelle Smart Repair Lösungen seit über 15 Jahren.
            Parkschäden, Kratzer, Schrammen — wir beseitigen jeden Makel.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="mt-8 flex flex-wrap gap-4">
            <MagneticButton href="#kontakt" variant="primary">
              KOSTENLOS ANFRAGEN
              <ArrowRight className="h-4 w-4" />
            </MagneticButton>
            <MagneticButton href="#leistungen" variant="outline">
              UNSERE LEISTUNGEN
            </MagneticButton>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="h-6 w-6 text-text-muted" />
      </motion.div>
    </section>
  );
}
