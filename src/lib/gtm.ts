// Google Tag Manager DataLayer utilities

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

export const pushToDataLayer = (event: string, data?: Record<string, unknown>) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event,
    ...data,
  });
};

// Conversion events
export const trackButtonClick = (buttonName: string, location: string) => {
  pushToDataLayer('button_click', {
    button_name: buttonName,
    button_location: location,
  });
};

export const trackCheckoutIntent = (source: string) => {
  pushToDataLayer('begin_checkout', {
    source,
    product: 'cuaderno_hooponopono',
    price: 9.90,
    currency: 'USD',
  });
};

export const trackSectionView = (sectionName: string) => {
  pushToDataLayer('section_view', {
    section_name: sectionName,
  });
};

export const trackPricingSectionView = () => {
  pushToDataLayer('pricing_section_view', {
    product: 'cuaderno_hooponopono',
    price: 9.90,
    currency: 'USD',
  });
};
