import type { Metadata } from "next";
import Link from "next/link";
import { WHATSAPP_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Página no encontrada",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-24 text-center">
      <h1 className="text-6xl font-extrabold text-primary-400">404</h1>
      <h2 className="mt-4 text-2xl font-bold text-secondary-700">
        Página no encontrada
      </h2>
      <p className="mt-3 max-w-md text-secondary-500">
        La página que buscás no existe o fue movida. Podés volver al inicio o
        contactarnos por WhatsApp.
      </p>
      <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
        <Link
          href="/"
          className="rounded-full bg-primary-400 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-500"
        >
          Volver al inicio
        </Link>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-gray-200 bg-white px-6 py-2.5 text-sm font-semibold text-secondary-600 transition-colors hover:border-primary-200 hover:text-primary-400"
        >
          Contactar por WhatsApp
        </a>
      </div>
    </div>
  );
}
