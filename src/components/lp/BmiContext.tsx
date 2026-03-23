"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

interface BmiData {
  weight: number;
  height: number;
  bmi: number;
  category: string;
}

interface BmiContextValue {
  bmiData: BmiData | null;
  setBmiData: (data: BmiData | null) => void;
}

const BmiContext = createContext<BmiContextValue>({
  bmiData: null,
  setBmiData: () => {},
});

export function BmiProvider({ children }: { children: ReactNode }) {
  const [bmiData, setBmiData] = useState<BmiData | null>(null);
  return (
    <BmiContext.Provider value={{ bmiData, setBmiData }}>
      {children}
    </BmiContext.Provider>
  );
}

export function useBmi() {
  return useContext(BmiContext);
}

export function buildBmiWhatsAppLine(bmiData: BmiData | null): string {
  if (!bmiData) return "";
  return `\nMi IMC: ${bmiData.bmi.toFixed(1)} (${bmiData.category}) — Peso: ${bmiData.weight}kg, Altura: ${bmiData.height}cm`;
}
