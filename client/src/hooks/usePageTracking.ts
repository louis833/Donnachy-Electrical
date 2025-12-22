import { useEffect } from 'react';
import { useLocation } from 'wouter';
import { trackServiceView, initScrollTracking } from '@/lib/analytics';

/**
 * Hook to track page views and scroll depth
 * Add this to your main App component or individual pages
 */
export const usePageTracking = (serviceName?: string) => {
  const [location] = useLocation();

  useEffect(() => {
    // Track service page views
    if (serviceName) {
      trackServiceView(serviceName);
    }

    // Initialize scroll depth tracking
    const cleanupScroll = initScrollTracking();

    // Cleanup on unmount
    return () => {
      if (cleanupScroll) {
        cleanupScroll();
      }
    };
  }, [location, serviceName]);
};
