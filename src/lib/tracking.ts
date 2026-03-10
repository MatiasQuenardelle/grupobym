declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
const ADS_CONVERSION_LABEL = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL;

function reportAdsConversion() {
  if (typeof window !== "undefined" && window.gtag && ADS_ID && ADS_CONVERSION_LABEL) {
    window.gtag("event", "conversion", {
      send_to: `${ADS_ID}/${ADS_CONVERSION_LABEL}`,
    });
  }
}

export function trackWhatsAppClick(location: string) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "whatsapp_click", {
      event_category: "conversion",
      event_label: location,
    });
    reportAdsConversion();
  }
}

export function trackFormSubmit() {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "form_submit", {
      event_category: "conversion",
      event_label: "contact_form",
    });
    reportAdsConversion();
  }
}

export function trackPhoneClick(location: string) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "phone_click", {
      event_category: "conversion",
      event_label: location,
    });
    reportAdsConversion();
  }
}
