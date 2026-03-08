import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import ScrollProgress from "@/components/ui/ScrollProgress";
import GrainOverlay from "@/components/ui/GrainOverlay";
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
    streetAddress: "Robert-Perthel-Str. 70",
    addressLocality: "Köln",
    postalCode: "50739",
    addressCountry: "DE",
  },
  telephone: "+4901742426527",
  email: "amir.shahbeik@yahoo.de",
  priceRange: "Ab 99€",
  geo: {
    "@type": "GeoCoordinates",
    latitude: 50.9689,
    longitude: 6.9209,
  },
  url: "https://lackzentrum-shahbeik.de",
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
        <main>{children}</main>
      </body>
    </html>
  );
}
