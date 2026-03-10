import type { Metadata } from "next";
import LandingHero from "@/components/lp/LandingHero";
import LandingFAQ from "@/components/lp/LandingFAQ";
import LandingCTA from "@/components/lp/LandingCTA";
import LandingReviews from "@/components/lp/LandingReviews";

export const metadata: Metadata = {
  title: "Bypass Gástrico en Argentina — Consulta Gratuita",
  description:
    "Bypass gástrico con el Dr. Pablo Rodríguez. Técnica gold standard, 60-80% de pérdida de exceso de peso. Más de 250 cirugías realizadas. Consultá gratis por WhatsApp.",
};

const BENEFITS = [
  {
    icon: "scale",
    title: "60-80% de pérdida de exceso de peso",
    description:
      "Resultados sostenidos a largo plazo. La técnica gold standard en cirugía bariátrica a nivel mundial.",
  },
  {
    icon: "heart",
    title: "80% de remisión de diabetes tipo 2",
    description:
      "Mejora significativa de comorbilidades: hipertensión, apnea del sueño, colesterol alto y más.",
  },
  {
    icon: "clock",
    title: "Cirugía laparoscópica de 1.5-2 horas",
    description:
      "Técnica mínimamente invasiva. Internación de 48-72 horas y recuperación rápida.",
  },
];

const STATS = [
  { value: "60-80%", label: "Pérdida de exceso de peso" },
  { value: "1.5-2 hs", label: "Duración de la cirugía" },
  { value: "48-72 hs", label: "Internación" },
  { value: "80%", label: "Remisión de diabetes" },
];

const CANDIDATE_CRITERIA = [
  "IMC (Índice de Masa Corporal) mayor a 40",
  "IMC mayor a 35 con comorbilidades (diabetes, hipertensión, apnea del sueño)",
  "Haber intentado métodos convencionales sin éxito sostenido",
  "Compromiso con el seguimiento post-quirúrgico",
];

const FAQS = [
  {
    question: "¿Cuánto peso voy a perder con el bypass gástrico?",
    answer:
      "En promedio, los pacientes pierden entre el 60% y 80% de su exceso de peso durante los primeros 12 a 18 meses. Los resultados se mantienen a largo plazo con el seguimiento adecuado de nuestro equipo interdisciplinario.",
  },
  {
    question: "¿La obra social cubre el bypass gástrico?",
    answer:
      "Sí, el bypass gástrico está incluido en el Programa Médico Obligatorio (PMO). La mayoría de las obras sociales y prepagas cubren el procedimiento cuando se cumplen los requisitos médicos. Te ayudamos con toda la gestión.",
  },
  {
    question: "¿Cuánto dura la recuperación?",
    answer:
      "La internación es de 48 a 72 horas. Podés retomar actividades livianas en 1-2 semanas y actividades normales en 4-6 semanas. La cirugía se realiza por vía laparoscópica, lo que acelera significativamente la recuperación.",
  },
  {
    question: "¿El bypass gástrico es reversible?",
    answer:
      "Si bien técnicamente es posible revertirlo, el bypass gástrico se considera un procedimiento permanente. En la consulta evaluamos tu caso particular para determinar si es el procedimiento más adecuado para vos.",
  },
  {
    question: "¿Cómo es la alimentación después del bypass?",
    answer:
      "Nuestras nutricionistas te guían en cada etapa: líquidos claros las primeras semanas, luego purés, alimentos blandos y finalmente alimentación normal adaptada. El seguimiento nutricional es parte integral de nuestro servicio.",
  },
];

export default function BypassGastricoLP() {
  return (
    <>
      <LandingHero
        badge="Gold Standard en Cirugía Bariátrica"
        title="Bypass Gástrico en Argentina"
        titleAccent="con el Dr. Pablo Rodríguez"
        subtitle="La técnica más efectiva para pérdida de peso sostenida. Equipo interdisciplinario completo. Más de 250 cirugías realizadas con 5.0 estrellas en Google."
        whatsappMessage="Hola, me interesa una consulta sobre bypass gástrico."
        trackingSource="lp_bypass"
      />

      {/* Benefits */}
      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-extrabold text-secondary-700 sm:text-4xl">
            ¿Por qué el bypass gástrico?
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {BENEFITS.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-2xl border border-gray-100 bg-gray-50 p-6 text-center"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary-400/10">
                  {benefit.icon === "scale" && (
                    <svg className="h-7 w-7 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z" />
                    </svg>
                  )}
                  {benefit.icon === "heart" && (
                    <svg className="h-7 w-7 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                  )}
                  {benefit.icon === "clock" && (
                    <svg className="h-7 w-7 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  )}
                </div>
                <h3 className="text-lg font-bold text-secondary-700">{benefit.title}</h3>
                <p className="mt-2 text-sm text-secondary-500 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats row */}
      <section className="bg-secondary-800 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-extrabold text-white">{stat.value}</p>
                <p className="mt-1 text-sm text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LandingReviews />

      {/* Candidate checklist */}
      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-extrabold text-secondary-700 sm:text-4xl">
            ¿Soy candidato/a al bypass gástrico?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-secondary-500">
            Generalmente, los candidatos cumplen con alguno de estos criterios:
          </p>
          <div className="mt-10 space-y-4">
            {CANDIDATE_CRITERIA.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-gray-100 bg-gray-50 p-4">
                <svg className="mt-0.5 h-6 w-6 flex-shrink-0 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <span className="text-secondary-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-secondary-500">
            Cada caso se evalúa individualmente. Consultá con nuestro equipo para una evaluación personalizada.
          </p>
        </div>
      </section>

      <LandingFAQ faqs={FAQS} />

      <LandingCTA
        title="Dá el primer paso hacia tu nueva vida"
        subtitle="Consultá gratis por WhatsApp. Respondemos en menos de 2 horas."
        whatsappMessage="Hola, me interesa una consulta sobre bypass gástrico."
        trackingSource="lp_bypass_bottom"
      />
    </>
  );
}
