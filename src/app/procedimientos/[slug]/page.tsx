import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getContentBySlug, getAllSlugs, getContentByTag } from "@/lib/mdx";
import { generatePageMetadata } from "@/lib/metadata";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { WHATSAPP_URL, SITE_URL, DOCTOR_NAME } from "@/lib/constants";
import ProcedureFAQ from "@/components/sections/ProcedureFAQ";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllSlugs("procedimientos").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const content = getContentBySlug("procedimientos", params.slug);
  if (!content) return {};

  return generatePageMetadata({
    title: content.meta.title,
    description: content.meta.description,
    path: `/procedimientos/${params.slug}`,
  });
}

const PROCEDURE_FAQS: Record<string, { question: string; answer: string }[]> = {
  "bypass-gastrico": [
    { question: "Cuanto peso se pierde con el bypass gastrico?", answer: "El bypass gastrico permite perder entre el 60-80% del exceso de peso en los primeros 12-18 meses. Los resultados se mantienen a largo plazo cuando se sigue el plan de seguimiento con el equipo interdisciplinario." },
    { question: "Es reversible el bypass gastrico?", answer: "Tecnicamente el bypass gastrico puede revertirse, pero es una cirugia compleja que raramente se indica. La gran mayoria de los pacientes estan satisfechos con los resultados y no necesitan reversion." },
    { question: "Cuanto dura la cirugia de bypass gastrico?", answer: "La cirugia dura aproximadamente 1.5 a 2 horas y se realiza por via laparoscopica (minimamente invasiva). La internacion habitual es de 48-72 horas." },
    { question: "Puedo comer normal despues del bypass gastrico?", answer: "Despues de un periodo de adaptacion progresiva (liquidos, puré, blandos), los pacientes pueden comer de forma variada pero en porciones mas pequenas. El equipo de nutricion te acompana en cada etapa." },
    { question: "El bypass gastrico cura la diabetes?", answer: "El bypass gastrico logra remision de la diabetes tipo 2 en hasta el 80% de los casos. Muchos pacientes pueden dejar la medicacion para la diabetes despues de la cirugia." },
    { question: "Que riesgos tiene el bypass gastrico?", answer: "Como toda cirugia, tiene riesgos, pero la tasa de complicaciones es baja cuando es realizada por un equipo experimentado. Los riesgos incluyen infeccion, sangrado y fistula, pero ocurren en menos del 2% de los casos." },
  ],
  "manga-gastrica": [
    { question: "Cuanto peso se pierde con la manga gastrica?", answer: "La manga gastrica permite perder entre el 50-70% del exceso de peso en los primeros 12-18 meses. Los resultados dependen del seguimiento del plan nutricional y el acompanamiento post-operatorio." },
    { question: "Es reversible la manga gastrica?", answer: "No, la manga gastrica no es reversible ya que se remueve una porcion del estomago. Sin embargo, puede convertirse a bypass gastrico si fuera necesario en el futuro." },
    { question: "Cuanto dura la cirugia de manga gastrica?", answer: "La cirugia dura aproximadamente 1 hora y se realiza por via laparoscopica. La internacion habitual es de 48 horas." },
    { question: "Voy a tener hambre despues de la manga gastrica?", answer: "La manga gastrica reduce significativamente el hambre porque se remueve la parte del estomago que produce grelina, la hormona del hambre. Los pacientes notan una reduccion importante del apetito." },
    { question: "Que diferencia hay entre manga gastrica y bypass gastrico?", answer: "La manga gastrica es un procedimiento mas simple que reduce el tamano del estomago sin desvio intestinal. El bypass gastrico es mas complejo pero logra mayor perdida de peso y mejor control de la diabetes. La eleccion depende de cada caso." },
    { question: "Puedo quedar embarazada despues de la manga gastrica?", answer: "Si, se recomienda esperar al menos 12-18 meses despues de la cirugia para buscar un embarazo. Esto permite estabilizar el peso y los niveles nutricionales. El seguimiento con el equipo es fundamental." },
  ],
  "cirugia-metabolica": [
    { question: "Que es la cirugia metabolica?", answer: "La cirugia metabolica es un procedimiento quirurgico disenado para tratar enfermedades metabolicas, principalmente la diabetes tipo 2. A diferencia de la cirugia bariatrica tradicional, se enfoca en la mejora de las alteraciones metabolicas." },
    { question: "Quien es candidato para cirugia metabolica?", answer: "Los candidatos son pacientes con diabetes tipo 2 de dificil control, con IMC entre 30 y 40, que no logran un control adecuado con medicacion. Cada caso se evalua de forma individual." },
    { question: "La cirugia metabolica cura la diabetes?", answer: "La cirugia metabolica logra remision de la diabetes tipo 2 en hasta el 80% de los casos. Esto significa que muchos pacientes pueden dejar la medicacion y mantener valores normales de glucemia." },
    { question: "Es lo mismo que la cirugia bariatrica?", answer: "Son procedimientos similares pero con objetivos diferentes. La cirugia bariatrica busca principalmente la perdida de peso, mientras que la cirugia metabolica se enfoca en el control de la diabetes y el sindrome metabolico." },
    { question: "Cuanto dura la recuperacion?", answer: "La recuperacion es similar a la de otras cirugias bariatricas: 48-72 horas de internacion, 1-2 semanas de actividades livianas y 4-6 semanas para retomar actividades normales." },
  ],
  endoscopia: [
    { question: "Duele la endoscopia?", answer: "No, la endoscopia se realiza con sedacion, por lo que el paciente no siente dolor ni molestias durante el procedimiento. Es un estudio seguro y bien tolerado." },
    { question: "Cuanto dura una endoscopia?", answer: "El procedimiento dura entre 15 y 30 minutos. Es ambulatorio, por lo que no requiere internacion." },
    { question: "Que preparacion necesita una endoscopia?", answer: "Para la endoscopia digestiva alta se requiere ayuno de 8 horas. Para la colonoscopia se necesita una preparacion especial del colon que indicamos previamente. Nuestro equipo te da instrucciones detalladas." },
    { question: "Es necesaria una endoscopia antes de la cirugia bariatrica?", answer: "Si, la endoscopia digestiva alta es un estudio pre-quirurgico obligatorio antes de la cirugia bariatrica. Permite evaluar el estado del esofago, estomago y duodeno antes de la intervencion." },
    { question: "Puedo manejar despues de la endoscopia?", answer: "No se recomienda manejar despues del procedimiento por el efecto de la sedacion. Es importante asistir acompanado/a." },
  ],
};

export default function ProcedimientoPage({ params }: Props) {
  const content = getContentBySlug("procedimientos", params.slug);
  if (!content) notFound();

  const faqs = PROCEDURE_FAQS[params.slug] || [];
  const relatedTag = params.slug === "endoscopia" ? "cirugia-bariatrica" : params.slug;
  const relatedArticles = getContentByTag("blog", relatedTag).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: content.meta.title,
    description: content.meta.description,
    url: `${SITE_URL}/procedimientos/${params.slug}`,
    procedureType: params.slug === "endoscopia" ? "Diagnostic" : "Surgical",
    bodyLocation: "Abdomen",
    howPerformed: "Laparoscopic",
    status: "https://schema.org/EventScheduled",
    performer: {
      "@type": "Physician",
      name: DOCTOR_NAME,
      url: `${SITE_URL}/equipo/dr-pablo-rodriguez`,
      medicalSpecialty: "Bariatric Surgery",
      worksFor: {
        "@type": "MedicalBusiness",
        name: "GrupoByM",
        url: SITE_URL,
      },
    },
  };

  const faqJsonLd = faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  } : null;

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
        name: "Procedimientos",
        item: `${SITE_URL}/procedimientos`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: content.meta.title,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <SectionWrapper className="pt-28 md:pt-36">
        <nav className="mb-6 text-sm text-secondary-400" aria-label="Breadcrumb">
          <a href="/" className="hover:text-primary-400">Inicio</a>
          <span className="mx-2">/</span>
          <a href="/procedimientos" className="hover:text-primary-400">Procedimientos</a>
          <span className="mx-2">/</span>
          <span className="text-secondary-600">{content.meta.title}</span>
        </nav>

        <article className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-extrabold text-secondary-700 sm:text-4xl lg:text-5xl">
            {content.meta.title}
          </h1>
          <p className="mt-4 text-lg text-secondary-500">
            {content.meta.description}
          </p>

          <div className="prose mt-10">
            <MDXRemote source={content.content} />
          </div>

          {faqs.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-secondary-700">
                Preguntas frecuentes sobre {content.meta.title.toLowerCase()}
              </h2>
              <ProcedureFAQ faqs={faqs} />
            </div>
          )}

          <div className="mt-12 rounded-2xl bg-primary-50 p-8 text-center">
            <h3 className="text-xl font-bold text-secondary-700">
              Queres saber si sos candidato/a?
            </h3>
            <p className="mt-2 text-secondary-500">
              Solicita una consulta sin compromiso con nuestro equipo.
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

          {relatedArticles.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-secondary-700">
                Articulos relacionados
              </h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {relatedArticles.map((post) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`}>
                    <Card className="h-full group cursor-pointer border border-transparent hover:border-primary-200">
                      <p className="text-xs text-secondary-400 mb-2">
                        {new Date(post.date).toLocaleDateString("es-AR", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                      <h3 className="text-base font-bold text-secondary-700 group-hover:text-primary-400 transition-colors">
                        {post.title}
                      </h3>
                      <p className="mt-1 text-sm text-secondary-500 leading-relaxed line-clamp-2">
                        {post.description}
                      </p>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>
      </SectionWrapper>
    </>
  );
}
