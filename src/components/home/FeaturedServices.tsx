
import React from 'react';
import ServiceCard from '@/components/ServiceCard';
import { Sparkles, Heart, Shield, Star } from 'lucide-react';

const FeaturedServices = () => {
  const featuredServices = [
    {
      title: "Ästhetische Zahnheilkunde",
      description: "Veneers, Bleaching und Smile Makeovers für Ihr perfektes Lächeln",
      icon: <Sparkles className="w-6 h-6" />,
      link: "/services/aesthetische-zahnheilkunde",
      image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1740&auto=format&fit=crop"
    },
    {
      title: "Implantologie",
      description: "Moderne Zahnimplantate für natürliche und dauerhafte Ergebnisse",
      icon: <Shield className="w-6 h-6" />,
      link: "/services/implantologie",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1968&auto=format&fit=crop"
    },
    {
      title: "Hochwertiger Zahnersatz",
      description: "Kronen, Brücken und Prothesen in Premium-Qualität",
      icon: <Star className="w-6 h-6" />,
      link: "/services/zahnersatz",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1740&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-20 bg-dental-beige">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="mb-4 text-dental-blue">Exzellenz in Ästhetik & Funktion – Unsere Premium-Leistungen für Ihr Lächeln</h2>
          <p className="text-lg text-dental-gray max-w-3xl mx-auto">
            Entdecken Sie bei uns spezialisierte Behandlungen, die modernste Zahnmedizin mit höchsten ästhetischen Ansprüchen vereinen. Gemeinsam gestalten wir Ihr schönstes und gesündestes Lächeln.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {featuredServices.map((service, index) => (
            <div key={index} className="animate-on-scroll">
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
