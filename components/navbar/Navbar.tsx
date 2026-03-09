"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";
import { cn, EASE_SMOOTH } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Home", href: "#home", section: "home" },
  { label: "Leistungen", href: "#leistungen", section: "leistungen" },
  { label: "Unser Betrieb", href: "#prozess", section: "prozess" },
  { label: "Vorher/Nachher", href: "#vorher-nachher", section: "vorher-nachher" },
  { label: "Kontakt", href: "#kontakt", section: "kontakt" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setScrolled(latest > 50);
  });

  // Active section highlighting via IntersectionObserver
  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.section);
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold: 0.3, rootMargin: "-80px 0px -50% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: hidden && !isOpen ? -100 : 0 }}
        transition={{ duration: 0.3, ease: EASE_SMOOTH }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-black/80 backdrop-blur-xl border-b border-orange-500/20 shadow-[0_1px_20px_rgba(255,107,0,0.05)]"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2" aria-label="Lackzentrum Shahbeik — Zur Startseite">
            <Sparkles className="h-5 w-5 text-accent" />
            <div className="flex items-baseline gap-1">
              <span className="font-display text-xl tracking-wider text-text-primary">
                LACKZENTRUM
              </span>
              <span className="font-display text-sm tracking-wider text-accent">
                SHAHBEIK
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "relative text-sm transition-colors duration-200 hover:text-text-primary",
                  activeSection === link.section
                    ? "text-text-primary"
                    : "text-text-secondary"
                )}
              >
                {link.label}
                {activeSection === link.section && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-accent rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </a>
            ))}
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 rounded-[6px] bg-accent px-4 py-2 text-xs font-semibold tracking-wide text-white transition-all duration-200 hover:bg-[#e55f00] hover:shadow-[0_0_20px_rgba(255,107,0,0.3)]"
            >
              KOSTENLOS ANFRAGEN
              <ArrowRight className="h-3 w-3" />
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-50 p-2 md:hidden"
            aria-label={isOpen ? "Menü schließen" : "Menü öffnen"}
          >
            {isOpen ? (
              <X className="h-6 w-6 text-text-primary" />
            ) : (
              <Menu className="h-6 w-6 text-text-primary" />
            )}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-background/95 backdrop-blur-md"
          >
            <nav className="flex flex-col items-center gap-8">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className={cn(
                    "font-display text-3xl tracking-wider transition-colors hover:text-accent",
                    activeSection === link.section ? "text-accent" : "text-text-primary"
                  )}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#kontakt"
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: NAV_LINKS.length * 0.1, duration: 0.4 }}
                className="mt-4 inline-flex items-center gap-2 rounded-[6px] bg-accent px-6 py-3 text-sm font-semibold tracking-wide text-white"
              >
                KOSTENLOS ANFRAGEN
                <ArrowRight className="h-4 w-4" />
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
