"use client";

interface LandingPriceInfoProps {
  procedure: string;
}

export default function LandingPriceInfo({
  procedure,
}: LandingPriceInfoProps) {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-extrabold text-secondary-700 sm:text-4xl">
          Tu cirugía, todo incluido
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-secondary-500">
          Sin costos ocultos. En la consulta te damos el presupuesto exacto para tu caso.
        </p>

        <div className="mt-10 space-y-4">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="space-y-4">
              <div className="rounded-xl bg-primary-50 border border-primary-200 p-4">
                <p className="font-semibold text-primary-700">
                  Evaluación sin compromiso
                </p>
                <p className="mt-1 text-sm text-primary-600">
                  En la consulta te damos el presupuesto exacto para tu caso, te ayudamos con la gestión de obra social y respondemos todas tus dudas.
                </p>
              </div>

              <div className="rounded-xl bg-green-50 border border-green-200 p-4">
                <p className="font-semibold text-green-700">
                  La obra social puede cubrirlo
                </p>
                <p className="mt-1 text-sm text-green-600">
                  La mayoría de las obras sociales y prepagas cubren {procedure}. Consultá con nuestro equipo para verificar tu cobertura.
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 border border-gray-200 p-4">
                <p className="font-semibold text-secondary-700">
                  Todo incluido
                </p>
                <p className="mt-1 text-sm text-secondary-500">
                  Cirugía + equipo quirúrgico + internación + seguimiento completo con nutricionista y psicóloga. Sin costos ocultos.
                </p>
              </div>
            </div>

            <a
              href="#reservar"
              className="mt-6 block w-full rounded-full bg-primary-400 px-6 py-3 text-center text-sm font-semibold text-white transition-all hover:bg-primary-500 active:scale-[0.98]"
            >
              Reservar turno
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
