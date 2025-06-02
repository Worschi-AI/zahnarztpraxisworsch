
import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Star, Users, Award } from 'lucide-react';

interface StatisticItemProps {
  endValue: number;
  label: string;
  suffix?: string;
  duration?: number;
  icon?: React.ReactNode;
}

const StatisticItem: React.FC<StatisticItemProps> = ({ 
  endValue, 
  label, 
  suffix = '+', 
  duration = 2000,
  icon 
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
      className="text-center text-white flex flex-col items-center justify-center mx-auto group hover:scale-105 transition-all duration-300"
    >
      {/* Enhanced Content with icon */}
      <div className="relative">
        {/* Background glow effect */}
        <div className="absolute inset-0 bg-white/5 rounded-2xl blur-xl group-hover:bg-white/10 transition-all duration-300"></div>
        
        <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 group-hover:border-white/40 transition-all duration-300">
          {/* Icon */}
          <div className="flex justify-center mb-2">
            <div className="w-8 h-8 bg-dental-turquoise/20 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
              {icon}
            </div>
          </div>
          
          {/* Number */}
          <div className="text-xl md:text-2xl font-bold mb-1 text-white bg-gradient-to-r from-white to-dental-turquoise bg-clip-text text-transparent">
            {currentValue.toLocaleString()}{suffix}
          </div>
          
          {/* Label */}
          <div className="text-xs md:text-sm font-medium text-white/90 tracking-wide">{label}</div>
          
          {/* Decorative element */}
          <div className="w-6 h-0.5 bg-gradient-to-r from-dental-turquoise to-white mx-auto mt-2 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>
    </div>
  );
};

const StatisticsSection = () => {
  const statistics = [
    { 
      endValue: 10000, 
      label: 'Zufriedene Patienten',
      icon: <Users className="w-4 h-4 text-dental-turquoise" />
    },
    { 
      endValue: 2500, 
      label: 'Aufgehellte Zähne',
      icon: <Sparkles className="w-4 h-4 text-dental-turquoise animate-pulse" />
    },
    { 
      endValue: 800, 
      label: 'Zahnimplantate',
      icon: <Star className="w-4 h-4 text-dental-turquoise" />
    },
    { 
      endValue: 15, 
      label: 'Jahre Erfahrung',
      icon: <Award className="w-4 h-4 text-dental-turquoise" />
    }
  ];

  return (
    <section className="relative py-12 bg-gradient-to-br from-dental-blue via-dental-blue to-dental-turquoise overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-dental-turquoise/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-0 w-16 h-16 bg-white/10 rounded-full blur-xl animate-pulse delay-500"></div>
        <div className="absolute top-1/4 right-0 w-20 h-20 bg-dental-turquoise/15 rounded-full blur-2xl animate-pulse delay-700"></div>
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Sparkles className="absolute top-16 left-1/6 w-4 h-4 text-white/20 animate-pulse" />
        <Star className="absolute bottom-16 right-1/6 w-3 h-3 text-dental-turquoise/30 animate-pulse delay-1000" />
        <Users className="absolute top-1/3 right-1/4 w-5 h-5 text-white/15 animate-pulse delay-500" />
      </div>

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
                icon={stat.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
