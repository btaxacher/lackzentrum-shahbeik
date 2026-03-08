"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";
import { EASE_SMOOTH } from "@/lib/utils";

interface Review {
  name: string;
  initials: string;
  color: string;
  text: string;
  date: string;
}

const REVIEWS: Review[] = [
  {
    name: "Markus W.",
    initials: "MW",
    color: "#FF6B00",
    text: "Absolut professionelle Arbeit! Mein BMW hatte einen hässlichen Parkschaden und nach der Reparatur sieht er aus wie neu. Kann ich nur weiterempfehlen.",
    date: "vor 2 Wochen",
  },
  {
    name: "Sandra K.",
    initials: "SK",
    color: "#C9A84C",
    text: "Super freundlicher Service und das Ergebnis hat mich begeistert. Die Kratzer an meinem Audi sind komplett verschwunden. Preis-Leistung stimmt hier zu 100%.",
    date: "vor 1 Monat",
  },
  {
    name: "Ahmet Y.",
    initials: "AY",
    color: "#4C8AC9",
    text: "Herr Shahbeik hat meinen Mercedes nach einem Hagelsturm perfekt instand gesetzt. Schnelle Terminvergabe und erstklassiges Ergebnis. Vielen Dank!",
    date: "vor 3 Wochen",
  },
  {
    name: "Julia M.",
    initials: "JM",
    color: "#9A4CC9",
    text: "Ich war skeptisch bei Smart Repair, aber das Ergebnis spricht für sich. Schnell, sauber und deutlich günstiger als in der Vertragswerkstatt.",
    date: "vor 1 Monat",
  },
  {
    name: "Thomas R.",
    initials: "TR",
    color: "#4CC9A8",
    text: "Bereits zum dritten Mal hier und jedes Mal einwandfreie Arbeit. Das Lack-Ergebnis ist wirklich nicht von einer Neulackierung zu unterscheiden.",
    date: "vor 2 Monaten",
  },
  {
    name: "Petra L.",
    initials: "PL",
    color: "#C94C6E",
    text: "Sehr kompetente Beratung und ehrliche Einschätzung. Hätte woanders deutlich mehr bezahlt. Absolute Empfehlung für alle Kölner!",
    date: "vor 3 Wochen",
  },
];

function StarRating() {
  return (
    <div className="mb-3 flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-accent text-accent" />
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="mx-3 w-[320px] shrink-0 rounded-[12px] border border-[var(--border)] bg-surface-elevated p-6">
      {/* Quote */}
      <span className="mb-2 block font-display text-3xl leading-none text-accent/30">&ldquo;</span>
      <StarRating />
      <p className="mb-4 text-sm leading-relaxed text-text-secondary">
        {review.text}
      </p>
      <div className="flex items-center gap-3">
        <div
          className="flex h-9 w-9 items-center justify-center rounded-full text-xs font-semibold text-white"
          style={{ backgroundColor: review.color }}
        >
          {review.initials}
        </div>
        <div>
          <p className="text-sm font-medium text-text-primary">{review.name}</p>
          <p className="text-xs text-text-muted">{review.date}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  // Duplicate reviews for infinite scroll effect
  const doubled = [...REVIEWS, ...REVIEWS];

  return (
    <section
      className="relative overflow-hidden py-24 sm:py-32"
      style={{
        background: "linear-gradient(180deg, var(--background) 0%, #0d0d0d 50%, var(--background) 100%)",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE_SMOOTH }}
          className="mb-16 text-center"
        >
          <p className="mb-3 font-mono text-xs tracking-[0.2em] text-accent">
            KUNDENSTIMMEN
          </p>
          <h2 className="font-display text-[clamp(2.5rem,5vw,5rem)] leading-none tracking-wider">
            WAS UNSERE KUNDEN SAGEN
          </h2>
          <p className="mt-4 text-sm text-text-muted">
            Platzhalter-Bewertungen — Echte Reviews via Google Places API einbinden
          </p>
        </motion.div>
      </div>

      {/* Carousel */}
      <div className="relative">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-background to-transparent" />

        <motion.div
          className="flex"
          animate={{ x: [0, -(320 + 24) * REVIEWS.length] }}
          transition={{
            x: {
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            },
          }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {doubled.map((review, i) => (
            <ReviewCard key={`${review.name}-${i}`} review={review} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
