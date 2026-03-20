"use client";

import { WHATSAPP_URL } from "@/lib/constants";
import { trackWhatsAppClick } from "@/lib/tracking";

const INSURANCE_NAMES = [
  "OSDE",
  "Swiss Medical",
  "Galeno",
  "Medicus",
  "OSECAC",
  "OSPRERA",
  "PAMI",
  "Obras sociales provinciales",
];

export default function LandingObraSocial() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-green-50 to-emerald-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100">
            <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
            </svg>
          </div>
          <h2 className="text-2xl font-extrabold text-green-900 sm:text-3xl">
            Tu obra social puede cubrir tu cirugía bariátrica
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-green-700">
            La cirugía bariátrica está incluida en el Programa Médico Obligatorio (PMO).
            Te ayudamos con todo el trámite de autorización.
          </p>
        </div>

        {/* Insurance logos/names grid */}
        <div className="mt-10 mx-auto max-w-3xl">
          <p className="text-center text-sm font-semibold uppercase tracking-wider text-green-600 mb-6">
            Trabajamos con las principales obras sociales y prepagas
          </p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {INSURANCE_NAMES.map((name) => (
              <div
                key={name}
                className="flex items-center justify-center rounded-xl bg-white/80 border border-green-200 px-4 py-3 text-sm font-semibold text-green-800 shadow-sm"
              >
                {name}
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-sm text-green-600">
            Y muchas más. Consultá por tu cobertura específica.
          </p>
        </div>

        <div className="mt-8 text-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick("lp_obra_social")}
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-[#25D366]/25 transition-all hover:bg-[#20BD5A] active:scale-[0.98]"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Verificar mi cobertura
          </a>
          <p className="mt-2 text-xs text-green-600">
            Respondemos en menos de 2 horas
          </p>
        </div>
      </div>
    </section>
  );
}
