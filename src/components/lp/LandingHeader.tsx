"use client";

import Image from "next/image";
import { trackStickyCtaClick } from "@/lib/tracking";

export default function LandingHeader() {
  return (
    <header className="sticky top-0 z-40 w-full bg-secondary-900">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-400/40 to-transparent" />

      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2.5">
          <Image
            src="/images/logo.png"
            alt="GrupoByM"
            width={40}
            height={40}
            className="h-10 w-10"
            priority
          />
          <span className="text-lg font-bold text-white tracking-tight">
            Grupo<span className="text-primary-400">ByM</span>
          </span>
        </div>

        <a
          href="#reservar"
          onClick={() => trackStickyCtaClick("lp_header")}
          className="inline-flex items-center gap-2 rounded-full bg-primary-400 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary-400/25 transition-all hover:bg-primary-500 hover:shadow-primary-400/40 hover:scale-[1.02] active:scale-[0.98]"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
          </svg>
          <span className="hidden sm:inline">Reservá Evaluación</span>
          <span className="sm:hidden">Reservar</span>
        </a>
      </nav>
    </header>
  );
}
