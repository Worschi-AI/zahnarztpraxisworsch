
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
      className="group relative text-center text-white bg-white/10 backdrop-blur-sm rounded-full w-32 h-32 border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl flex flex-col items-center justify-center mx-auto"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-dental-turquoise/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <div className="text-xl md:text-2xl font-bold mb-1 bg-gradient-to-r from-white to-dental-turquoise bg-clip-text text-transparent">
          {currentValue.toLocaleString()}{suffix}
        </div>
        <div className="text-xs md:text-sm font-medium opacity-90 tracking-wide">{label}</div>
        
        {/* Decorative element */}
        <div className="w-6 h-0.5 bg-gradient-to-r from-dental-turquoise to-white mx-auto mt-2 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
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
    <section className="relative py-12 bg-gradient-to-br from-dental-blue via-dental-blue to-dental-turquoise overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Statistics grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
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
      </div>
    </section>
  );
};

export default StatisticsSection;
