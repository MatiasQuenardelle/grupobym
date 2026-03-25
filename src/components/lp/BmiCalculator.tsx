"use client";

import { useState } from "react";
import { WHATSAPP_NUMBER, PHONE_NUMBER } from "@/lib/constants";
import { trackBmiCalculation, trackWhatsAppClick, trackPhoneClick } from "@/lib/tracking";
import { useBmi } from "./BmiContext";

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

interface BmiCalculatorProps {
  procedure: string;
}

export default function BmiCalculator({ procedure }: BmiCalculatorProps) {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);
  const [tracked, setTracked] = useState(false);
  const { setBmiData } = useBmi();

  const calculate = (w: number, h: number) => {
    if (w > 0 && h > 0) {
      const heightM = h / 100;
      const result = w / (heightM * heightM);
      setBmi(result);
      const category = getBmiCategory(result);
      setBmiData({ weight: w, height: h, bmi: result, category: category.label });
      if (!tracked) {
        trackBmiCalculation(getBmiRange(result));
        setTracked(true);
      }
    } else {
      setBmi(null);
      setBmiData(null);
    }
  };

  const handleWeightChange = (val: string) => {
    setWeight(val);
    setTracked(false);
    calculate(parseFloat(val), parseFloat(height));
  };

  const handleHeightChange = (val: string) => {
    setHeight(val);
    setTracked(false);
    calculate(parseFloat(weight), parseFloat(val));
  };

  const category = bmi ? getBmiCategory(bmi) : null;

  const buildWhatsAppUrl = () => {
    if (!bmi) return "#reservar";
    const cat = getBmiCategory(bmi);
    const message = [
      `Hola, calculé mi IMC en su página y me dio ${bmi.toFixed(1)} (${cat.label}).`,
      `Peso: ${weight}kg — Altura: ${height}cm.`,
      `Quiero consultar sobre ${procedure}.`,
    ].join("\n");
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-secondary-700 sm:text-4xl">
            Calculá tu IMC
          </h2>
          <p className="mt-3 text-secondary-500">
            Calculá tu Índice de Masa Corporal y consultá con nuestro equipo.
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
                        Tu caso podría beneficiarse de una evaluación
                      </p>
                      <p className="mt-1 text-sm text-green-600">
                        Consultá con nuestro equipo para una evaluación personalizada de tu situación.
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                    <a
                      href={buildWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackWhatsAppClick("bmi_candidate")}
                      className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#25D366]/25 transition-all hover:bg-[#20BD5A] active:scale-[0.98]"
                    >
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      Consultá por WhatsApp
                    </a>
                    <a
                      href={`tel:+${WHATSAPP_NUMBER}`}
                      onClick={() => trackPhoneClick("bmi_candidate")}
                      className="flex-1 inline-flex items-center justify-center gap-2 rounded-full border border-primary-400 px-6 py-3 text-sm font-semibold text-primary-500 transition-all hover:bg-primary-50 active:scale-[0.98]"
                    >
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                      </svg>
                      Llamanos: {PHONE_NUMBER}
                    </a>
                  </div>
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
                        Consultá para una evaluación personalizada
                      </p>
                      <p className="mt-1 text-sm text-orange-600">
                        Cada caso es único. Nuestro equipo puede evaluar tu situación particular y orientarte.
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                    <a
                      href={buildWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackWhatsAppClick("bmi_possible_candidate")}
                      className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#25D366]/25 transition-all hover:bg-[#20BD5A] active:scale-[0.98]"
                    >
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      Consultá por WhatsApp
                    </a>
                    <a
                      href={`tel:+${WHATSAPP_NUMBER}`}
                      onClick={() => trackPhoneClick("bmi_possible_candidate")}
                      className="flex-1 inline-flex items-center justify-center gap-2 rounded-full border border-orange-400 px-6 py-3 text-sm font-semibold text-orange-600 transition-all hover:bg-orange-50 active:scale-[0.98]"
                    >
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                      </svg>
                      Llamanos: {PHONE_NUMBER}
                    </a>
                  </div>
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
                        Cada caso es único
                      </p>
                      <p className="mt-1 text-sm text-blue-600">
                        Si tenés dudas sobre tu situación, podés consultar con nuestro equipo para una orientación personalizada.
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
