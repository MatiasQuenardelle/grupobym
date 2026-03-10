import { REVIEWS, SHORT_REVIEWS, GOOGLE_MAPS_URL } from "@/lib/constants";

export default function LandingReviews() {
  // Pick 2 featured + 3 short reviews for the landing page
  const featured = REVIEWS.slice(0, 2);
  const short = SHORT_REVIEWS.slice(0, 3);

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-extrabold text-secondary-700 sm:text-4xl">
          Lo que dicen nuestros pacientes
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-secondary-500">
          Más de 50 reseñas con 5 estrellas en Google
        </p>

        {/* Featured reviews */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {featured.map((review) => (
            <div key={review.name} className="rounded-2xl border border-gray-200 bg-white p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-400/10 text-primary-400 font-bold">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-secondary-700">{review.name}</p>
                  <div className="flex text-accent-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm text-secondary-500 leading-relaxed line-clamp-4">
                {review.text}
              </p>
            </div>
          ))}
        </div>

        {/* Short reviews */}
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {short.map((review) => (
            <div key={review.name} className="rounded-xl border border-gray-200 bg-white p-4">
              <div className="flex items-center gap-2 mb-2">
                <p className="text-sm font-semibold text-secondary-700">{review.name}</p>
                <div className="flex text-accent-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-xs text-secondary-500 leading-relaxed line-clamp-3">
                {review.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary-400 hover:text-primary-500 transition-colors"
          >
            Ver todas las reseñas en Google
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
