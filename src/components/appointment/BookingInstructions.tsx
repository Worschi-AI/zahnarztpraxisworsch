
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Check, Users, CalendarClock, Phone } from 'lucide-react';
import PhoneButton from '@/components/PhoneButton';

const BookingInstructions = () => {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Doctolib Instructions Section */}
      <div className="mb-12 animate-on-scroll">
        <div className="mb-8">
          <h3 className="text-2xl font-medium mb-4 text-dental-blue text-center">
            So funktioniert die Online-Buchung über Doctolib
          </h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="hover-scale">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="bg-dental-blue text-white w-8 h-8 rounded-full flex items-center justify-center">1</span>
                <span>Doctolib öffnen</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                <CalendarClock className="h-10 w-10 text-dental-blue mx-auto mb-3" />
                Klicken Sie auf "Auf Doctolib buchen" oder besuchen Sie unser Doctolib-Profil direkt.
              </CardDescription>
            </CardContent>
          </Card>
          
          <Card className="hover-scale">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="bg-dental-blue text-white w-8 h-8 rounded-full flex items-center justify-center">2</span>
                <span>Behandlung wählen</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                <Calendar className="h-10 w-10 text-dental-blue mx-auto mb-3" />
                Geben Sie Ihren Besuchsgrund an und wählen Sie ggf. einen bevorzugten Zahnarzt.
              </CardDescription>
            </CardContent>
          </Card>
          
          <Card className="hover-scale">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="bg-dental-blue text-white w-8 h-8 rounded-full flex items-center justify-center">3</span>
                <span>Termin aussuchen</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                <Users className="h-10 w-10 text-dental-blue mx-auto mb-3" />
                Suchen Sie sich einen passenden freien Termin aus dem Kalender.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="hover-scale">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="bg-dental-blue text-white w-8 h-8 rounded-full flex items-center justify-center">4</span>
                <span>Bestätigen</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                <Check className="h-10 w-10 text-dental-blue mx-auto mb-3" />
                Geben Sie Ihre Daten ein und bestätigen Sie. Sie erhalten eine Terminbestätigung per E-Mail.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Phone booking card section */}
      <div className="mb-12 animate-on-scroll">
        <div className="bg-dental-beige p-8 rounded-lg shadow-md">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-medium mb-4 text-dental-blue">Persönliche Beratung und Terminfindung am Telefon</h3>
            <p className="text-dental-gray mb-8">
              Sie bevorzugen den persönlichen Kontakt oder haben spezielle Fragen vorab? Rufen Sie uns gerne während unserer Sprechzeiten unter <strong>0351 2522709</strong> an. Unser freundliches Praxisteam in Dresden Laubegast hilft Ihnen gerne weiter und findet gemeinsam mit Ihnen den passenden Termin.
            </p>
            <PhoneButton 
              size="lg" 
              className="" 
              buttonText="0351 2522709" 
              iconPosition="left"
            />
          </div>
        </div>
      </div>
      
      {/* Phone Instructions Section */}
      <div className="animate-on-scroll">
        <div className="mb-8">
          <h3 className="text-2xl font-medium mb-4 text-dental-blue text-center">
            So funktioniert die Terminvereinbarung per Telefon
          </h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="hover-scale">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="bg-dental-turquoise text-white w-8 h-8 rounded-full flex items-center justify-center">1</span>
                <span>Anrufen</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                <Calendar className="h-10 w-10 text-dental-turquoise mx-auto mb-3" />
                Wählen Sie 0351 2522709 während unserer Öffnungszeiten.
              </CardDescription>
            </CardContent>
          </Card>
          
          <Card className="hover-scale">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="bg-dental-turquoise text-white w-8 h-8 rounded-full flex items-center justify-center">2</span>
                <span>Anliegen schildern</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                <Users className="h-10 w-10 text-dental-turquoise mx-auto mb-3" />
                Nennen Sie uns Ihren Behandlungswunsch.
              </CardDescription>
            </CardContent>
          </Card>
          
          <Card className="hover-scale">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="bg-dental-turquoise text-white w-8 h-8 rounded-full flex items-center justify-center">3</span>
                <span>Termin finden</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                <Check className="h-10 w-10 text-dental-turquoise mx-auto mb-3" />
                Gemeinsam finden wir den idealen Zeitpunkt für Ihren Besuch.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BookingInstructions;
