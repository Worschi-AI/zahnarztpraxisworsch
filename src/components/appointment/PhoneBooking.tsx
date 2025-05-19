
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';

const PhoneBooking = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-on-scroll">
          <h2 className="mb-6 text-dental-blue">Telefonische Terminbuchung</h2>
          <p className="text-lg text-dental-gray">
            Vereinbaren Sie telefonisch einen Termin in unserer <strong>Zahnarztpraxis in Dresden</strong>. 
            Zahnarzt Worsch und sein Team freuen sich auf Ihren Besuch!
          </p>
        </div>

        <div className="bg-dental-beige p-8 rounded-lg shadow-md mb-12 max-w-3xl mx-auto animate-on-scroll">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-medium mb-4 text-dental-blue">Rufen Sie uns an</h3>
            <p className="text-dental-gray mb-8">
              Um einen <strong>Zahnarzttermin in Dresden</strong> zu vereinbaren, 
              kontaktieren Sie uns bitte telefonisch während unserer Öffnungszeiten.
            </p>
            <Button asChild size="lg" className="bg-dental-turquoise hover:bg-dental-blue transform transition hover:scale-105">
              <a href="tel:+4935125227099">
                <Calendar className="mr-2 h-5 w-5" /> 0351 2522709
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhoneBooking;
