
import React from 'react';
import PhoneButton from '@/components/PhoneButton';
import { Calendar, CalendarClock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const BookingOptions = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-on-scroll">
          <h2 className="mb-6 text-dental-blue">Termine buchen</h2>
          <p className="text-lg text-dental-gray mb-8">
            Vereinbaren Sie einen Termin in unserer <strong>Zahnarztpraxis in Dresden</strong>. 
            Zahnarzt Worsch und sein Team freuen sich auf Ihren Besuch!
          </p>
          <p className="text-md text-dental-gray bg-dental-beige p-4 rounded-lg inline-block">
            Wählen Sie, wie Sie Ihren Termin buchen möchten: Bequem online über Doctolib oder telefonisch unter 0351 2522709. Wir freuen uns auf Ihren Besuch!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Online-Buchung über Doctolib */}
          <div className="bg-dental-blue p-8 rounded-lg shadow-md animate-on-scroll">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-medium mb-4 text-white">Online-Termin buchen</h3>
              <p className="text-white/90 mb-8">
                Buchen Sie Ihren <strong>Zahnarzttermin in Dresden</strong> online 
                über unser Doctolib-Portal - bequem rund um die Uhr!
              </p>
              <Button 
                size="lg"
                className="bg-white hover:bg-dental-beige text-dental-blue transition transform hover:scale-105"
                onClick={() => window.open('https://www.doctolib.de/zahnarzt/dresden/thomas-worsch', '_blank')}
              >
                <CalendarClock className="mr-2 h-5 w-5" />
                <span>Auf Doctolib buchen</span>
              </Button>
              
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="link" className="text-white/80 hover:text-white mt-4 underline">
                    Was ist Doctolib?
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Über Doctolib</DialogTitle>
                    <DialogDescription className="pt-4">
                      Doctolib ist eine Online-Plattform zur Terminvereinbarung bei Ärzten und Gesundheitsexperten. 
                      Sie können damit rund um die Uhr Termine bei uns buchen, ohne telefonisch anrufen zu müssen.
                      <br /><br />
                      Die Nutzung ist für Sie kostenlos und Sie benötigen nur eine E-Mail-Adresse zur Registrierung.
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          
          {/* Telefonische Buchung */}
          <div className="bg-dental-beige p-8 rounded-lg shadow-md animate-on-scroll">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-medium mb-4 text-dental-blue">Telefonisch buchen</h3>
              <p className="text-dental-gray mb-8">
                Um einen <strong>Zahnarzttermin in Dresden</strong> telefonisch zu vereinbaren, 
                kontaktieren Sie uns bitte während unserer Öffnungszeiten.
              </p>
              <PhoneButton 
                size="lg" 
                className="bg-dental-turquoise hover:bg-dental-blue transform transition hover:scale-105 text-white"
                buttonText="0351 2522709"
                iconPosition="left"
              >
                <Calendar className="mr-2 h-5 w-5" />
              </PhoneButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingOptions;
