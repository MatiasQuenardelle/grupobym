import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import { WHATSAPP_URL } from "@/lib/constants";

const transformations = [
  {
    name: "Vale",
    procedure: "Manga Gastrica",
    timeframe: "1 ano",
    quote:
      "Los resultados hablan por si solos. Mi esfuerzo y constancia demostraron que los cambios si son posibles.",
    imagePlaceholder: "V",
  },
  {
    name: "Maria G.",
    procedure: "Bypass Gastrico",
    timeframe: "10 meses",
    quote:
      "Hace un ano no podia subir escaleras sin agitarme. Hoy corro 5K cada fin de semana.",
    imagePlaceholder: "M",
  },
  {
    name: "Carlos R.",
    procedure: "Manga Gastrica",
    timeframe: "8 meses",
    quote:
      "Despues de anos luchando con la obesidad y la diabetes, la cirugia fue un antes y un despues.",
    imagePlaceholder: "C",
  },
];

export default function Transformaciones() {
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

      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {transformations.map((t) => (
          <div
            key={t.name}
            className="overflow-hidden rounded-2xl bg-white shadow-sm border border-gray-100"
          >
            {/* Before/After image placeholder */}
            <div className="relative aspect-[4/3] bg-gradient-to-r from-gray-200 to-primary-100 flex items-center justify-center">
              <div className="flex w-full h-full">
                <div className="flex-1 bg-gray-200 flex items-center justify-center border-r border-white/50">
                  <div className="text-center">
                    <div className="mx-auto mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-gray-300 text-2xl font-bold text-gray-500">
                      {t.imagePlaceholder}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-500 bg-white/80 px-2 py-1 rounded">
                      Antes
                    </span>
                  </div>
                </div>
                <div className="flex-1 bg-primary-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="mx-auto mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-primary-200 text-2xl font-bold text-primary-500">
                      {t.imagePlaceholder}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-primary-600 bg-white/80 px-2 py-1 rounded">
                      Despues
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm font-bold text-secondary-700">
                  {t.name}
                </span>
                <span className="text-xs text-secondary-400">|</span>
                <span className="text-xs text-primary-400 font-semibold">
                  {t.procedure}
                </span>
                <span className="text-xs text-secondary-400">|</span>
                <span className="text-xs text-secondary-500">{t.timeframe}</span>
              </div>
              <p className="text-sm text-secondary-600 italic leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <p className="text-secondary-500 mb-4">
          En Grupo ByM, acompanamos cada paso de tu transformacion.
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
