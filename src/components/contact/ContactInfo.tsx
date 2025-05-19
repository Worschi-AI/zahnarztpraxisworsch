import React from 'react';
// Annahme: Button wird hier nicht direkt benötigt, aber PhoneButton schon.
// import { Button } from '@/components/ui/button'; 
import { MapPin, Phone, Clock } from 'lucide-react'; // Mail Icon entfernt, da E-Mail entfernt wird
import PhoneButton from '@/components/PhoneButton'; // Annahme: Korrekter Pfad

const ContactInfo = () => {
  // E-Mail-Variable entfernt, da E-Mail nicht angezeigt werden soll
  // const emailAddress = "info@zahnarzt-worsch-dresden.de"; 

  return (
    <div className="md:w-1/2 animate-on-scroll">
      <h2 className="text-3xl font-semibold mb-8 text-dental-blue">Kontaktinformationen</h2>
      
      <div className="space-y-6">
        {/* Adresse */}
        <div className="flex items-start">
          <div className="bg-dental-beige p-3 rounded-full mr-4 flex-shrink-0">
            <MapPin className="h-6 w-6 text-dental-turquoise" />
          </div>
          <div>
            <h3 className="text-lg font-medium mb-1 text-dental-blue">Adresse</h3>
            <p className="text-dental-gray">
              Österreicher Str. 38<br />
              01279 Dresden<br />
              Deutschland
            </p>
          </div>
        </div>
        
        {/* Telefon */}
        <div className="flex items-start">
          <div className="bg-dental-beige p-3 rounded-full mr-4 flex-shrink-0">
            <Phone className="h-6 w-6 text-dental-turquoise" />
          </div>
          <div>
            <h3 className="text-lg font-medium mb-1 text-dental-blue">Telefon</h3>
            <p className="text-dental-gray">
              <PhoneButton 
                variant="link" 
                className="p-0 h-auto text-lg text-dental-gray hover:text-dental-turquoise" // text-lg für bessere Klickbarkeit/Lesbarkeit
                showIcon={false}
                // Die Telefonnummer wird vermutlich innerhalb der PhoneButton Komponente verwaltet
              />
            </p>
          </div>
        </div>
        
        {/* Optimierte Öffnungszeiten */}
        <div className="flex items-start">
          <div className="bg-dental-beige p-3 rounded-full mr-4 flex-shrink-0">
            <Clock className="h-6 w-6 text-dental-turquoise" />
          </div>
          <div>
            <h3 className="text-lg font-medium mb-1 text-dental-blue">Öffnungszeiten</h3>
            <div className="text-dental-gray space-y-1.5"> {/* Etwas mehr Abstand zwischen den Tagen */}
              <div className="flex">
                <span className="font-semibold inline-block w-24 sm:w-28 shrink-0">Montag:</span>
                <span>07:30 – 13:00 Uhr</span>
              </div>
              <div className="flex flex-col sm:flex-row">
                <span className="font-semibold inline-block w-24 sm:w-28 shrink-0">Dienstag:</span>
                <span className="inline-block">
                  08:00 – 12:00 Uhr<span className="hidden sm:inline">,</span><br className="sm:hidden" /> 14:00 – 18:00 Uhr
                </span>
              </div>
              <div className="flex flex-col sm:flex-row">
                <span className="font-semibold inline-block w-24 sm:w-28 shrink-0">Mittwoch:</span>
                <span className="inline-block">
                  07:30 – 12:00 Uhr<span className="hidden sm:inline">,</span><br className="sm:hidden" /> 14:00 – 18:00 Uhr
                </span>
              </div>
              <div className="flex flex-col sm:flex-row">
                <span className="font-semibold inline-block w-24 sm:w-28 shrink-0">Donnerstag:</span>
                <span className="inline-block">
                  07:30 – 12:00 Uhr<span className="hidden sm:inline">,</span><br className="sm:hidden" /> 14:00 – 18:00 Uhr
                </span>
              </div>
              <div className="flex">
                <span className="font-semibold inline-block w-24 sm:w-28 shrink-0">Freitag:</span>
                <span>07:30 – 13:00 Uhr</span>
              </div>
              <div className="flex">
                <span className="font-semibold inline-block w-24 sm:w-28 shrink-0">Samstag:</span>
                <span>Geschlossen</span>
              </div>
              <div className="flex">
                <span className="font-semibold inline-block w-24 sm:w-28 shrink-0">Sonntag:</span>
                <span>Geschlossen</span>
              </div>
              <div className="pt-1">
                <p className="text-sm italic">Termine nach Vereinbarung.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
