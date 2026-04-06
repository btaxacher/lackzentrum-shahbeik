"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, type FormEvent, type DragEvent, type ChangeEvent } from "react";
import {
  MapPin, Phone, Mail, Clock, MessageCircle, User, Car,
  ChevronDown, Camera, X, Check, Loader2,
} from "lucide-react";
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

type FormStatus = "idle" | "submitting" | "success" | "error";

interface UploadedFile {
  file: File;
  preview: string;
}

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    // TODO: Connect to API route / email service
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("success");
  };

  // Image upload handlers
  const addFiles = (newFiles: FileList | null) => {
    if (!newFiles) return;
    const remaining = 3 - files.length;
    const accepted = Array.from(newFiles)
      .filter((f) => f.type.startsWith("image/"))
      .slice(0, remaining);
    const newUploads = accepted.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setFiles((prev) => [...prev, ...newUploads]);
  };

  const removeFile = (index: number) => {
    setFiles((prev) => {
      URL.revokeObjectURL(prev[index].preview);
      return prev.filter((_, i) => i !== index);
    });
  };

  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    addFiles(e.dataTransfer.files);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    addFiles(e.target.files);
    if (e.target) e.target.value = "";
  };

  const inputBase =
    "w-full rounded-[8px] border border-[var(--border)] bg-surface px-4 py-3 pl-11 text-sm text-text-primary placeholder:text-text-muted transition-all duration-300 focus:border-accent/60 focus:outline-none focus:ring-2 focus:ring-accent/15 focus:shadow-[0_0_15px_rgba(255,107,0,0.06)]";

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
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex min-h-[400px] items-center justify-center rounded-[12px] border border-accent/20 bg-surface-elevated p-8 text-center"
                >
                  <div>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                      className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10"
                    >
                      <Check className="h-8 w-8 text-green-500" />
                    </motion.div>
                    <h3 className="mb-2 font-display text-2xl tracking-wider">
                      ANFRAGE GESENDET
                    </h3>
                    <p className="text-sm text-text-secondary">
                      Vielen Dank! Wir melden uns innerhalb von 24 Stunden bei Ihnen.
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="rounded-[14px] border border-white/[0.06] bg-surface-elevated/80 p-6 backdrop-blur-sm sm:p-8"
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    {/* Name */}
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-text-muted" />
                      <input
                        type="text"
                        name="name"
                        placeholder="Ihr Name *"
                        required
                        className={inputBase}
                      />
                    </div>
                    {/* Email */}
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-text-muted" />
                      <input
                        type="email"
                        name="email"
                        placeholder="Ihre E-Mail *"
                        required
                        className={inputBase}
                      />
                    </div>
                    {/* Phone */}
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-text-muted" />
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Telefonnummer"
                        className={inputBase}
                      />
                    </div>
                    {/* Vehicle */}
                    <div className="relative">
                      <Car className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-text-muted" />
                      <input
                        type="text"
                        name="vehicle"
                        placeholder="Fahrzeugmarke / Modell"
                        className={inputBase}
                      />
                    </div>
                  </div>

                  {/* Damage type select */}
                  <div className="relative mt-4">
                    <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-text-muted" />
                    <select
                      name="damageType"
                      defaultValue=""
                      className={`${inputBase} appearance-none pl-4 pr-10`}
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
                  </div>

                  {/* Message */}
                  <textarea
                    name="message"
                    placeholder="Ihre Nachricht..."
                    rows={4}
                    className={`${inputBase} mt-4 min-h-[120px] resize-none pl-4`}
                  />

                  {/* Image upload */}
                  <div className="mt-4">
                    <div
                      onDragOver={(e) => e.preventDefault()}
                      onDrop={handleDrop}
                      onClick={() => fileInputRef.current?.click()}
                      className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-[6px] border-2 border-dashed border-[var(--border)] bg-surface p-6 transition-colors hover:border-accent/40"
                    >
                      <Camera className="h-6 w-6 text-text-muted" />
                      <p className="text-sm text-text-muted">
                        Schadenfotos hochladen{" "}
                        <span className="text-text-secondary">(max. 3 Bilder)</span>
                      </p>
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        multiple
                        className="hidden"
                        onChange={handleFileChange}
                      />
                    </div>
                    {/* Preview thumbnails */}
                    {files.length > 0 && (
                      <div className="mt-3 flex gap-3">
                        {files.map((f, i) => (
                          <div key={i} className="group relative h-20 w-20 overflow-hidden rounded-lg border border-[var(--border)]">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={f.preview}
                              alt={`Upload ${i + 1}`}
                              className="h-full w-full object-cover"
                            />
                            <button
                              type="button"
                              onClick={() => removeFile(i)}
                              className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity group-hover:opacity-100"
                            >
                              <X className="h-5 w-5 text-white" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    disabled={status === "submitting"}
                    whileTap={{ scale: 0.97 }}
                    className="mt-6 flex w-full items-center justify-center gap-2 rounded-[8px] bg-gradient-to-r from-accent to-[#e55f00] py-3.5 text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,107,0,0.25)] disabled:opacity-70"
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        WIRD GESENDET...
                      </>
                    ) : (
                      "ANFRAGE SENDEN"
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col gap-6"
          >
            {/* Contact Info */}
            <div className="space-y-5 rounded-[14px] border border-white/[0.06] bg-surface-elevated/80 p-6 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10">
                  <MapPin className="h-5 w-5 text-accent" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-sm font-medium text-text-primary">Adresse</p>
                  <p className="text-sm text-text-secondary">
                    Musterstraße 1, 12345 Berlin
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10">
                  <Phone className="h-5 w-5 text-accent" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-sm font-medium text-text-primary">Telefon</p>
                  <a
                    href="tel:+4901761234567"
                    className="inline-flex items-center gap-2 rounded-md bg-accent/10 px-3 py-1.5 text-sm font-semibold text-accent transition-colors hover:bg-accent/20"
                  >
                    <Phone className="h-3.5 w-3.5" />
                    0176 123 4567
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10">
                  <Mail className="h-5 w-5 text-accent" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-sm font-medium text-text-primary">E-Mail</p>
                  {/* TODO: Ersetze Yahoo-Adresse durch professionelle Domain-Email (z.B. info@lackzentrum-shahbeik.de) */}
                  <a
                    href="mailto:info@example.de"
                    className="text-sm text-text-secondary transition-colors hover:text-accent"
                  >
                    info@example.de
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10">
                  <Clock className="h-5 w-5 text-accent" strokeWidth={1.5} />
                </div>
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
              href="https://wa.me/4901761234567?text=Hallo%2C%20ich%20habe%20eine%20Anfrage%20bzgl.%20einer%20Reparatur."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-[6px] bg-[#25D366] px-4 py-3 text-sm font-semibold tracking-wide text-white transition-all hover:opacity-90 animate-whatsapp-pulse"
            >
              <MessageCircle className="h-5 w-5" fill="currentColor" />
              WHATSAPP NACHRICHT
            </a>

            {/* Google Maps */}
            <div className="overflow-hidden rounded-[12px] border border-[var(--border)]">
              <iframe
                title="Lackzentrum Shahbeik Standort"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2513.5!2d6.9209!3d50.9689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDU4JzA4LjAiTiA2wrA1NScxNS4yIkU!5e0!3m2!1sde!2sde!4v1700000000000"
                width="100%"
                height="280"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) saturate(0.3) brightness(0.8)" }}
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
