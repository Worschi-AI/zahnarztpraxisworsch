
import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Clock } from 'lucide-react';
import PhoneButton from '@/components/PhoneButton';

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
              <PhoneButton 
                variant="link" 
                className="p-0 h-auto text-dental-gray hover:text-dental-turquoise" 
                showIcon={false}
              />
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
    </div>
  );
};

export default ContactInfo;
