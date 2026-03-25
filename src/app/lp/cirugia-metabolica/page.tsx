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
import LandingBookingForm from "@/components/lp/LandingBookingForm";
import LandingPriceInfo from "@/components/lp/LandingPriceInfo";
import LandingConsultationProof from "@/components/lp/LandingConsultationProof";
import BmiCalculator from "@/components/lp/BmiCalculator";

export const metadata: Metadata = {
  title: "Cirugía Metabólica — Tratamiento para Diabetes Tipo 2",
  description:
    "Cirugía metabólica con el Dr. Pablo Rodríguez. Tratamiento quirúrgico para diabetes tipo 2. Reducción de riesgo cardiovascular. Reservá tu turno.",
};

const BENEFITS = [
  {
    icon: "heart",
    title: "Control efectivo de la diabetes tipo 2",
    description:
      "La cirugía metabólica logra lo que años de medicación no pudieron. Muchos pacientes logran resultados que les cambian la vida.",
  },
  {
    icon: "shield",
    title: "Reducción del riesgo cardiovascular",
    description:
      "Mejora de hipertensión, dislipidemia y síndrome metabólico. Protección a largo plazo para tu salud.",
  },
  {
    icon: "sparkles",
    title: "Menos medicación, más calidad de vida",
    description:
      "Una vida con más energía y libertad. En la consulta te explicamos qué podés esperar en tu caso particular.",
  },
];

const FAQS = [
  {
    question: "¿Cubre la obra social la cirugía metabólica?",
    answer:
      "Sí, la mayoría de obras sociales y prepagas cubren la cirugía metabólica. Nuestro equipo te asesora en todo el proceso administrativo. Consultá para verificar tu cobertura.",
  },
  {
    question: "¿La cirugía metabólica puede ayudarme con mi diabetes?",
    answer:
      "Los resultados en el control de la diabetes tipo 2 son muy significativos. Cada caso es diferente — en la consulta evaluamos tu situación particular junto con nuestro equipo interdisciplinario.",
  },
];

export default function CirugiaMetabolicaLP() {
  return (
    <>
      <LandingHero
        badge="Control Metabólico"
        title="Cirugía Metabólica"
        titleAccent="Tratamiento para Diabetes Tipo 2"
        subtitle="Tratamiento quirúrgico para el control de la diabetes tipo 2 y enfermedades metabólicas. Dr. Pablo Rodríguez y equipo interdisciplinario."
        whatsappMessage="Hola, quiero reservar un turno para cirugía metabólica."
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

      <BmiCalculator procedure="cirugía metabólica" />

      <LandingPriceInfo procedure="cirugía metabólica" />

      <LandingBookingForm
        procedure="cirugía metabólica"
        trackingSource="lp_metabolica_form"
      />

      <LandingDoctor />
      <LandingProcess />
      <LandingConsultationProof />
      <GoogleReviews />
      <LandingObraSocial />
      <LandingFAQ faqs={FAQS} />
      <LandingTeam />
      <LandingMap />

      <LandingCTA
        title="Recuperá el control de tu diabetes"
        subtitle="Reservá tu turno. Sin compromiso, respondemos en menos de 2 horas."
        whatsappMessage="Hola, quiero reservar un turno para cirugía metabólica."
        trackingSource="lp_metabolica_bottom"
        procedure="cirugía metabólica"
      />
    </>
  );
}
