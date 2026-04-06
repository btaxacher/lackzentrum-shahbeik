"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useCallback, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
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
        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="mx-3 w-[320px] shrink-0 rounded-[14px] border border-white/[0.06] bg-surface-elevated/70 p-6 backdrop-blur-md transition-colors duration-300 hover:border-white/[0.1]">
      {/* Decorative quote */}
      <span className="mb-1 block font-display text-6xl leading-none text-accent/15">
        &ldquo;
      </span>
      <StarRating />
      <p className="mb-5 text-sm leading-relaxed text-text-secondary">
        {review.text}
      </p>
      <div className="flex items-center gap-3 border-t border-white/[0.04] pt-4">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-full text-xs font-semibold text-white ring-2 ring-white/10"
          style={{ backgroundColor: review.color }}
        >
          {review.initials}
        </div>
        <div>
          <p className="text-sm font-medium text-text-primary">{review.name}</p>
          <p className="text-[11px] text-text-muted">{review.date}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Triple reviews for seamless loop
  const tripled = [...REVIEWS, ...REVIEWS, ...REVIEWS];

  // Manual scroll
  const scroll = useCallback((direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 344; // card width + gap
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  }, []);

  // CSS-based auto-scroll reset (when JS scroll reaches end)
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    // Start in the middle to allow left scrolling
    el.scrollLeft = (344 * REVIEWS.length);
  }, []);

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
          className="mb-12 text-center"
        >
          <p className="mb-3 font-mono text-xs tracking-[0.2em] text-accent">
            KUNDENSTIMMEN
          </p>
          <h2 className="font-display text-[clamp(2.5rem,5vw,5rem)] leading-none tracking-wider">
            WAS UNSERE KUNDEN SAGEN
          </h2>

          {/* Overall Rating */}
          <div className="mt-6 flex flex-col items-center gap-2">
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-display text-2xl tracking-wider text-text-primary">
                4.9 / 5.0
              </span>
            </div>
            <p className="text-sm text-text-muted">
              Basierend auf {REVIEWS.length * 8}+ Bewertungen
            </p>
          </div>
        </motion.div>
      </div>

      {/* Carousel */}
      <div
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-background to-transparent" />

        {/* Scrollable container with CSS marquee */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scrollbar-hide"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <div
            className="flex"
            style={{
              animation: `scroll-marquee ${REVIEWS.length * 5}s linear infinite`,
              animationPlayState: isPaused ? "paused" : "running",
            }}
          >
            {tripled.map((review, i) => (
              <ReviewCard key={`${review.name}-${i}`} review={review} />
            ))}
          </div>
        </div>

        {/* Navigation arrows */}
        <div className="mx-auto mt-8 flex items-center justify-center gap-4">
          <button
            onClick={() => scroll("left")}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-surface-elevated text-text-secondary transition-colors hover:border-accent hover:text-accent"
            aria-label="Vorherige Bewertung"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-surface-elevated text-text-secondary transition-colors hover:border-accent hover:text-accent"
            aria-label="Nächste Bewertung"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Links */}
      <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-6">
        <a
          href="https://g.page/r/lackzentrum-shahbeik/review"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-orange-400"
        >
          Bewertung schreiben
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
        <a
          href="https://maps.google.com/?q=Lackzentrum+Shahbeik+Köln"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-text-muted transition-colors hover:text-text-primary"
        >
          Alle Bewertungen auf Google ansehen
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>

      {/* CSS marquee animation */}
      <style jsx>{`
        @keyframes scroll-marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${344 * REVIEWS.length}px);
          }
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
