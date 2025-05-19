
import React from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';
import { services } from '@/data/services';

const FeaturedServices = () => {
  // Featured services (top 3) - selecting premium services
  const featuredServices = services.filter(service => 
    ['implantologie', 'aesthetische-zahnheilkunde', 'zahnersatz'].includes(service.id)
  ).slice(0, 3);

  return (
    <section className="py-20 bg-dental-beige">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="mb-4 text-dental-blue">Unsere Premium-Leistungen in Dresden</h2>
          <p className="text-lg max-w-2xl mx-auto text-dental-gray">
            Wir bieten Ihnen hochwertige <strong>zahnmedizinische Leistungen in Dresden</strong> - von 
            erstklassigen Implantatlösungen über ästhetische Zahnmedizin bis hin zu hochwertigen Zahnersatzlösungen.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredServices.map((service, index) => (
            <div key={service.id} className="animate-on-scroll flex flex-col h-full" style={{ animationDelay: `${index * 100}ms` }}>
              <ServiceCard
                id={service.id}
                title={service.title}
                description={
                  service.id === 'implantologie' 
                    ? `Fester Zahnersatz für ein natürliches Lächeln und höchste Lebensqualität. Dank modernster 3D-Planung und hochwertiger Implantate sind Sie bei uns in Dresden in besten Händen.` 
                    : service.id === 'aesthetische-zahnheilkunde'
                    ? `Perfekte Ästhetik für strahlend schöne Zähne. Mit Veneers, Bleaching und hochwertigen Füllungen sorgen wir für Ihr traumhaftes Lächeln – schonend und individuell angepasst.`
                    : `Hochwertige Kronen, Brücken und Prothesen für perfekte Funktion und natürliche Ästhetik in Dresden. Wir setzen auf modernste Materialien und präzise Anpassung.`
                }
                imageUrl={
                  service.id === 'implantologie' 
                    ? "https://images.unsplash.com/photo-1601986413153-05c2466c26e4?q=80&w=1770&auto=format&fit=crop" 
                    : service.id === 'aesthetische-zahnheilkunde'
                    ? "https://images.unsplash.com/photo-1581585095152-9f21db44503c?q=80&w=1770&auto=format&fit=crop"
                    : "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1770&auto=format&fit=crop"
                }
              />
              <div className="mt-4 text-center">
                <Button asChild className="bg-dental-turquoise hover:bg-dental-blue">
                  <Link to={`/services/${service.id}`}>Details ansehen</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 animate-on-scroll">
          <Button asChild className="bg-dental-turquoise hover:bg-dental-blue">
            <Link to="/services">Alle Leistungen ansehen</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
