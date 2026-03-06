import Link from "next/link";
import { generatePageMetadata } from "@/lib/metadata";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { SITE_URL, WHATSAPP_URL, PROCEDURES } from "@/lib/constants";

export const metadata = generatePageMetadata({
  title: "Procedimientos de Cirugia Bariatrica",
  description:
    "Conoce todos los procedimientos de cirugia bariatrica que realizamos: bypass gastrico, manga gastrica, cirugia metabolica y endoscopia. Tecnicas minimamente invasivas con resultados comprobados.",
  path: "/procedimientos",
});

export default function ProcedimientosListingPage() {
  const procedureDetails: Record<string, { benefits: string[]; duration: string; recovery: string }> = {
    "bypass-gastrico": {
      benefits: ["60-80% perdida de exceso de peso", "80% remision de diabetes tipo 2", "Resultados a largo plazo"],
      duration: "1.5-2 horas",
      recovery: "48-72 hs internacion",
    },
    "manga-gastrica": {
      benefits: ["50-70% perdida de exceso de peso", "Procedimiento mas simple", "Menor riesgo de deficiencias nutricionales"],
      duration: "~1 hora",
      recovery: "48 hs internacion",
    },
    "cirugia-metabolica": {
      benefits: ["80% remision de diabetes tipo 2", "Mejora hipertension y dislipidemia", "Reduccion del riesgo cardiovascular"],
      duration: "1.5-2 horas",
      recovery: "48-72 hs internacion",
    },
    endoscopia: {
      benefits: ["Diagnostico preciso", "Procedimiento ambulatorio", "Alta definicion y magnificacion"],
      duration: "15-30 minutos",
      recovery: "Ambulatorio",
    },
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Procedimientos de Cirugia Bariatrica - GrupoByM",
    description: metadata.description,
    url: `${SITE_URL}/procedimientos`,
    isPartOf: {
      "@type": "WebSite",
      name: "GrupoByM",
      url: SITE_URL,
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: PROCEDURES.map((proc, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${SITE_URL}/procedimientos/${proc.slug}`,
        name: proc.title,
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
        name: "Procedimientos",
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
          <span className="text-secondary-600">Procedimientos</span>
        </nav>

        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-secondary-700 sm:text-4xl lg:text-5xl">
            Procedimientos
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-secondary-500">
            Realizamos cirugia bariatrica y metabolica por via laparoscopica con
            tecnicas minimamente invasivas. Cada procedimiento se adapta a las
            necesidades individuales de cada paciente.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {PROCEDURES.map((proc) => {
            const details = procedureDetails[proc.slug];
            return (
              <Link key={proc.slug} href={`/procedimientos/${proc.slug}`}>
                <Card className="h-full group cursor-pointer border border-transparent hover:border-primary-200">
                  <h2 className="text-xl font-bold text-secondary-700 group-hover:text-primary-400 transition-colors">
                    {proc.title}
                  </h2>
                  <p className="mt-2 text-sm text-secondary-500 leading-relaxed">
                    {proc.description}
                  </p>

                  {details && (
                    <div className="mt-4 space-y-3">
                      <div className="flex gap-4 text-xs text-secondary-400">
                        <span>Duracion: {details.duration}</span>
                        <span>|</span>
                        <span>{details.recovery}</span>
                      </div>
                      <ul className="space-y-1">
                        {details.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-start gap-2 text-sm text-secondary-500">
                            <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary-400">
                    Conocer mas
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
            );
          })}
        </div>

        <div className="mt-16 rounded-2xl bg-primary-50 p-8 text-center">
          <h2 className="text-xl font-bold text-secondary-700">
            No sabes cual es el procedimiento indicado para vos?
          </h2>
          <p className="mt-2 text-secondary-500">
            En la consulta evaluamos tu caso de forma integral para recomendarte
            la mejor opcion.
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
