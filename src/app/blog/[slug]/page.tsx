import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import {
  getContentBySlug,
  getAllSlugs,
  getRelatedContent,
  estimateReadingTime,
} from "@/lib/mdx";
import { generatePageMetadata } from "@/lib/metadata";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { WHATSAPP_URL, SITE_URL, DOCTOR_NAME } from "@/lib/constants";

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
    type: "article",
    ...(content.meta.image && { image: content.meta.image }),
  });
}

export default function BlogPage({ params }: Props) {
  const content = getContentBySlug("blog", params.slug);
  if (!content) notFound();

  const readingTime = estimateReadingTime(content.content);
  const relatedPosts = getRelatedContent("blog", params.slug, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    headline: content.meta.title,
    description: content.meta.description,
    ...(content.meta.image && { image: `${SITE_URL}${content.meta.image}` }),
    datePublished: content.meta.date,
    dateModified: content.meta.lastModified || content.meta.date,
    url: `${SITE_URL}/blog/${params.slug}`,
    inLanguage: "es-AR",
    author: {
      "@type": "Physician",
      name: DOCTOR_NAME,
      url: `${SITE_URL}/equipo/dr-pablo-rodriguez`,
      medicalSpecialty: "Bariatric Surgery",
      worksFor: {
        "@type": "MedicalBusiness",
        name: "GrupoByM",
        url: SITE_URL,
      },
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
        name: "Blog",
        item: `${SITE_URL}/blog`,
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
          <a href="/blog" className="hover:text-primary-400">Blog</a>
          <span className="mx-2">/</span>
          <span className="text-secondary-600">{content.meta.title}</span>
        </nav>

        <article className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-extrabold text-secondary-700 sm:text-4xl lg:text-5xl">
            {content.meta.title}
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-secondary-400">
            <span>
              Publicado el{" "}
              {new Date(content.meta.date).toLocaleDateString("es-AR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            {content.meta.lastModified && content.meta.lastModified !== content.meta.date && (
              <span>
                Actualizado el{" "}
                {new Date(content.meta.lastModified).toLocaleDateString("es-AR", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            )}
            <span>{readingTime} min de lectura</span>
          </div>

          {content.meta.author && (
            <div className="mt-3 text-sm text-secondary-500">
              Por{" "}
              <Link
                href="/equipo/dr-pablo-rodriguez"
                className="font-semibold text-primary-400 hover:text-primary-500"
              >
                {DOCTOR_NAME}
              </Link>
              {" "}— Cirujano Bariátrico
            </div>
          )}

          {content.meta.image && (
            <div className="relative mt-8 h-48 w-full overflow-hidden rounded-2xl sm:h-64 md:h-72">
              <Image
                src={content.meta.image}
                alt={content.meta.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

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
                Consulta por WhatsApp
              </Button>
            </div>
          </div>

          {relatedPosts.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-secondary-700">
                Artículos relacionados
              </h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {relatedPosts.map((post) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`}>
                    <Card className="h-full group cursor-pointer border border-transparent hover:border-primary-200 overflow-hidden !p-0">
                      {post.image && (
                        <div className="relative h-32 w-full">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}
                      <div className="p-4">
                        <p className="text-xs text-secondary-400 mb-2">
                          {new Date(post.date).toLocaleDateString("es-AR", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </p>
                        <h3 className="text-base font-bold text-secondary-700 group-hover:text-primary-400 transition-colors">
                          {post.title}
                        </h3>
                        <p className="mt-1 text-sm text-secondary-500 leading-relaxed line-clamp-2">
                          {post.description}
                        </p>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>
      </SectionWrapper>
    </>
  );
}
