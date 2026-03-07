import Link from "next/link";
import Image from "next/image";
import { PROCEDURES, SITE_URL } from "@/lib/constants";

const PROCEDURE_BENEFITS: Record<string, string[]> = {
  bypass: [
    "Gold standard mundial",
    "Resultados a largo plazo",
    "Mejora diabetes y comorbilidades",
  ],
  manga: [
    "Minimamente invasiva",
    "Recuperación rápida",
    "Excelentes resultados",
  ],
};

const PROCEDURE_STATS: Record<string, { value: string; label: string }> = {
  bypass: { value: "70-80%", label: "exceso de peso perdido" },
  manga: { value: "60-70%", label: "exceso de peso perdido" },
};

export default function Procedures() {
  const featured = PROCEDURES.filter((p) => p.icon === "bypass" || p.icon === "manga");
  const secondary = PROCEDURES.filter((p) => p.icon !== "bypass" && p.icon !== "manga");

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Procedimientos de Cirugía Bariátrica",
    itemListElement: PROCEDURES.map((proc, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: proc.title,
      url: `${SITE_URL}/procedimientos/${proc.slug}`,
    })),
  };

  return (
    <section id="procedimientos" className="relative overflow-hidden bg-secondary-800 py-20 md:py-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />

      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary-900 via-secondary-800 to-secondary-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary-400/5 via-transparent to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3 bg-gradient-to-r from-transparent via-primary-400/20 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-400">
            Nuestros procedimientos
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Encontra el procedimiento{" "}
            <span className="bg-gradient-to-r from-primary-300 to-primary-400 bg-clip-text text-transparent">
              adecuado para vos
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-400">
            Cada paciente es diferente. Trabajamos con las técnicas más avanzadas
            para encontrar la mejor opcion para tu caso.
          </p>
        </div>

        {/* Featured procedures — two big cards */}
        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {featured.map((proc) => (
            <Link key={proc.slug} href={`/procedimientos/${proc.slug}`} className="group">
              <div className="relative h-full overflow-hidden rounded-3xl border border-white/[0.06] bg-gradient-to-br from-white/[0.04] to-white/[0.01] transition-all duration-500 hover:border-primary-400/20 hover:from-white/[0.07] hover:to-white/[0.02]">
                {/* Image */}
                <div className="relative h-48 sm:h-56 w-full overflow-hidden">
                  <Image
                    src={proc.image}
                    alt={proc.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary-800 via-secondary-800/40 to-transparent" />

                  {/* Stat badge on image */}
                  {PROCEDURE_STATS[proc.icon] && (
                    <div className="absolute bottom-4 right-4 rounded-xl bg-black/50 backdrop-blur-sm px-4 py-2 text-right">
                      <p className="text-2xl font-bold text-white">{PROCEDURE_STATS[proc.icon].value}</p>
                      <p className="text-xs text-gray-300">{PROCEDURE_STATS[proc.icon].label}</p>
                    </div>
                  )}
                </div>

                {/* Subtle corner glow on hover */}
                <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-primary-400/0 blur-3xl transition-all duration-700 group-hover:bg-primary-400/10" />

                <div className="relative p-8 sm:p-10 pt-4 sm:pt-6">
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white transition-colors group-hover:text-primary-300 sm:text-3xl">
                    {proc.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-base text-gray-400 leading-relaxed">
                    {proc.description}
                  </p>

                  {/* Benefits list */}
                  {PROCEDURE_BENEFITS[proc.icon] && (
                    <ul className="mt-6 space-y-3">
                      {PROCEDURE_BENEFITS[proc.icon].map((benefit) => (
                        <li key={benefit} className="flex items-center gap-3">
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-400/15">
                            <svg className="h-3 w-3 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                          </span>
                          <span className="text-sm text-gray-300">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* CTA */}
                  <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-primary-400 transition-all group-hover:gap-3">
                    Conocer más sobre {proc.title.toLowerCase().includes("bypass") ? "bypass" : "manga"}
                    <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Secondary procedures */}
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {secondary.map((proc) => (
            <Link key={proc.slug} href={`/procedimientos/${proc.slug}`} className="group">
              <div className="relative h-full overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] transition-all duration-500 hover:border-primary-400/15 hover:bg-white/[0.05]">
                {/* Image */}
                <div className="relative h-36 w-full overflow-hidden">
                  <Image
                    src={proc.image}
                    alt={proc.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary-800 via-secondary-800/30 to-transparent" />
                </div>

                <div className="p-6 sm:p-7 pt-4">
                  <h3 className="text-lg font-bold text-white transition-colors group-hover:text-primary-300">
                    {proc.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-gray-500 leading-relaxed">
                    {proc.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-400/80 transition-colors group-hover:text-primary-400">
                    Más información
                    <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom line accent */}
        <div className="mt-16 flex justify-center">
          <div className="h-px w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>
      </div>
    </section>
  );
}
