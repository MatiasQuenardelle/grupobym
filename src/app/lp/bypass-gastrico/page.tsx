import type { Metadata } from "next";
import LandingHero from "@/components/lp/LandingHero";
import LandingCTA from "@/components/lp/LandingCTA";
import GoogleReviews from "@/components/sections/GoogleReviews";
import LandingDoctor from "@/components/lp/LandingDoctor";

export const metadata: Metadata = {
  title: "Bypass Gástrico en Argentina — Dr. Pablo Rodríguez",
  description:
    "Bypass gástrico con el Dr. Pablo Rodríguez. Técnica gold standard en cirugía bariátrica. Más de 250 cirugías realizadas. Reservá tu turno.",
};

export default function BypassGastricoLP() {
  return (
    <>
      <LandingHero
        badge="Gold Standard en Cirugía Bariátrica"
        title="Bypass Gástrico en Argentina"
        titleAccent="con el Dr. Pablo Rodríguez"
        subtitle="La técnica más efectiva para pérdida de peso sostenida. Equipo interdisciplinario completo. Más de 250 cirugías realizadas con 5.0 estrellas en Google."
        whatsappMessage="Hola, quiero reservar un turno para bypass gástrico."
        trackingSource="lp_bypass"
      />

      <LandingDoctor />
      <GoogleReviews />

      <LandingCTA
        title="Dá el primer paso hacia tu nueva vida"
        subtitle="Reservá tu turno. Sin compromiso, respondemos en menos de 2 horas."
        whatsappMessage="Hola, quiero reservar un turno para bypass gástrico."
        trackingSource="lp_bypass_bottom"
        procedure="bypass gástrico"
      />
    </>
  );
}
