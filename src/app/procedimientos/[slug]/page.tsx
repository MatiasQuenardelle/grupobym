import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getContentBySlug, getAllSlugs } from "@/lib/mdx";
import { generatePageMetadata } from "@/lib/metadata";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import { WHATSAPP_URL } from "@/lib/constants";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllSlugs("procedimientos").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const content = getContentBySlug("procedimientos", params.slug);
  if (!content) return {};

  return generatePageMetadata({
    title: content.meta.title,
    description: content.meta.description,
    path: `/procedimientos/${params.slug}`,
  });
}

export default function ProcedimientoPage({ params }: Props) {
  const content = getContentBySlug("procedimientos", params.slug);
  if (!content) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: content.meta.title,
    description: content.meta.description,
    procedureType: "Surgical",
    bodyLocation: "Abdomen",
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: "https://grupobym.com.ar",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Procedimientos",
        item: "https://grupobym.com.ar/#procedimientos",
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
        <nav className="mb-6 text-sm text-secondary-400">
          <a href="/" className="hover:text-primary-400">Inicio</a>
          <span className="mx-2">/</span>
          <a href="/#procedimientos" className="hover:text-primary-400">Procedimientos</a>
          <span className="mx-2">/</span>
          <span className="text-secondary-600">{content.meta.title}</span>
        </nav>

        <article className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-extrabold text-secondary-700 sm:text-4xl lg:text-5xl">
            {content.meta.title}
          </h1>
          <p className="mt-4 text-lg text-secondary-500">
            {content.meta.description}
          </p>

          <div className="prose mt-10">
            <MDXRemote source={content.content} />
          </div>

          <div className="mt-12 rounded-2xl bg-primary-50 p-8 text-center">
            <h3 className="text-xl font-bold text-secondary-700">
              Queres saber si sos candidato/a?
            </h3>
            <p className="mt-2 text-secondary-500">
              Solicita una consulta sin compromiso con nuestro equipo.
            </p>
            <div className="mt-4">
              <Button
                as="a"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                variant="whatsapp"
              >
                Consultar por WhatsApp
              </Button>
            </div>
          </div>
        </article>
      </SectionWrapper>
    </>
  );
}
