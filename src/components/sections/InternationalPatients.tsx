import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import { WHATSAPP_URL } from "@/lib/constants";

const benefits = [
  {
    title: "Coordinacion integral",
    description: "Te ayudamos con la organizacion del viaje, alojamiento y traslados.",
  },
  {
    title: "Seguimiento a distancia",
    description: "Controles post-operatorios por videollamada con todo el equipo.",
  },
  {
    title: "Experiencia internacional",
    description: "Amplia trayectoria atendiendo pacientes de Paraguay, Brasil y otros paises.",
  },
  {
    title: "Comunicacion bilingue",
    description: "Atencion en espanol y portugues para pacientes de Brasil.",
  },
];

export default function InternationalPatients() {
  return (
    <SectionWrapper id="internacionales" bg="blue">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-400">
            Pacientes internacionales
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-secondary-700 sm:text-4xl">
            Venis de Paraguay o Brasil? Te acompanamos en todo el proceso
          </h2>
          <p className="mt-4 text-lg text-secondary-500 leading-relaxed">
            Argentina es un destino reconocido mundialmente por la calidad de su
            medicina. En GrupoByM tenemos amplia experiencia recibiendo
            pacientes internacionales y nos encargamos de que tu experiencia sea
            simple y segura.
          </p>

          <div className="mt-8 space-y-5">
            {benefits.map((b) => (
              <div key={b.title} className="flex items-start gap-3">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary-400 text-white">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-secondary-700">{b.title}</p>
                  <p className="text-sm text-secondary-500">{b.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Button
              as="a"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              variant="whatsapp"
            >
              Consultar desde el exterior
            </Button>
          </div>
        </div>

        {/* Map / visual placeholder */}
        <div className="relative">
          <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary-200 to-primary-100 flex items-center justify-center">
            <div className="text-center p-8">
              <svg className="mx-auto h-20 w-20 text-primary-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
              </svg>
              <p className="text-2xl font-bold text-primary-600">Argentina</p>
              <p className="text-sm text-primary-500 mt-1">Paraguay - Brasil</p>
              <div className="mt-4 flex justify-center gap-4">
                <div className="flex items-center gap-1">
                  <div className="h-3 w-3 rounded-full bg-primary-400" />
                  <span className="text-xs text-primary-600">Argentina</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="h-3 w-3 rounded-full bg-accent-400" />
                  <span className="text-xs text-primary-600">Paraguay</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                  <span className="text-xs text-primary-600">Brasil</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
