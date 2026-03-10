import type { Metadata } from "next";
import LandingHero from "@/components/lp/LandingHero";
import LandingFAQ from "@/components/lp/LandingFAQ";
import LandingCTA from "@/components/lp/LandingCTA";
import GoogleReviews from "@/components/sections/GoogleReviews";
import LandingDoctor from "@/components/lp/LandingDoctor";
import LandingTeam from "@/components/lp/LandingTeam";
import LandingProcess from "@/components/lp/LandingProcess";
import LandingObraSocial from "@/components/lp/LandingObraSocial";
import LandingMap from "@/components/lp/LandingMap";

export const metadata: Metadata = {
  title: "Manga Gástrica en Argentina — El Procedimiento Más Realizado",
  description:
    "Manga gástrica con el Dr. Pablo Rodríguez. Procedimiento más realizado en cirugía bariátrica. Recuperación rápida, 50-70% de pérdida de exceso de peso. Consultá gratis.",
};

const BENEFITS = [
  {
    icon: "bolt",
    title: "Recuperación más rápida",
    description:
      "Cirugía de aproximadamente 1 hora. Sin bypass intestinal, con una recuperación más ágil que otras técnicas.",
  },
  {
    icon: "scale",
    title: "50-70% de pérdida de exceso de peso",
    description:
      "Resultados excelentes y sostenidos. El procedimiento más realizado en cirugía bariátrica a nivel mundial.",
  },
  {
    icon: "shield",
    title: "Menor riesgo de deficiencias nutricionales",
    description:
      "Al preservar el tracto intestinal completo, hay menor riesgo de malabsorción de vitaminas y minerales.",
  },
];

const CANDIDATE_CRITERIA = [
  "IMC (Índice de Masa Corporal) mayor a 40",
  "IMC mayor a 35 con comorbilidades (diabetes, hipertensión, apnea del sueño)",
  "Haber intentado métodos convencionales sin éxito sostenido",
  "Compromiso con el seguimiento post-quirúrgico",
];

const FAQS = [
  {
    question: "¿Cuál es la diferencia entre manga gástrica y bypass?",
    answer:
      "La manga gástrica reduce el tamaño del estómago sin desvío intestinal, actuando principalmente por restricción y reducción de la hormona del hambre (grelina). El bypass además genera malabsorción. Tu cirujano te orientará sobre cuál es mejor para tu caso.",
  },
  {
    question: "¿Voy a tener hambre después de la manga gástrica?",
    answer:
      "No. Al remover la parte del estómago que produce grelina (la hormona del hambre), la sensación de apetito se reduce significativamente. Esto facilita la adaptación a porciones más pequeñas.",
  },
  {
    question: "¿La obra social cubre la manga gástrica?",
    answer:
      "Sí, la manga gástrica está incluida en el Programa Médico Obligatorio (PMO). La mayoría de las obras sociales y prepagas cubren el procedimiento. Te ayudamos con toda la gestión administrativa.",
  },
  {
    question: "¿Puedo quedar embarazada después de la manga gástrica?",
    answer:
      "Sí, absolutamente. Se recomienda esperar entre 12 y 18 meses después de la cirugía para buscar un embarazo, permitiendo que el cuerpo se estabilice. Muchas pacientes tienen embarazos saludables después de la cirugía.",
  },
  {
    question: "¿Cuánto dura la recuperación?",
    answer:
      "La internación es de aproximadamente 48 horas. Podés retomar actividades livianas en 1-2 semanas y actividades normales en 4-6 semanas. Al ser un procedimiento más simple que el bypass, la recuperación tiende a ser más rápida.",
  },
];

export default function MangaGastricaLP() {
  return (
    <>
      <LandingHero
        badge="El Procedimiento Más Realizado"
        title="Manga Gástrica en Argentina"
        titleAccent="con el Dr. Pablo Rodríguez"
        subtitle="Procedimiento mínimamente invasivo con recuperación rápida. Equipo interdisciplinario completo. Más de 250 cirugías realizadas con 5.0 estrellas en Google."
        whatsappMessage="Hola, me interesa una consulta sobre manga gástrica."
        trackingSource="lp_manga"
      />

      {/* Benefits */}
      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-extrabold text-secondary-700 sm:text-4xl">
            ¿Por qué la manga gástrica?
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {BENEFITS.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-2xl border border-gray-100 bg-gray-50 p-6 text-center"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary-400/10">
                  {benefit.icon === "bolt" && (
                    <svg className="h-7 w-7 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                    </svg>
                  )}
                  {benefit.icon === "scale" && (
                    <svg className="h-7 w-7 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z" />
                    </svg>
                  )}
                  {benefit.icon === "shield" && (
                    <svg className="h-7 w-7 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
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

      <GoogleReviews />

      <LandingDoctor />
      <LandingTeam />
      <LandingProcess />
      <LandingObraSocial />

      {/* Candidate checklist */}
      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-extrabold text-secondary-700 sm:text-4xl">
            ¿Soy candidato/a a la manga gástrica?
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

      <LandingMap />

      <LandingCTA
        title="Dá el primer paso hacia tu nueva vida"
        subtitle="Consultá gratis por WhatsApp. Respondemos en menos de 2 horas."
        whatsappMessage="Hola, me interesa una consulta sobre manga gástrica."
        trackingSource="lp_manga_bottom"
      />
    </>
  );
}
