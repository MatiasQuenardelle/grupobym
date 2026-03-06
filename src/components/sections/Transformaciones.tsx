"use client";

import { useState } from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import { WHATSAPP_URL } from "@/lib/constants";

const transformations = [
  {
    name: "Vale",
    procedure: "Manga Gastrica",
    timeframe: "1 ano",
    weightLost: null,
    quote:
      "Los resultados hablan por si solos. Mi esfuerzo y constancia demostraron que los cambios si son posibles.",
    initial: "V",
  },
  {
    name: "Pedro",
    procedure: "Bypass Gastrico",
    timeframe: "5 meses",
    weightLost: "45.5 kg",
    quote:
      "Cuando se quiere, se puede. Habitos saludables y entrenamiento constante me ayudaron a romper la barrera de los 100 kg.",
    initial: "P",
  },
  {
    name: "Romi",
    procedure: "Cirugia Bariatrica",
    timeframe: "8 meses",
    weightLost: "35 kg",
    quote:
      "Esta transformacion es solo el comienzo de una nueva vida, llena de energia, salud y amor propio.",
    initial: "R",
  },
  {
    name: "Dario",
    procedure: "Manga Gastrica",
    timeframe: "6 meses",
    weightLost: "32.5 kg",
    highlight: "Sin insulino resistencia",
    quote:
      "Desde Santiago del Estero, con tratamiento integral y acompanamiento constante, los resultados llegan y se sostienen.",
    initial: "D",
  },
];

export default function Transformaciones() {
  const [active, setActive] = useState(0);

  return (
    <SectionWrapper id="transformaciones" bg="gray">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary-400">
          Antes y despues
        </p>
        <h2 className="mt-2 text-3xl font-extrabold text-secondary-700 sm:text-4xl">
          Transformaciones reales
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-secondary-500">
          Cada historia es unica. Estos son algunos de los resultados de
          pacientes que confiaron en Grupo ByM para transformar su vida.
        </p>
      </div>

      {/* Carousel */}
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
                Despues
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
                aria-label={`Ver transformacion ${i + 1}`}
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

      <div className="mt-10 text-center">
        <p className="text-secondary-500 mb-4">
          Animate a dar el primer paso. El cambio que sonas empieza con la
          decision que tomes hoy.
        </p>
        <Button
          as="a"
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          variant="whatsapp"
        >
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Quiero mi transformacion
        </Button>
      </div>
    </SectionWrapper>
  );
}
