"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Wrench, Car, Sparkles, CloudRain, UserX, Search } from "lucide-react";
import SpotlightCard from "@/components/ui/SpotlightCard";
import type { LucideIcon } from "lucide-react";
import { EASE_SMOOTH } from "@/lib/utils";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  badge?: string;
}

const SERVICES: Service[] = [
  {
    icon: Wrench,
    title: "Smart Repair / Spot Repair",
    description:
      "Punktgenaue Reparatur kleiner Lack- und Karosserieschäden — schnell, präzise und kostengünstig.",
    badge: "Ab 99€*",
  },
  {
    icon: Car,
    title: "Parkschäden & Blechschäden",
    description:
      "Professionelle Beseitigung von Parkremplern, Dellen und Blechverformungen aller Art.",
    badge: "Ab 149€*",
  },
  {
    icon: Sparkles,
    title: "Lackierung & Lackaufbereitung",
    description:
      "Vom Teilbereich bis zur Ganzlackierung — makellose Ergebnisse für jedes Fahrzeug.",
  },
  {
    icon: CloudRain,
    title: "Hagelschäden",
    description:
      "Fachgerechte Instandsetzung von Hagelschäden mit modernsten Techniken und Werkzeugen.",
  },
  {
    icon: UserX,
    title: "Fahrerflucht-Schäden",
    description:
      "Unterstützung bei der Schadensregulierung und professionelle Reparatur nach Fahrerflucht.",
  },
  {
    icon: Search,
    title: "Fahrzeugbewertung",
    description:
      "Sachkundige Bewertung Ihres Fahrzeugs für Kauf, Verkauf oder Versicherungszwecke.",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_SMOOTH },
  },
};

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-5%" });

  return (
    <section id="leistungen" className="relative bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE_SMOOTH }}
          className="mb-16 text-center"
        >
          <p className="mb-3 font-mono text-xs tracking-[0.2em] text-accent">
            WAS WIR BIETEN
          </p>
          <h2 className="font-display text-[clamp(2.5rem,5vw,5rem)] leading-none tracking-wider">
            UNSERE LEISTUNGEN
          </h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map((service) => (
            <motion.div key={service.title} variants={item}>
              <SpotlightCard className="flex h-full flex-col">
                <div className="mb-4 flex items-start justify-between">
                  <service.icon className="h-8 w-8 text-accent" strokeWidth={1.5} />
                  {service.badge && (
                    <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                      {service.badge}
                    </span>
                  )}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-text-primary">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-secondary">
                  {service.description}
                </p>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
