import Link from "next/link";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Card from "@/components/ui/Card";
import { getAllContent } from "@/lib/mdx";

export default function BlogPreview() {
  const posts = getAllContent("blog");

  if (posts.length === 0) return null;

  return (
    <SectionWrapper id="blog" bg="white">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary-400">
          Blog
        </p>
        <h2 className="mt-2 text-3xl font-extrabold text-secondary-700 sm:text-4xl">
          Informacion para tu salud
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-secondary-500">
          Articulos escritos por nuestro equipo medico para que tomes decisiones
          informadas sobre tu salud.
        </p>
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {posts.slice(0, 3).map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <Card className="h-full group cursor-pointer border border-transparent hover:border-primary-200">
              <p className="text-xs text-secondary-400 mb-2">
                {new Date(post.date).toLocaleDateString("es-AR", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <h3 className="text-lg font-bold text-secondary-700 group-hover:text-primary-400 transition-colors">
                {post.title}
              </h3>
              <p className="mt-2 text-sm text-secondary-500 leading-relaxed line-clamp-3">
                {post.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary-400">
                Leer mas
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </Card>
          </Link>
        ))}
      </div>

      {posts.length > 3 && (
        <div className="mt-10 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary-400 hover:text-primary-500 transition-colors"
          >
            Ver todos los articulos
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      )}
    </SectionWrapper>
  );
}
