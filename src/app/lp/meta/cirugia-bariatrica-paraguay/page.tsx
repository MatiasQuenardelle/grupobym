"use client";

import { useState } from "react";
import Image from "next/image";
import LandingFAQ from "@/components/lp/LandingFAQ";
import LandingConsultationProof from "@/components/lp/LandingConsultationProof";
import GoogleReviews from "@/components/sections/GoogleReviews";
import { WHATSAPP_NUMBER, STATS } from "@/lib/constants";
import { trackWhatsAppClick, trackFormSubmit } from "@/lib/tracking";

const WHATSAPP_PY_MESSAGE =
  "Hola, soy de Paraguay, vi la publicidad en redes y me interesa consultar sobre cirugía bariátrica en Argentina.";
const WHATSAPP_PY_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_PY_MESSAGE)}`;

const INCLUDED_ITEMS = [
  "Cirugía bariátrica (bypass gástrico o manga gástrica)",
  "Equipo quirúrgico completo + anestesia",
  "Internación de 48-72 horas",
  "Seguimiento completo por 1 año",
  "Seguimiento nutricional personalizado",
  "Acompañamiento psicológico",
  "Traslado desde Asunción hasta la clínica (Uber incluido)",
  "Insumos y materiales quirúrgicos",
];

const PROCESS_STEPS = [
  {
    step: "1",
    title: "Consulta virtual desde Paraguay",
    description:
      "Evaluamos tu caso por videollamada. Sin necesidad de viajar para la primera consulta.",
  },
  {
    step: "2",
    title: "Estudios en tu ciudad",
    description:
      "Realizás los estudios pre-quirúrgicos en Paraguay. Te indicamos exactamente qué necesitás.",
  },
  {
    step: "3",
    title: "Viaje a Resistencia (5-7 días)",
    description:
      "Te buscamos en Asunción con Uber y te llevamos directo a la clínica.",
  },
];

const FAQS = [
  {
    question: "¿Necesito visa para operarme en Argentina?",
    answer:
      "No. Los ciudadanos paraguayos no necesitan visa para ingresar a Argentina. Solo necesitás tu cédula de identidad vigente.",
  },
  {
    question: "¿Cuántos días tengo que estar en Resistencia?",
    answer:
      "Entre 5 y 7 días en total: consulta pre-quirúrgica, cirugía, internación de 48-72 horas y control post-operatorio antes de volver a Paraguay.",
  },
  {
    question: "¿El precio incluye todo?",
    answer:
      "Sí. El precio incluye cirugía, equipo quirúrgico, anestesia, internación, insumos, seguimiento completo por 1 año (nutricional y psicológico) y hasta el traslado desde Asunción. Sin costos ocultos.",
  },
];

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function MetaParaguayBookingForm() {
  const [name, setName] = useState("");
  const [preferredDate, setPreferredDate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const dateText = preferredDate ? `Prefiero turno: ${preferredDate}` : "Sin preferencia de fecha";
    const message = [
      "Hola, soy de Paraguay, vi la publicidad en redes y quiero reservar un turno para cirugía bariátrica.",
      `Nombre: ${name}`,
      dateText,
    ].join("\n");
    trackFormSubmit();
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="reservar" className="py-16 md:py-20 bg-white">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border-2 border-primary-400 bg-white p-8 shadow-xl shadow-primary-400/10">
          <div className="text-center mb-8">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary-400/10">
              <svg className="h-7 w-7 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
              </svg>
            </div>
            <h2 className="text-2xl font-extrabold text-secondary-700 sm:text-3xl">
              Reservá tu Turno Virtual
            </h2>
            <p className="mt-2 text-secondary-500">
              La primera consulta es por videollamada, sin necesidad de viajar. Completá tus datos y te contactamos.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="mpy-name" className="block text-sm font-medium text-secondary-700 mb-1.5">Nombre completo</label>
              <input id="mpy-name" type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Tu nombre" className="w-full rounded-xl border border-gray-300 px-4 py-3 text-secondary-700 placeholder-gray-400 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400/20" />
            </div>
            <div>
              <label htmlFor="mpy-date" className="block text-sm font-medium text-secondary-700 mb-1.5">Preferencia de fecha <span className="text-gray-400 font-normal">(opcional)</span></label>
              <input id="mpy-date" type="text" value={preferredDate} onChange={(e) => setPreferredDate(e.target.value)} placeholder="Ej: semana que viene, lunes a viernes, etc." className="w-full rounded-xl border border-gray-300 px-4 py-3 text-secondary-700 placeholder-gray-400 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400/20" />
            </div>
            <button type="submit" className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-[#25D366]/25 transition-all hover:bg-[#20BD5A] active:scale-[0.98]">
              <WhatsAppIcon className="h-5 w-5" />
              Reservar Evaluación por WhatsApp
            </button>
          </form>
          <div className="mt-6 flex items-center justify-center gap-4 text-xs text-secondary-400">
            <div className="flex items-center gap-1.5">
              <svg className="h-4 w-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
              Consulta virtual
            </div>
            <div className="flex items-center gap-1.5">
              <svg className="h-4 w-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
              Sin compromiso
            </div>
            <div className="flex items-center gap-1.5">
              <svg className="h-4 w-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
              Respuesta en &lt;2 hs
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MetaParaguayFinalCTA() {
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = [
      "Hola, soy de Paraguay, vi la publicidad en redes y quiero reservar un turno para cirugía bariátrica.",
      `Nombre: ${name}`,
    ].join("\n");
    trackFormSubmit();
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="bg-primary-50 py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-secondary-700 sm:text-4xl">
            Cambiá tu vida desde Paraguay
          </h2>
          <p className="mt-4 text-lg text-secondary-500">
            La misma cirugía, el mismo seguimiento completo, a mitad de precio.
            Reservá tu turno virtual.
          </p>
        </div>
        <div className="mt-8 rounded-2xl bg-white p-6 shadow-lg">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:flex-row sm:items-end">
            <div className="flex-1">
              <label htmlFor="mpy-cta-name" className="block text-sm font-medium text-secondary-700 mb-1">Nombre</label>
              <input id="mpy-cta-name" type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Tu nombre" className="w-full rounded-xl border border-gray-300 px-4 py-3 text-secondary-700 placeholder-gray-400 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400/20" />
            </div>
            <button type="submit" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#25D366] px-6 py-3 text-base font-semibold text-white shadow-lg shadow-[#25D366]/25 transition-all hover:bg-[#20BD5A] active:scale-[0.98]">
              <WhatsAppIcon className="h-5 w-5" />
              Reservar Evaluación
            </button>
          </form>
        </div>
        <p className="mt-4 text-center text-sm text-secondary-400">
          Dr. Pablo Rodríguez · Más de {STATS.surgeries} cirugías · {STATS.rating} estrellas en Google
        </p>
      </div>
    </section>
  );
}

export default function MetaParaguayLP() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-secondary-800 pt-8 pb-16 md:pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary-900 via-secondary-800 to-primary-900/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-400/10 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center lg:text-left lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div className="py-8 lg:py-16">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-400/30 bg-primary-400/10 px-4 py-1.5">
                <span className="h-2 w-2 rounded-full bg-primary-400 animate-pulse" />
                <span className="text-sm font-medium text-primary-300">
                  Pacientes de Paraguay
                </span>
              </div>

              <h1 className="text-balance text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                ¿Buscás cirugía bariátrica?{" "}
                <span className="bg-gradient-to-r from-primary-300 to-primary-400 bg-clip-text text-transparent">
                  En Argentina cuesta la mitad
                </span>
              </h1>

              <p className="mt-6 text-lg text-gray-300 md:text-xl">
                Todo incluido: cirugía, seguimiento por 1 año, nutricionista,
                psicóloga y el Uber desde Asunción. A mitad de precio que en Paraguay.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
                <a
                  href="#reservar"
                  className="inline-flex items-center gap-2 rounded-full bg-primary-400 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-primary-400/25 transition-all hover:bg-primary-500 active:scale-[0.98]"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                  </svg>
                  Reservá tu Turno
                </a>
                <a
                  href={WHATSAPP_PY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick("meta_paraguay_hero")}
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-base font-medium text-white transition-all hover:bg-white/10 active:scale-[0.98]"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Escribinos por WhatsApp
                </a>
              </div>

              <p className="mt-3 text-center text-xs text-gray-400 lg:text-left">
                Sin compromiso · Respondemos en menos de 2 horas
              </p>

              {/* Trust stats */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-6 lg:justify-start lg:gap-8">
                <div className="text-center lg:text-left">
                  <p className="text-2xl font-bold text-white">{STATS.surgeries}</p>
                  <p className="text-xs text-gray-400">Cirugías realizadas</p>
                </div>
                <div className="h-10 w-px bg-white/15" />
                <div className="text-center lg:text-left">
                  <div className="flex items-center justify-center gap-1 lg:justify-start">
                    <span className="text-2xl font-bold text-white">{STATS.rating}</span>
                    <div className="flex text-accent-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-gray-400">Google Reviews</p>
                </div>
                <div className="h-10 w-px bg-white/15" />
                <div className="text-center lg:text-left">
                  <p className="text-2xl font-bold text-white">50%</p>
                  <p className="text-xs text-gray-400">Ahorro vs. Paraguay</p>
                </div>
              </div>
            </div>

            {/* Doctor image */}
            <div className="relative mx-auto hidden w-full max-w-lg lg:block">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-primary-400/20 to-primary-300/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl">
                <Image
                  src="/images/pablo-rodriguez.png"
                  alt="Dr. Pablo Rodríguez - Cirujano Bariátrico"
                  width={600}
                  height={750}
                  className="h-auto w-full object-cover"
                  sizes="50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-extrabold text-secondary-700 sm:text-4xl">
            Todo incluido, sin costos ocultos
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-secondary-500">
            Por la mitad de lo que cuesta en Paraguay, con más servicios incluidos.
          </p>

          <div className="mt-12 mx-auto max-w-2xl">
            <div className="rounded-2xl border-2 border-primary-400 bg-white p-6 shadow-xl shadow-primary-400/10">
              <ul className="space-y-3 text-secondary-700">
                {INCLUDED_ITEMS.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center">
            <a
              href="#reservar"
              className="inline-flex items-center gap-2 rounded-full bg-primary-400 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-primary-400/25 transition-all hover:bg-primary-500 active:scale-[0.98]"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
              </svg>
              Reservá tu turno
            </a>
          </div>
        </div>
      </section>

      {/* Simplified process */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-extrabold text-secondary-700 sm:text-4xl">
            3 pasos simples desde Paraguay
          </h2>

          <div className="mt-12 space-y-8">
            {PROCESS_STEPS.map((step, index) => (
              <div key={step.step} className="flex gap-4 sm:gap-6">
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary-400 text-lg font-bold text-white">
                    {step.step}
                  </div>
                  {index < PROCESS_STEPS.length - 1 && (
                    <div className="mt-2 h-full w-0.5 bg-primary-200" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="text-lg font-bold text-secondary-700">{step.title}</h3>
                  <p className="mt-1 text-secondary-500">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MetaParaguayBookingForm />

      <LandingConsultationProof />
      <GoogleReviews />
      <LandingFAQ faqs={FAQS} />

      <MetaParaguayFinalCTA />
    </>
  );
}
