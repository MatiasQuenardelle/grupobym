"use client";

const CONSULTATION_TESTIMONIALS = [
  {
    text: "Fui a la consulta sin estar 100% segura y el Dr. Pablo me explicó todo sin ninguna presión. Me fui tranquila y con toda la información que necesitaba para tomar mi decisión.",
    name: "Paciente de Resistencia",
  },
  {
    text: "Lo que más me gustó es que en la primera consulta ya te dan un panorama completo: costos, cobertura de obra social, tiempos de recuperación. No te esconden nada.",
    name: "Paciente de Corrientes",
  },
  {
    text: "Tenía miedo de que me presionaran para operarme, pero fue todo lo contrario. El equipo me hizo sentir cómoda y me explicaron que no todos los casos requieren cirugía.",
    name: "Paciente de Formosa",
  },
];

export default function LandingConsultationProof() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-extrabold text-secondary-700 sm:text-4xl">
          ¿Cómo es la primera consulta?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-secondary-500">
          Sin compromiso. Te explicamos todo sobre tu caso particular.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {CONSULTATION_TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-2xl border border-gray-100 bg-gray-50 p-6"
            >
              <div className="flex gap-1 text-accent-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-secondary-600 leading-relaxed italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <p className="mt-4 text-xs font-medium text-secondary-400">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#reservar"
            className="inline-flex items-center gap-2 rounded-full bg-primary-400 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-primary-400/25 transition-all hover:bg-primary-500 active:scale-[0.98]"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
            </svg>
            Reservá tu turno
          </a>
        </div>
      </div>
    </section>
  );
}
