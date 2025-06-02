
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
      className="group relative text-center text-white bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-dental-turquoise/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 bg-gradient-to-r from-white to-dental-turquoise bg-clip-text text-transparent">
          {currentValue.toLocaleString()}{suffix}
        </div>
        <div className="text-lg md:text-xl font-medium opacity-90 tracking-wide">{label}</div>
        
        {/* Decorative element */}
        <div className="w-12 h-1 bg-gradient-to-r from-dental-turquoise to-white mx-auto mt-4 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
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
    <section className="relative py-24 bg-gradient-to-br from-dental-blue via-dental-blue to-dental-turquoise overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-dental-turquoise rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white rounded-full blur-3xl opacity-5"></div>
      </div>
      
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute animate-pulse top-20 left-1/4 w-2 h-2 bg-white rounded-full"></div>
        <div className="absolute animate-pulse delay-300 top-40 right-1/4 w-3 h-3 bg-dental-turquoise rounded-full"></div>
        <div className="absolute animate-pulse delay-700 bottom-32 left-1/3 w-2 h-2 bg-white rounded-full"></div>
        <div className="absolute animate-pulse delay-1000 bottom-20 right-1/3 w-3 h-3 bg-dental-turquoise rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
            Vertrauen Sie auf unsere Expertise
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Zahlen, die für sich sprechen – Ihre Zufriedenheit ist unser Erfolg
          </p>
        </div>
        
        {/* Statistics grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
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
