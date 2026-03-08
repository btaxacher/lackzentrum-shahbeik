import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | Lackzentrum Shahbeik",
};

export default function Datenschutz() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-32 sm:px-6 lg:px-8">
      <h1 className="mb-8 font-display text-4xl tracking-wider text-accent">
        DATENSCHUTZERKLÄRUNG
      </h1>
      <div className="space-y-6 text-sm leading-relaxed text-text-secondary">
        <div>
          <h2 className="mb-2 text-lg font-semibold text-text-primary">
            1. Datenschutz auf einen Blick
          </h2>
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was
            mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website
            besuchen.
          </p>
        </div>
        <div>
          <h2 className="mb-2 text-lg font-semibold text-text-primary">
            2. Verantwortliche Stelle
          </h2>
          <p>Lackzentrum Shahbeik</p>
          <p>Robert-Perthel-Str. 70</p>
          <p>50739 Köln</p>
          <p>Telefon: 0174 242 6527</p>
          <p>E-Mail: amir.shahbeik@yahoo.de</p>
        </div>
        {/* TODO: Vollständige DSGVO-konforme Datenschutzerklärung erstellen (z.B. via e-recht24.de Generator) */}
        <div>
          <h2 className="mb-2 text-lg font-semibold text-text-primary">
            3. Hosting
          </h2>
          <p>
            Diese Website wird bei Vercel Inc. gehostet. Details zum
            Datenschutz von Vercel finden Sie unter vercel.com/legal/privacy-policy.
          </p>
        </div>
        <div>
          <h2 className="mb-2 text-lg font-semibold text-text-primary">
            4. Kontaktformular
          </h2>
          <p>
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden
            Ihre Angaben aus dem Formular inklusive der von Ihnen dort
            angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den
            Fall von Anschlussfragen bei uns gespeichert.
          </p>
        </div>
      </div>
    </div>
  );
}
