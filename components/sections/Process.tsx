"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Phone, Search, Wrench, CheckCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { EASE_SMOOTH } from "@/lib/utils";

interface Step {
  icon: LucideIcon;
  number: string;
  title: string;
  description: string;
}

const STEPS: Step[] = [
  {
    icon: Phone,
    number: "01",
    title: "ANFRAGE",
    description: "Sie kontaktieren uns telefonisch oder per Formular — kostenlos und unverbindlich.",
  },
  {
    icon: Search,
    number: "02",
    title: "BEGUTACHTUNG",
    description: "Kostenlose Schadensbegutachtung und transparente Kostenschätzung vor Ort.",
  },
  {
    icon: Wrench,
    number: "03",
    title: "REPARATUR",
    description: "Professionelle Ausführung durch zertifizierte Fachkräfte mit modernster Technik.",
  },
  {
    icon: CheckCircle,
    number: "04",
    title: "ÜBERGABE",
    description: "Ihr Fahrzeug wird in einwandfreiem Zustand übergeben — Qualität garantiert.",
  },
];

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  // Scroll-based progress line
  const lineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: lineRef,
    offset: ["start end", "end center"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="prozess"
      className="relative py-24 sm:py-32"
      style={{
        background:
          "radial-gradient(ellipse at 50% 0%, rgba(255,107,0,0.03) 0%, transparent 60%), var(--surface)",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE_SMOOTH }}
          className="mb-16 text-center"
        >
          <p className="mb-3 font-mono text-xs tracking-[0.2em] text-accent">
            UNSER PROZESS
          </p>
          <h2 className="font-display text-[clamp(2.5rem,5vw,5rem)] leading-none tracking-wider">
            WIE WIR ARBEITEN
          </h2>
        </motion.div>

        {/* Timeline */}
        <div ref={ref} className="relative">
          {/* Desktop connecting line — animated on scroll */}
          <div ref={lineRef} className="absolute top-12 left-0 right-0 hidden h-[2px] lg:block">
            {/* Background line (grey) */}
            <div className="h-full w-full bg-[var(--border)]" />
            {/* Animated progress line (orange) */}
            <motion.div
              className="absolute inset-0 origin-left bg-gradient-to-r from-accent via-accent/80 to-accent/40"
              style={{ scaleX: lineScale }}
            />
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.3 + i * 0.2,
                  ease: EASE_SMOOTH,
                }}
                className="relative flex flex-col items-center text-center lg:items-start lg:text-left"
              >
                {/* Step circle */}
                <div className="relative z-10 mb-6 flex h-24 w-24 flex-col items-center justify-center rounded-full border-2 border-accent/30 bg-zinc-900">
                  <step.icon className="mb-1 h-7 w-7 text-accent" strokeWidth={2} />
                  <span className="font-display text-sm tracking-wider text-accent">
                    {step.number}
                  </span>
                </div>

                <h3 className="mb-2 font-display text-xl tracking-wider text-accent">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-secondary">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
