"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
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

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Fullscreen Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Luxury automotive background"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Dark overlay — stronger on the left for text readability */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.75) 40%, rgba(10,10,10,0.45) 70%, rgba(10,10,10,0.3) 100%)",
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
            className="font-display text-[clamp(3.5rem,9vw,8rem)] leading-[0.88] tracking-wider"
          >
            <span className="block text-text-primary">PERFEKTION</span>
            <span className="block text-text-primary">
              IN LACK <span className="text-accent">&</span>
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
          <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
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
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-5 w-5 text-text-muted" />
        </motion.div>
      </motion.div>
    </section>
  );
}
