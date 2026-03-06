import Link from "next/link";
import { generatePageMetadata } from "@/lib/metadata";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import {
  SITE_URL,
  WHATSAPP_URL,
  DOCTOR_NAME,
  PROCEDURES,
  STATS,
  LOCATIONS,
  GOOGLE_MAPS_URL,
} from "@/lib/constants";

export const metadata = generatePageMetadata({
  title: "Cirugia Bariatrica en Chaco - Resistencia y Saenz Pena",
  description:
    "Cirugia bariatrica en Resistencia y Saenz Pena, Chaco. Bypass gastrico, manga gastrica y cirugia metabolica con el Dr. Pablo Rodriguez. Atendemos pacientes de Corrientes, Formosa y Misiones.",
  path: "/cirugia-bariatrica-chaco",
});

export default function CirugiaBariatricaChacoPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "GrupoByM - Cirugia Bariatrica en Chaco",
    description: metadata.description,
    url: `${SITE_URL}/cirugia-bariatrica-chaco`,
    telephone: "+5493644305110",
    email: "contacto@grupobym.com.ar",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Carlos Pellegrini 677",
      addressLocality: "Resistencia",
      addressRegion: "Chaco",
      postalCode: "H3500",
      addressCountry: "AR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -27.4474037,
      longitude: -58.9791898,
    },
    areaServed: [
      { "@type": "City", name: "Resistencia" },
      { "@type": "City", name: "Presidencia Roque Saenz Pena" },
      { "@type": "City", name: "Corrientes" },
      { "@type": "City", name: "Formosa" },
      { "@type": "City", name: "Posadas" },
      { "@type": "State", name: "Chaco" },
      { "@type": "State", name: "Corrientes" },
      { "@type": "State", name: "Formosa" },
      { "@type": "State", name: "Misiones" },
    ],
    medicalSpecialty: "Bariatric Surgery",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: STATS.rating,
      reviewCount: "50",
      bestRating: "5",
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
        name: "Cirugia Bariatrica en Chaco",
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
          <span className="text-secondary-600">Cirugia Bariatrica en Chaco</span>
        </nav>

        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-secondary-700 sm:text-4xl lg:text-5xl">
              Cirugia Bariatrica en Chaco
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-secondary-500">
              Equipo interdisciplinario liderado por el{" "}
              <Link href="/equipo/dr-pablo-rodriguez" className="text-primary-400 hover:text-primary-500">
                {DOCTOR_NAME}
              </Link>
              . Atendemos en Resistencia y Saenz Pena, con pacientes de todo el NEA.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {[
              { value: STATS.surgeries, label: "Cirugias realizadas" },
              { value: STATS.reviews, label: "Resenas 5 estrellas" },
              { value: STATS.yearsExperience, label: "Anos de experiencia" },
              { value: STATS.countries, label: "Paises de origen" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-2xl bg-primary-50 p-6 text-center">
                <p className="text-3xl font-extrabold text-primary-400">{stat.value}</p>
                <p className="mt-1 text-sm text-secondary-500">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold text-secondary-700">
              Procedimientos que realizamos
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {PROCEDURES.map((proc) => (
                <Link key={proc.slug} href={`/procedimientos/${proc.slug}`}>
                  <Card className="h-full group cursor-pointer border border-transparent hover:border-primary-200">
                    <h3 className="text-lg font-bold text-secondary-700 group-hover:text-primary-400 transition-colors">
                      {proc.title}
                    </h3>
                    <p className="mt-2 text-sm text-secondary-500 leading-relaxed">
                      {proc.description}
                    </p>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold text-secondary-700">
              Donde nos encontramos
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {LOCATIONS.map((loc) => (
                <Card key={loc.city} hover={false}>
                  <h3 className="text-lg font-bold text-secondary-700">{loc.city}</h3>
                  {"address" in loc && loc.address && (
                    <p className="mt-1 text-sm text-secondary-500">{loc.address}</p>
                  )}
                  <p className="mt-2 text-sm text-secondary-500">
                    Tel: {loc.phone}
                  </p>
                  <a
                    href={`https://wa.me/${loc.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-primary-400 hover:text-primary-500"
                  >
                    WhatsApp
                  </a>
                </Card>
              ))}
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold text-secondary-700">
              Atendemos pacientes de toda la region NEA
            </h2>
            <p className="mt-4 text-secondary-500 leading-relaxed">
              GrupoByM recibe pacientes de todo el noreste argentino. Nuestra
              ubicacion en Resistencia, Chaco, nos hace accesibles para
              pacientes de multiples provincias y ciudades:
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {[
                { region: "Chaco", cities: "Resistencia, Saenz Pena, Villa Angela, Charata, Barranqueras" },
                { region: "Corrientes", cities: "Corrientes Capital, Goya, Paso de los Libres, Mercedes, Curuzú Cuatia" },
                { region: "Formosa", cities: "Formosa Capital, Clorinda, Pirané" },
                { region: "Misiones", cities: "Posadas, Obera, Eldorado" },
                { region: "Santa Fe (norte)", cities: "Reconquista, Vera, Tostado" },
                { region: "Paraguay", cities: "Asuncion, Encarnacion, Ciudad del Este" },
              ].map((area) => (
                <div key={area.region} className="rounded-xl bg-gray-50 p-4">
                  <h3 className="font-semibold text-secondary-700">{area.region}</h3>
                  <p className="mt-1 text-sm text-secondary-500">{area.cities}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-secondary-500">
              Tambien recibimos{" "}
              <Link href="/blog/cirugia-bariatrica-pacientes-paraguay" className="text-primary-400 hover:text-primary-500">
                pacientes de Paraguay
              </Link>
              {" "}con seguimiento post-operatorio a distancia.
            </p>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold text-secondary-700">
              Por que elegir GrupoByM en Chaco
            </h2>
            <div className="mt-6 space-y-4">
              {[
                { title: "Equipo interdisciplinario completo", desc: "Cirujano, nutricionistas, psicologa y profesor de educacion fisica. Acompanamiento integral en cada etapa." },
                { title: "Via laparoscopica", desc: "Todas las cirugias se realizan por via minimamente invasiva: menor dolor, recuperacion mas rapida, menor riesgo de complicaciones." },
                { title: "Resultados comprobados", desc: `Mas de ${STATS.surgeries} cirugias realizadas con ${STATS.reviews} resenas 5 estrellas en Google. Resultados que hablan por si solos.` },
                { title: "Seguimiento a largo plazo", desc: "El acompanamiento post-operatorio es clave para mantener los resultados. Te acompanamos durante todo el proceso." },
                { title: "Cobertura de obra social", desc: "Trabajamos con la mayoria de las obras sociales y prepagas. Te ayudamos con todo el tramite de autorizacion." },
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
              Informacion util
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Link href="/blog/cuanto-cuesta-cirugia-bariatrica-argentina">
                <Card className="group cursor-pointer border border-transparent hover:border-primary-200">
                  <h3 className="font-bold text-secondary-700 group-hover:text-primary-400 transition-colors">
                    Cuanto cuesta la cirugia bariatrica
                  </h3>
                  <p className="mt-1 text-sm text-secondary-500">Precios, obra social y financiamiento</p>
                </Card>
              </Link>
              <Link href="/blog/soy-candidato-cirugia-bariatrica">
                <Card className="group cursor-pointer border border-transparent hover:border-primary-200">
                  <h3 className="font-bold text-secondary-700 group-hover:text-primary-400 transition-colors">
                    Soy candidato/a?
                  </h3>
                  <p className="mt-1 text-sm text-secondary-500">Guia de autoevaluacion para cirugia bariatrica</p>
                </Card>
              </Link>
              <Link href="/blog/cirugia-bariatrica-obra-social">
                <Card className="group cursor-pointer border border-transparent hover:border-primary-200">
                  <h3 className="font-bold text-secondary-700 group-hover:text-primary-400 transition-colors">
                    Cobertura por obra social
                  </h3>
                  <p className="mt-1 text-sm text-secondary-500">Que cubre y como tramitar</p>
                </Card>
              </Link>
              <Link href="/casos-de-exito">
                <Card className="group cursor-pointer border border-transparent hover:border-primary-200">
                  <h3 className="font-bold text-secondary-700 group-hover:text-primary-400 transition-colors">
                    Casos de exito
                  </h3>
                  <p className="mt-1 text-sm text-secondary-500">Historias reales de transformacion</p>
                </Card>
              </Link>
            </div>
          </div>

          <div className="mt-16 rounded-2xl bg-primary-50 p-8 text-center">
            <h2 className="text-xl font-bold text-secondary-700">
              Agenda tu consulta en Chaco
            </h2>
            <p className="mt-2 text-secondary-500">
              Atendemos en Resistencia y Saenz Pena. El primer paso es una
              consulta con nuestro equipo.
            </p>
            <div className="mt-4 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Button
                as="a"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                variant="whatsapp"
              >
                Consultar por WhatsApp
              </Button>
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-primary-400 hover:text-primary-500"
              >
                Ver ubicacion en Google Maps
              </a>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
