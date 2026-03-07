import SectionWrapper from "@/components/ui/SectionWrapper";
import { ADDRESS, GOOGLE_MAPS_URL, PHONE_RESISTENCIA, PHONE_SAENZ_PENA } from "@/lib/constants";

export default function Map() {
  return (
    <SectionWrapper id="ubicacion" bg="gray">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary-400">
          Donde encontrarnos
        </p>
        <h2 className="mt-2 text-3xl font-extrabold text-secondary-700 sm:text-4xl">
          Nuestra ubicacion
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-secondary-500">
          Atendemos en Resistencia y Saenz Pena, Chaco. Visitanos para una consulta personalizada.
        </p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-3">
        {/* Map embed */}
        <div className="lg:col-span-2 overflow-hidden rounded-2xl shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3540.8!2d-58.9791898!3d-27.4474037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94450dc300af83ef%3A0x9b25ee678b6cf360!2sGrupo%20ByM!5e0!3m2!1ses-419!2sar!4v1"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicacion de GrupoByM en Resistencia, Chaco"
            className="h-[350px] w-full sm:h-[400px]"
          />
        </div>

        {/* Location info cards */}
        <div className="flex flex-col gap-6">
          {/* Resistencia */}
          <div className="rounded-2xl bg-white p-6 shadow-md">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100">
                <svg className="h-5 w-5 text-primary-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-secondary-700">Resistencia</h3>
            </div>
            <p className="mt-3 text-sm text-secondary-600">{ADDRESS}</p>
            <p className="mt-2 text-sm text-secondary-500">Tel: {PHONE_RESISTENCIA}</p>
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary-500 hover:text-primary-600 transition-colors"
            >
              Ver en Google Maps
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
          </div>

          {/* Saenz Pena */}
          <div className="rounded-2xl bg-white p-6 shadow-md">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100">
                <svg className="h-5 w-5 text-primary-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-secondary-700">Saenz Pena</h3>
            </div>
            <p className="mt-3 text-sm text-secondary-600">Presidencia Roque Saenz Pena, Chaco</p>
            <p className="mt-2 text-sm text-secondary-500">Tel: {PHONE_SAENZ_PENA}</p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
