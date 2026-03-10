import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum | Lackzentrum Shahbeik",
};

export default function Impressum() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-32 sm:px-6 lg:px-8">
      <h1 className="mb-8 font-display text-4xl tracking-wider text-accent">
        IMPRESSUM
      </h1>
      <div className="space-y-6 text-sm leading-relaxed text-text-secondary">
        <div>
          <h2 className="mb-2 text-lg font-semibold text-text-primary">
            Angaben gemäß § 5 TMG
          </h2>
          <p>Lackzentrum Shahbeik</p>
          <p>Musterstraße 1</p>
          <p>12345 Berlin</p>
        </div>
        <div>
          <h2 className="mb-2 text-lg font-semibold text-text-primary">
            Kontakt
          </h2>
          <p>Telefon: 0176 123 4567</p>
          <p>E-Mail: info@example.de</p>
        </div>
        <div>
          <h2 className="mb-2 text-lg font-semibold text-text-primary">
            Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
          </h2>
          <p>Max Mustermann</p>
          <p>Musterstraße 1</p>
          <p>12345 Berlin</p>
        </div>
        {/* TODO: Vollständiges Impressum mit Steuernummer, USt-ID, etc. ergänzen */}
      </div>
    </div>
  );
}
