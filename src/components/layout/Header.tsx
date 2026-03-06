"use client";

import { useState } from "react";
import Link from "next/link";
import { NAV_LINKS, WHATSAPP_URL } from "@/lib/constants";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 z-40 w-full bg-white/95 backdrop-blur-sm shadow-sm" role="banner">
      <nav aria-label="Navegacion principal" className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-400 text-white font-bold text-sm">
            ByM
          </div>
          <span className="text-lg font-bold text-secondary-700">
            GrupoByM
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-secondary-600 transition-colors hover:text-primary-400"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-primary-400 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-500"
          >
            Solicitar Consulta
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2"
          aria-label="Abrir menu"
          aria-expanded={isOpen}
        >
          <svg
            className="h-6 w-6 text-secondary-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="border-t bg-white px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-secondary-600 transition-colors hover:bg-gray-50 hover:text-primary-400"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-full bg-primary-400 px-5 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-primary-500"
            >
              Solicitar Consulta
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
