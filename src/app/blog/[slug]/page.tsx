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
  return getAllSlugs("blog").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const content = getContentBySlug("blog", params.slug);
  if (!content) return {};

  return generatePageMetadata({
    title: content.meta.title,
    description: content.meta.description,
    path: `/blog/${params.slug}`,
  });
}

export default function BlogPage({ params }: Props) {
  const content = getContentBySlug("blog", params.slug);
  if (!content) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: content.meta.title,
    description: content.meta.description,
    datePublished: content.meta.date,
    author: {
      "@type": "Organization",
      name: "GrupoByM",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <SectionWrapper className="pt-28 md:pt-36">
        <nav className="mb-6 text-sm text-secondary-400">
          <a href="/" className="hover:text-primary-400">Inicio</a>
          <span className="mx-2">/</span>
          <span className="text-secondary-400">Blog</span>
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

          <div className="prose mt-10">
            <MDXRemote source={content.content} />
          </div>

          <div className="mt-12 rounded-2xl bg-primary-50 p-8 text-center">
            <h3 className="text-xl font-bold text-secondary-700">
              Tenes dudas? Consultanos sin compromiso
            </h3>
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
