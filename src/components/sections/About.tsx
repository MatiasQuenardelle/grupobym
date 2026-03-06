import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { DOCTOR_NAME } from "@/lib/constants";

export default function About() {
  return (
    <SectionWrapper id="sobre" bg="white">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        {/* Doctor photo */}
        <div className="relative mx-auto w-full max-w-md">
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
            <Image
              src="/images/dr-pablo-rodriguez.png"
              alt={DOCTOR_NAME}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 400px"
              priority
            />
          </div>
          {/* Decorative accent */}
          <div className="absolute -bottom-4 -right-4 h-full w-full rounded-2xl border-2 border-primary-200 -z-10" />
        </div>

        {/* Content */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-400">
            Conoce al especialista
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-secondary-700 sm:text-4xl">
            {DOCTOR_NAME}
          </h2>
          <p className="mt-2 text-lg font-medium text-accent-400">
            Cirujano General | Laparoscopista | Bariatrico | Esofago-Gastroduodenal
          </p>

          <div className="mt-6 space-y-4 text-secondary-600 leading-relaxed">
            <p>
              Cirujano general y laparoscopista, especialista en cirugia
              bariatrica y esofago-gastroduodenal, el {DOCTOR_NAME} lidera un
              equipo interdisciplinario comprometido con la salud y el bienestar
              de cada paciente.
            </p>
            <p>
              Formado en las instituciones mas prestigiosas del pais, con
              participacion activa en congresos nacionales e internacionales
              de cirugia bariatrica. Representante de SACO en el Congreso
              Internacional de Cirugia para la Obesidad y Enfermedades
              Metabolicas.
            </p>
          </div>

          {/* Credentials */}
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              "Cirujano General",
              "Especialista en Cirugia Laparoscopica",
              "Especialista en Cirugia Bariatrica",
              "Especialista en Esofago-Gastroduodenal",
            ].map((credential) => (
              <div key={credential} className="flex items-start gap-2">
                <svg
                  className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm text-secondary-600">{credential}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
