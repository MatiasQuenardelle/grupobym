declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

const ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
const ADS_CONVERSION_LABEL = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL;

function reportAdsConversion() {
  if (typeof window !== "undefined" && window.gtag && ADS_ID && ADS_CONVERSION_LABEL) {
    window.gtag("event", "conversion", {
      send_to: `${ADS_ID}/${ADS_CONVERSION_LABEL}`,
      transport_type: "beacon",
    });
  }
}

function reportMetaLead(source: string) {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "Lead", { content_name: source });
  }
}

export function trackWhatsAppClick(location: string) {
  if (typeof window !== "undefined") {
    if (window.gtag) {
      window.gtag("event", "whatsapp_click", {
        event_category: "conversion",
        event_label: location,
        transport_type: "beacon",
      });
      reportAdsConversion();
    }
    reportMetaLead(location);
  }
}

export function trackFormSubmit() {
  if (typeof window !== "undefined") {
    if (window.gtag) {
      window.gtag("event", "form_submit", {
        event_category: "conversion",
        event_label: "contact_form",
        transport_type: "beacon",
      });
      reportAdsConversion();
    }
    reportMetaLead("contact_form");
  }
}

export function trackPhoneClick(location: string) {
  if (typeof window !== "undefined") {
    if (window.gtag) {
      window.gtag("event", "phone_click", {
        event_category: "conversion",
        event_label: location,
        transport_type: "beacon",
      });
      reportAdsConversion();
    }
    reportMetaLead(location);
  }
}

export function trackBookingFormSubmit(source: string) {
  if (typeof window !== "undefined") {
    if (window.gtag) {
      window.gtag("event", "booking_form_submit", {
        event_category: "conversion",
        event_label: source,
        value: 10,
        transport_type: "beacon",
      });
      reportAdsConversion();
    }
    reportMetaLead(`booking_${source}`);
  }
}

export function trackBmiCalculation(bmiRange: string) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "bmi_calculator_used", {
      event_category: "engagement",
      event_label: bmiRange,
      transport_type: "beacon",
    });
  }
}

export function trackExitIntentShown() {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "exit_intent_shown", {
      event_category: "engagement",
      transport_type: "beacon",
    });
  }
}

export function trackExitIntentConversion() {
  if (typeof window !== "undefined") {
    if (window.gtag) {
      window.gtag("event", "exit_intent_conversion", {
        event_category: "conversion",
        value: 10,
        transport_type: "beacon",
      });
      reportAdsConversion();
    }
    reportMetaLead("exit_intent");
  }
}

export function trackStickyCtaClick(action: string) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "sticky_cta_click", {
      event_category: "engagement",
      event_label: action,
      transport_type: "beacon",
    });
  }
}
