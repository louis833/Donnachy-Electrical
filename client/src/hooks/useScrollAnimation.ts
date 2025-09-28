import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  triggerOnce?: boolean;
  rootMargin?: string;
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const ref = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isVisible = entry.isIntersecting;
        
        if (isVisible && !hasTriggered) {
          setIsInView(true);
          if (options.triggerOnce !== false) {
            setHasTriggered(true);
          }
        } else if (!isVisible && !hasTriggered && options.triggerOnce === false) {
          setIsInView(false);
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '-100px',
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [options.threshold, options.triggerOnce, options.rootMargin, hasTriggered]);

  return { ref, isInView };
}

export function useParallax() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrolled = window.pageYOffset;
          const parallax = element.querySelector('.parallax-element') as HTMLElement;
          if (parallax) {
            const speed = 0.3; // Reduced speed for subtle effect
            parallax.style.transform = `translateY(${scrolled * speed}px)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return ref;
}