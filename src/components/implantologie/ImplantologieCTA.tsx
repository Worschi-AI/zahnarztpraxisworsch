
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calendar, Phone, MapPin, Clock } from 'lucide-react';
import PhoneButton from '@/components/PhoneButton';

const ImplantologieCTA = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center animate-on-scroll">
          <h2 className="mb-6 text-dental-blue">
            Vereinbaren Sie Ihren Beratungstermin für Zahnimplantate in Dresden
          </h2>
          <p className="text-lg text-dental-gray mb-12 leading-relaxed">
            Träumen Sie von festsitzenden Zähnen, die sich anfühlen wie Ihre eigenen? 
            Dr. med. dent. Thomas Worsch und sein erfahrenes Team in Dresden-Laubegast 
            freuen sich darauf, Sie zu beraten und Ihnen zu einem neuen, selbstbewussten Lächeln zu verhelfen.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center animate-on-scroll" style={{ animationDelay: '100ms' }}>
              <div className="w-16 h-16 bg-dental-turquoise/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-dental-turquoise" />
              </div>
              <h3 className="font-semibold text-dental-blue mb-2">Online-Termin buchen</h3>
              <p className="text-dental-gray text-sm">Rund um die Uhr über Doctolib</p>
            </div>
            
            <div className="text-center animate-on-scroll" style={{ animationDelay: '200ms' }}>
              <div className="w-16 h-16 bg-dental-turquoise/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-dental-turquoise" />
              </div>
              <h3 className="font-semibold text-dental-blue mb-2">Telefonisch</h3>
              <p className="text-dental-gray text-sm">0351 2522709</p>
            </div>
            
            <div className="text-center animate-on-scroll" style={{ animationDelay: '300ms' }}>
              <div className="w-16 h-16 bg-dental-turquoise/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-dental-turquoise" />
              </div>
              <h3 className="font-semibold text-dental-blue mb-2">Persönlich</h3>
              <p className="text-dental-gray text-sm">Österreicher Str. 38, 01279 Dresden</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-on-scroll">
            <Button asChild size="lg" className="bg-dental-turquoise hover:bg-dental-blue hover:scale-105 transform transition-all duration-300 text-lg px-8 py-6">
              <Link to="/appointment">
                <Calendar className="w-5 h-5 mr-2" />
                Jetzt Termin vereinbaren
              </Link>
            </Button>
            <PhoneButton 
              phoneNumber="0351 2522709" 
              size="lg"
              className="bg-dental-blue hover:bg-dental-turquoise text-white border-dental-blue hover:border-dental-turquoise text-lg px-8 py-6"
              buttonText="Sofort anrufen & beraten lassen"
              iconPosition="left"
            />
          </div>

          <div className="bg-dental-beige p-6 rounded-lg animate-on-scroll">
            <div className="flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-dental-turquoise mr-2" />
              <span className="font-semibold text-dental-blue">Ihre Zahngesundheit liegt uns am Herzen</span>
            </div>
            <p className="text-dental-gray">
              Vereinbaren Sie noch heute Ihren persönlichen Beratungstermin für Zahnimplantate in Dresden!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImplantologieCTA;
