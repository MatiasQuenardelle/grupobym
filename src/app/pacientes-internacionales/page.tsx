import Link from "next/link";
import { generatePageMetadata } from "@/lib/metadata";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { SITE_URL, WHATSAPP_URL, DOCTOR_NAME, STATS } from "@/lib/constants";

export const metadata = generatePageMetadata({
  title: "Cirugia Bariatrica para Pacientes Internacionales",
  description:
    "Cirugia bariatrica en Argentina para pacientes de Paraguay, Brasil y otros paises. Coordinacion completa de logistica, alojamiento y seguimiento post-operatorio a distancia.",
  path: "/pacientes-internacionales",
});

export default function PacientesInternacionalesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "GrupoByM - Cirugia Bariatrica Internacional",
    description: metadata.description,
    url: `${SITE_URL}/pacientes-internacionales`,
    areaServed: [
      { "@type": "Country", name: "Argentina" },
      { "@type": "Country", name: "Paraguay" },
      { "@type": "Country", name: "Brazil" },
    ],
    medicalSpecialty: "Bariatric Surgery",
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
        name: "Pacientes Internacionales",
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
          <span className="text-secondary-600">Pacientes Internacionales</span>
        </nav>

        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-secondary-700 sm:text-4xl lg:text-5xl">
              Cirugia Bariatrica para Pacientes Internacionales
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-secondary-500">
              Recibimos pacientes de Paraguay, Brasil y otros paises. Te
              acompanamos en todo el proceso: desde la primera consulta virtual
              hasta el seguimiento post-operatorio a distancia.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {[
              { country: "Argentina", flag: "AR", desc: "NEA: Chaco, Corrientes, Formosa, Misiones" },
              { country: "Paraguay", flag: "PY", desc: "Asuncion, Encarnacion, Ciudad del Este" },
              { country: "Brasil", flag: "BR", desc: "Sur de Brasil y regiones limitrofes" },
            ].map((item) => (
              <div key={item.country} className="rounded-2xl bg-primary-50 p-6 text-center">
                <p className="text-2xl font-extrabold text-primary-400">{item.country}</p>
                <p className="mt-1 text-sm text-secondary-500">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold text-secondary-700">
              Por que pacientes internacionales eligen GrupoByM
            </h2>
            <div className="mt-6 space-y-4">
              {[
                { title: "Ubicacion estrategica", desc: "Resistencia, Chaco, esta en el noreste argentino, a pocas horas de las principales ciudades de Paraguay y cerca de la frontera con Brasil." },
                { title: "Calidad medica de primer nivel", desc: `Equipo liderado por el ${DOCTOR_NAME}, con mas de ${STATS.surgeries} cirugias realizadas y ${STATS.reviews} resenas 5 estrellas en Google.` },
                { title: "Costo competitivo", desc: "El costo de la cirugia bariatrica en Argentina es significativamente menor que en otros paises de la region, con estandares de calidad equivalentes." },
                { title: "Consulta virtual inicial", desc: "La primera evaluacion puede hacerse por videollamada, sin necesidad de viajar. Solo viaja para la cirugia y los estudios finales." },
                { title: "Seguimiento a distancia", desc: "Despues de la cirugia, el seguimiento continua de forma virtual con todo el equipo: cirujano, nutricionista y psicologa." },
                { title: "Asistencia con logistica", desc: "Te ayudamos con recomendaciones de alojamiento, traslados y toda la coordinacion para que tu estadia sea comoda." },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <svg className="mt-1 h-5 w-5 flex-shrink-0 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-secondary-700">{item.title}</h3>
                    <p className="text-sm text-secondary-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold text-secondary-700">
              Como es el proceso paso a paso
            </h2>
            <div className="mt-6 space-y-6">
              {[
                { step: "1", title: "Consulta virtual", desc: "Evaluamos tu caso por videollamada. Determinamos si sos candidato/a y te explicamos las opciones quirurgicas." },
                { step: "2", title: "Estudios en tu ciudad", desc: "Muchos estudios pre-quirurgicos pueden realizarse en tu pais: laboratorio, cardiologia, evaluacion nutricional y psicologica." },
                { step: "3", title: "Viaje a Resistencia (5-7 dias)", desc: "Coordinamos tu estadia. Completamos las evaluaciones presenciales, endoscopia, y realizamos la cirugia." },
                { step: "4", title: "Cirugia y recuperacion", desc: "La cirugia se realiza por via laparoscopica. Internacion de 48-72 horas. Alta con indicaciones detalladas para el viaje." },
                { step: "5", title: "Seguimiento virtual continuo", desc: "Consultas periodicas por videollamada con cirujano, nutricionista y psicologa. Comunicacion directa por WhatsApp." },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary-400 text-white font-bold">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-700">{item.title}</h3>
                    <p className="mt-1 text-sm text-secondary-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold text-secondary-700">
              Procedimientos disponibles
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Link href="/procedimientos/bypass-gastrico">
                <Card className="group cursor-pointer border border-transparent hover:border-primary-200">
                  <h3 className="font-bold text-secondary-700 group-hover:text-primary-400 transition-colors">
                    Bypass Gastrico
                  </h3>
                  <p className="mt-1 text-sm text-secondary-500">
                    60-80% perdida del exceso de peso. Ideal para diabetes y reflujo.
                  </p>
                </Card>
              </Link>
              <Link href="/procedimientos/manga-gastrica">
                <Card className="group cursor-pointer border border-transparent hover:border-primary-200">
                  <h3 className="font-bold text-secondary-700 group-hover:text-primary-400 transition-colors">
                    Manga Gastrica
                  </h3>
                  <p className="mt-1 text-sm text-secondary-500">
                    50-70% perdida del exceso de peso. Procedimiento mas simple.
                  </p>
                </Card>
              </Link>
              <Link href="/procedimientos/cirugia-metabolica">
                <Card className="group cursor-pointer border border-transparent hover:border-primary-200">
                  <h3 className="font-bold text-secondary-700 group-hover:text-primary-400 transition-colors">
                    Cirugia Metabolica
                  </h3>
                  <p className="mt-1 text-sm text-secondary-500">
                    Tratamiento quirurgico de diabetes tipo 2 y sindrome metabolico.
                  </p>
                </Card>
              </Link>
              <Link href="/procedimientos/endoscopia">
                <Card className="group cursor-pointer border border-transparent hover:border-primary-200">
                  <h3 className="font-bold text-secondary-700 group-hover:text-primary-400 transition-colors">
                    Endoscopia
                  </h3>
                  <p className="mt-1 text-sm text-secondary-500">
                    Estudio pre-quirurgico y diagnostico con equipamiento de ultima generacion.
                  </p>
                </Card>
              </Link>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold text-secondary-700">
              Documentacion necesaria
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <Card hover={false}>
                <h3 className="font-bold text-secondary-700">Desde Paraguay</h3>
                <ul className="mt-3 space-y-2 text-sm text-secondary-500">
                  <li>Cedula de identidad paraguaya o pasaporte</li>
                  <li>No se requiere visa</li>
                  <li>Seguro de viaje (recomendado)</li>
                  <li>Historia clinica y estudios previos</li>
                </ul>
                <Link
                  href="/blog/cirugia-bariatrica-pacientes-paraguay"
                  className="mt-3 inline-block text-sm font-semibold text-primary-400 hover:text-primary-500"
                >
                  Guia completa para paraguayos
                </Link>
              </Card>
              <Card hover={false}>
                <h3 className="font-bold text-secondary-700">Desde Brasil</h3>
                <ul className="mt-3 space-y-2 text-sm text-secondary-500">
                  <li>RG (Registro Geral) o pasaporte</li>
                  <li>No se requiere visa para turismo</li>
                  <li>Seguro de viaje (recomendado)</li>
                  <li>Historia clinica y estudios previos</li>
                </ul>
              </Card>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold text-secondary-700">
              Preguntas frecuentes
            </h2>
            <div className="mt-6 space-y-4">
              {[
                { q: "Puedo hacer la primera consulta por videollamada?", a: "Si, la primera evaluacion puede hacerse de forma virtual. Solo necesitas viajar para los estudios finales y la cirugia." },
                { q: "Cuanto tiempo tengo que quedarme en Resistencia?", a: "Recomendamos una estadia de 5-7 dias para completar todo el proceso: evaluaciones, cirugia y control post-alta." },
                { q: "Como es el seguimiento despues de volver a mi pais?", a: "Hacemos seguimiento virtual regular por videollamada y WhatsApp con todo el equipo. Recomendamos 1-2 visitas presenciales en el primer ano." },
                { q: "Que pasa si tengo una complicacion en mi pais?", a: "Mantenemos comunicacion directa por WhatsApp y podemos coordinar con medicos en tu ciudad si fuera necesario." },
              ].map((item) => (
                <div key={item.q} className="rounded-xl bg-gray-50 p-4">
                  <h3 className="font-semibold text-secondary-700">{item.q}</h3>
                  <p className="mt-1 text-sm text-secondary-500">{item.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 rounded-2xl bg-primary-50 p-8 text-center">
            <h2 className="text-xl font-bold text-secondary-700">
              Consulta desde tu pais
            </h2>
            <p className="mt-2 text-secondary-500">
              Agenda una consulta virtual gratuita. Te evaluamos, te asesoramos
              y coordinamos todo el proceso.
            </p>
            <div className="mt-4">
              <Button
                as="a"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                variant="whatsapp"
              >
                Consultar por WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
