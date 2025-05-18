import { useEffect } from 'react';

/**
 * Custom hook to handle scroll animations
 * This centralizes our animation logic for better maintainability
 */
const useScrollAnimation = () => {
  useEffect(() => {
    // Define the IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add animated class and keep it there permanently
          entry.target.classList.add('animated');
          // Once element is animated, stop observing it to ensure it stays visible
          observer.unobserve(entry.target);
        }
      });
    }, { 
      threshold: 0.1, // Trigger when at least 10% of the element is visible
      rootMargin: '0px' // No margin around the viewport
    });

    // Select all elements to animate
    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    
    // Start observing each element
    elementsToAnimate.forEach(el => {
      observer.observe(el);
    });

    // Clean up function to prevent memory leaks
    return () => {
      elementsToAnimate.forEach(el => {
        observer.unobserve(el);
      });
      observer.disconnect();
    };
  }, []);
};

export default useScrollAnimation;
