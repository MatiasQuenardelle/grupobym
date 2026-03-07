declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackWhatsAppClick(location: string) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "whatsapp_click", {
      event_category: "conversion",
      event_label: location,
    });
  }
}

export function trackFormSubmit() {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "form_submit", {
      event_category: "conversion",
      event_label: "contact_form",
    });
  }
}

export function trackPhoneClick(location: string) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "phone_click", {
      event_category: "conversion",
      event_label: location,
    });
  }
}
