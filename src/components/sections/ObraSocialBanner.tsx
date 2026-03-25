"use client";

import Button from "@/components/ui/Button";
import { WHATSAPP_URL } from "@/lib/constants";
import { trackWhatsAppClick } from "@/lib/tracking";

export default function ObraSocialBanner() {
  return (
    <section className="bg-gradient-to-r from-green-50 to-emerald-50 py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
          <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-green-100">
            <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
            </svg>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-extrabold text-green-900 sm:text-3xl">
              Tu obra social puede cubrir tu cirugía bariátrica
            </h2>
            <p className="mt-2 text-green-700">
              La cirugía bariátrica esta incluida en el Programa Médico Obligatorio (PMO).
              La mayoría de las obras sociales y prepagas cubren el procedimiento.
              Te ayudamos con el trámite de autorización.
            </p>
          </div>
          <div className="flex-shrink-0">
            <Button
              as="a"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              variant="whatsapp"
              onClick={() => trackWhatsAppClick("obra_social_banner")}
            >
              Agendar Turno
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
