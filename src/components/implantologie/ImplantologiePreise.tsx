
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Euro, CreditCard, Building, CheckCircle } from 'lucide-react';

const ImplantologiePreise = () => {
  const preise = [
    {
      behandlung: "Einzelzahnimplantat mit Vollkeramikkrone",
      preis: "ab 1.800 Euro",
      beschreibung: "Komplette Versorgung eines einzelnen Zahns"
    },
    {
      behandlung: "Implantatgetragene Brücke (3 Zähne)",
      preis: "ab 4.500 Euro", 
      beschreibung: "Festsitzende Brücke auf zwei Implantaten"
    },
    {
      behandlung: "Vollständige implantatgetragene Versorgung",
      preis: "ab 12.000 Euro",
      beschreibung: "Komplette Sanierung eines Kiefers"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-dental-blue/5 to-dental-turquoise/5">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-on-scroll">
          <h2 className="mb-6 text-dental-blue">Preise für Zahnimplantate in Dresden</h2>
          <p className="text-lg text-dental-gray">
            Transparente Kostenaufstellung ohne versteckte Zusatzkosten
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {preise.map((preis, index) => (
              <Card key={index} className="animate-on-scroll hover:shadow-lg transition-all duration-300" style={{ animationDelay: `${index * 150}ms` }}>
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-dental-turquoise/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Euro className="w-8 h-8 text-dental-turquoise" />
                  </div>
                  <CardTitle className="text-xl text-dental-blue">{preis.behandlung}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-3xl font-bold text-dental-turquoise mb-2">{preis.preis}</div>
                  <p className="text-dental-gray">{preis.beschreibung}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-on-scroll">
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center">
                <CreditCard className="w-12 h-12 text-dental-turquoise mx-auto mb-4" />
                <CardTitle className="text-lg text-dental-blue">Finanzierungsmöglichkeiten</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-dental-gray text-center">
                  Flexible Finanzierungslösungen und individuelle Ratenzahlungspläne für Ihre Wunschbehandlung.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center">
                <Building className="w-12 h-12 text-dental-turquoise mx-auto mb-4" />
                <CardTitle className="text-lg text-dental-blue">Krankenkassen-Zuschüsse</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-dental-gray text-center">
                  Befundbezogener Festzuschuss auch bei Implantaten. Private Zusatzversicherungen übernehmen oft mehr.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center">
                <CheckCircle className="w-12 h-12 text-dental-turquoise mx-auto mb-4" />
                <CardTitle className="text-lg text-dental-blue">Transparente Kosten</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-dental-gray text-center">
                  Detaillierte Kostenaufstellung ohne versteckte Zusatzkosten. Alles transparent und verständlich erklärt.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImplantologiePreise;
