import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-accent/20 bg-[#070707]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-between">
          {/* Logo */}
          <div className="flex items-baseline gap-1">
            <span className="font-display text-lg tracking-wider text-text-primary">
              LACKZENTRUM
            </span>
            <span className="font-display text-sm tracking-wider text-accent">
              SHAHBEIK
            </span>
          </div>

          {/* Copyright */}
          <p className="text-xs text-text-muted">
            © {new Date().getFullYear()} Lackzentrum Shahbeik · Alle Rechte vorbehalten
          </p>

          {/* Links */}
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
              className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border)] text-text-muted transition-colors hover:border-accent hover:text-accent"
            >
              <ArrowUp className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
