
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
    <div ref={elementRef} className="text-center text-white">
      <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
        {currentValue.toLocaleString()}{suffix}
      </div>
      <div className="text-lg md:text-xl opacity-90">{label}</div>
    </div>
  );
};

const StatisticsSection = () => {
  const statistics = [
    { endValue: 10000, label: 'Happy Patients' },
    { endValue: 2500, label: 'Teeth Whitened' },
    { endValue: 800, label: 'Dental Implants' },
    { endValue: 15, label: 'Years of Experience' }
  ];

  return (
    <section className="py-16 bg-dental-blue">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {statistics.map((stat, index) => (
            <StatisticItem
              key={index}
              endValue={stat.endValue}
              label={stat.label}
              duration={2000 + index * 200} // Staggered animation
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
