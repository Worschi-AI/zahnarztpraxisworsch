
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CalendarClock } from 'lucide-react';

const FloatingAppointmentButton = () => {
  const [isWobbling, setIsWobbling] = useState(false);
  
  useEffect(() => {
    // Start the wobble effect after a delay when the component mounts
    const initialTimeout = setTimeout(() => {
      startWobbleInterval();
    }, 2000);
    
    // Function to handle the wobble animation interval
    const startWobbleInterval = () => {
      // Set wobble animation every 5 seconds
      const intervalId = setInterval(() => {
        setIsWobbling(true);
        
        // Reset wobble after animation completes
        setTimeout(() => {
          setIsWobbling(false);
        }, 1000); // Animation duration
      }, 5000); // Interval between animations
      
      return intervalId;
    };
    
    const intervalId = startWobbleInterval();
    
    return () => {
      clearTimeout(initialTimeout);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        asChild
        size="lg"
        className={`rounded-full shadow-lg bg-dental-turquoise hover:bg-dental-blue text-white transition-all duration-300 hover:scale-105 ${isWobbling ? 'animate-wobble' : ''}`}
      >
        <Link to="/appointment" className="flex items-center gap-2 p-1">
          <CalendarClock className="h-5 w-5" />
          <span>Termin buchen</span>
        </Link>
      </Button>
    </div>
  );
};

export default FloatingAppointmentButton;
