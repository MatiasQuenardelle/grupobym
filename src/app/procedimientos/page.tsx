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

const iconMap: Record<string, JSX.Element> = {
  bypass: (
    <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
    </svg>
  ),
  manga: (
    <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
    </svg>
  ),
  metabolica: (
    <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  ),
  endoscopia: (
    <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>
  ),
};

const procedureDetails: Record<
  string,
  { benefits: string[]; duration: string; recovery: string; highlight: string }
> = {
  "bypass-gastrico": {
    benefits: [
      "60-80% perdida de exceso de peso",
      "80% remision de diabetes tipo 2",
      "Resultados a largo plazo",
    ],
    duration: "1.5-2 horas",
    recovery: "48-72 hs internacion",
    highlight: "Gold standard",
  },
  "manga-gastrica": {
    benefits: [
      "50-70% perdida de exceso de peso",
      "Procedimiento mas simple",
      "Menor riesgo de deficiencias nutricionales",
    ],
    duration: "~1 hora",
    recovery: "48 hs internacion",
    highlight: "Mas realizado",
  },
  "cirugia-metabolica": {
    benefits: [
      "80% remision de diabetes tipo 2",
      "Mejora hipertension y dislipidemia",
      "Reduccion del riesgo cardiovascular",
    ],
    duration: "1.5-2 horas",
    recovery: "48-72 hs internacion",
    highlight: "Control metabolico",
  },
  endoscopia: {
    benefits: [
      "Diagnostico preciso",
      "Procedimiento ambulatorio",
      "Alta definicion y magnificacion",
    ],
    duration: "15-30 minutos",
    recovery: "Ambulatorio",
    highlight: "Sin internacion",
  },
};

const comparisonData = [
  { label: "Perdida de exceso de peso", bypass: "60-80%", manga: "50-70%", metabolica: "Variable", endoscopia: "-" },
  { label: "Duracion de la cirugia", bypass: "1.5-2 hs", manga: "~1 hora", metabolica: "1.5-2 hs", endoscopia: "15-30 min" },
  { label: "Internacion", bypass: "48-72 hs", manga: "48 hs", metabolica: "48-72 hs", endoscopia: "Ambulatorio" },
  { label: "Remision diabetes tipo 2", bypass: "Hasta 80%", manga: "Hasta 60%", metabolica: "Hasta 80%", endoscopia: "-" },
  { label: "Tipo de procedimiento", bypass: "Laparoscopico", manga: "Laparoscopico", metabolica: "Laparoscopico", endoscopia: "Endoscopico" },
];

const steps = [
  {
    number: "01",
    title: "Consulta inicial",
    description: "Evaluacion integral con el equipo. Analizamos tu historia clinica, IMC y objetivos.",
  },
  {
    number: "02",
    title: "Estudios pre-quirurgicos",
    description: "Realizamos todos los estudios necesarios, incluyendo endoscopia y analisis de laboratorio.",
  },
  {
    number: "03",
    title: "Cirugia",
    description: "Procedimiento minimamente invasivo por via laparoscopica con tecnologia de ultima generacion.",
  },
  {
    number: "04",
    title: "Seguimiento",
    description: "Acompanamiento interdisciplinario a largo plazo: cirujano, nutricionista y psicologo.",
  },
];

export default function ProcedimientosListingPage() {
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

      {/* Hero */}
      <SectionWrapper className="pt-28 md:pt-36 pb-0 md:pb-0">
        <nav className="mb-6 text-sm text-secondary-400" aria-label="Breadcrumb">
          <a href="/" className="hover:text-primary-400">Inicio</a>
          <span className="mx-2">/</span>
          <span className="text-secondary-600">Procedimientos</span>
        </nav>

        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-400">
            Tecnicas minimamente invasivas
          </p>
          <h1 className="mt-2 text-3xl font-extrabold text-secondary-700 sm:text-4xl lg:text-5xl">
            Nuestros procedimientos
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-secondary-500">
            Realizamos cirugia bariatrica y metabolica por via laparoscopica.
            Cada procedimiento se adapta a las necesidades individuales de cada paciente.
          </p>
        </div>

      </SectionWrapper>

      {/* Procedure Cards */}
      <SectionWrapper>
        <div className="grid gap-8 md:grid-cols-2">
          {PROCEDURES.map((proc) => {
            const details = procedureDetails[proc.slug];
            return (
              <Link key={proc.slug} href={`/procedimientos/${proc.slug}`}>
                <Card className="h-full group cursor-pointer border border-transparent hover:border-primary-200">
                  <div className="flex items-start justify-between">
                    <div className="rounded-xl bg-primary-50 p-3 text-primary-400 transition-transform group-hover:scale-110">
                      {iconMap[proc.icon]}
                    </div>
                    {details && (
                      <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-500">
                        {details.highlight}
                      </span>
                    )}
                  </div>

                  <h2 className="mt-4 text-xl font-bold text-secondary-700 group-hover:text-primary-400 transition-colors">
                    {proc.title}
                  </h2>
                  <p className="mt-2 text-sm text-secondary-500 leading-relaxed">
                    {proc.description}
                  </p>

                  {details && (
                    <div className="mt-4 space-y-3">
                      <div className="flex gap-4 text-xs text-secondary-400">
                        <span className="flex items-center gap-1">
                          <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                          </svg>
                          {details.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21" />
                          </svg>
                          {details.recovery}
                        </span>
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
      </SectionWrapper>

      {/* Comparison Table */}
      <SectionWrapper bg="gray">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-400">
            Compara las opciones
          </p>
          <h2 className="mt-2 text-2xl font-extrabold text-secondary-700 sm:text-3xl">
            Cual procedimiento es mejor para vos?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-secondary-500">
            Cada procedimiento tiene indicaciones especificas. Esta tabla te ayuda a entender las diferencias principales.
          </p>
        </div>

        <div className="mt-10 overflow-x-auto rounded-2xl bg-white shadow-md">
          <table className="w-full min-w-[640px] text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="px-6 py-4 text-left font-semibold text-secondary-500"></th>
                <th className="px-4 py-4 text-center font-bold text-secondary-700">Bypass Gastrico</th>
                <th className="px-4 py-4 text-center font-bold text-secondary-700">Manga Gastrica</th>
                <th className="px-4 py-4 text-center font-bold text-secondary-700">Cirugia Metabolica</th>
                <th className="px-4 py-4 text-center font-bold text-secondary-700">Endoscopia</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, i) => (
                <tr key={row.label} className={i % 2 === 0 ? "bg-gray-50/50" : ""}>
                  <td className="px-6 py-3 font-medium text-secondary-600">{row.label}</td>
                  <td className="px-4 py-3 text-center text-secondary-500">{row.bypass}</td>
                  <td className="px-4 py-3 text-center text-secondary-500">{row.manga}</td>
                  <td className="px-4 py-3 text-center text-secondary-500">{row.metabolica}</td>
                  <td className="px-4 py-3 text-center text-secondary-500">{row.endoscopia}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-center text-xs text-secondary-400">
          La eleccion del procedimiento se define de forma individualizada en la consulta con el equipo.
        </p>
      </SectionWrapper>

      {/* Process Steps */}
      <SectionWrapper>
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-400">
            Tu camino
          </p>
          <h2 className="mt-2 text-2xl font-extrabold text-secondary-700 sm:text-3xl">
            Como es el proceso?
          </h2>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.number} className="relative text-center">
              {i < steps.length - 1 && (
                <div className="absolute right-0 top-8 hidden h-0.5 w-full -translate-y-1/2 bg-primary-100 lg:block" style={{ left: "60%" , width: "80%" }} />
              )}
              <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-400 text-xl font-extrabold text-white">
                {step.number}
              </div>
              <h3 className="mt-4 text-lg font-bold text-secondary-700">{step.title}</h3>
              <p className="mt-2 text-sm text-secondary-500 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper bg="blue" className="pb-16 md:pb-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-extrabold text-secondary-700 sm:text-3xl">
            No sabes cual es el procedimiento indicado para vos?
          </h2>
          <p className="mt-3 text-lg text-secondary-500">
            En la consulta evaluamos tu caso de forma integral para recomendarte
            la mejor opcion. El primer paso es una conversacion.
          </p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button
              as="a"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              variant="whatsapp"
            >
              Consultar por WhatsApp
            </Button>
            <Button
              as="a"
              href="/contacto"
              variant="outline"
            >
              Solicitar turno
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
