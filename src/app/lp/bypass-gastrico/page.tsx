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
  title: "Bypass Gástrico en Argentina — Dr. Pablo Rodríguez",
  description:
    "Bypass gástrico con el Dr. Pablo Rodríguez. Técnica gold standard en cirugía bariátrica. Más de 250 cirugías realizadas. Reservá tu turno.",
};

const BENEFITS = [
  {
    icon: "scale",
    title: "Pérdida de peso sostenida a largo plazo",
    description:
      "La técnica gold standard en cirugía bariátrica a nivel mundial. Resultados que cambian vidas.",
  },
  {
    icon: "heart",
    title: "Mejora significativa de enfermedades asociadas",
    description:
      "Diabetes, hipertensión, apnea del sueño y más. Tu salud puede mejorar de formas que no imaginás.",
  },
  {
    icon: "clock",
    title: "Técnica mínimamente invasiva",
    description:
      "Cirugía laparoscópica con recuperación rápida. Te explicamos todo el proceso en la consulta.",
  },
];

const FAQS = [
  {
    question: "¿La obra social cubre el bypass gástrico?",
    answer:
      "Sí, la mayoría de las obras sociales y prepagas cubren el procedimiento. Te ayudamos con toda la gestión administrativa. Consultá con nuestro equipo para verificar tu cobertura.",
  },
  {
    question: "¿Cómo sé si soy candidato/a para un bypass gástrico?",
    answer:
      "Cada caso es único y requiere una evaluación personalizada con nuestro equipo. En la consulta evaluamos tu situación particular y te orientamos sobre el mejor camino para vos.",
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
        whatsappMessage="Hola, quiero reservar un turno para bypass gástrico."
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

      <BmiCalculator procedure="bypass gástrico" />

      <LandingPriceInfo procedure="bypass gástrico" />

      <LandingBookingForm
        procedure="bypass gástrico"
        trackingSource="lp_bypass_form"
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
        title="Dá el primer paso hacia tu nueva vida"
        subtitle="Reservá tu turno. Sin compromiso, respondemos en menos de 2 horas."
        whatsappMessage="Hola, quiero reservar un turno para bypass gástrico."
        trackingSource="lp_bypass_bottom"
        procedure="bypass gástrico"
      />
    </>
  );
}
