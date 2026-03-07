"use client";

import { useState } from "react";
import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { REVIEWS, SHORT_REVIEWS, STATS, GOOGLE_MAPS_URL, SITE_URL } from "@/lib/constants";

const avatarColors = [
  "bg-primary-400",
  "bg-accent-400",
  "bg-green-500",
  "bg-blue-500",
  "bg-purple-500",
  "bg-rose-500",
];

function Stars({ rating, size = "sm" }: { rating: number; size?: "sm" | "lg" }) {
  const cls = size === "lg" ? "h-5 w-5" : "h-4 w-4";
  return (
    <div className="flex gap-0.5">
      {[...Array(rating)].map((_, i) => (
        <svg key={i} className={`${cls} text-accent-400`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function GoogleIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  );
}

export default function GoogleReviews() {
  const [active, setActive] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const review = REVIEWS[active];

  const reviewJsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "GrupoByM",
    url: SITE_URL,
    review: REVIEWS.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.name },
      datePublished: r.date,
      reviewRating: {
        "@type": "Rating",
        ratingValue: String(r.rating),
        bestRating: "5",
      },
      reviewBody: r.text,
    })),
  };

  return (
    <SectionWrapper id="resenas" bg="gray">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewJsonLd) }}
      />
      {/* Header */}
      <div className="text-center">
        <a
          href={GOOGLE_MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mb-4 text-secondary-400 hover:text-secondary-600 transition-colors"
        >
          <GoogleIcon className="h-6 w-6" />
          <span className="text-sm font-medium">Google Reviews</span>
        </a>
        <h2 className="text-3xl font-extrabold text-secondary-700 sm:text-4xl">
          Lo que dicen nuestros pacientes
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-secondary-500">
          Historias reales de personas que confiaron en nuestro equipo.
          Todas las resenas son verificadas en Google.
        </p>

        {/* Rating badge linking to Google */}
        <a
          href={GOOGLE_MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-3 rounded-full border border-gray-200 bg-white px-6 py-3 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary-200 hover:shadow-md"
        >
          <GoogleIcon />
          <span className="text-lg font-bold text-secondary-700">{STATS.rating}</span>
          <Stars rating={5} size="lg" />
          <span className="text-sm text-secondary-400">|</span>
          <span className="text-sm font-medium text-primary-400 underline underline-offset-2">
            Ver en Google
          </span>
        </a>
      </div>

      {/* Featured review carousel */}
      <div className="mt-12 mx-auto max-w-3xl">
        <a
          href={GOOGLE_MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group block rounded-2xl border border-gray-200/70 bg-white p-8 sm:p-10 shadow-sm transition-all duration-300 hover:border-primary-200 hover:shadow-lg"
        >
          {/* Before/After images */}
          {(() => {
            const r = review as Record<string, unknown>;
            if (r.beforeImage && r.afterImage) {
              return (
                <div className="mb-6 flex gap-3 rounded-xl overflow-hidden">
                  <div className="relative flex-1 aspect-[3/4]">
                    <Image
                      src={r.beforeImage as string}
                      alt={`${review.name} - Antes`}
                      fill
                      className={`object-cover rounded-lg ${active === 0 ? "" : "object-top"}`}
                      style={active === 0 ? { objectPosition: "center 25%" } : undefined}
                      sizes="(max-width: 768px) 50vw, 300px"
                      loading="lazy"
                    />
                    <span className="absolute bottom-2 left-2 rounded-full bg-black/70 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                      Antes
                    </span>
                  </div>
                  <div className="relative flex-1 aspect-[3/4]">
                    <Image
                      src={r.afterImage as string}
                      alt={`${review.name} - Despues`}
                      fill
                      className={`object-cover rounded-lg ${active === 0 ? "" : "object-top"}`}
                      style={active === 0 ? { objectPosition: "center 25%" } : undefined}
                      sizes="(max-width: 768px) 50vw, 300px"
                      loading="lazy"
                    />
                    <span className="absolute bottom-2 left-2 rounded-full bg-primary-400 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                      Despues
                    </span>
                  </div>
                </div>
              );
            }
            if (r.image) {
              return (
                <div className="relative mb-6 w-full aspect-[16/9] rounded-xl overflow-hidden">
                  <Image
                    src={r.image as string}
                    alt={`${review.name} - Antes y Despues`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 600px"
                    loading="lazy"
                  />
                </div>
              );
            }
            return null;
          })()}

          {/* Review text */}
          <div className="text-sm sm:text-base leading-relaxed text-secondary-600">
            <p className={expanded ? "" : "line-clamp-4"}>
              &ldquo;{review.text}&rdquo;
            </p>
            {review.text.length > 200 && (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setExpanded(!expanded);
                }}
                className="mt-2 text-sm font-medium text-primary-400 hover:text-primary-500 transition-colors"
              >
                {expanded ? "Ver menos" : "Leer mas..."}
              </button>
            )}
          </div>

          {/* Author */}
          <div className="mt-8 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold text-white ${avatarColors[active % avatarColors.length]}`}
              >
                {review.name.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-secondary-700">{review.name}</p>
                <div className="flex items-center gap-2">
                  <Stars rating={review.rating} />
                  <span className="text-xs text-secondary-400">{review.date}</span>
                </div>
              </div>
            </div>

            {/* Google attribution */}
            <div className="flex items-center gap-1.5 text-xs text-secondary-400">
              <GoogleIcon className="h-4 w-4" />
              <span>Google</span>
            </div>
          </div>
        </a>

        {/* Carousel nav */}
        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            onClick={() => {
              setActive(active === 0 ? REVIEWS.length - 1 : active - 1);
              setExpanded(false);
            }}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-secondary-500 transition-colors hover:bg-primary-50 hover:text-primary-400"
            aria-label="Resena anterior"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          <div className="flex gap-2">
            {REVIEWS.map((_, i) => (
              <button
                key={i}
                onClick={() => { setActive(i); setExpanded(false); }}
                className={`h-2.5 rounded-full transition-all ${
                  i === active
                    ? "w-8 bg-primary-400"
                    : "w-2.5 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Ver resena ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => {
              setActive(active === REVIEWS.length - 1 ? 0 : active + 1);
              setExpanded(false);
            }}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-secondary-500 transition-colors hover:bg-primary-50 hover:text-primary-400"
            aria-label="Siguiente resena"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>

      {/* Short reviews grid */}
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SHORT_REVIEWS.map((r, i) => (
          <a
            key={r.name}
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col rounded-xl border border-gray-200/70 bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-primary-200 hover:shadow-md border-l-2 border-l-primary-300 sm:border-l sm:border-l-gray-200/70"
          >
            <div className="mb-2 flex items-center gap-2">
              <div
                className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold text-white ${avatarColors[(i + REVIEWS.length) % avatarColors.length]}`}
              >
                {r.name.charAt(0)}
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-xs font-semibold text-secondary-700">
                  {r.name}
                </p>
                <Stars rating={5} />
              </div>
            </div>
            <p className="flex-1 text-xs leading-relaxed text-secondary-500">
              &ldquo;{r.text}&rdquo;
            </p>
          </a>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-10 flex justify-center">
        <a
          href={GOOGLE_MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 rounded-full border border-gray-200 bg-white px-7 py-3.5 text-sm font-semibold text-secondary-600 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary-200 hover:text-primary-400 hover:shadow-md"
        >
          <GoogleIcon className="h-4 w-4" />
          Ver las {STATS.reviews} resenas en Google
          <svg
            className="h-4 w-4 transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </a>
      </div>
    </SectionWrapper>
  );
}
