
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Check, Users } from 'lucide-react';

const BookingInstructions = () => {
  return (
    <div className="max-w-4xl mx-auto animate-on-scroll">
      <h3 className="text-2xl font-medium mb-6 text-center text-dental-blue">So funktioniert's</h3>
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
              Rufen Sie uns unter der Telefonnummer 0351 2522709 an, um einen Termin zu vereinbaren.
            </CardDescription>
          </CardContent>
        </Card>
        
        <Card className="hover-scale">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span className="bg-dental-turquoise text-white w-8 h-8 rounded-full flex items-center justify-center">2</span>
              <span>Besprechen</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              <Users className="h-10 w-10 text-dental-turquoise mx-auto mb-3" />
              Teilen Sie uns mit, welche Art von Behandlung Sie benötigen und wann Sie Zeit haben.
            </CardDescription>
          </CardContent>
        </Card>
        
        <Card className="hover-scale">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span className="bg-dental-turquoise text-white w-8 h-8 rounded-full flex items-center justify-center">3</span>
              <span>Fertig</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              <Check className="h-10 w-10 text-dental-turquoise mx-auto mb-3" />
              Wir finden einen passenden Termin für Sie und bestätigen diesen direkt am Telefon.
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BookingInstructions;
