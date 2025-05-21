
import React from 'react';
import PhoneButton from '@/components/PhoneButton';
import { Button } from '@/components/ui/button';
import { CalendarClock } from 'lucide-react';

const CallToActionPhone = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-dental-turquoise to-dental-blue text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto animate-on-scroll">
          <h2 className="mb-4">Vereinbaren Sie jetzt Ihren Termin</h2>
          <p className="text-lg mb-8">
            Wählen Sie die für Sie passende Buchungsmethode für Ihren <strong>Zahnarzttermin in Dresden</strong>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-dental-blue hover:bg-dental-beige transition-all hover:scale-105"
              onClick={() => window.open('https://www.doctolib.de/zahnarzt/dresden/thomas-worsch', '_blank')}
            >
              <CalendarClock className="mr-2 h-5 w-5" />
              <span>Online buchen</span>
            </Button>
            <PhoneButton 
              size="lg" 
              className="bg-dental-beige text-dental-blue hover:bg-white transition-all hover:scale-105"
              buttonText="0351 2522709"
              showIcon={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionPhone;
