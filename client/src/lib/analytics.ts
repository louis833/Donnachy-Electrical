/**
 * Google Analytics 4 Event Tracking Utilities
 * 
 * Usage:
 * import { trackEvent, trackPhoneClick, trackEmailClick, trackFormSubmit } from '@/lib/analytics';
 * 
 * trackPhoneClick('03 6159 6392');
 * trackEmailClick('scott@donnachyelectrical.com.au');
 * trackFormSubmit('contact_form', { service_type: 'solar' });
 */

// Type definitions for gtag
declare global {
  interface Window {
    gtag?: (
      command: 'event' | 'config' | 'js',
      targetOrAction: string,
      params?: Record<string, any>
    ) => void;
    dataLayer?: any[];
  }
}

/**
 * Generic event tracking function
 */
export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, any>
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
    console.log('GA4 Event:', eventName, eventParams);
  } else {
    console.warn('GA4 not initialized');
  }
};

/**
 * Track phone number clicks (HIGH PRIORITY - Lead Conversion)
 */
export const trackPhoneClick = (phoneNumber: string, location?: string) => {
  trackEvent('phone_click', {
    phone_number: phoneNumber,
    location: location || 'unknown',
    event_category: 'engagement',
    event_label: 'Phone Contact',
    value: 1, // High value conversion event
  });
};

/**
 * Track email clicks (HIGH PRIORITY - Lead Conversion)
 */
export const trackEmailClick = (emailAddress: string, location?: string) => {
  trackEvent('email_click', {
    email_address: emailAddress,
    location: location || 'unknown',
    event_category: 'engagement',
    event_label: 'Email Contact',
    value: 1, // High value conversion event
  });
};

/**
 * Track form submissions (HIGH PRIORITY - Lead Conversion)
 */
export const trackFormSubmit = (
  formName: string,
  formData?: Record<string, any>
) => {
  trackEvent('form_submit', {
    form_name: formName,
    ...formData,
    event_category: 'conversion',
    event_label: 'Contact Form',
    value: 5, // Very high value conversion event
  });
};

/**
 * Track CTA button clicks
 */
export const trackCTAClick = (
  buttonText: string,
  location: string,
  destination?: string
) => {
  trackEvent('cta_click', {
    button_text: buttonText,
    location: location,
    destination: destination || 'contact_form',
    event_category: 'engagement',
    event_label: 'CTA Button',
  });
};

/**
 * Track scroll depth (25%, 50%, 75%, 100%)
 */
export const initScrollTracking = () => {
  if (typeof window === 'undefined') return;

  let scrollDepths = {
    25: false,
    50: false,
    75: false,
    100: false,
  };

  const handleScroll = () => {
    const scrollPercentage = 
      (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

    Object.entries(scrollDepths).forEach(([depth, tracked]) => {
      const depthNum = parseInt(depth);
      if (!tracked && scrollPercentage >= depthNum) {
        scrollDepths[depthNum as keyof typeof scrollDepths] = true;
        trackEvent('scroll_depth', {
          depth: `${depth}%`,
          page_path: window.location.pathname,
          event_category: 'engagement',
          event_label: 'Page Scroll',
        });
      }
    });
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  
  // Cleanup function
  return () => window.removeEventListener('scroll', handleScroll);
};

/**
 * Track service page views
 */
export const trackServiceView = (serviceName: string) => {
  trackEvent('service_view', {
    service_name: serviceName,
    page_path: window.location.pathname,
    event_category: 'engagement',
    event_label: 'Service Page View',
  });
};

/**
 * Track outbound link clicks
 */
export const trackOutboundLink = (url: string, linkText?: string) => {
  trackEvent('outbound_click', {
    link_url: url,
    link_text: linkText,
    event_category: 'engagement',
    event_label: 'Outbound Link',
  });
};
