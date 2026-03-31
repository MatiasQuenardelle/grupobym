import Link from "next/link";
import { generatePageMetadata } from "@/lib/metadata";
import { getAllContent } from "@/lib/mdx";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import {
  SITE_URL,
  DOCTOR_NAME,
  WHATSAPP_URL,
  STATS,
  PROCEDURES,
} from "@/lib/constants";

export const metadata = generatePageMetadata({
  title: `${DOCTOR_NAME} - Cirujano Bariátrico`,
  description: `${DOCTOR_NAME}, cirujano general y laparoscopista especializado en cirugía bariátrica y esófago-gastroduodenal. Más de ${STATS.surgeries} cirugías realizadas en Resistencia, Chaco.`,
  path: "/equipo/dr-pablo-rodriguez",
});

export default function DoctorProfilePage() {
  const recentPosts = getAllContent("blog").slice(0, 4);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: DOCTOR_NAME,
    url: `${SITE_URL}/equipo/dr-pablo-rodriguez`,
    image: `${SITE_URL}/images/dr-rodriguez.jpg`,
    description:
      "Cirujano general y laparoscopista, especialista en cirugía bariátrica y esófago-gastroduodenal. Lider del equipo interdisciplinario de GrupoByM.",
    medicalSpecialty: [
      "Bariatric Surgery",
      "General Surgery",
      "Laparoscopic Surgery",
    ],
    worksFor: {
      "@type": "MedicalBusiness",
      name: "GrupoByM",
      url: SITE_URL,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Carlos Pellegrini 677",
        addressLocality: "Resistencia",
        addressRegion: "Chaco",
        postalCode: "H3500",
        addressCountry: "AR",
      },
    },
    availableService: PROCEDURES.map((proc) => ({
      "@type": "MedicalProcedure",
      name: proc.title,
      url: `${SITE_URL}/procedimientos/${proc.slug}`,
    })),
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
        name: "Equipo",
        item: `${SITE_URL}/#equipo`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: DOCTOR_NAME,
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
        <nav
          className="mb-6 text-sm text-secondary-400"
          aria-label="Breadcrumb"
        >
          <a href="/" className="hover:text-primary-400">
            Inicio
          </a>
          <span className="mx-2">/</span>
          <a href="/#equipo" className="hover:text-primary-400">
            Equipo
          </a>
          <span className="mx-2">/</span>
          <span className="text-secondary-600">{DOCTOR_NAME}</span>
        </nav>

        <div className="mx-auto max-w-4xl">
          <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
            <div className="flex h-40 w-40 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-400">
              <svg
                className="h-20 w-20"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={1}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </div>

            <div>
              <h1 className="text-3xl font-extrabold text-secondary-700 sm:text-4xl">
                {DOCTOR_NAME}
              </h1>
              <p className="mt-1 text-lg font-medium text-primary-400">
                Cirujano Bariátrico — Lider del Equipo GrupoByM
              </p>
              <p className="mt-4 text-secondary-500 leading-relaxed">
                Cirujano general y laparoscopista, especializado en cirugia
                bariátrica y esófago-gastroduodenal. Con más de {STATS.surgeries}{" "}
                cirugías realizadas, el Dr. Rodríguez lidera el equipo de
                GrupoByM con un enfoque centrado en el paciente, la seguridad
                y los resultados a largo plazo.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-xl font-bold text-secondary-700">
                Especialidades
              </h2>
              <ul className="mt-4 space-y-2">
                {[
                  "Cirugía Bariátrica (Bypass Gástrico, Manga Gástrica)",
                  "Cirugía Metabólica",
                  "Cirugia General y Laparoscópica",
                  "Cirugia Esófago-Gastroduodenal",
                  "Endoscopia Digestiva Alta y Baja",
                ].map((spec) => (
                  <li
                    key={spec}
                    className="flex items-start gap-2 text-secondary-500"
                  >
                    <svg
                      className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    {spec}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-secondary-700">
                Trayectoria
              </h2>
              <div className="mt-4 space-y-4">
                <div className="flex gap-3">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-400 text-sm font-bold">
                    {STATS.surgeries}
                  </div>
                  <div>
                    <p className="font-semibold text-secondary-700">
                      Cirugías realizadas
                    </p>
                    <p className="text-sm text-secondary-500">
                      Bypass gástrico, manga gástrica, cirugía metabólica
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-400 text-sm font-bold">
                    {STATS.rating}
                  </div>
                  <div>
                    <p className="font-semibold text-secondary-700">
                      Calificacion en Google
                    </p>
                    <p className="text-sm text-secondary-500">
                      {STATS.reviews} resenas verificadas con puntuacion perfecta
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-400 text-sm font-bold">
                    {STATS.countries}
                  </div>
                  <div>
                    <p className="font-semibold text-secondary-700">
                      Países de origen de pacientes
                    </p>
                    <p className="text-sm text-secondary-500">
                      Argentina, Paraguay y Brasil
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-xl font-bold text-secondary-700">
              Procedimientos que realiza
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {PROCEDURES.map((proc) => (
                <Link key={proc.slug} href={`/procedimientos/${proc.slug}`}>
                  <Card className="group cursor-pointer border border-transparent hover:border-primary-200">
                    <h3 className="font-bold text-secondary-700 group-hover:text-primary-400 transition-colors">
                      {proc.title}
                    </h3>
                    <p className="mt-1 text-sm text-secondary-500 line-clamp-2">
                      {proc.description}
                    </p>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-xl font-bold text-secondary-700">
              Enfoque del equipo interdisciplinario
            </h2>
            <p className="mt-4 text-secondary-500 leading-relaxed">
              El Dr. Rodríguez lidera un equipo interdisciplinario compuesto por
              nutricionistas, psicologa y profesor de educacion fisica. Este
              abordaje integral es clave para el exito de la cirugía bariátrica,
              ya que garantiza un acompanamiento completo en todas las
              dimensiones del proceso: fisica, nutriciónal, emocional y de
              actividad fisica.
            </p>
            <p className="mt-3 text-secondary-500 leading-relaxed">
              El equipo trabaja de forma coordinada antes, durante y después de
              la cirugía, con controles periódicos y seguimiento personalizado
              para cada paciente. Este modelo de trabajo en equipo es uno de los
              pilares que explica los excelentes resultados de GrupoByM.
            </p>
          </div>

          {recentPosts.length > 0 && (
            <div className="mt-12">
              <h2 className="text-xl font-bold text-secondary-700">
                Artículos del {DOCTOR_NAME}
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {recentPosts.map((post) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`}>
                    <Card className="group cursor-pointer border border-transparent hover:border-primary-200">
                      <p className="text-xs text-secondary-400 mb-1">
                        {new Date(post.date).toLocaleDateString("es-AR", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                      <h3 className="font-bold text-secondary-700 group-hover:text-primary-400 transition-colors">
                        {post.title}
                      </h3>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="mt-12 rounded-2xl bg-primary-50 p-8 text-center">
            <h2 className="text-xl font-bold text-secondary-700">
              Agenda tu consulta con el {DOCTOR_NAME}
            </h2>
            <p className="mt-2 text-secondary-500">
              El primer paso es una consulta. Te escuchamos, evaluamos tu caso y
              te asesoramos sobre las opciones disponibles.
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
