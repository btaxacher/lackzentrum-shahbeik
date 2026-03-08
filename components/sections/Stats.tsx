"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import NumberTicker from "@/components/ui/NumberTicker";
import { EASE_SMOOTH } from "@/lib/utils";

const STATS = [
  { value: 500, suffix: "+", label: "Zufriedene Kunden" },
  { value: 15, suffix: "+", label: "Jahre Erfahrung" },
  { value: 1000, suffix: "+", label: "Reparaturen" },
  { value: 0, suffix: "", label: "KFZ-Marken", display: "Alle" },
];

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section className="relative bg-surface py-16 sm:py-20">
      <div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: i * 0.12,
                ease: EASE_SMOOTH,
              }}
              className="relative flex flex-col items-center text-center"
            >
              {/* Orange glow divider (not on first item) */}
              {i > 0 && (
                <div className="absolute left-0 top-1/2 hidden h-12 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-accent/30 to-transparent lg:block" />
              )}
              <span className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-none text-accent">
                {stat.display ? (
                  stat.display
                ) : (
                  <NumberTicker value={stat.value} suffix={stat.suffix} />
                )}
              </span>
              <span className="mt-2 text-sm text-text-muted">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
