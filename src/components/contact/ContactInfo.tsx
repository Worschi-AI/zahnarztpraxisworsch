
import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Clock } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="md:w-1/2 animate-on-scroll">
      <h2 className="text-3xl font-semibold mb-8 text-dental-blue">Kontaktinformationen</h2>
      
      <div className="space-y-6">
        <div className="flex items-start">
          <div className="bg-dental-beige p-3 rounded-full mr-4">
            <MapPin className="h-6 w-6 text-dental-turquoise" />
          </div>
          <div>
            <h3 className="text-lg font-medium mb-1">Adresse</h3>
            <p className="text-dental-gray">
              Österreicher Str. 38<br />
              01279 Dresden<br />
              Deutschland
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-dental-beige p-3 rounded-full mr-4">
            <Phone className="h-6 w-6 text-dental-turquoise" />
          </div>
          <div>
            <h3 className="text-lg font-medium mb-1">Telefon</h3>
            <p className="text-dental-gray">
              <a href="tel:+4935125227099" className="hover:text-dental-turquoise transition-colors">
                0351 2522709
              </a>
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-dental-beige p-3 rounded-full mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-dental-turquoise" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-1">E-Mail</h3>
            <p className="text-dental-gray">
              <a href="mailto:info@zahnarzt-worsch.de" className="hover:text-dental-turquoise transition-colors">
                info@zahnarzt-worsch.de
              </a>
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-dental-beige p-3 rounded-full mr-4">
            <Clock className="h-6 w-6 text-dental-turquoise" />
          </div>
          <div>
            <h3 className="text-lg font-medium mb-1">Öffnungszeiten</h3>
            <div className="text-dental-gray">
              <div className="grid grid-cols-2 gap-2">
                <span>Montag:</span>
                <span>07:30 - 13:00 Uhr</span>
                
                <span>Dienstag:</span>
                <span>08:00 - 12:00, 14:00 - 18:00 Uhr</span>
                
                <span>Mittwoch:</span>
                <span>07:30 - 12:00, 14:00 - 18:00 Uhr</span>
                
                <span>Donnerstag:</span>
                <span>07:30 - 12:00, 14:00 - 18:00 Uhr</span>
                
                <span>Freitag:</span>
                <span>07:30 - 13:00 Uhr</span>
                
                <span>Samstag:</span>
                <span>Geschlossen</span>
                
                <span>Sonntag:</span>
                <span>Geschlossen</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-10">
        <h3 className="text-lg font-medium mb-3">Notfallnummer außerhalb der Öffnungszeiten</h3>
        <p className="text-dental-gray mb-4">
          Für dringende Schmerzen außerhalb unserer regulären Öffnungszeiten:
        </p>
        <Button asChild className="bg-dental-turquoise hover:bg-dental-blue">
          <a href="tel:+4935125227099">0351 2522709</a>
        </Button>
      </div>
    </div>
  );
};

export default ContactInfo;
