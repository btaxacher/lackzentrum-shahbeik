"use client";

import { type ReactNode } from "react";
import { motion, type Variants } from "framer-motion";
import { EASE_SMOOTH } from "@/lib/utils";

type VariantName =
  | "fadeUp"
  | "fadeIn"
  | "slideLeft"
  | "slideRight"
  | "scale"
  | "staggerChildren";

const CONTAINER_VARIANTS: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const CHILD_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_SMOOTH },
  },
};

const VARIANT_MAP: Record<Exclude<VariantName, "staggerChildren">, { initial: Record<string, number>; animate: Record<string, number> }> = {
  fadeUp: { initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 } },
  fadeIn: { initial: { opacity: 0 }, animate: { opacity: 1 } },
  slideLeft: { initial: { opacity: 0, x: -40 }, animate: { opacity: 1, x: 0 } },
  slideRight: { initial: { opacity: 0, x: 40 }, animate: { opacity: 1, x: 0 } },
  scale: { initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 } },
};

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  variant?: VariantName;
  delay?: number;
  duration?: number;
  once?: boolean;
  amount?: number;
  as?: "div" | "section" | "ul" | "li" | "span";
}

export default function AnimateOnScroll({
  children,
  className,
  variant = "fadeUp",
  delay = 0,
  duration = 0.6,
  once = true,
  amount = 0.3,
  as = "div",
}: AnimateOnScrollProps) {
  const Component = motion[as] as typeof motion.div;

  if (variant === "staggerChildren") {
    return (
      <Component
        className={className}
        variants={CONTAINER_VARIANTS}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, amount }}
      >
        {children}
      </Component>
    );
  }

  const v = VARIANT_MAP[variant];

  return (
    <Component
      className={className}
      initial={v.initial}
      whileInView={v.animate}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: EASE_SMOOTH }}
    >
      {children}
    </Component>
  );
}

/** Use as direct child of <AnimateOnScroll variant="staggerChildren"> */
export function AnimateChild({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "li" | "span";
}) {
  const Component = motion[as] as typeof motion.div;
  return (
    <Component className={className} variants={CHILD_VARIANTS}>
      {children}
    </Component>
  );
}
