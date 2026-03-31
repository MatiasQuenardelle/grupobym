import Link from "next/link";
import { generatePageMetadata } from "@/lib/metadata";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { SITE_URL, WHATSAPP_URL } from "@/lib/constants";

export const metadata = generatePageMetadata({
  title: "Cirugía Bariátrica Precio Argentina 2026",
  description:
    "Cuánto cuesta la cirugía bariátrica en Argentina. Precios de bypass gástrico y manga gástrica, cobertura de obra social, financiamiento y opciones de pago en GrupoByM.",
  path: "/cirugia-bariatrica-precio",
});

export default function CirugiaBariátricaPrecioPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Cirugía Bariátrica Precio Argentina - GrupoByM",
    description: metadata.description,
    url: `${SITE_URL}/cirugia-bariatrica-precio`,
    isPartOf: {
      "@type": "WebSite",
      name: "GrupoByM",
      url: SITE_URL,
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Cirugía Bariátrica Precio",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <SectionWrapper className="pt-28 md:pt-36">
        <nav className="mb-6 text-sm text-secondary-400" aria-label="Breadcrumb">
          <a href="/" className="hover:text-primary-400">Inicio</a>
          <span className="mx-2">/</span>
          <span className="text-secondary-600">Cirugía Bariátrica Precio</span>
        </nav>

        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-secondary-700 sm:text-4xl lg:text-5xl">
              Cuánto cuesta la cirugía bariátrica en Argentina
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-secondary-500">
              Información clara sobre costos, cobertura de obra social y
              opciones de financiamiento para tu cirugía bariátrica.
            </p>
          </div>

          <div className="mt-12 rounded-2xl bg-green-50 border border-green-200 p-6">
            <div className="flex items-start gap-3">
              <svg className="mt-0.5 h-6 w-6 flex-shrink-0 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h2 className="text-lg font-bold text-green-800">
                  La cirugía bariátrica tiene cobertura de obra social
                </h2>
                <p className="mt-1 text-sm text-green-700">
                  Esta incluida en el Programa Médico Obligatorio (PMO). La
                  mayoría de las obras sociales y prepagas cubren el
                  procedimiento cuando se cumplen los requisitos medicos.
                </p>
                <Link
                  href="/blog/cirugia-bariatrica-obra-social"
                  className="mt-2 inline-block text-sm font-semibold text-green-700 underline hover:text-green-800"
                >
                  Ver guia completa de cobertura
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold text-secondary-700">
              Qué incluye la cirugía bariátrica
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <Card hover={false}>
                <h3 className="text-lg font-bold text-secondary-700">
                  <Link href="/procedimientos/manga-gastrica" className="hover:text-primary-400">
                    Manga Gástrica
                  </Link>
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-secondary-500">
                  <li className="flex items-start gap-2">
                    <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    Equipo quirúrgico completo
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    Anestesia
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    48 hs de internación
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    Insumos quirúrgicos
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    Seguimiento post-operatorio
                  </li>
                </ul>
                <p className="mt-4 text-xs text-secondary-400">
                  Duracion: ~1 hora | Perdida: 50-70% del exceso de peso
                </p>
              </Card>

              <Card hover={false}>
                <h3 className="text-lg font-bold text-secondary-700">
                  <Link href="/procedimientos/bypass-gastrico" className="hover:text-primary-400">
                    Bypass Gástrico
                  </Link>
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-secondary-500">
                  <li className="flex items-start gap-2">
                    <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    Equipo quirúrgico completo
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    Anestesia
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    48-72 hs de internación
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    Insumos quirúrgicos
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    Seguimiento post-operatorio
                  </li>
                </ul>
                <p className="mt-4 text-xs text-secondary-400">
                  Duracion: ~1.5-2 horas | Perdida: 60-80% del exceso de peso
                </p>
              </Card>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold text-secondary-700">
              Opciones de pago
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-3">
              <Card hover={false} className="border border-green-200 bg-green-50">
                <h3 className="text-lg font-bold text-green-800">Obra Social / Prepaga</h3>
                <p className="mt-2 text-sm text-green-700">
                  Cobertura total o parcial segun tu plan. Te ayudamos con el trámite de autorización.
                </p>
                <Link
                  href="/blog/cirugia-bariatrica-obra-social"
                  className="mt-3 inline-block text-sm font-semibold text-green-700 hover:text-green-800"
                >
                  Ver requisitos
                </Link>
              </Card>
              <Card hover={false}>
                <h3 className="text-lg font-bold text-secondary-700">Particular</h3>
                <p className="mt-2 text-sm text-secondary-500">
                  Presupuesto personalizado. Pago directo con todas las prestaciones incluidas.
                </p>
              </Card>
              <Card hover={false}>
                <h3 className="text-lg font-bold text-secondary-700">Financiamiento</h3>
                <p className="mt-2 text-sm text-secondary-500">
                  Planes de pago y opciones de financiamiento. Consulta las alternativas disponibles.
                </p>
              </Card>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold text-secondary-700">
              La cirugía bariátrica es una inversion en tu salud
            </h2>
            <p className="mt-4 text-secondary-500 leading-relaxed">
              Más allá del costo economico, la cirugía bariátrica representa un
              ahorro significativo a largo plazo. Los pacientes que se operan
              reducen o eliminan el gasto en:
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                "Medicacion para diabetes tipo 2",
                "Medicacion para hipertension",
                "Tratamientos para colesterol y trigliceridos",
                "Consultas medicas frecuentes por comorbilidades",
                "Tratamientos para apnea del sueno",
                "Internaciones por complicaciones de la obesidad",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm text-secondary-500">
                  <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  {item}
                </div>
              ))}
            </div>
            <p className="mt-4 text-secondary-500 leading-relaxed">
              Ademas, la mejora en la calidad de vida, la movilidad y el
              bienestar emocional no tienen precio. Conoce los{" "}
              <Link href="/blog/beneficios-cirugia-bariatrica" className="text-primary-400 hover:text-primary-500">
                beneficios completos de la cirugía bariátrica
              </Link>
              .
            </p>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold text-secondary-700">
              Pacientes internacionales
            </h2>
            <p className="mt-4 text-secondary-500 leading-relaxed">
              Si sos de Paraguay, Brasil u otro país, ofrecemos paquetes
              especiales que incluyen coordinación de logística, asistencia con
              alojamiento y seguimiento post-operatorio a distancia. El costo
              de la cirugía bariátrica en Argentina es competitivo a nivel
              regional con estandares de calidad de primer nivel.
            </p>
            <Link
              href="/blog/cirugia-bariatrica-pacientes-paraguay"
              className="mt-2 inline-block text-sm font-semibold text-primary-400 hover:text-primary-500"
            >
              Guia para pacientes de Paraguay
            </Link>
          </div>

          <div className="mt-16 rounded-2xl bg-primary-50 p-8 text-center">
            <h2 className="text-xl font-bold text-secondary-700">
              Consulta tu presupuesto personalizado
            </h2>
            <p className="mt-2 text-secondary-500">
              Contactanos para recibir información detallada sobre costos y
              cobertura segun tu caso particular.
            </p>
            <div className="mt-4">
              <Button
                as="a"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                variant="whatsapp"
              >
                Consulta por WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
