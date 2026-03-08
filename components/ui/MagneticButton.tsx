"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, type ReactNode, type MouseEvent } from "react";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "outline";
  strength?: number;
}

export default function MagneticButton({
  children,
  className,
  onClick,
  href,
  variant = "primary",
  strength = 0.3,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMouseMove = (e: MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * strength);
    y.set((e.clientY - centerY) * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const baseStyles =
    variant === "primary"
      ? "bg-accent text-white hover:bg-[#e55f00] shadow-[0_0_30px_rgba(255,107,0,0.2)]"
      : "border border-[var(--border)] text-text-primary hover:border-accent";

  const content = (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-[6px] px-6 py-3 font-display text-sm tracking-wider transition-colors duration-200",
        baseStyles,
        className
      )}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} onClick={onClick} aria-label={typeof children === "string" ? children : undefined}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} aria-label={typeof children === "string" ? children : undefined}>
      {content}
    </button>
  );
}
