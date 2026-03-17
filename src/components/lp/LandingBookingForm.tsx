"use client";

import { useState } from "react";
import { WHATSAPP_NUMBER } from "@/lib/constants";
import { trackFormSubmit } from "@/lib/tracking";

interface LandingBookingFormProps {
  procedure: string;
  trackingSource: string;
}

export default function LandingBookingForm({
  procedure,
  trackingSource,
}: LandingBookingFormProps) {
  const [name, setName] = useState("");
  const [preferredDate, setPreferredDate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const dateText = preferredDate
      ? `Prefiero turno: ${preferredDate}`
      : "Sin preferencia de fecha";

    const message = [
      `Hola, quiero reservar una evaluación gratuita para ${procedure}.`,
      `Nombre: ${name}`,
      dateText,
    ].join("\n");

    trackFormSubmit();

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
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
              Reservá tu Evaluación Gratuita
            </h2>
            <p className="mt-2 text-secondary-500">
              Completá tus datos y te contactamos para confirmar tu turno. Sin compromiso.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor={`name-${trackingSource}`} className="block text-sm font-medium text-secondary-700 mb-1.5">
                Nombre completo
              </label>
              <input
                id={`name-${trackingSource}`}
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Tu nombre"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-secondary-700 placeholder-gray-400 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400/20"
              />
            </div>

            <div>
              <label htmlFor={`date-${trackingSource}`} className="block text-sm font-medium text-secondary-700 mb-1.5">
                Preferencia de fecha <span className="text-gray-400 font-normal">(opcional)</span>
              </label>
              <input
                id={`date-${trackingSource}`}
                type="text"
                value={preferredDate}
                onChange={(e) => setPreferredDate(e.target.value)}
                placeholder="Ej: semana que viene, lunes a viernes, etc."
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-secondary-700 placeholder-gray-400 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400/20"
              />
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-[#25D366]/25 transition-all hover:bg-[#20BD5A] active:scale-[0.98]"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Reservar Evaluación por WhatsApp
            </button>
          </form>

          <div className="mt-6 flex items-center justify-center gap-4 text-xs text-secondary-400">
            <div className="flex items-center gap-1.5">
              <svg className="h-4 w-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
              Evaluación gratuita
            </div>
            <div className="flex items-center gap-1.5">
              <svg className="h-4 w-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
              Sin compromiso
            </div>
            <div className="flex items-center gap-1.5">
              <svg className="h-4 w-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
              Respuesta en &lt;2 hs
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
