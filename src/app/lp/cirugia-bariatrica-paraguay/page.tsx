import type { Metadata } from "next";
import ParaguayLanding from "@/components/lp/ParaguayLanding";
import LandingDoctor from "@/components/lp/LandingDoctor";
import LandingTeam from "@/components/lp/LandingTeam";

export const metadata: Metadata = {
  title: "Cirugía Bariátrica desde Paraguay — Mitad de Precio, Todo Incluido",
  description:
    "Cirugía bariátrica desde Paraguay a mitad de precio. Incluye cirugía, seguimiento por 1 año, nutricionista, psicóloga y traslado desde Asunción. Dr. Pablo Rodríguez.",
};

export default function ParaguayLP() {
  return (
    <>
      <ParaguayLanding />
      <LandingDoctor />
      <LandingTeam />
    </>
  );
}
