import type { Metadata } from "next";
import LandingHero from "@/components/lp/LandingHero";
import LandingCTA from "@/components/lp/LandingCTA";
import GoogleReviews from "@/components/sections/GoogleReviews";
import LandingDoctor from "@/components/lp/LandingDoctor";

export const metadata: Metadata = {
  title: "Manga Gástrica en Argentina — Dr. Pablo Rodríguez",
  description:
    "Manga gástrica con el Dr. Pablo Rodríguez. Procedimiento más realizado en cirugía bariátrica. Recuperación rápida. Reservá tu evaluación.",
};

export default function MangaGastricaLP() {
  return (
    <>
      <LandingHero
        badge="El Procedimiento Más Realizado"
        title="Manga Gástrica en Argentina"
        titleAccent="con el Dr. Pablo Rodríguez"
        subtitle="Procedimiento mínimamente invasivo con recuperación rápida. Equipo interdisciplinario completo. Más de 250 cirugías realizadas con 5.0 estrellas en Google."
        whatsappMessage="Hola, quiero reservar un turno para manga gástrica."
        trackingSource="lp_manga"
      />

      <LandingDoctor />
      <GoogleReviews />

      <LandingCTA
        title="Dá el primer paso hacia tu nueva vida"
        subtitle="Reservá tu turno. Sin compromiso, respondemos en menos de 2 horas."
        whatsappMessage="Hola, quiero reservar un turno para manga gástrica."
        trackingSource="lp_manga_bottom"
        procedure="manga gástrica"
      />
    </>
  );
}
