"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn, EASE_SMOOTH } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  splitBy?: "word" | "char";
  once?: boolean;
}

export default function AnimatedText({
  text,
  className,
  delay = 0,
  as: Tag = "p",
  splitBy = "word",
  once = true,
}: AnimatedTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-10%" });

  const items = splitBy === "word" ? text.split(" ") : text.split("");

  return (
    <Tag
      ref={ref}
      className={cn("flex flex-wrap", className)}
      aria-label={text}
    >
      {items.map((item, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{
            duration: 0.5,
            delay: delay + i * (splitBy === "word" ? 0.08 : 0.03),
            ease: EASE_SMOOTH,
          }}
        >
          {item}
          {splitBy === "word" ? "\u00A0" : ""}
        </motion.span>
      ))}
    </Tag>
  );
}
