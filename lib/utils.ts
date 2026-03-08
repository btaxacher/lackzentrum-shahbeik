import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Shared smooth easing curve for Framer Motion */
export const EASE_SMOOTH = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];
