import type { Metadata } from "next";
import LandingHero from "@/components/lp/LandingHero";
import LandingCTA from "@/components/lp/LandingCTA";
import GoogleReviews from "@/components/sections/GoogleReviews";
import LandingDoctor from "@/components/lp/LandingDoctor";

export const metadata: Metadata = {
  title: "Bypass Gástrico — Cambiá Tu Vida con el Dr. Pablo Rodríguez",
  description:
    "Perdé entre el 60% y 80% de tu exceso de peso con bypass gástrico. Equipo interdisciplinario, +250 cirugías, 5.0 estrellas en Google. Reservá tu turno.",
};

export default function MetaBypassGastricoLP() {
  return (
    <>
      <LandingHero
        badge="Transformá Tu Vida"
        title="¿Cansado/a de dietas que no funcionan?"
        titleAccent="El bypass gástrico puede ser tu solución"
        subtitle="Más de 250 cirugías realizadas con 5.0 estrellas en Google. Equipo interdisciplinario que te acompaña antes, durante y después."
        whatsappMessage="Hola, vi la publicidad en redes y quiero reservar una evaluación para bypass gástrico."
        trackingSource="meta_bypass"
      />

      <LandingDoctor />
      <GoogleReviews />

      <LandingCTA
        title="Dá el primer paso hacia tu nueva vida"
        subtitle="Reservá tu turno. Sin compromiso, respondemos en menos de 2 horas."
        whatsappMessage="Hola, vi la publicidad en redes y quiero reservar una evaluación para bypass gástrico."
        trackingSource="meta_bypass_bottom"
        procedure="bypass gástrico"
      />
    </>
  );
}
