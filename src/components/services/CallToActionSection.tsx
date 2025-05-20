
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';

const CallToActionSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-dental-turquoise to-dental-blue text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="mb-4">Vereinbaren Sie einen Termin</h2>
          <p className="text-lg mb-8 opacity-90">
            Haben Sie Fragen zu unseren Leistungen oder möchten Sie einen Termin vereinbaren? 
            Kontaktieren Sie uns - wir freuen uns darauf, Ihnen zu helfen.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-dental-blue hover:bg-dental-beige">
              <Link to="/appointment" className="flex items-center">
                <Calendar className="mr-2 h-5 w-5" />
                <span>Termin vereinbaren</span>
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-dental-blue">
              <Link to="/contact">Kontakt aufnehmen</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
