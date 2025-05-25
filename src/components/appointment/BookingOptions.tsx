
import React from 'react';
import { CalendarClock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const BookingOptions = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-8 animate-on-scroll">
          <h2 className="mb-6 text-dental-blue">So einfach vereinbaren Sie Ihren Termin bei uns in Dresden Laubegast</h2>
          <p className="text-lg text-dental-gray mb-8">
            Wir möchten Ihnen die Terminvereinbarung so angenehm wie möglich gestalten. Wählen Sie die für Sie passende Option:
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Online-Buchung über Doctolib */}
          <div className="bg-dental-blue p-8 rounded-lg shadow-md animate-on-scroll">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-medium mb-4 text-white">Rund um die Uhr verfügbar: Ihr Zahnarzttermin in Dresden per Klick</h3>
              <p className="text-white/90 mb-8">
                Nutzen Sie unser bequemes Online-Buchungssystem über Doctolib. Wählen Sie Ihren gewünschten Behandlungsgrund, finden Sie freie Termine und reservieren Sie direkt – jederzeit und von überall. Ideal, um schnell und unkompliziert Ihren nächsten Besuch bei Ihrem <strong>Zahnarzt in Dresden</strong> zu planen.
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
        </div>
      </div>
    </section>
  );
};

export default BookingOptions;
