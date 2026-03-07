import Link from "next/link";
import Image from "next/image";
import { getAllContent } from "@/lib/mdx";
import { BLOG_CATEGORIES } from "@/lib/constants";

function getCategoryLabel(slug?: string) {
  if (!slug) return null;
  return BLOG_CATEGORIES.find((c) => c.slug === slug)?.label ?? slug;
}

export default function BlogPreview() {
  const posts = getAllContent("blog");

  if (posts.length === 0) return null;

  const featured = posts[0];
  const secondary = posts.slice(1, 4);

  return (
    <section id="blog" className="relative overflow-hidden bg-secondary-800 py-20 md:py-28">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary-900 via-secondary-800 to-secondary-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-400/5 via-transparent to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3 bg-gradient-to-r from-transparent via-primary-400/20 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-400">
            Blog
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Información para{" "}
            <span className="bg-gradient-to-r from-primary-300 to-primary-400 bg-clip-text text-transparent">
              tu salud
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-400">
            Artículos escritos por nuestro equipo médico para que tomes decisiones
            informadas sobre tu salud.
          </p>
        </div>

        {/* Featured post — large card */}
        <Link href={`/blog/${featured.slug}`} className="group mt-14 block">
          <div className="relative overflow-hidden rounded-3xl border border-white/[0.06] bg-gradient-to-br from-white/[0.04] to-white/[0.01] transition-all duration-500 hover:border-primary-400/20 hover:from-white/[0.07] hover:to-white/[0.02]">
            <div className="grid lg:grid-cols-2">
              {/* Image side */}
              <div className="relative h-64 lg:h-full min-h-[280px] overflow-hidden">
                {featured.image && (
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-secondary-800/80 hidden lg:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-800 via-secondary-800/40 to-transparent lg:hidden" />

                {/* Category badge */}
                {featured.category && (
                  <div className="absolute top-4 left-4">
                    <span className="rounded-full bg-primary-400/20 px-3 py-1 text-xs font-semibold text-primary-300 backdrop-blur-sm ring-1 ring-primary-400/30">
                      {getCategoryLabel(featured.category)}
                    </span>
                  </div>
                )}
              </div>

              {/* Content side */}
              <div className="relative p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
                <p className="text-sm text-gray-500">
                  {new Date(featured.date).toLocaleDateString("es-AR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <h3 className="mt-3 text-2xl font-bold text-white transition-colors group-hover:text-primary-300 sm:text-3xl leading-tight">
                  {featured.title}
                </h3>
                <p className="mt-4 text-base text-gray-400 leading-relaxed line-clamp-3">
                  {featured.description}
                </p>
                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-primary-400 transition-all group-hover:gap-3">
                  Leer artículo completo
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </Link>

        {/* Secondary posts — three cards */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {secondary.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              <div className="relative h-full overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-br from-white/[0.04] to-white/[0.01] transition-all duration-500 hover:border-primary-400/20 hover:from-white/[0.07] hover:to-white/[0.02]">
                {/* Image */}
                <div className="relative h-44 w-full overflow-hidden">
                  {post.image && (
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary-800 via-secondary-800/30 to-transparent" />

                  {/* Category badge */}
                  {post.category && (
                    <div className="absolute top-3 left-3">
                      <span className="rounded-full bg-primary-400/20 px-2.5 py-0.5 text-[11px] font-semibold text-primary-300 backdrop-blur-sm ring-1 ring-primary-400/30">
                        {getCategoryLabel(post.category)}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-xs text-gray-500">
                    {new Date(post.date).toLocaleDateString("es-AR", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  <h3 className="mt-2 text-lg font-bold text-white transition-colors group-hover:text-primary-300 leading-snug line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500 leading-relaxed line-clamp-2">
                    {post.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-400/80 transition-colors group-hover:text-primary-400">
                    Leer más
                    <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View all link */}
        {posts.length > 4 && (
          <div className="mt-12 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white transition-all hover:border-primary-400/30 hover:bg-white/[0.08] hover:text-primary-300"
            >
              Ver todos los artículos
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        )}

        {/* Bottom line accent */}
        <div className="mt-16 flex justify-center">
          <div className="h-px w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>
      </div>
    </section>
  );
}
