import SectionWrapper from "@/components/ui/SectionWrapper";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { WHATSAPP_URL } from "@/lib/constants";

const testimonials = [
  {
    name: "Maria G.",
    age: 38,
    procedure: "Bypass Gástrico",
    weightLost: "45 kg",
    quote:
      "Hace un ano no podia subir escaleras sin agitarme. Hoy corro 5K cada fin de semana. El equipo de GrupoByM me devolvio la vida.",
  },
  {
    name: "Carlos R.",
    age: 42,
    procedure: "Manga Gástrica",
    weightLost: "52 kg",
    quote:
      "Después de anos luchando con la obesidad y la diabetes, la cirugía fue un antes y un después. Mis valores de glucemia se normalizaron en semanas.",
  },
  {
    name: "Ana L.",
    age: 35,
    procedure: "Bypass Gástrico",
    weightLost: "40 kg",
    quote:
      "Vine desde Paraguay y la experiencia fue increible. Me ayudaron con todo, desde el alojamiento hasta el seguimiento por videollamada.",
  },
];

export default function CasosDeExito() {
  return (
    <SectionWrapper id="casos-de-exito" bg="white">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary-400">
          Historias reales
        </p>
        <h2 className="mt-2 text-3xl font-extrabold text-secondary-700 sm:text-4xl">
          Casos de Exito
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-secondary-500">
          Cada historia es unica. Conoce a quienes ya transformaron su vida
          con el acompañamiento de nuestro equipo.
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {testimonials.map((t) => (
          <Card key={t.name} className="relative">
            {/* Quote icon */}
            <svg
              className="absolute top-4 right-4 h-8 w-8 text-primary-100"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10H0z" />
            </svg>

            <div className="mb-4">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-400 font-bold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-secondary-700">{t.name}</p>
                  <p className="text-xs text-secondary-400">
                    {t.age} anos - {t.procedure}
                  </p>
                </div>
              </div>
            </div>

            <p className="text-secondary-600 leading-relaxed italic">
              &ldquo;{t.quote}&rdquo;
            </p>

            <div className="mt-6 flex items-center gap-2 rounded-lg bg-primary-50 p-3">
              <span className="text-2xl font-extrabold text-primary-400">
                -{t.weightLost}
              </span>
              <span className="text-xs text-secondary-500">de peso perdido</span>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Button
          as="a"
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          variant="primary"
        >
          Quiero mi historia de exito
        </Button>
      </div>
    </SectionWrapper>
  );
}
