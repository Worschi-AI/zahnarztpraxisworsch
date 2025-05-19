import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import PhoneButton from '@/components/PhoneButton'; // Annahme: Korrekter Pfad

const ContactInfo = () => {
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
                className="p-0 h-auto text-lg text-dental-gray hover:text-dental-turquoise"
                showIcon={false}
              />
            </p>
          </div>
        </div>
        
        {/* Optimierte Öffnungszeiten - Zeiten immer untereinander */}
        <div className="flex items-start">
          <div className="bg-dental-beige p-3 rounded-full mr-4 flex-shrink-0">
            <Clock className="h-6 w-6 text-dental-turquoise" />
          </div>
          <div>
            <h3 className="text-lg font-medium mb-1 text-dental-blue">Öffnungszeiten</h3>
            <div className="text-dental-gray space-y-1.5">
              <div className="flex">
                <span className="font-semibold inline-block w-24 sm:w-28 shrink-0">Montag:</span>
                <span>07:30 – 13:00 Uhr</span>
              </div>
              <div className="flex"> {/* Geändert: Wochentag und Zeitenblock sind Geschwister */}
                <span className="font-semibold inline-block w-24 sm:w-28 shrink-0 align-top">Dienstag:</span>
                <span className="inline-block">
                  08:00 – 12:00 Uhr<br />
                  14:00 – 18:00 Uhr
                </span>
              </div>
              <div className="flex">
                <span className="font-semibold inline-block w-24 sm:w-28 shrink-0 align-top">Mittwoch:</span>
                <span className="inline-block">
                  07:30 – 12:00 Uhr<br />
                  14:00 – 18:00 Uhr
                </span>
              </div>
              <div className="flex">
                <span className="font-semibold inline-block w-24 sm:w-28 shrink-0 align-top">Donnerstag:</span>
                <span className="inline-block">
                  07:30 – 12:00 Uhr<br />
                  14:00 – 18:00 Uhr
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
