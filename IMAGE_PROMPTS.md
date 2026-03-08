# Image Prompts — Lackzentrum Shahbeik

Alle Prompts optimiert für NanoBanana / Midjourney-Style Generierung.
Format: 16:9 (1920×1080) sofern nicht anders angegeben.

---

## 1. Vorher/Nachher — Kratzer-Reparatur

### VORHER
```
Close-up photograph of a car door panel with deep visible scratch marks running diagonally across the surface. Dark metallic grey paint with clear coat damage, showing white primer underneath. The scratches are approximately 30cm long, clearly visible under soft studio lighting. Shallow depth of field focuses on the damaged area. Shot in a professional auto repair workshop environment with neutral grey concrete floor visible in the background. Photorealistic, high resolution, automotive photography style, natural color grading, no text or watermarks.
```

### NACHHER
```
Close-up photograph of a perfectly repaired car door panel in dark metallic grey. The surface is flawless, with a deep mirror-like reflection showing the workshop ceiling lights. Same angle and lighting as a before-photo — the paint is seamless with no visible repair marks. Freshly polished finish with a subtle wet-look sheen. Shot in a professional auto repair workshop. Photorealistic, high resolution, automotive photography style, natural color grading, no text or watermarks.
```

**Dateiname:** `public/images/before-after-scratch-before.jpg` / `public/images/before-after-scratch-after.jpg`

---

## 2. Vorher/Nachher — Parkschaden

### VORHER
```
Medium shot photograph of a car rear bumper with a visible parking damage dent and paint transfer marks. The car is black metallic, the dent is approximately 15cm wide with white paint scuff marks from the other vehicle. Minor cracking in the clear coat around the impact area. Photographed from a slight angle in a well-lit indoor workshop with soft diffused overhead lighting. The damage is clearly visible but not catastrophic. Photorealistic, high resolution, automotive detail photography, neutral tones, no text or watermarks.
```

### NACHHER
```
Medium shot photograph of a perfectly restored car rear bumper in black metallic finish. Same angle and lighting as the before-photo. The bumper surface is completely smooth, freshly painted with a deep glossy finish. No trace of any previous damage — the paint blends seamlessly with the rest of the body. Soft reflections of the workshop lights on the curved bumper surface. Photorealistic, high resolution, automotive detail photography, neutral tones, no text or watermarks.
```

**Dateiname:** `public/images/before-after-parking-before.jpg` / `public/images/before-after-parking-after.jpg`

---

## 3. Vorher/Nachher — Lackaufbereitung

### VORHER
```
Close-up photograph of a car hood surface showing faded, oxidized paint with visible swirl marks, micro-scratches, and dull finish. The car is dark blue metallic but the paint appears washed out and grey-ish due to UV damage and neglect. Water spots and light contamination visible on the surface. Photographed under bright overhead fluorescent workshop lights that emphasize every imperfection. Shallow depth of field. Photorealistic, high resolution, automotive detailing photography, no text or watermarks.
```

### NACHHER
```
Close-up photograph of the same car hood after professional paint correction and ceramic coating. Deep, rich dark blue metallic paint with a mirror-like wet finish. The surface reflects the ceiling lights like a perfect mirror — zero swirl marks, zero scratches. The paint has incredible depth and clarity, almost liquid-looking. Same angle and lighting setup as the before-photo. Photorealistic, high resolution, automotive detailing photography, no text or watermarks.
```

**Dateiname:** `public/images/before-after-polish-before.jpg` / `public/images/before-after-polish-after.jpg`

---

## 4. Hero Section — Hintergrund (optional, falls Spline nicht genutzt wird)

```
Abstract dark automotive background. Close-up of a car body panel with a deep black metallic paint finish, shot at a dramatic angle. Subtle warm orange light reflection sweeping across the curved surface from the left side. The rest fades into pure darkness. Extreme shallow depth of field, cinematic lighting. The mood is luxurious, mysterious, and premium. Dark background (#0A0A0A) blending seamlessly at the edges. Ultra-wide 21:9 aspect ratio. Photorealistic, high resolution, editorial automotive photography, no text or watermarks.
```

**Dateiname:** `public/images/hero-bg.jpg`
**Format:** 2560×1080 (21:9) oder 1920×1080

---

## 5. Services Section — Icon-Hintergründe (optional)

Falls du für die Service-Cards kleine Hintergrundbilder willst:

### Smart Repair
```
Extreme close-up of a professional auto painter's gloved hand using a fine brush to apply touch-up paint to a small chip on a car surface. Macro photography, shallow depth of field, warm workshop lighting with a slight orange tint. Dark moody background. The focus is on precision and craftsmanship. Photorealistic, automotive workshop photography, no text. Square format 1:1.
```

### Lackierung
```
Wide shot of a car inside a professional spray booth. The car is partially masked with tape and paper, a painter in full protective gear sprays a fine mist of paint with a spray gun. Dramatic lighting with overhead booth lights cutting through the paint mist. Orange-tinted warm light. Cinematic mood, shallow depth of field on the spray gun hand. Photorealistic, industrial automotive photography, no text. Square format 1:1.
```

### Hagelschaden
```
Close-up photograph of a car roof surface covered in small hail damage dents, visible under raking light that emphasizes the dimpled texture. Dark silver metallic paint. Moody, dramatic side-lighting creates shadows in each small dent. Dark workshop background. Photorealistic, automotive damage documentation photography, no text. Square format 1:1.
```

**Dateinamen:** `public/images/service-smart-repair.jpg`, `public/images/service-lackierung.jpg`, `public/images/service-hagel.jpg`
**Format:** 800×800 (1:1)

---

## 6. OG Image (Social Media Preview)

```
Dark luxury automotive branding image. A sleek car silhouette (side profile) partially visible in dramatic low-key lighting against a pure black background. A single warm orange light source from the left illuminates the front fender and hood creating a striking highlight strip. The word "LACKZENTRUM" in large bold uppercase sans-serif typography overlaid in the upper portion, with "SHAHBEIK" smaller below in orange. Minimal, premium, high-end feel. Aspect ratio 1200×630. Photorealistic car with clean graphic typography overlay, no other text or watermarks.
```

**Dateiname:** `public/images/og-image.jpg`
**Format:** 1200×630 (OG standard)

---

## Hinweise zur Generierung

- **Konsistenz:** Für Vorher/Nachher-Paare am besten zuerst das "Nachher"-Bild generieren, dann per img2img / Reference das "Vorher" mit den Beschädigungen ableiten
- **Farbtemperatur:** Alle Bilder sollten leicht warm (orange-tinted) sein, passend zum Brand-Orange #FF6B00
- **Hintergrund:** Immer dunkler Workshop-Hintergrund, nie Outdoor/helle Umgebung
- **Auflösung:** Mindestens 1920px Breite für Fullscreen-Sektionen, 800px für Cards

## Nach dem Generieren

Bilder in `public/images/` ablegen, dann sage mir Bescheid — ich binde sie in die Komponenten ein.
