import Image from "next/image";
import { TEAM_MEMBERS } from "@/lib/constants";

export default function LandingTeam() {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-400">
            Abordaje integral
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-secondary-700 sm:text-4xl">
            No te acompaña un médico. Te acompaña un equipo.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-secondary-500">
            El exito de la cirugía bariátrica depende de un abordaje integral.
            Por eso cada paciente cuenta con profesionales de distintas
            especialidades en cada etapa del proceso.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.name}
              className="flex flex-col items-center text-center"
            >
              <div className="relative mb-4 h-40 w-40 overflow-hidden rounded-full border-4 border-primary-100">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className={`object-cover ${"imagePosition" in member ? `object-${member.imagePosition}` : "object-top"} ${member.name === "Dr. Pablo Rodríguez" ? "scale-[1.8] translate-y-[15%]" : ""}`}
                  sizes="160px"
                />
              </div>
              <h3 className="font-bold text-secondary-700">{member.name}</h3>
              <p className="text-sm font-medium text-primary-400">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
