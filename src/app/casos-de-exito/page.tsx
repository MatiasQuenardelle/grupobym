import Link from "next/link";
import { getAllContent } from "@/lib/mdx";
import { generatePageMetadata } from "@/lib/metadata";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { SITE_URL, WHATSAPP_URL } from "@/lib/constants";

export const metadata = generatePageMetadata({
  title: "Casos de Exito - Historias de Transformacion",
  description:
    "Conoce las historias reales de pacientes que transformaron su vida con cirugia bariatrica en GrupoByM. Resultados comprobados con acompanamiento interdisciplinario.",
  path: "/casos-de-exito",
});

export default function CasosDeExitoListingPage() {
  const stories = getAllContent("casos-de-exito");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Casos de Exito - GrupoByM",
    description: metadata.description,
    url: `${SITE_URL}/casos-de-exito`,
    isPartOf: {
      "@type": "WebSite",
      name: "GrupoByM",
      url: SITE_URL,
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: stories.map((story, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${SITE_URL}/casos-de-exito/${story.slug}`,
        name: story.title,
      })),
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
          <span className="text-secondary-600">Casos de Exito</span>
        </nav>

        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-secondary-700 sm:text-4xl lg:text-5xl">
            Casos de Exito
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-secondary-500">
            Historias reales de pacientes que transformaron su vida con cirugia
            bariatrica. Cada caso es unico, y cada resultado es motivo de
            orgullo para nuestro equipo.
          </p>
        </div>

        {stories.length > 0 ? (
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {stories.map((story) => (
              <Link key={story.slug} href={`/casos-de-exito/${story.slug}`}>
                <Card className="h-full group cursor-pointer border border-transparent hover:border-primary-200">
                  <p className="text-xs text-secondary-400 mb-2">
                    {new Date(story.date).toLocaleDateString("es-AR", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  <h2 className="text-lg font-bold text-secondary-700 group-hover:text-primary-400 transition-colors">
                    {story.title}
                  </h2>
                  <p className="mt-2 text-sm text-secondary-500 leading-relaxed line-clamp-3">
                    {story.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary-400">
                    Leer historia
                    <svg
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </span>
                </Card>
              </Link>
            ))}
          </div>
        ) : (
          <div className="mt-12 text-center">
            <p className="text-secondary-500">
              Proximamente compartiremos mas historias de transformacion.
            </p>
          </div>
        )}

        <div className="mt-16 rounded-2xl bg-primary-50 p-8 text-center">
          <h2 className="text-xl font-bold text-secondary-700">
            Queres escribir tu propia historia de exito?
          </h2>
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
              Consultar por WhatsApp
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
