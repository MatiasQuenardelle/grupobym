import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getContentBySlug, getAllSlugs } from "@/lib/mdx";
import { generatePageMetadata } from "@/lib/metadata";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import { WHATSAPP_URL, SITE_URL } from "@/lib/constants";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllSlugs("casos-de-exito").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const content = getContentBySlug("casos-de-exito", params.slug);
  if (!content) return {};

  return generatePageMetadata({
    title: content.meta.title,
    description: content.meta.description,
    path: `/casos-de-exito/${params.slug}`,
    type: "article",
  });
}

export default function CasoDeExitoPage({ params }: Props) {
  const content = getContentBySlug("casos-de-exito", params.slug);
  if (!content) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: content.meta.title,
    description: content.meta.description,
    datePublished: content.meta.date,
    dateModified: content.meta.date,
    url: `${SITE_URL}/casos-de-exito/${params.slug}`,
    inLanguage: "es-AR",
    author: {
      "@type": "Organization",
      name: "GrupoByM",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "GrupoByM",
      url: SITE_URL,
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Casos de Exito",
        item: `${SITE_URL}/casos-de-exito`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: content.meta.title,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <SectionWrapper className="pt-28 md:pt-36">
        <nav className="mb-6 text-sm text-secondary-400" aria-label="Breadcrumb">
          <a href="/" className="hover:text-primary-400">Inicio</a>
          <span className="mx-2">/</span>
          <a href="/casos-de-exito" className="hover:text-primary-400">Casos de Exito</a>
          <span className="mx-2">/</span>
          <span className="text-secondary-600">{content.meta.title}</span>
        </nav>

        <article className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-extrabold text-secondary-700 sm:text-4xl lg:text-5xl">
            {content.meta.title}
          </h1>
          <p className="mt-2 text-sm text-secondary-400">
            Publicado el {new Date(content.meta.date).toLocaleDateString("es-AR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <p className="mt-4 text-lg text-secondary-500">
            {content.meta.description}
          </p>

          <div className="prose mt-10">
            <MDXRemote source={content.content} />
          </div>

          <div className="mt-12 rounded-2xl bg-primary-50 p-8 text-center">
            <h3 className="text-xl font-bold text-secondary-700">
              Queres escribir tu propia historia de exito?
            </h3>
            <p className="mt-2 text-secondary-500">
              El primer paso es una consulta. Estamos para acompanarte.
            </p>
            <div className="mt-4">
              <Button
                as="a"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                variant="whatsapp"
              >
                Consulta por WhatsApp
              </Button>
            </div>
          </div>
        </article>
      </SectionWrapper>
    </>
  );
}
