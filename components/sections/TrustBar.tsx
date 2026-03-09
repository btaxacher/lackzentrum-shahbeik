"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Car, Search, Clock } from "lucide-react";
import { EASE_SMOOTH } from "@/lib/utils";

const BADGES = [
  { icon: Award, label: "Meisterbetrieb" },
  { icon: Car, label: "Alle KFZ-Marken" },
  { icon: Search, label: "Kostenlose Begutachtung" },
  { icon: Clock, label: "Über 15 Jahre Erfahrung" },
];

export default function TrustBar() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section className="relative bg-background py-12 sm:py-16">
      <div ref={ref} className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {BADGES.map((badge, i) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: EASE_SMOOTH,
              }}
              className="flex flex-col items-center gap-3 text-center"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 ring-1 ring-accent/20">
                <badge.icon className="h-6 w-6 text-accent" strokeWidth={1.5} />
              </div>
              <span className="text-sm font-medium text-text-primary">
                {badge.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
