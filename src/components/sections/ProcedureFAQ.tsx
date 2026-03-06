"use client";

import { useState } from "react";

interface ProcedureFAQProps {
  faqs: { question: string; answer: string }[];
}

export default function ProcedureFAQ({ faqs }: ProcedureFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mt-6">
      {faqs.map((faq, index) => (
        <div key={index} className="border-b border-gray-200">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="flex w-full items-center justify-between py-5 text-left"
            aria-expanded={openIndex === index}
          >
            <span className="text-base font-semibold text-secondary-700 pr-4">
              {faq.question}
            </span>
            <svg
              className={`h-5 w-5 flex-shrink-0 text-primary-400 transition-transform ${
                openIndex === index ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </button>
          {openIndex === index && (
            <div className="pb-5">
              <p className="text-secondary-500 leading-relaxed">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
