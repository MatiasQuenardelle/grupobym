import type { Metadata } from "next";
import LandingHero from "@/components/lp/LandingHero";
import LandingCTA from "@/components/lp/LandingCTA";
import GoogleReviews from "@/components/sections/GoogleReviews";
import LandingDoctor from "@/components/lp/LandingDoctor";

export const metadata: Metadata = {
  title: "Cirugía Metabólica — Tratamiento para Diabetes Tipo 2",
  description:
    "Cirugía metabólica con el Dr. Pablo Rodríguez. Tratamiento quirúrgico para diabetes tipo 2. Reducción de riesgo cardiovascular. Reservá tu turno.",
};

export default function CirugiaMetabolicaLP() {
  return (
    <>
      <LandingHero
        badge="Control Metabólico"
        title="Cirugía Metabólica"
        titleAccent="Tratamiento para Diabetes Tipo 2"
        subtitle="Tratamiento quirúrgico para el control de la diabetes tipo 2 y enfermedades metabólicas. Dr. Pablo Rodríguez y equipo interdisciplinario."
        whatsappMessage="Hola, quiero reservar un turno para cirugía metabólica."
        trackingSource="lp_metabolica"
      />

      <LandingDoctor />
      <GoogleReviews />

      <LandingCTA
        title="Recuperá el control de tu diabetes"
        subtitle="Reservá tu turno. Sin compromiso, respondemos en menos de 2 horas."
        whatsappMessage="Hola, quiero reservar un turno para cirugía metabólica."
        trackingSource="lp_metabolica_bottom"
        procedure="cirugía metabólica"
      />
    </>
  );
}
