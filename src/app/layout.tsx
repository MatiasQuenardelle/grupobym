import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import StickyMobileCTA from "@/components/sections/StickyMobileCTA";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import {
  SITE_NAME,
  SITE_URL,
  SITE_DESCRIPTION,
  DOCTOR_NAME,
} from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `GrupoByM | Cirugía Bariátrica en Argentina - ${DOCTOR_NAME}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "cirugía bariátrica",
    "cirugía bariátrica argentina",
    "bypass gástrico",
    "manga gástrica",
    "cirugía metabólica",
    "cirugía bariátrica precio",
    "mejor cirujano bariátrico argentina",
    "cirugía bariátrica paraguay",
    "cirugía bariátrica desde brasil",
    "endoscopia",
    "obesidad tratamiento",
  ],
  authors: [{ name: "GrupoByM" }],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `GrupoByM | Cirugía Bariátrica en Argentina - ${DOCTOR_NAME}`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `GrupoByM | Cirugía Bariátrica en Argentina - ${DOCTOR_NAME}`,
    description: SITE_DESCRIPTION,
    images: ["/opengraph-image"],
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
  other: {
    "geo.region": "AR-H",
    "geo.placename": "Resistencia, Chaco",
    "geo.position": "-27.4474037;-58.9791898",
    ICBM: "-27.4474037, -58.9791898",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      name: "GrupoByM",
      description: SITE_DESCRIPTION,
      url: SITE_URL,
      telephone: "+5493644305110",
      email: "contacto@grupobym.com.ar",
      image: `${SITE_URL}/opengraph-image`,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Carlos Pellegrini 677",
        addressLocality: "Resistencia",
        addressRegion: "Chaco",
        postalCode: "H3500",
        addressCountry: "AR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -27.4474037,
        longitude: -58.9791898,
      },
      sameAs: [
        "https://www.instagram.com/grupobymoficial",
        "https://www.facebook.com/grupobym",
        "https://www.youtube.com/@grupobym",
      ],
      medicalSpecialty: "Bariatric Surgery",
      availableService: [
        {
          "@type": "MedicalProcedure",
          name: "Bypass Gástrico",
          procedureType: "Surgical",
        },
        {
          "@type": "MedicalProcedure",
          name: "Manga Gástrica",
          procedureType: "Surgical",
        },
        {
          "@type": "MedicalProcedure",
          name: "Cirugía Metabólica",
          procedureType: "Surgical",
        },
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        reviewCount: "50",
        bestRating: "5",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "GrupoByM",
      url: SITE_URL,
      potentialAction: {
        "@type": "SearchAction",
        target: `${SITE_URL}/blog?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
  ];

  return (
    <html lang="es-AR" className={inter.variable}>
      <head>
        <GoogleAnalytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-lg focus:bg-primary-400 focus:px-4 focus:py-2 focus:text-white focus:outline-none"
        >
          Saltar al contenido principal
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppButton />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
