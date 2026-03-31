"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import { WHATSAPP_URL } from "@/lib/constants";
import { trackWhatsAppClick } from "@/lib/tracking";

const benefits = [
  {
    title: "Tu salud mejora",
    description:
      "Condiciones asociadas al peso pueden mejorar de formas que no imaginás.",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    ),
  },
  {
    title: "Tu energía vuelve",
    description:
      "Recuperás la movilidad, la energía y las ganas de hacer todo lo que antes no podías.",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
      </svg>
    ),
  },
  {
    title: "Tu vida cambia",
    description:
      "No cambia solo tu cuerpo. Cambia cómo te sentís, cómo te relacionás y cómo vivís.",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
      </svg>
    ),
  },
];

export default function Resultados() {
  return (
    <SectionWrapper id="resultados" bg="white">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary-400">
          Resultados reales
        </p>
        <h2 className="mt-2 text-3xl font-extrabold text-secondary-700 sm:text-4xl">
          El verdadero exito se mide en calidad de vida
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-secondary-500">
          Después de la cirugía, nuestros pacientes experimentan cambios que
          van mucho más alla de la balanza. Los cambios reales empiezan cuando
          el cuerpo sana y la vida vuelve a sentirse propia.
        </p>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
        {benefits.map((b) => (
          <div key={b.title} className="flex items-start gap-4 rounded-2xl bg-gray-50 p-4 sm:bg-transparent sm:p-0 sm:rounded-none">
            <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-primary-50 text-primary-400">
              {b.icon}
            </div>
            <div>
              <h3 className="font-bold text-secondary-700">{b.title}</h3>
              <p className="mt-1 text-sm text-secondary-500 leading-relaxed">
                {b.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-2xl bg-primary-50 p-8 md:p-10 text-center">
        <p className="text-lg font-semibold text-secondary-700">
          El seguimiento es clave para mantener tus resultados en el tiempo.
        </p>
        <p className="mt-2 text-secondary-500">
          Te acompañamos de por vida para asegurar que tu transformación sea sostenible.
        </p>
        <div className="mt-6">
          <Button
            as="a"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            variant="whatsapp"
            onClick={() => trackWhatsAppClick("resultados")}
          >
            Consulta por WhatsApp
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
