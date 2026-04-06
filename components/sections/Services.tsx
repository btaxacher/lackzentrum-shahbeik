"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Wrench, Car, Sparkles, CloudRain, UserX, Search, ArrowRight } from "lucide-react";
import Image from "next/image";
import SpotlightCard from "@/components/ui/SpotlightCard";
import type { LucideIcon } from "lucide-react";
import { EASE_SMOOTH } from "@/lib/utils";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  badge: string;
  image?: string;
}

const SERVICES: Service[] = [
  {
    icon: Wrench,
    title: "Smart Repair / Spot Repair",
    description:
      "Punktgenaue Reparatur kleiner Lack- und Karosserieschäden — schnell, präzise und kostengünstig.",
    badge: "Ab 99€*",
    image: "/images/service-smart-repair.jpg",
  },
  {
    icon: Car,
    title: "Parkschäden & Blechschäden",
    description:
      "Professionelle Beseitigung von Parkremplern, Dellen und Blechverformungen aller Art.",
    badge: "Ab 149€*",
    image: "/images/service-parkschaden.jpg",
  },
  {
    icon: Sparkles,
    title: "Lackierung & Lackaufbereitung",
    description:
      "Vom Teilbereich bis zur Ganzlackierung — makellose Ergebnisse für jedes Fahrzeug.",
    badge: "Auf Anfrage",
    image: "/images/service-lackierung.jpg",
  },
  {
    icon: CloudRain,
    title: "Hagelschäden",
    description:
      "Fachgerechte Instandsetzung von Hagelschäden mit modernsten Techniken und Werkzeugen.",
    badge: "Auf Anfrage",
    image: "/images/service-hagel.jpg",
  },
  {
    icon: UserX,
    title: "Fahrerflucht-Schäden",
    description:
      "Unterstützung bei der Schadensregulierung und professionelle Reparatur nach Fahrerflucht.",
    badge: "Auf Anfrage",
    image: "/images/service-fahrerflucht.jpg",
  },
  {
    icon: Search,
    title: "Fahrzeugbewertung",
    description:
      "Sachkundige Bewertung Ihres Fahrzeugs für Kauf, Verkauf oder Versicherungszwecke.",
    badge: "Auf Anfrage",
    image: "/images/service-bewertung.jpg",
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
            <motion.div
              key={service.title}
              variants={item}
              className="group transition-all duration-500 hover:-translate-y-2"
              style={{
                transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                perspective: "1000px",
              }}
            >
              <SpotlightCard className="flex h-full flex-col p-5 transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(255,107,0,0.08)] group-hover:border-accent/30">
                {service.image && (
                  <div className="relative mb-5 aspect-[16/10] w-full overflow-hidden rounded-lg">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    {/* Premium overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </div>
                )}
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/8 ring-1 ring-accent/15 transition-all duration-300 group-hover:bg-accent/12 group-hover:ring-accent/25">
                    <service.icon className="h-5 w-5 text-accent" strokeWidth={1.5} />
                  </div>
                  <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent ring-1 ring-accent/10">
                    {service.badge}
                  </span>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-text-primary">
                  {service.title}
                </h3>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-text-secondary">
                  {service.description}
                </p>
                <a
                  href="#kontakt"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-all duration-300 hover:text-orange-400 hover:gap-2.5"
                >
                  Jetzt anfragen
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
