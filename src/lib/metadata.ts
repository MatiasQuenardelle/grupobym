import { Metadata } from "next";
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION } from "./constants";

export function generatePageMetadata({
  title,
  description,
  path = "",
  image = "/opengraph-image",
  type = "website",
}: {
  title: string;
  description?: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
}): Metadata {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const desc = description || SITE_DESCRIPTION;
  const url = `${SITE_URL}${path}`;

  return {
    title: fullTitle,
    description: desc,
    alternates: {
      canonical: url,
      languages: {
        "es-AR": url,
      },
    },
    openGraph: {
      title: fullTitle,
      description: desc,
      url,
      siteName: SITE_NAME,
      locale: "es_AR",
      type,
      images: [
        {
          url: `${SITE_URL}${image}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: desc,
      images: [`${SITE_URL}${image}`],
    },
  };
}
