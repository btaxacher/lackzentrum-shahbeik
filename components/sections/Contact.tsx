"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, type FormEvent } from "react";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { EASE_SMOOTH } from "@/lib/utils";

const DAMAGE_TYPES = [
  "Smart Repair / Spot Repair",
  "Parkschaden / Blechschaden",
  "Lackierung / Lackaufbereitung",
  "Hagelschaden",
  "Fahrerflucht-Schaden",
  "Fahrzeugbewertung",
  "Sonstiges",
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Connect to API route / email service
    setSubmitted(true);
  };

  const inputStyles =
    "w-full rounded-[4px] border border-[var(--border)] bg-surface px-4 py-3 text-sm text-text-primary placeholder:text-text-muted transition-colors duration-200 focus:border-accent focus:outline-none";

  return (
    <section id="kontakt" className="relative bg-background py-24 sm:py-32">
      <div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE_SMOOTH }}
          className="mb-16 text-center"
        >
          <p className="mb-3 font-mono text-xs tracking-[0.2em] text-accent">
            JETZT KONTAKTIEREN
          </p>
          <h2 className="font-display text-[clamp(2.5rem,5vw,5rem)] leading-none tracking-wider">
            KOSTENLOS ANFRAGEN
          </h2>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-[3fr_2fr]">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {submitted ? (
              <div className="flex min-h-[400px] items-center justify-center rounded-[12px] border border-accent/20 bg-surface-elevated p-8 text-center">
                <div>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                    <MessageCircle className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="mb-2 font-display text-2xl tracking-wider">
                    ANFRAGE GESENDET
                  </h3>
                  <p className="text-sm text-text-secondary">
                    Vielen Dank! Wir melden uns innerhalb von 24 Stunden bei Ihnen.
                  </p>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-[12px] border border-[var(--border)] bg-surface-elevated p-6 sm:p-8"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    name="name"
                    placeholder="Ihr Name *"
                    required
                    className={inputStyles}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Ihre E-Mail *"
                    required
                    className={inputStyles}
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Telefonnummer"
                    className={inputStyles}
                  />
                  <input
                    type="text"
                    name="vehicle"
                    placeholder="Fahrzeugmarke / Modell"
                    className={inputStyles}
                  />
                </div>
                <select
                  name="damageType"
                  defaultValue=""
                  className={`${inputStyles} mt-4 appearance-none`}
                >
                  <option value="" disabled>
                    Schadensart auswählen
                  </option>
                  {DAMAGE_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                <textarea
                  name="message"
                  placeholder="Ihre Nachricht..."
                  rows={4}
                  className={`${inputStyles} mt-4 resize-none`}
                />
                <button
                  type="submit"
                  className="mt-6 w-full rounded-[6px] bg-accent py-3.5 text-sm font-semibold tracking-wide text-white transition-colors duration-200 hover:bg-[#e55f00]"
                >
                  ANFRAGE SENDEN
                </button>
              </form>
            )}
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col gap-6"
          >
            {/* Contact Info */}
            <div className="space-y-5 rounded-[12px] border border-[var(--border)] bg-surface-elevated p-6">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" strokeWidth={1.5} />
                <div>
                  <p className="text-sm font-medium text-text-primary">Adresse</p>
                  <p className="text-sm text-text-secondary">
                    Robert-Perthel-Str. 70, 50739 Köln
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-accent" strokeWidth={1.5} />
                <div>
                  <p className="text-sm font-medium text-text-primary">Telefon</p>
                  <a
                    href="tel:+4901742426527"
                    className="text-sm text-text-secondary transition-colors hover:text-accent"
                  >
                    0174 242 6527
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-accent" strokeWidth={1.5} />
                <div>
                  <p className="text-sm font-medium text-text-primary">E-Mail</p>
                  <a
                    href="mailto:amir.shahbeik@yahoo.de"
                    className="text-sm text-text-secondary transition-colors hover:text-accent"
                  >
                    amir.shahbeik@yahoo.de
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-accent" strokeWidth={1.5} />
                <div>
                  <p className="text-sm font-medium text-text-primary">Öffnungszeiten</p>
                  <p className="text-sm text-text-secondary">
                    Mo–Fr: 09:00 – 18:00 Uhr
                  </p>
                  <p className="text-sm text-text-secondary">
                    Sa: Nach Vereinbarung
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/4901742426527?text=Hallo%2C%20ich%20habe%20eine%20Anfrage%20bzgl.%20einer%20Reparatur."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-[6px] bg-[#25D366] px-4 py-3 text-sm font-semibold tracking-wide text-white transition-opacity hover:opacity-90"
            >
              <MessageCircle className="h-5 w-5" />
              WHATSAPP NACHRICHT
            </a>

            {/* Google Maps */}
            <div className="overflow-hidden rounded-[12px] border border-[var(--border)]">
              <iframe
                title="Lackzentrum Shahbeik Standort"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2513.5!2d6.9209!3d50.9689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDU4JzA4LjAiTiA2wrA1NScxNS4yIkU!5e0!3m2!1sde!2sde!4v1700000000000"
                width="100%"
                height="200"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) saturate(0.3)" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
