
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Calendar, Phone } from 'lucide-react';
import PhoneButton from '@/components/PhoneButton';

const CallToActionSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-dental-blue to-dental-turquoise text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto animate-on-scroll">
          <h2 className="mb-2">Ihre Wünsche, unsere Expertise – Lassen Sie sich beraten!</h2>
          <p className="text-xl mb-4">Entdecken Sie, welche unserer modernen Zahnbehandlungen in Dresden optimal zu Ihnen passen.</p>
          <p className="text-lg mb-8">
            Vereinbaren Sie jetzt Ihren individuellen Beratungstermin in der Zahnarztpraxis Worsch Dresden Laubegast. 
            Wir nehmen uns Zeit für Ihre Wünsche und erstellen einen individuellen Behandlungsplan.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <div className="mb-4">
                <Calendar className="h-10 w-10 mx-auto text-white mb-2" />
                <h3 className="text-xl font-bold mb-2">Online buchen</h3>
                <p className="mb-4 opacity-90">Bequem 24/7 über unser Doctolib-Portal</p>
              </div>
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-dental-blue hover:bg-dental-beige w-full flex items-center justify-center"
              >
                <Link to="/appointment">
                  <span className="block">Termin vereinbaren</span>
                </Link>
              </Button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <div className="mb-4">
                <Phone className="h-10 w-10 mx-auto text-white mb-2" />
                <h3 className="text-xl font-bold mb-2">Telefonisch anfragen</h3>
                <p className="mb-4 opacity-90">Persönliche Beratung zu unseren Öffnungszeiten</p>
              </div>
              <PhoneButton 
                size="lg" 
                className="bg-white text-dental-blue hover:bg-dental-beige w-full"
                iconPosition="right"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
