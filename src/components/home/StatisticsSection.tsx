
import React, { useState, useEffect, useRef } from 'react';

interface StatisticItemProps {
  endValue: number;
  label: string;
  suffix?: string;
  duration?: number;
}

const StatisticItem: React.FC<StatisticItemProps> = ({ 
  endValue, 
  label, 
  suffix = '+', 
  duration = 2000 
}) => {
  const [currentValue, setCurrentValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now();
    const startValue = 0;

    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(startValue + (endValue - startValue) * easeOutQuart);
      
      setCurrentValue(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, endValue, duration]);

  return (
    <div 
      ref={elementRef} 
      className="group text-center text-white flex flex-col items-center justify-center mx-auto relative"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-white/10 rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-500 opacity-0 group-hover:opacity-100"></div>
      
      {/* Content */}
      <div className="relative z-10 p-4">
        <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-white group-hover:scale-110 transition-transform duration-500 relative">
          <span className="bg-gradient-to-r from-white to-dental-turquoise bg-clip-text text-transparent">
            {currentValue.toLocaleString()}{suffix}
          </span>
          <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="w-2 h-2 bg-dental-turquoise rounded-full animate-pulse"></div>
          </div>
        </div>
        <div className="text-sm md:text-base font-medium text-white/90 tracking-wide group-hover:text-white transition-colors duration-300">
          {label}
        </div>
        
        {/* Enhanced decorative element */}
        <div className="w-8 h-1 bg-gradient-to-r from-dental-turquoise via-white to-dental-turquoise mx-auto mt-3 rounded-full opacity-60 group-hover:opacity-100 group-hover:w-12 transition-all duration-500"></div>
      </div>
    </div>
  );
};

const StatisticsSection = () => {
  const statistics = [
    { endValue: 10000, label: 'Zufriedene Patienten' },
    { endValue: 2500, label: 'Aufgehellte Zähne' },
    { endValue: 800, label: 'Zahnimplantate' },
    { endValue: 15, label: 'Jahre Erfahrung' }
  ];

  return (
    <section className="relative py-12 md:py-16 lg:py-20 bg-gradient-to-br from-dental-blue via-dental-blue/95 to-dental-turquoise overflow-hidden">
      {/* Enhanced Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-dental-turquoise/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        
        {/* Geometric patterns */}
        <div className="absolute top-20 right-20 w-4 h-4 bg-white/20 transform rotate-45 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-6 h-6 bg-dental-turquoise/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-white/30 transform rotate-45 animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Statistics grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {statistics.map((stat, index) => (
            <div
              key={index}
              className="animate-on-scroll"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <StatisticItem
                endValue={stat.endValue}
                label={stat.label}
                duration={2000 + index * 200} // Staggered animation
              />
            </div>
          ))}
        </div>
        
        {/* Additional decorative line */}
        <div className="mt-12 mx-auto w-24 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent rounded-full"></div>
      </div>
    </section>
  );
};

export default StatisticsSection;
