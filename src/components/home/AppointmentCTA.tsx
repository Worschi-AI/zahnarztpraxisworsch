
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';

const AppointmentCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-dental-turquoise to-dental-blue text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto animate-on-scroll">
          <h2 className="mb-4">Vereinbaren Sie einen Termin in Dresden</h2>
          <p className="text-lg mb-8 opacity-90">
            Buchen Sie einfach und bequem online einen Termin in unserer <strong>Zahnarztpraxis in Dresden</strong> 
            über das Doctolib-Portal oder kontaktieren Sie uns telefonisch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-dental-blue hover:bg-dental-beige flex items-center">
              <Link to="/appointment">
                <Calendar className="w-5 h-5 mr-2" aria-hidden="true" />
                <span>Online-Termin sichern</span>
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-dental-blue">
              <a href="tel:+49123456789">+49 123 456789</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentCTA;
