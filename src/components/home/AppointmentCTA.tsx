
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';
import PhoneButton from '@/components/PhoneButton';

const AppointmentCTA = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-r from-dental-turquoise to-dental-blue text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-[60px] animate-float"></div>
        <div className="absolute top-1/2 right-0 w-40 h-40 bg-white/5 rounded-full blur-[80px] animate-float animate-delay-200"></div>
        <div className="absolute bottom-0 left-1/3 w-28 h-28 bg-white/8 rounded-full blur-[70px] animate-float animate-delay-400"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-2xl mx-auto animate-on-scroll">
          <h2 className="mb-4 text-xl md:text-2xl lg:text-3xl xl:text-4xl">Vereinbaren Sie jetzt ganz einfach Ihren persönlichen Beratungstermin beim Zahnarzt in Dresden-Laubegast!</h2>
          <p className="text-base lg:text-lg mb-6 lg:mb-8 opacity-90">
            Online-Buchung rund um die Uhr über Doctolib oder rufen Sie uns direkt an. Die <strong>Zahnarztpraxis Worsch</strong> freut sich auf Ihren Besuch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-dental-turquoise to-dental-blue text-white hover:from-dental-blue hover:to-dental-turquoise transition-all duration-300 shadow-lg hover:shadow-xl">
              <Link to="/appointment">
                <Calendar className="w-5 h-5 mr-2 icon-pulse" aria-hidden="true" />
                <span>Online Termin buchen</span>
              </Link>
            </Button>
            <PhoneButton
              size="lg"
              className="bg-white text-dental-blue hover:bg-dental-beige transition-all duration-300 shadow-lg hover:shadow-xl"
              buttonText="Telefonisch Termin vereinbaren"
              showIcon={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentCTA;
