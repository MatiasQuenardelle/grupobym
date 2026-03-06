import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Cirugia Bariatrica en Argentina`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "cirugia bariatrica",
    "cirugia bariatrica argentina",
    "bypass gastrico",
    "manga gastrica",
    "cirugia metabolica",
    "cirugia bariatrica precio",
    "mejor cirujano bariatrico argentina",
    "cirugia bariatrica paraguay",
    "cirugia bariatrica desde brasil",
    "endoscopia",
    "obesidad tratamiento",
  ],
  authors: [{ name: "GrupoByM" }],
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Cirugia Bariatrica en Argentina`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Cirugia Bariatrica en Argentina`,
    description: SITE_DESCRIPTION,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      "es-AR": SITE_URL,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "GrupoByM",
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    medicalSpecialty: "Bariatric Surgery",
    availableService: [
      {
        "@type": "MedicalProcedure",
        name: "Bypass Gastrico",
        procedureType: "Surgical",
      },
      {
        "@type": "MedicalProcedure",
        name: "Manga Gastrica",
        procedureType: "Surgical",
      },
      {
        "@type": "MedicalProcedure",
        name: "Cirugia Metabolica",
        procedureType: "Surgical",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "50",
      bestRating: "5",
    },
  };

  return (
    <html lang="es" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
