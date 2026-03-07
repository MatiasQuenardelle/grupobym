"use client";

import Image from "next/image";
import Button from "@/components/ui/Button";
import { WHATSAPP_URL, STATS } from "@/lib/constants";
import { trackWhatsAppClick } from "@/lib/tracking";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-secondary-800 pt-20 md:pt-24"
      aria-label="Presentacion principal"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary-900 via-secondary-800 to-primary-900/80" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-400/10 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Text content */}
          <div className="pt-8 pb-4 text-center lg:py-24 lg:text-left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-400/30 bg-primary-400/10 px-4 py-1.5">
              <span className="h-2 w-2 rounded-full bg-primary-400 animate-pulse" />
              <span className="text-sm font-medium text-primary-300">
                Cobertura de obra social y prepaga
              </span>
            </div>

            <h1 className="text-balance text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Cirugía bariátrica en Argentina con{" "}
              <span className="bg-gradient-to-r from-primary-300 to-primary-400 bg-clip-text text-transparent">
                equipo interdisciplinario
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-300 md:text-xl">
              Bypass gástrico y manga gástrica con el Dr. Pablo Rodríguez.
              {" "}{STATS.reviews} reseñas 5 estrellas en Google. Consulta sin cargo
              por WhatsApp.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
              <Button
                as="a"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                variant="whatsapp"
                className="text-base shadow-lg shadow-[#25D366]/25"
                onClick={() => trackWhatsAppClick("hero")}
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Consulta Gratuita por WhatsApp
              </Button>
              <Button
                as="a"
                href="#procedimientos"
                variant="outline"
                className="text-base border-white/30 text-white hover:bg-white/10 hover:text-white"
              >
                Conocer Procedimientos
              </Button>
            </div>

            <p className="mt-3 text-center text-xs text-gray-400 lg:text-left">
              Respondemos en menos de 2 horas
            </p>

            {/* Trust stats row */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 lg:justify-start lg:gap-8">
              <div className="text-center lg:text-left">
                <p className="text-2xl font-bold text-white">{STATS.surgeries}</p>
                <p className="text-xs text-gray-400">Cirugías realizadas</p>
              </div>
              <div className="h-10 w-px bg-white/15" />
              <div className="text-center lg:text-left">
                <p className="text-2xl font-bold text-white">{STATS.countries}</p>
                <p className="text-xs text-gray-400">Países atendidos</p>
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
            </div>
          </div>

          {/* Image side */}
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            {/* Glow effect behind image */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-primary-400/20 to-primary-300/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-t-3xl lg:rounded-3xl">
              <Image
                src="/images/pablo-rodriguez.png"
                alt="Dr. Pablo Rodríguez - Cirujano Bariátrico en GrupoByM"
                width={600}
                height={750}
                className="h-auto w-full object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              {/* Gradient overlay at bottom for mobile seamless transition */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-secondary-800 to-transparent lg:hidden" />
            </div>

            {/* Floating badge - reviews */}
            <div className="absolute bottom-8 left-4 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 shadow-xl backdrop-blur-md lg:bottom-8 lg:left-0 lg:-translate-x-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366]/20">
                  <svg className="h-5 w-5 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-white">{STATS.reviews} Reseñas</p>
                  <p className="text-xs text-gray-300">Verificadas en Google</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
