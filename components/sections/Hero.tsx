"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mouse } from "lucide-react";
import Image from "next/image";
import MagneticButton from "@/components/ui/MagneticButton";
import { EASE_SMOOTH } from "@/lib/utils";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE_SMOOTH },
  },
};

// Floating particles configuration
const PARTICLES = [
  { top: "20%", left: "65%", size: 4, delay: 0 },
  { top: "35%", right: "15%", size: 3, delay: 1.5 },
  { top: "60%", left: "75%", size: 5, delay: 3 },
  { top: "75%", right: "25%", size: 3, delay: 2 },
  { top: "45%", left: "85%", size: 4, delay: 4 },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Fullscreen Background Image with Ken Burns */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 animate-ken-burns">
          <Image
            src="/images/hero-bg.jpg"
            alt="Luxury automotive background"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        {/* Dark overlay — stronger on the left for text readability */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.82) 35%, rgba(10,10,10,0.5) 65%, rgba(10,10,10,0.35) 100%)",
          }}
        />
        {/* Subtle warm accent glow */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 70% 60%, rgba(255,107,0,0.06) 0%, transparent 55%)",
          }}
        />
      </div>

      {/* Floating particles */}
      {PARTICLES.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-accent/20"
          style={{
            top: p.top,
            left: p.left,
            right: p.right,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -15, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 4,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Bottom fade into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 z-[5]"
        style={{
          background:
            "linear-gradient(to top, var(--background) 0%, transparent 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-32 sm:px-8 lg:px-12">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >
          {/* Eyebrow */}
          <motion.div variants={item} className="mb-8 flex items-center gap-3">
            <span className="h-[1px] w-8 bg-accent" />
            <span className="font-mono text-[11px] tracking-[0.25em] text-accent">
              KFZ SMART REPAIR · KÖLN
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="font-display text-[clamp(3rem,9vw,8rem)] leading-[0.88] tracking-wider"
          >
            <span className="block bg-gradient-to-r from-white via-orange-200 to-orange-400 bg-clip-text text-transparent">
              PERFEKTION
            </span>
            <span className="block text-text-primary">
              IN LACK <span className="text-accent">&amp;</span>
            </span>
            <span className="block text-text-primary">KAROSSERIE</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={item}
            className="mt-7 max-w-md text-[15px] leading-relaxed text-text-secondary sm:text-base"
          >
            Professionelle Smart Repair Lösungen seit über 15 Jahren.
            Parkschäden, Kratzer, Schrammen — wir beseitigen jeden Makel.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <MagneticButton href="#kontakt" variant="primary" className="animate-pulse-glow">
              KOSTENLOS ANFRAGEN
              <ArrowRight className="h-4 w-4" />
            </MagneticButton>
            <MagneticButton href="#leistungen" variant="outline" className="group/btn relative overflow-hidden">
              <span className="relative z-10">UNSERE LEISTUNGEN</span>
            </MagneticButton>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <span className="text-[10px] tracking-[0.2em] uppercase text-text-muted">
          Mehr entdecken
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Mouse className="h-5 w-5 text-text-muted" />
        </motion.div>
      </motion.div>
    </section>
  );
}
