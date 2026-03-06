import Button from "@/components/ui/Button";
import { WHATSAPP_URL } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-50 pt-24 pb-16 md:pt-32 md:pb-24"
      aria-label="Presentacion principal"
    >
      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 h-96 w-96 rounded-full bg-primary-100/50 blur-3xl" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 h-80 w-80 rounded-full bg-primary-100/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-400">
            Cirugia Bariatrica en Argentina
          </p>
          <h1 className="text-balance text-4xl font-extrabold tracking-tight text-secondary-700 sm:text-5xl lg:text-6xl">
            Recupera tu salud, tu energia
            <br />
            y tu <span className="text-primary-400">confianza</span>.
          </h1>
          <p className="mt-6 text-xl font-medium text-secondary-600 md:text-2xl">
            Un nuevo comienzo es posible.
          </p>
          <p className="mt-4 text-lg text-secondary-500 md:text-xl">
            En GrupoByM te acompanamos con un equipo interdisciplinario
            para transformar tu calidad de vida.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              as="a"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              variant="whatsapp"
              className="text-base"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Solicitar Consulta
            </Button>
            <Button
              as="a"
              href="#procedimientos"
              variant="outline"
              className="text-base"
            >
              Conocer Procedimientos
            </Button>
          </div>

          {/* Trust badges */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 md:gap-10">
            <span className="text-sm font-semibold text-secondary-600">
              250+ cirugias realizadas
            </span>
            <div className="h-6 w-px bg-gray-300 hidden sm:block" />
            <span className="text-sm font-semibold text-secondary-600">
              3+ anos de experiencia
            </span>
            <div className="h-6 w-px bg-gray-300 hidden sm:block" />
            <div className="flex items-center gap-1.5">
              <div className="flex text-accent-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm font-semibold text-secondary-600">
                5.0 en Google
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
