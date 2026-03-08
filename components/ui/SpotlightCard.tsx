"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";
import { cn } from "@/lib/utils";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
}

export default function SpotlightCard({ children, className }: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty("--spotlight-x", `${x}px`);
    cardRef.current.style.setProperty("--spotlight-y", `${y}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={cn(
        "group relative overflow-hidden rounded-[12px] border border-[var(--border)] bg-surface-elevated p-6 transition-all duration-300",
        "hover:border-accent/40 hover:shadow-[0_0_40px_rgba(255,107,0,0.06)]",
        className
      )}
    >
      {/* Spotlight gradient */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(400px circle at var(--spotlight-x, 50%) var(--spotlight-y, 50%), rgba(255,107,0,0.08), transparent 60%)",
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
