import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { DOCTOR_NAME } from "@/lib/constants";

export default function Congress() {
  return (
    <SectionWrapper id="congreso" bg="white">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        {/* Content */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-400">
            Participacion academica
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-secondary-700 sm:text-4xl">
            8° Congreso Argentino SACO 2025
          </h2>
          <p className="mt-2 text-lg font-medium text-accent-400">
            Sociedad Argentina de Cirugía de la Obesidad
          </p>

          <div className="mt-6 space-y-4 text-secondary-600 leading-relaxed">
            <p>
              El {DOCTOR_NAME} participo del{" "}
              <strong>8° Congreso Argentino de la Sociedad Argentina de Cirugía de la Obesidad (SACO)</strong>,
              celebrado del 19 al 21 de marzo de 2025 en el Hotel Buenos Aires Marriott,
              Ciudad de Buenos Aires.
            </p>
            <p>
              Este evento científico de primer nivel reunio a los principales cirujanos
              bariátricos del país y referentes internacionales, con el objetivo de
              compartir avances en el tratamiento quirúrgico de la obesidad y enfermedades
              metabólicas. El congreso celebro los{" "}
              <strong>25 años de la SACO</strong>, consolidandose como el encuentro mas
              importante de la especialidad en Argentina.
            </p>
            <p>
              El programa científico incluyo teleconferencias, simposios interdisciplinarios,
              sesiones de trabajo por especialidad y discusión de videos quirúrgicos,
              reafirmando el compromiso del {DOCTOR_NAME} con la formación continua
              y la excelencia en cirugía bariátrica.
            </p>
          </div>

          {/* Congress highlights */}
          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
            {[
              "Congreso científico de nivel internaciónal",
              "25 años de la SACO",
              "Expertos nacionales e internacionales",
              "Formacion continua y actualizacion",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-2 rounded-lg bg-primary-50 px-3 py-2.5 sm:bg-transparent sm:px-0 sm:py-0 sm:rounded-none"
              >
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
                <span className="text-sm text-secondary-600">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Congress image */}
        <div className="relative mx-auto w-full max-w-md">
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/images/congreso.png"
              alt="8° Congreso Argentino SACO 2025 - Sociedad Argentina de Cirugía de la Obesidad"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </div>
          {/* Decorative accent */}
          <div className="absolute -bottom-4 -right-4 h-full w-full rounded-2xl border-2 border-primary-200 -z-10" />
        </div>
      </div>
    </SectionWrapper>
  );
}
