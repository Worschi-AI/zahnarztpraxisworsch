
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CalendarClock } from 'lucide-react';

const FloatingAppointmentButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        asChild
        size="lg"
        className="rounded-full shadow-lg bg-dental-turquoise hover:bg-dental-blue text-white transition-all duration-300 hover:scale-105"
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
