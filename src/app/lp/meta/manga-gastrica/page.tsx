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
  title: "Manga Gástrica — Recuperación Rápida, Resultados Reales",
  description:
    "Manga gástrica con el Dr. Pablo Rodríguez. Recuperación rápida, 50-70% de pérdida de exceso de peso. +250 cirugías, 5.0 estrellas. Reservá tu evaluación gratuita.",
};

const BENEFITS = [
  {
    icon: "bolt",
    title: "Recuperación más rápida",
    description:
      "Cirugía de aproximadamente 1 hora. Sin bypass intestinal, volvés a tu vida antes.",
  },
  {
    icon: "scale",
    title: "Perdé el 50-70% del exceso de peso",
    description:
      "El procedimiento más realizado en el mundo. Resultados excelentes y sostenidos.",
  },
  {
    icon: "shield",
    title: "Menos riesgo nutricional",
    description:
      "Al preservar el tracto intestinal, hay menor riesgo de deficiencia de vitaminas y minerales.",
  },
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
];

export default function MetaMangaGastricaLP() {
  return (
    <>
      <LandingHero
        badge="El Procedimiento Más Elegido"
        title="¿Querés bajar de peso de forma definitiva?"
        titleAccent="La manga gástrica es el primer paso"
        subtitle="Recuperación rápida, sin bypass intestinal. Más de 250 cirugías con 5.0 estrellas en Google. Equipo interdisciplinario que te acompaña todo el proceso."
        whatsappMessage="Hola, vi la publicidad en redes y quiero reservar una evaluación para manga gástrica."
        trackingSource="meta_manga"
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

      <LandingBookingForm
        procedure="manga gástrica"
        trackingSource="meta_manga_form"
      />

      <LandingDoctor />
      <LandingConsultationProof />
      <GoogleReviews />
      <LandingObraSocial />
      <LandingFAQ faqs={FAQS} />

      <LandingCTA
        title="Dá el primer paso hacia tu nueva vida"
        subtitle="Reservá tu evaluación gratuita. Sin compromiso, respondemos en menos de 2 horas."
        whatsappMessage="Hola, vi la publicidad en redes y quiero reservar una evaluación para manga gástrica."
        trackingSource="meta_manga_bottom"
        procedure="manga gástrica"
      />
    </>
  );
}
