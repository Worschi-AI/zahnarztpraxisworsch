
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';

const FloatingAppointmentButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
      <Button 
        asChild
        size="lg"
        className="bg-dental-turquoise hover:bg-dental-blue text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
      >
        <Link to="/appointment" className="flex items-center gap-2 px-4 py-2">
          <Calendar className="h-5 w-5" />
          <span className="font-medium">Termin buchen</span>
        </Link>
      </Button>
    </div>
  );
};

export default FloatingAppointmentButton;
