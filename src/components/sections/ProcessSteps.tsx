"use client";

import Button from "@/components/ui/Button";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { WHATSAPP_URL } from "@/lib/constants";
import { trackWhatsAppClick } from "@/lib/tracking";

const steps = [
  {
    number: "1",
    title: "Consulta inicial gratuita",
    description:
      "Escribinos por WhatsApp y te respondemos en menos de 2 horas. Evaluamos tu caso sin compromiso.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
      </svg>
    ),
  },
  {
    number: "2",
    title: "Evaluacion interdisciplinaria",
    description:
      "Te evaluamos con cirujano, nutricionista y psicologa para determinar el mejor procedimiento.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
  },
  {
    number: "3",
    title: "Preparación pre-quirúrgica",
    description:
      "Te preparamos de forma integral para que llegues en las mejores condiciones al procedimiento.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15a2.25 2.25 0 0 1 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25Z" />
      </svg>
    ),
  },
  {
    number: "4",
    title: "Cirugia laparoscópica",
    description:
      "Procedimiento mínimamente invasivo con internación breve. Te explicamos todo en la consulta.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    ),
  },
  {
    number: "5",
    title: "Seguimiento de por vida",
    description:
      "Controles periódicos con todo el equipo. Tu evolución no termina en el quirofano.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
      </svg>
    ),
  },
];

export default function ProcessSteps() {
  return (
    <SectionWrapper id="proceso" bg="white">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary-400">
          Tu proceso paso a paso
        </p>
        <h2 className="mt-2 text-3xl font-extrabold text-secondary-700 sm:text-4xl">
          De la consulta a tu nueva vida en 5 pasos
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-secondary-500">
          Te acompañamos en cada etapa. Desde el primer mensaje por WhatsApp
          hasta tus controles post-operatorios.
        </p>
      </div>

      <div className="relative mt-12">
        {/* Connection line - desktop */}
        <div className="absolute left-1/2 top-8 hidden h-[calc(100%-4rem)] w-px -translate-x-1/2 bg-gradient-to-b from-primary-200 via-primary-300 to-primary-200 lg:block" />

        <div className="space-y-6 lg:space-y-0">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`relative flex flex-col items-center gap-4 lg:flex-row lg:gap-8 ${
                i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } ${i > 0 ? "lg:mt-0" : ""}`}
            >
              {/* Content card */}
              <div className={`w-full lg:w-5/12 ${i % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all hover:border-primary-200 hover:shadow-md">
                  <div className={`flex items-center gap-3 ${i % 2 === 0 ? "lg:flex-row-reverse" : ""}`}>
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-400">
                      {step.icon}
                    </div>
                    <h3 className="text-lg font-bold text-secondary-700">{step.title}</h3>
                  </div>
                  <p className={`mt-2 text-sm text-secondary-500 leading-relaxed ${i % 2 === 0 ? "lg:text-right" : ""}`}>
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Center number */}
              <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary-400 text-lg font-bold text-white shadow-lg shadow-primary-400/30">
                {step.number}
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden w-5/12 lg:block" />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 text-center">
        <Button
          as="a"
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          variant="whatsapp"
          onClick={() => trackWhatsAppClick("process_steps")}
        >
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Empeza con el Paso 1 — Consulta
        </Button>
        <p className="mt-2 text-xs text-secondary-400">
          Respondemos en menos de 2 horas
        </p>
      </div>
    </SectionWrapper>
  );
}
