"use client";

import { motion, useInView } from "framer-motion";
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

  return (
    <section id="prozess" className="relative bg-surface py-24 sm:py-32">
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
          {/* Desktop connecting line */}
          <div className="absolute top-12 left-0 right-0 hidden h-[1px] lg:block">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.5, ease: EASE_SMOOTH, delay: 0.3 }}
              className="h-full w-full origin-left bg-gradient-to-r from-accent/50 via-accent/20 to-transparent"
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
                <div className="relative z-10 mb-6 flex h-24 w-24 flex-col items-center justify-center rounded-full border border-[var(--border)] bg-surface-elevated">
                  <step.icon className="mb-1 h-6 w-6 text-accent" strokeWidth={1.5} />
                  <span className="font-display text-xs tracking-wider text-text-muted">
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
