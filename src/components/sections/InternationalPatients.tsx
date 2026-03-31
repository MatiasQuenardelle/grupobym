"use client";

import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import { WHATSAPP_URL } from "@/lib/constants";
import { trackWhatsAppClick } from "@/lib/tracking";

const benefits = [
  {
    title: "Coordinacion integral",
    description: "Te ayudamos con la organizacion del viaje, alojamiento y traslados.",
  },
  {
    title: "Seguimiento a distancia",
    description: "Controles post-operatorios por videollamada con todo el equipo.",
  },
  {
    title: "Experiencia internaciónal",
    description: "Amplia trayectoria atendiendo pacientes de Paraguay, Brasil y otros países.",
  },
  {
    title: "Comunicacion bilingue",
    description: "Atención en espanol y portugues para pacientes de Brasil.",
  },
];

export default function InternationalPatients() {
  return (
    <SectionWrapper id="internacionales" bg="blue">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-400">
            Pacientes internacionales
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-secondary-700 sm:text-4xl">
            Venis de Paraguay o Brasil? Te acompañamos en todo el proceso
          </h2>
          <p className="mt-4 text-lg text-secondary-500 leading-relaxed">
            Argentina es un destino reconocido mundialmente por la calidad de su
            medicina. En GrupoByM tenemos amplia experiencia recibiendo
            pacientes internacionales y nos encargamos de que tu experiencia sea
            simple y segura.
          </p>

          <div className="mt-8 space-y-3 sm:space-y-5">
            {benefits.map((b) => (
              <div key={b.title} className="flex items-start gap-3 rounded-xl bg-white/60 p-3 sm:bg-transparent sm:p-0 sm:rounded-none">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary-400 text-white">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-secondary-700">{b.title}</p>
                  <p className="text-sm text-secondary-500">{b.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Button
              as="a"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              variant="whatsapp"
              onClick={() => trackWhatsAppClick("international_patients")}
            >
              Consulta desde el exterior
            </Button>
          </div>
        </div>

        {/* Buenos Aires image */}
        <div className="relative mx-auto w-full max-w-md">
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
            <Image
              src="/images/cirugia-equipo.png"
              alt="Equipo quirúrgico de GrupoByM en cirugía bariátrica"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 h-full w-full rounded-2xl border-2 border-primary-200 -z-10" />
        </div>
      </div>
    </SectionWrapper>
  );
}
