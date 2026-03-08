# Lackzentrum Shahbeik — Premium Website

Dark luxury automotive website built with Next.js, Framer Motion, and Spline 3D.

## Tech Stack

- Next.js 16 (App Router)
- Tailwind CSS v4
- Framer Motion
- Spline 3D
- Lucide React Icons
- TypeScript (strict)

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deployment

Push to GitHub → Connect to Vercel → Auto-deploy.

Region: `fra1` (Frankfurt) configured in `vercel.json`.

## Customization

- Replace placeholder colors in `components/sections/BeforeAfter.tsx` with real before/after photos
- Update contact info in `components/sections/Contact.tsx`
- Connect Google Places API for real reviews in `components/sections/Testimonials.tsx`
- Add Spline scene URL in `components/sections/Hero.tsx` (`SPLINE_SCENE_URL` constant)
- Complete legal pages: `app/impressum/page.tsx` and `app/datenschutz/page.tsx`
