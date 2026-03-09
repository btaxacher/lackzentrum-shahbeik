"use client";

import { ArrowUp, Instagram, Facebook, Sparkles } from "lucide-react";

// Google Business icon (lucide doesn't have one)
function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative bg-[#070707]">
      {/* Gradient top border */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent" />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-accent" />
            <div className="flex items-baseline gap-1">
              <span className="font-display text-lg tracking-wider text-text-primary">
                LACKZENTRUM
              </span>
              <span className="font-display text-sm tracking-wider text-accent">
                SHAHBEIK
              </span>
            </div>
          </div>

          {/* Social + Copyright */}
          <div className="flex flex-col items-center gap-4">
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-text-muted transition-colors hover:border-accent hover:text-accent"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-text-muted transition-colors hover:border-accent hover:text-accent"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Google Business"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-text-muted transition-colors hover:border-accent hover:text-accent"
              >
                <GoogleIcon className="h-4 w-4" />
              </a>
            </div>
            <p className="text-xs text-text-muted">
              © {new Date().getFullYear()} Lackzentrum Shahbeik · Alle Rechte vorbehalten
            </p>
          </div>

          {/* Links + Scroll to Top */}
          <div className="flex items-center gap-6">
            <a
              href="/impressum"
              className="text-xs text-text-muted transition-colors hover:text-text-secondary"
            >
              Impressum
            </a>
            <a
              href="/datenschutz"
              className="text-xs text-text-muted transition-colors hover:text-text-secondary"
            >
              Datenschutz
            </a>
            <a
              href="#home"
              aria-label="Nach oben scrollen"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-text-muted transition-all hover:border-accent hover:text-accent hover:-translate-y-1"
            >
              <ArrowUp className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
