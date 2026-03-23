import type { Metadata } from "next";
import LpStickyMobileCTA from "@/components/lp/LpStickyMobileCTA";
import ExitIntentPopup from "@/components/lp/ExitIntentPopup";
import { BmiProvider } from "@/components/lp/BmiContext";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function LandingPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <BmiProvider>
      {children}
      <LpStickyMobileCTA />
      <ExitIntentPopup />
    </BmiProvider>
  );
}
