
import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

const ContactInfo = () => {
  const phoneNumber = "0351 2522709";
  
  return (
    <div className="md:w-1/2 animate-on-scroll">
      <h2 className="text-3xl font-semibold mb-8 text-dental-blue">So erreichen Sie uns – Ihre Zahnarztpraxis in Dresden Laubegast</h2>
      <p className="text-lg mb-8 text-dental-gray">
        Wir freuen uns auf Ihre Kontaktaufnahme und Ihren Besuch!
      </p>
      
      <div className="space-y-6">
        {/* Adresse */}
        <div className="flex items-start">
          <div className="bg-dental-beige p-3 rounded-full mr-4 flex-shrink-0">
            <MapPin className="h-6 w-6 text-dental-turquoise" />
          </div>
          <div>
            <h3 className="text-lg font-medium mb-1 text-dental-blue">Adresse</h3>
            <p className="text-dental-gray">
              <a 
                href="https://www.google.com/maps/place/Zahnarztpraxis+Dipl.med+dent.+Ute+Worsch+%26+Peik+Worsch/@51.0258232,13.8338391,536m/data=!3m3!1e3!4b1!5s0x4709c7d912ce70c1:0xa0772b1bd9b757d8!4m6!3m5!1s0x4709c7d96d21fce9:0xe0acd2eb962737a1!8m2!3d51.0258232!4d13.836414!16s%2Fg%2F1tgcws99?entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-dental-turquoise hover:underline"
              >
                <strong>Zahnarztpraxis Dipl.med dent.<br />
                Ute Worsch & Peik Worsch</strong><br />
                Österreicher Str. 38<br />
                01279 Dresden (Laubegast)<br />
                Deutschland
              </a>
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
              <a 
                href={`tel:+49${phoneNumber.replace(/\s/g, '')}`}
                className="text-dental-gray hover:text-dental-turquoise hover:underline"
              >
                {phoneNumber}
              </a>
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
              <div className="flex items-start">
                <span className="font-semibold inline-block w-24 sm:w-28 shrink-0">Dienstag:</span>
                <span className="inline-block">
                  08:00 – 12:00 Uhr<br />
                  14:00 – 18:00 Uhr
                </span>
              </div>
              <div className="flex items-start">
                <span className="font-semibold inline-block w-24 sm:w-28 shrink-0">Mittwoch:</span>
                <span className="inline-block">
                  07:30 – 12:00 Uhr<br />
                  14:00 – 18:00 Uhr
                </span>
              </div>
              <div className="flex items-start">
                <span className="font-semibold inline-block w-24 sm:w-28 shrink-0">Donnerstag:</span>
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
              <div className="pt-2">
                <p className="text-sm italic text-dental-gray">
                  Termine nach Vereinbarung. Für ästhetische Beratungen oder spezielle Anliegen planen wir gerne individuelle Zeiten für Sie ein.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
