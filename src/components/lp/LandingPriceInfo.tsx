"use client";

interface LandingPriceInfoProps {
  procedure: string;
  requirements: string[];
  obraSocialText?: string;
}

export default function LandingPriceInfo({
  procedure,
  requirements,
  obraSocialText,
}: LandingPriceInfoProps) {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-extrabold text-secondary-700 sm:text-4xl">
          Requisitos y costos de {procedure}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-secondary-500">
          Respondemos las dos preguntas que más nos hacen, para que puedas tomar una decisión informada.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {/* Requirements */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-400/10">
                <svg className="h-5 w-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-secondary-700">Requisitos</h3>
            </div>
            <ul className="space-y-3">
              {requirements.map((req) => (
                <li key={req} className="flex items-start gap-2 text-secondary-600">
                  <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  <span className="text-sm">{req}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-secondary-400">
              Cada caso se evalúa individualmente en la consulta.
            </p>
          </div>

          {/* Pricing */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-400/10">
                <svg className="h-5 w-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-secondary-700">Costos</h3>
            </div>

            <div className="space-y-4">
              <div className="rounded-xl bg-green-50 border border-green-200 p-4">
                <p className="font-semibold text-green-700">
                  La obra social puede cubrirlo
                </p>
                <p className="mt-1 text-sm text-green-600">
                  {obraSocialText || `${procedure} está incluido en el PMO (Programa Médico Obligatorio). La mayoría de las obras sociales y prepagas cubren el procedimiento.`}
                </p>
              </div>

              <div className="rounded-xl bg-primary-50 border border-primary-200 p-4">
                <p className="font-semibold text-primary-700">
                  Evaluación gratuita y sin compromiso
                </p>
                <p className="mt-1 text-sm text-primary-600">
                  En la consulta te damos el presupuesto exacto para tu caso, te ayudamos con la gestión de obra social y respondemos todas tus dudas.
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 border border-gray-200 p-4">
                <p className="font-semibold text-secondary-700">
                  Todo incluido
                </p>
                <p className="mt-1 text-sm text-secondary-500">
                  Cirugía + equipo quirúrgico + internación + seguimiento por 1 año con nutricionista y psicóloga. Sin costos ocultos.
                </p>
              </div>
            </div>

            <a
              href="#reservar"
              className="mt-6 block w-full rounded-full bg-primary-400 px-6 py-3 text-center text-sm font-semibold text-white transition-all hover:bg-primary-500 active:scale-[0.98]"
            >
              Reservar evaluación gratuita
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
