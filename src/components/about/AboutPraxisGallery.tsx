
import React from 'react';
import PraxisGallery from '@/components/praxis/PraxisGallery';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Users, Shield } from 'lucide-react';

const AboutPraxisGallery = () => {
  const ambienceFeatures = [
    {
      icon: <MapPin className="w-6 h-6 text-dental-turquoise" />,
      title: "Empfangsbereich",
      description: "Herzlich willkommen! Unser freundliches Team empfängt Sie in einer angenehmen und ruhigen Atmosphäre, damit Sie sich sofort gut aufgehoben fühlen."
    },
    {
      icon: <Users className="w-6 h-6 text-dental-turquoise" />,
      title: "Moderne Behandlungsräume",
      description: "Jeder Behandlungsplatz ist mit modernster Technik für Implantologie, Invisalign und ästhetische Zahnmedizin ausgestattet. Große Fenster sorgen für natürliches Licht und eine entspannte Atmosphäre."
    },
    {
      icon: <Shield className="w-6 h-6 text-dental-turquoise" />,
      title: "Hygiene und Sicherheit",
      description: "Wir übertreffen die gesetzlichen Vorgaben und orientieren uns an den höchsten Hygienestandards. Alle Instrumente werden in modernen Sterilisationsgeräten aufbereitet."
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#edf2fa' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="mb-4 text-dental-blue">Ein Ambiente zum Wohlfühlen: Ihre moderne Zahnarztpraxis in Dresden-Laubegast</h2>
          <p className="text-lg max-w-2xl mx-auto text-dental-gray animate-on-scroll">
            Treten Sie ein und überzeugen Sie sich selbst: Unsere Praxisräume sind hell, modern und mit neuester Technik ausgestattet. Unser größter Wunsch ist es, dass jeder Besuch bei uns so angenehm und entspannt wie möglich für Sie verläuft.
          </p>
        </div>
        
        <div className="animate-on-scroll mb-12">
          <PraxisGallery />
        </div>

        {/* Ambience Features */}
        <div className="grid md:grid-cols-3 gap-6 animate-on-scroll">
          {ambienceFeatures.map((feature, index) => (
            <Card key={index} className="border border-white/50 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:border-dental-turquoise/20">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-dental-beige rounded-lg">
                    {feature.icon}
                  </div>
                </div>
                <h4 className="font-semibold text-dental-blue mb-3">
                  {feature.title}
                </h4>
                <p className="text-dental-gray text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutPraxisGallery;
