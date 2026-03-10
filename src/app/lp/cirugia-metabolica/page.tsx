import type { Metadata } from "next";
import LandingHero from "@/components/lp/LandingHero";
import LandingFAQ from "@/components/lp/LandingFAQ";
import LandingCTA from "@/components/lp/LandingCTA";
import LandingReviews from "@/components/lp/LandingReviews";
import LandingDoctor from "@/components/lp/LandingDoctor";
import LandingTeam from "@/components/lp/LandingTeam";
import LandingProcess from "@/components/lp/LandingProcess";
import LandingObraSocial from "@/components/lp/LandingObraSocial";
import LandingMap from "@/components/lp/LandingMap";

export const metadata: Metadata = {
  title: "Cirugía Metabólica — Tratamiento Quirúrgico para Diabetes Tipo 2",
  description:
    "Cirugía metabólica con el Dr. Pablo Rodríguez. 80% de remisión de diabetes tipo 2. Reducción de riesgo cardiovascular. Consultá gratis por WhatsApp.",
};

const BENEFITS = [
  {
    icon: "heart",
    title: "80% de remisión de diabetes tipo 2",
    description:
      "La cirugía metabólica logra lo que años de medicación no pudieron. Muchos pacientes reducen o eliminan su medicación para diabetes.",
  },
  {
    icon: "shield",
    title: "Reducción del riesgo cardiovascular",
    description:
      "Mejora de hipertensión, dislipidemia y síndrome metabólico. Protección a largo plazo contra eventos cardiovasculares.",
  },
  {
    icon: "sparkles",
    title: "Menos medicación, más calidad de vida",
    description:
      "Normalización del perfil lipídico, reducción de fármacos y una vida con más energía y libertad.",
  },
];

const STATS = [
  { value: "80%", label: "Remisión de diabetes tipo 2" },
  { value: "70%", label: "Mejora de hipertensión" },
  { value: "1.5-2 hs", label: "Duración de la cirugía" },
  { value: "48-72 hs", label: "Internación" },
];

const CANDIDATE_CRITERIA = [
  "Diabetes tipo 2 con mal control metabólico a pesar del tratamiento médico",
  "IMC mayor a 30 con síndrome metabólico",
  "Hipertensión, dislipidemia u otras comorbilidades metabólicas",
  "Pacientes que no logran el control glucémico con medicación convencional",
];

const FAQS = [
  {
    question: "¿Puedo dejar la medicación para la diabetes después de la cirugía?",
    answer:
      "En el 80% de los casos se logra la remisión completa de la diabetes tipo 2, lo que significa que muchos pacientes pueden discontinuar su medicación. Esto se evalúa y supervisa junto con tu endocrinólogo.",
  },
  {
    question: "¿La cirugía metabólica es lo mismo que la cirugía bariátrica?",
    answer:
      "Son similares en técnica pero difieren en objetivo. La cirugía bariátrica busca principalmente la pérdida de peso, mientras que la cirugía metabólica se enfoca en el control de enfermedades metabólicas como la diabetes tipo 2, incluso en pacientes con menor grado de obesidad.",
  },
  {
    question: "¿Qué pasa con mi diabetes después de la cirugía?",
    answer:
      "La mayoría de los pacientes experimentan una mejora drástica de sus niveles de glucosa incluso en los primeros días post-operatorios. El seguimiento incluye control con endocrinólogo y ajuste gradual de medicación.",
  },
  {
    question: "¿Cubre la obra social la cirugía metabólica?",
    answer:
      "Sí, está incluida en el PMO (Programa Médico Obligatorio). La mayoría de obras sociales y prepagas cubren la cirugía metabólica cuando se cumplen los criterios médicos. Nuestro equipo te asesora en todo el proceso.",
  },
  {
    question: "¿Cuánto dura la recuperación?",
    answer:
      "La internación es de 48 a 72 horas. Podés retomar actividades livianas en 1-2 semanas. La cirugía se realiza por vía laparoscópica con mínimas incisiones.",
  },
];

export default function CirugiaMetabolicaLP() {
  return (
    <>
      <LandingHero
        badge="Control Metabólico"
        title="Cirugía Metabólica"
        titleAccent="Tratamiento para Diabetes Tipo 2"
        subtitle="80% de remisión de diabetes tipo 2. Mejora de hipertensión, colesterol y síndrome metabólico. Dr. Pablo Rodríguez y equipo interdisciplinario."
        whatsappMessage="Hola, me interesa una consulta sobre cirugía metabólica para diabetes."
        trackingSource="lp_metabolica"
      />

      {/* Benefits */}
      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-extrabold text-secondary-700 sm:text-4xl">
            ¿Qué puede hacer la cirugía metabólica por vos?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-secondary-500">
            No es solo una cirugía para bajar de peso. Es un tratamiento quirúrgico para controlar enfermedades metabólicas.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {BENEFITS.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-2xl border border-gray-100 bg-gray-50 p-6 text-center"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary-400/10">
                  {benefit.icon === "heart" && (
                    <svg className="h-7 w-7 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                  )}
                  {benefit.icon === "shield" && (
                    <svg className="h-7 w-7 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                    </svg>
                  )}
                  {benefit.icon === "sparkles" && (
                    <svg className="h-7 w-7 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
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

      <LandingDoctor />
      <LandingTeam />

      <LandingProcess />
      <LandingObraSocial />

      {/* Candidate checklist */}
      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-extrabold text-secondary-700 sm:text-4xl">
            ¿Soy candidato/a a la cirugía metabólica?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-secondary-500">
            La cirugía metabólica está indicada para pacientes con:
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
            Si tenés diabetes tipo 2 y no lográs controlarlo con medicación, consultá con nuestro equipo.
          </p>
        </div>
      </section>

      <LandingFAQ faqs={FAQS} />

      <LandingMap />

      <LandingCTA
        title="Recuperá el control de tu diabetes"
        subtitle="Consultá gratis por WhatsApp. Respondemos en menos de 2 horas."
        whatsappMessage="Hola, me interesa una consulta sobre cirugía metabólica para diabetes."
        trackingSource="lp_metabolica_bottom"
      />
    </>
  );
}
