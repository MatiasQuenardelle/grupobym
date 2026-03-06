import SectionWrapper from "@/components/ui/SectionWrapper";
import { REVIEWS, STATS, GOOGLE_MAPS_URL } from "@/lib/constants";

const avatarColors = [
  "bg-primary-400",
  "bg-accent-400",
  "bg-green-500",
  "bg-blue-500",
  "bg-purple-500",
  "bg-rose-500",
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(rating)].map((_, i) => (
        <svg key={i} className="h-4 w-4 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  );
}

export default function GoogleReviews() {
  return (
    <SectionWrapper id="resenas" bg="gray">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary-400">
          Resenas de pacientes
        </p>
        <h2 className="mt-2 text-3xl font-extrabold text-secondary-700 sm:text-4xl">
          Lo que dicen nuestros <span className="text-primary-400">pacientes</span>
        </h2>
        <p className="mx-auto mt-3 max-w-md text-secondary-500">
          La confianza de quienes nos eligen habla por nosotros.
        </p>

        {/* Google rating summary badge */}
        <a
          href={GOOGLE_MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2.5 rounded-full border border-gray-200 bg-white px-5 py-2.5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary-200 hover:shadow-md"
        >
          <GoogleIcon />
          <span className="text-sm font-semibold text-secondary-700">{STATS.rating}</span>
          <Stars rating={5} />
          <span className="text-sm text-secondary-400">({STATS.reviews} resenas)</span>
        </a>
      </div>

      {/* Review cards */}
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {REVIEWS.map((review, index) => (
          <a
            key={review.name}
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col rounded-2xl border border-gray-200/70 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-xl hover:shadow-primary-400/[0.06]"
          >
            {/* Top accent bar on hover */}
            <div className="absolute inset-x-0 top-0 h-0.5 scale-x-0 rounded-t-2xl bg-gradient-to-r from-primary-400 to-primary-300 transition-transform duration-300 group-hover:scale-x-100" />

            {/* Author row */}
            <div className="mb-3 flex items-center gap-3">
              <div
                className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold text-white ${avatarColors[index % avatarColors.length]}`}
              >
                {review.name.charAt(0)}
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-secondary-700">
                  {review.name}
                </p>
                <div className="flex items-center gap-2">
                  <Stars rating={review.rating} />
                  <span className="text-xs text-secondary-400">{review.date}</span>
                </div>
              </div>
            </div>

            {/* Review text */}
            <p className="flex-1 text-sm leading-relaxed text-secondary-600">
              &ldquo;{review.text}&rdquo;
            </p>

            {/* Google attribution */}
            <div className="mt-4 flex items-center gap-1.5 text-xs text-secondary-400">
              <GoogleIcon />
              <span>Google</span>
            </div>
          </a>
        ))}
      </div>

      {/* CTA to Google Maps */}
      <div className="mt-12 flex justify-center">
        <a
          href={GOOGLE_MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 rounded-full border border-gray-200 bg-white px-7 py-3.5 text-sm font-semibold text-secondary-600 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary-200 hover:text-primary-400 hover:shadow-md"
        >
          Ver todas las resenas en Google Maps
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 transition-colors group-hover:bg-primary-50">
            <svg
              width="12"
              height="12"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              className="text-secondary-400 transition-colors group-hover:text-primary-400"
            >
              <path d="M6 4l4 4-4 4" />
            </svg>
          </div>
        </a>
      </div>
    </SectionWrapper>
  );
}
