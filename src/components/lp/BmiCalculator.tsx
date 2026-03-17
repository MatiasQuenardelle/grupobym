"use client";

import { useState } from "react";
import { trackBmiCalculation } from "@/lib/tracking";

function getBmiCategory(bmi: number) {
  if (bmi < 25) return { label: "Normal", color: "text-green-600", bg: "bg-green-50 border-green-200" };
  if (bmi < 30) return { label: "Sobrepeso", color: "text-yellow-600", bg: "bg-yellow-50 border-yellow-200" };
  if (bmi < 35) return { label: "Obesidad grado I", color: "text-orange-600", bg: "bg-orange-50 border-orange-200" };
  if (bmi < 40) return { label: "Obesidad grado II", color: "text-red-600", bg: "bg-red-50 border-red-200" };
  return { label: "Obesidad grado III", color: "text-red-700", bg: "bg-red-50 border-red-300" };
}

function getBmiRange(bmi: number) {
  if (bmi < 25) return "normal";
  if (bmi < 30) return "sobrepeso";
  if (bmi < 35) return "obesidad_1";
  if (bmi < 40) return "obesidad_2";
  return "obesidad_3";
}

export default function BmiCalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);
  const [tracked, setTracked] = useState(false);

  const handleWeightChange = (val: string) => {
    setWeight(val);
    setTracked(false);
    const w = parseFloat(val);
    const h = parseFloat(height);
    if (w > 0 && h > 0) {
      const heightM = h / 100;
      const result = w / (heightM * heightM);
      setBmi(result);
      if (!tracked) {
        trackBmiCalculation(getBmiRange(result));
        setTracked(true);
      }
    } else {
      setBmi(null);
    }
  };

  const handleHeightChange = (val: string) => {
    setHeight(val);
    setTracked(false);
    const w = parseFloat(weight);
    const h = parseFloat(val);
    if (w > 0 && h > 0) {
      const heightM = h / 100;
      const result = w / (heightM * heightM);
      setBmi(result);
      if (!tracked) {
        trackBmiCalculation(getBmiRange(result));
        setTracked(true);
      }
    } else {
      setBmi(null);
    }
  };

  const category = bmi ? getBmiCategory(bmi) : null;

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-secondary-700 sm:text-4xl">
            Calculá tu IMC
          </h2>
          <p className="mt-3 text-secondary-500">
            El Índice de Masa Corporal ayuda a determinar si sos candidato/a para cirugía bariátrica.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label htmlFor="bmi-weight" className="block text-sm font-medium text-secondary-700 mb-1.5">
                Peso (kg)
              </label>
              <input
                id="bmi-weight"
                type="number"
                min="30"
                max="300"
                value={weight}
                onChange={(e) => handleWeightChange(e.target.value)}
                placeholder="Ej: 95"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-secondary-700 placeholder-gray-400 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400/20"
              />
            </div>
            <div>
              <label htmlFor="bmi-height" className="block text-sm font-medium text-secondary-700 mb-1.5">
                Altura (cm)
              </label>
              <input
                id="bmi-height"
                type="number"
                min="100"
                max="250"
                value={height}
                onChange={(e) => handleHeightChange(e.target.value)}
                placeholder="Ej: 165"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-secondary-700 placeholder-gray-400 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400/20"
              />
            </div>
          </div>

          {bmi && category && (
            <div className="mt-6 space-y-4">
              <div className={`rounded-xl border p-4 ${category.bg}`}>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-secondary-600">Tu IMC:</span>
                  <span className={`text-2xl font-bold ${category.color}`}>
                    {bmi.toFixed(1)}
                  </span>
                </div>
                <p className={`mt-1 text-sm font-semibold ${category.color}`}>
                  {category.label}
                </p>
              </div>

              {bmi >= 35 && (
                <div className="rounded-xl border border-green-200 bg-green-50 p-4">
                  <div className="flex items-start gap-3">
                    <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    <div>
                      <p className="font-semibold text-green-700">
                        Sos candidato/a para cirugía bariátrica
                      </p>
                      <p className="mt-1 text-sm text-green-600">
                        Con tu IMC, la cirugía bariátrica puede ayudarte a mejorar tu salud y calidad de vida significativamente.
                      </p>
                    </div>
                  </div>
                  <a
                    href="#reservar"
                    className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary-400/25 transition-all hover:bg-primary-500 active:scale-[0.98]"
                  >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                    </svg>
                    Reservá tu evaluación gratuita
                  </a>
                </div>
              )}

              {bmi >= 30 && bmi < 35 && (
                <div className="rounded-xl border border-orange-200 bg-orange-50 p-4">
                  <div className="flex items-start gap-3">
                    <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-orange-700">
                        Podrías ser candidato/a
                      </p>
                      <p className="mt-1 text-sm text-orange-600">
                        Con un IMC entre 30 y 35, podrías ser candidato/a si tenés comorbilidades como diabetes, hipertensión o apnea del sueño.
                      </p>
                    </div>
                  </div>
                  <a
                    href="#reservar"
                    className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary-400/25 transition-all hover:bg-primary-500 active:scale-[0.98]"
                  >
                    Consultá con nuestro equipo
                  </a>
                </div>
              )}

              {bmi < 30 && (
                <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">
                  <div className="flex items-start gap-3">
                    <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-blue-700">
                        Tu IMC está por debajo del rango quirúrgico
                      </p>
                      <p className="mt-1 text-sm text-blue-600">
                        Generalmente la cirugía bariátrica se indica con IMC mayor a 35, pero cada caso es diferente. Si tenés dudas, podés consultar igualmente.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
