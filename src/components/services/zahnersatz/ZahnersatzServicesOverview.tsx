
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Crown, Cog, PenTool, Smile } from 'lucide-react';

const ZahnersatzServicesOverview = () => {
  return (
    <div className="prose prose-lg max-w-none text-dental-gray">
      <h3 className="text-2xl font-medium mt-10 mb-6 text-dental-blue">Unsere Zahnersatz-Lösungen für Sie in Dresden</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mb-10">
        <div className="bg-dental-beige p-5 rounded-lg">
          <div className="flex items-center mb-3">
            <Crown className="h-6 w-6 text-dental-turquoise mr-2" />
            <h4 className="text-xl font-medium text-dental-blue">Zahnkronen Dresden</h4>
          </div>
          <p className="text-base">
            Hochwertige Vollkeramikkronen für einzelne Zähne, die stark geschädigt sind. Natürliche Optik und höchste Stabilität für Ihre Zahngesundheit.
          </p>
          <Button variant="link" asChild className="mt-2 p-0 text-dental-turquoise hover:text-dental-blue">
            <Link to="#zahnkronen">Mehr zu Zahnkronen erfahren</Link>
          </Button>
        </div>
        
        <div className="bg-dental-beige p-5 rounded-lg">
          <div className="flex items-center mb-3">
            <Cog className="h-6 w-6 text-dental-turquoise mr-2" />
            <h4 className="text-xl font-medium text-dental-blue">Zahnbrücken Dresden</h4>
          </div>
          <p className="text-base">
            Festsitzender Zahnersatz für Lücken zwischen gesunden Zähnen. Wiederherstellung der Kaufunktion und Ästhetik ohne Implantate.
          </p>
          <Button variant="link" asChild className="mt-2 p-0 text-dental-turquoise hover:text-dental-blue">
            <Link to="#zahnbruecken">Mehr zu Zahnbrücken erfahren</Link>
          </Button>
        </div>
        
        <div className="bg-dental-beige p-5 rounded-lg">
          <div className="flex items-center mb-3">
            <PenTool className="h-6 w-6 text-dental-turquoise mr-2" />
            <h4 className="text-xl font-medium text-dental-blue">Teilprothesen & Vollprothesen</h4>
          </div>
          <p className="text-base">
            Herausnehmbare Lösungen für größere Zahnlücken oder zahnlose Kiefer. Modern, komfortabel und natürlich wirkend.
          </p>
          <Button variant="link" asChild className="mt-2 p-0 text-dental-turquoise hover:text-dental-blue">
            <Link to="#prothesen">Mehr zu Prothesen erfahren</Link>
          </Button>
        </div>
        
        <div className="bg-dental-beige p-5 rounded-lg">
          <div className="flex items-center mb-3">
            <Smile className="h-6 w-6 text-dental-turquoise mr-2" />
            <h4 className="text-xl font-medium text-dental-blue">Implantatgetragener Zahnersatz</h4>
          </div>
          <p className="text-base">
            Die Premium-Lösung: Fest verankerter Zahnersatz auf Implantaten für höchsten Tragekomfort und Ästhetik. Wie eigene Zähne.
          </p>
          <Button variant="link" asChild className="mt-2 p-0 text-dental-turquoise hover:text-dental-blue">
            <Link to="/services/implantologie">Mehr zu Implantaten erfahren</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ZahnersatzServicesOverview;
