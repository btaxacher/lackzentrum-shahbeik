import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import ScrollProgress from "@/components/ui/ScrollProgress";
import GrainOverlay from "@/components/ui/GrainOverlay";
import FloatingButtons from "@/components/ui/FloatingButtons";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lackzentrum-shahbeik.de"),
  title: "Lackzentrum Shahbeik | KFZ Smart Repair & Lackierung in Köln",
  description:
    "Professionelle Smart Repair Lösungen in Köln. Parkschäden, Kratzer, Lackierung, Hagelschäden — Lackzentrum Shahbeik beseitigt jeden Makel. Über 15 Jahre Erfahrung.",
  keywords: [
    "Smart Repair Köln",
    "KFZ Lackierung Köln",
    "Parkschäden reparieren",
    "Hagelschäden Köln",
    "Spot Repair",
    "Lackzentrum Shahbeik",
  ],
  openGraph: {
    title: "Lackzentrum Shahbeik | KFZ Smart Repair & Lackierung in Köln",
    description:
      "Professionelle Smart Repair Lösungen in Köln. Über 15 Jahre Erfahrung. Parkschäden, Kratzer, Lackierung — wir beseitigen jeden Makel.",
    locale: "de_DE",
    type: "website",
    siteName: "Lackzentrum Shahbeik",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1024,
        height: 513,
        alt: "Lackzentrum Shahbeik — KFZ Smart Repair & Lackierung in Köln",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lackzentrum Shahbeik | KFZ Smart Repair & Lackierung in Köln",
    description:
      "Professionelle Smart Repair Lösungen in Köln. Über 15 Jahre Erfahrung.",
    images: ["/images/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://lackzentrum-shahbeik.de" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "Lackzentrum Shahbeik",
  description:
    "Professionelle Smart Repair & Lackierung für alle KFZ-Marken in Köln.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Musterstraße 1",
    addressLocality: "Berlin",
    postalCode: "12345",
    addressCountry: "DE",
  },
  telephone: "+4901761234567",
  email: "info@example.de",
  priceRange: "Ab 99€",
  geo: {
    "@type": "GeoCoordinates",
    latitude: 50.9689,
    longitude: 6.9209,
  },
  url: "https://lackzentrum-shahbeik.de",
  image: "/images/og-image.jpg",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  openingHours: "Mo-Fr 09:00-18:00",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${bebasNeue.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background font-body text-text-primary antialiased">
        <ScrollProgress />
        <Navbar />
        <GrainOverlay />
        <FloatingButtons />
        <main>{children}</main>
      </body>
    </html>
  );
}
