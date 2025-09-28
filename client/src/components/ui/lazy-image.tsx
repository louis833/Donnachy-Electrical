import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
  blurDataURL?: string;
}

export function LazyImage({ 
  src, 
  alt, 
  className = '', 
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IiNGNEY0RjQiLz4KPHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeD0iMzAiIHk9IjMwIj4KPHBhdGggZD0iTTkgM0g0VjJINlY0SDlWM1oiIGZpbGw9IiNEQkRCREIiLz4KPHBhdGggZD0iTTIxIDlIMTNWN0gyMVY5WiIgZmlsbD0iI0RCREJEQiIvPgo8L3N2Zz4KPC9zdmc+',
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const { ref, isInView: scrollInView } = useScrollAnimation({ threshold: 0.1 });

  useEffect(() => {
    if (scrollInView && !isInView) {
      setIsInView(true);
    }
  }, [scrollInView, isInView]);

  const handleLoad = () => {
    setIsLoaded(true);
    setHasError(false);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(false);
  };

  return (
    <div ref={ref as any} className={`relative overflow-hidden ${className}`}>
      {/* Skeleton/Placeholder */}
      <motion.div
        className="absolute inset-0 bg-gray-200 flex items-center justify-center"
        initial={{ opacity: 1 }}
        animate={{ opacity: isLoaded ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="w-8 h-8 rounded-full border-2 border-gray-300 border-t-primary animate-spin" />
      </motion.div>

      {/* Actual Image */}
      {isInView && (
        <motion.img
          src={hasError ? placeholder : src}
          alt={alt}
          className={`w-full h-full object-cover ${className}`}
          onLoad={handleLoad}
          onError={handleError}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 1.1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          loading="lazy"
        />
      )}

      {/* Error State */}
      {hasError && (
        <motion.div
          className="absolute inset-0 bg-gray-100 flex flex-col items-center justify-center text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 19V5C21 3.9 20.1 3 19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19ZM8.5 13.5L11 16.51L14.5 12L19 18H5L8.5 13.5Z" fill="currentColor"/>
          </svg>
          <span className="text-xs mt-1">Failed to load</span>
        </motion.div>
      )}
    </div>
  );
}