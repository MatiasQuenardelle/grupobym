import type { Metadata } from "next";
import LpStickyMobileCTA from "@/components/lp/LpStickyMobileCTA";
import ExitIntentPopup from "@/components/lp/ExitIntentPopup";

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
    <>
      {children}
      <LpStickyMobileCTA />
      <ExitIntentPopup />
    </>
  );
}
