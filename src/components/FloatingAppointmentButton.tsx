
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CalendarClock } from 'lucide-react';

const FloatingAppointmentButton = () => {
  const [isPulsing, setIsPulsing] = useState(false);
  
  useEffect(() => {
    // Start the pulse effect after a delay when the component mounts
    const initialTimeout = setTimeout(() => {
      startPulseInterval();
    }, 2000);
    
    // Function to handle the pulse animation interval
    const startPulseInterval = () => {
      // Set pulse animation every 4 seconds
      const intervalId = setInterval(() => {
        setIsPulsing(true);
        
        // Reset pulse after animation completes
        setTimeout(() => {
          setIsPulsing(false);
        }, 2000); // Animation duration
      }, 6000); // Interval between animations
      
      return intervalId;
    };
    
    const intervalId = startPulseInterval();
    
    return () => {
      clearTimeout(initialTimeout);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-4 z-50">
      <Button
        asChild
        size="icon"
        className={`w-14 h-14 rounded-full shadow-lg bg-dental-turquoise hover:bg-dental-blue text-white transition-all duration-300 hover:scale-105 ${isPulsing ? 'animate-pulse-wave' : ''}`}
      >
        <Link to="/appointment" className="flex items-center justify-center">
          <CalendarClock className="h-6 w-6" />
        </Link>
      </Button>
    </div>
  );
};

export default FloatingAppointmentButton;
