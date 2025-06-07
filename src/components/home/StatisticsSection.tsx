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
      className="text-center text-white flex flex-col items-center justify-center mx-auto"
    >
      {/* Content */}
      <div>
        <div className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-1 text-white">
          {currentValue.toLocaleString()}{suffix}
        </div>
        <div className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium text-white tracking-wide">{label}</div>
        
        {/* Decorative element */}
        <div className="w-6 h-0.5 bg-gradient-to-r from-dental-turquoise to-white mx-auto mt-2 rounded-full opacity-60"></div>
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
