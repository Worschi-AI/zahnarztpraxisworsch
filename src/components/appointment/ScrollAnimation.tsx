
import { useEffect } from 'react';

const useScrollAnimation = () => {
  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      // If user prefers reduced motion, make all elements visible immediately
      const elementsToAnimate = document.querySelectorAll(
        '.animate-on-scroll, .animate-slide-up, .animate-slide-down, .animate-slide-left, .animate-slide-right, .animate-scale-in'
      );
      elementsToAnimate.forEach(el => {
        el.classList.add('animated');
      });
      return;
    }

    // Define the IntersectionObserver with optimized settings for mobile
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Immediate animation without delay to prevent flashing
          entry.target.classList.add('animated');
          
          // Stop observing this element to improve performance
          observer.unobserve(entry.target);
        }
      });
    }, { 
      threshold: 0.05, // Lower threshold for mobile
      rootMargin: '20px 0px -20px 0px' // More generous margins
    });

    // Use requestAnimationFrame to ensure smooth rendering
    const startObserving = () => {
      const elementsToAnimate = document.querySelectorAll(
        '.animate-on-scroll, .animate-slide-up, .animate-slide-down, .animate-slide-left, .animate-slide-right, .animate-scale-in'
      );
      
      elementsToAnimate.forEach(el => {
        // Ensure element starts in proper initial state
        if (!el.classList.contains('animated')) {
          observer.observe(el);
        }
      });
    };

    // Delay the start slightly to prevent flash of unstyled content
    requestAnimationFrame(startObserving);

    // Clean up function
    return () => {
      observer.disconnect();
    };
  }, []);
};

export default useScrollAnimation;
