
import { useEffect } from 'react';

/**
 * Enhanced scroll animation hook with multiple animation types
 * Supports mobile optimization and performance considerations
 */
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

    // Define the IntersectionObserver with optimized settings
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add animated class with a small delay for better effect
          setTimeout(() => {
            entry.target.classList.add('animated');
          }, 50);
          
          // Stop observing this element to improve performance
          observer.unobserve(entry.target);
        }
      });
    }, { 
      threshold: 0.1, // Trigger when 10% of element is visible
      rootMargin: '0px 0px -50px 0px' // Trigger slightly before element enters viewport
    });

    // Select all elements with animation classes
    const elementsToAnimate = document.querySelectorAll(
      '.animate-on-scroll, .animate-slide-up, .animate-slide-down, .animate-slide-left, .animate-slide-right, .animate-scale-in'
    );
    
    // Start observing each element
    elementsToAnimate.forEach(el => {
      observer.observe(el);
    });

    // Add staggered animation delays for grouped elements
    const addStaggeredDelays = () => {
      const groups = document.querySelectorAll('.stagger-children');
      groups.forEach(group => {
        const children = group.querySelectorAll('.animate-on-scroll, .animate-slide-up, .animate-slide-down, .animate-slide-left, .animate-slide-right, .animate-scale-in');
        children.forEach((child, index) => {
          (child as HTMLElement).style.transitionDelay = `${index * 100}ms`;
        });
      });
    };

    addStaggeredDelays();

    // Clean up function
    return () => {
      elementsToAnimate.forEach(el => {
        observer.unobserve(el);
      });
      observer.disconnect();
    };
  }, []);
};

export default useScrollAnimation;
