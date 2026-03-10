"use client";

import { useState } from "react";

const transformations = [
  {
    name: "Vale",
    procedure: "Manga Gástrica",
    timeframe: "1 año",
    weightLost: null,
    quote:
      "Los resultados hablan por si solos. Mi esfuerzo y constancia demostraron que los cambios si son posibles.",
    initial: "V",
  },
  {
    name: "Pedro",
    procedure: "Bypass Gástrico",
    timeframe: "5 meses",
    weightLost: "45.5 kg",
    quote:
      "Cuando se quiere, se puede. Hábitos saludables y entrenamiento constante me ayudaron a romper la barrera de los 100 kg.",
    initial: "P",
  },
  {
    name: "Romi",
    procedure: "Cirugía Bariátrica",
    timeframe: "8 meses",
    weightLost: "35 kg",
    quote:
      "Esta transformación es solo el comienzo de una nueva vida, llena de energía, salud y amor propio.",
    initial: "R",
  },
  {
    name: "Dario",
    procedure: "Manga Gástrica",
    timeframe: "6 meses",
    weightLost: "32.5 kg",
    highlight: "Sin insulino resistencia",
    quote:
      "Desde Santiago del Estero, con tratamiento integral y acompañamiento constante, los resultados llegan y se sostienen.",
    initial: "D",
  },
];

export default function LandingTransformaciones() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-400">
            Antes y después
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-secondary-700 sm:text-4xl">
            Transformaciones reales
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-secondary-500">
            Cada historia es única. Estos son algunos de los resultados de
            pacientes que confiaron en Grupo ByM.
          </p>
        </div>

        <div className="mt-12 mx-auto max-w-4xl">
          <div className="overflow-hidden rounded-2xl bg-white shadow-lg border border-gray-100">
            {/* Before/After visual */}
            <div className="relative aspect-[16/9] sm:aspect-[2/1] bg-gradient-to-r from-gray-100 to-primary-50 flex">
              <div className="flex-1 flex flex-col items-center justify-center bg-gray-100 relative">
                <div className="flex h-20 w-20 sm:h-28 sm:w-28 items-center justify-center rounded-full bg-gray-200 text-3xl sm:text-4xl font-bold text-gray-400">
                  {transformations[active].initial}
                </div>
                <span className="mt-3 inline-block rounded-full bg-black/70 px-4 py-1 text-xs font-bold uppercase tracking-wider text-white">
                  Antes
                </span>
              </div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg">
                <svg className="h-5 w-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center bg-primary-50 relative">
                <div className="flex h-20 w-20 sm:h-28 sm:w-28 items-center justify-center rounded-full bg-primary-200 text-3xl sm:text-4xl font-bold text-primary-500">
                  {transformations[active].initial}
                </div>
                <span className="mt-3 inline-block rounded-full bg-primary-400 px-4 py-1 text-xs font-bold uppercase tracking-wider text-white">
                  Después
                </span>
              </div>
            </div>

            {/* Info */}
            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="text-lg font-bold text-secondary-700">
                  {transformations[active].name}
                </span>
                <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-500">
                  {transformations[active].procedure}
                </span>
                <span className="text-sm text-secondary-400">
                  {transformations[active].timeframe}
                </span>
                {transformations[active].weightLost && (
                  <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-bold text-green-600">
                    -{transformations[active].weightLost}
                  </span>
                )}
                {"highlight" in transformations[active] &&
                  transformations[active].highlight && (
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-600">
                      {transformations[active].highlight}
                    </span>
                  )}
              </div>
              <p className="text-secondary-600 italic leading-relaxed">
                &ldquo;{transformations[active].quote}&rdquo;
              </p>
            </div>
          </div>

          {/* Navigation dots + arrows */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={() =>
                setActive(
                  active === 0 ? transformations.length - 1 : active - 1
                )
              }
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-secondary-500 transition-colors hover:bg-primary-50 hover:text-primary-400"
              aria-label="Anterior"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            <div className="flex gap-2">
              {transformations.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2.5 rounded-full transition-all ${
                    i === active
                      ? "w-8 bg-primary-400"
                      : "w-2.5 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Ver transformación ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() =>
                setActive(
                  active === transformations.length - 1 ? 0 : active + 1
                )
              }
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-secondary-500 transition-colors hover:bg-primary-50 hover:text-primary-400"
              aria-label="Siguiente"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
