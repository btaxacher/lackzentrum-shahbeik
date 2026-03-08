"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useCallback } from "react";
import { EASE_SMOOTH } from "@/lib/utils";

import Image from "next/image";

interface SliderItem {
  label: string;
  beforeImage: string;
  afterImage: string;
}

const SLIDERS: SliderItem[] = [
  { label: "Kratzer-Reparatur", beforeImage: "/images/before-after-scratch-before.jpg", afterImage: "/images/before-after-scratch-after.jpg" },
  { label: "Parkschaden", beforeImage: "/images/before-after-parking-before.jpg", afterImage: "/images/before-after-parking-after.jpg" },
  { label: "Lackaufbereitung", beforeImage: "/images/before-after-polish-before.jpg", afterImage: "/images/before-after-polish-after.jpg" },
];

function CompareSlider({ item }: { item: SliderItem }) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(pct);
  }, []);

  const handlePointerDown = () => {
    isDragging.current = true;
  };
  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    updatePosition(e.clientX);
  };
  const handlePointerUp = () => {
    isDragging.current = false;
  };

  return (
    <div
      ref={containerRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
      className="group relative aspect-[4/3] cursor-ew-resize overflow-hidden rounded-[12px] border border-[var(--border)] select-none touch-none"
    >
      {/* After (full background) */}
      <div className="absolute inset-0 bg-zinc-900">
        <Image
          src={item.afterImage}
          alt={`Nachher ${item.label}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      {/* Before (clipped) */}
      <div
        className="absolute inset-0 bg-zinc-900"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={item.beforeImage}
          alt={`Vorher ${item.label}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 z-10 w-[2px] bg-accent"
        style={{ left: `${position}%` }}
      >
        {/* Handle */}
        <div className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-accent bg-background/80 backdrop-blur-sm">
          <svg
            className="h-4 w-4 text-accent"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path d="M8 6l-4 6 4 6M16 6l4 6-4 6" />
          </svg>
        </div>
      </div>

      {/* Labels */}
      <span className="absolute left-3 top-3 z-10 rounded bg-background/60 px-2 py-1 text-[10px] font-medium uppercase tracking-widest text-text-secondary backdrop-blur-sm">
        Vorher
      </span>
      <span className="absolute right-3 top-3 z-10 rounded bg-background/60 px-2 py-1 text-[10px] font-medium uppercase tracking-widest text-text-secondary backdrop-blur-sm">
        Nachher
      </span>

      {/* Item label */}
      <span className="absolute bottom-3 left-1/2 z-10 -translate-x-1/2 rounded bg-background/60 px-3 py-1 text-xs font-medium text-text-primary backdrop-blur-sm">
        {item.label}
      </span>
    </div>
  );
}

export default function BeforeAfter() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="vorher-nachher" className="relative bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE_SMOOTH }}
          className="mb-16 text-center"
        >
          <p className="mb-3 font-mono text-xs tracking-[0.2em] text-accent">
            QUALITÄT SICHTBAR GEMACHT
          </p>
          <h2 className="font-display text-[clamp(2.5rem,5vw,5rem)] leading-none tracking-wider">
            UNSERE ERGEBNISSE
          </h2>
        </motion.div>

        {/* Sliders */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SLIDERS.map((slider) => (
            <CompareSlider key={slider.label} item={slider} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
