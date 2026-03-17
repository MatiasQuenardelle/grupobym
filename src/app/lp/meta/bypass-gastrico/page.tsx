import type { Metadata } from "next";
import LandingHero from "@/components/lp/LandingHero";
import LandingFAQ from "@/components/lp/LandingFAQ";
import LandingCTA from "@/components/lp/LandingCTA";
import GoogleReviews from "@/components/sections/GoogleReviews";
import LandingDoctor from "@/components/lp/LandingDoctor";
import LandingObraSocial from "@/components/lp/LandingObraSocial";
import LandingBookingForm from "@/components/lp/LandingBookingForm";
import LandingConsultationProof from "@/components/lp/LandingConsultationProof";

export const metadata: Metadata = {
  title: "Bypass Gástrico — Cambiá Tu Vida con el Dr. Pablo Rodríguez",
  description:
    "Perdé entre el 60% y 80% de tu exceso de peso con bypass gástrico. Equipo interdisciplinario, +250 cirugías, 5.0 estrellas en Google. Reservá tu evaluación gratuita.",
};

const BENEFITS = [
  {
    icon: "scale",
    title: "Perdé el 60-80% del exceso de peso",
    description:
      "Resultados reales y sostenidos. La técnica más efectiva en cirugía bariátrica a nivel mundial.",
  },
  {
    icon: "heart",
    title: "Mejorá tu salud desde el primer mes",
    description:
      "80% de remisión de diabetes tipo 2. Mejora de hipertensión, apnea del sueño y colesterol.",
  },
  {
    icon: "clock",
    title: "Volvé a tu rutina en semanas",
    description:
      "Cirugía laparoscópica mínimamente invasiva. Internación de 48-72 horas.",
  },
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
];

export default function MetaBypassGastricoLP() {
  return (
    <>
      <LandingHero
        badge="Transformá Tu Vida"
        title="¿Cansado/a de dietas que no funcionan?"
        titleAccent="El bypass gástrico puede ser tu solución"
        subtitle="Más de 250 cirugías realizadas con 5.0 estrellas en Google. Equipo interdisciplinario que te acompaña antes, durante y después. Evaluación gratuita."
        whatsappMessage="Hola, vi la publicidad en redes y quiero reservar una evaluación para bypass gástrico."
        trackingSource="meta_bypass"
      />

      {/* Benefits */}
      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-extrabold text-secondary-700 sm:text-4xl">
            Resultados que cambian vidas
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

      <LandingBookingForm
        procedure="bypass gástrico"
        trackingSource="meta_bypass_form"
      />

      <LandingDoctor />
      <LandingConsultationProof />
      <GoogleReviews />
      <LandingObraSocial />
      <LandingFAQ faqs={FAQS} />

      <LandingCTA
        title="Dá el primer paso hacia tu nueva vida"
        subtitle="Reservá tu evaluación gratuita. Sin compromiso, respondemos en menos de 2 horas."
        whatsappMessage="Hola, vi la publicidad en redes y quiero reservar una evaluación para bypass gástrico."
        trackingSource="meta_bypass_bottom"
        procedure="bypass gástrico"
      />
    </>
  );
}
