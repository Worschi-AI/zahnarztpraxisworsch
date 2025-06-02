
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { services } from '@/data/services';
import { Sparkles, Heart, Shield } from 'lucide-react';

const FeaturedServices = () => {
  // Featured services (top 3) - selecting premium services
  const featuredServices = services.filter(service => 
    ['implantologie', 'aesthetische-zahnheilkunde', 'zahnersatz'].includes(service.id)
  ).slice(0, 3);

  const getServiceIcon = (serviceId: string) => {
    switch(serviceId) {
      case 'aesthetische-zahnheilkunde':
        return <Sparkles className="h-8 w-8 text-white" />;
      case 'implantologie':
        return <Heart className="h-8 w-8 text-white" />;
      case 'zahnersatz':
        return <Shield className="h-8 w-8 text-white" />;
      default:
        return <Sparkles className="h-8 w-8 text-white" />;
    }
  };

  const getServiceColors = (serviceId: string) => {
    switch(serviceId) {
      case 'aesthetische-zahnheilkunde':
        return {
          bg: 'bg-blue-100',
          iconBg: 'bg-blue-400',
          title: 'Ästhetische Zahnheilkunde',
          subtitle: 'Schönes Lächeln'
        };
      case 'implantologie':
        return {
          bg: 'bg-green-50',
          iconBg: 'bg-green-400',
          title: 'Implantologie',
          subtitle: 'Fester Zahnersatz'
        };
      case 'zahnersatz':
        return {
          bg: 'bg-yellow-50',
          iconBg: 'bg-yellow-500',
          title: 'Zahnersatz',
          subtitle: 'Perfekte Passform'
        };
      default:
        return {
          bg: 'bg-gray-100',
          iconBg: 'bg-gray-400',
          title: 'Premium Service',
          subtitle: 'Premium Service'
        };
    }
  };

  const getServiceImage = (serviceId: string) => {
    switch(serviceId) {
      case 'aesthetische-zahnheilkunde':
        return "https://images.unsplash.com/photo-1581585095152-9f21db44503c?q=80&w=1770&auto=format&fit=crop";
      case 'implantologie':
        return "https://images.unsplash.com/photo-1601986413153-05c2466c26e4?q=80&w=1770&auto=format&fit=crop";
      case 'zahnersatz':
        return "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1770&auto=format&fit=crop";
      default:
        return "https://images.unsplash.com/photo-1581585095152-9f21db44503c?q=80&w=1770&auto=format&fit=crop";
    }
  };

  return (
    <section className="py-20 bg-dental-beige">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="mb-4 text-dental-blue">Exzellenz in Ästhetik & Funktion – Unsere Premium-Leistungen für Ihr Lächeln</h2>
          <p className="text-lg max-w-2xl mx-auto text-dental-gray">
            Entdecken Sie bei uns spezialisierte Behandlungen, die modernste Zahnmedizin mit höchsten ästhetischen Ansprüchen vereinen. Gemeinsam gestalten wir Ihr schönstes und gesündestes Lächeln.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
          {featuredServices.slice(0, 2).map((service, index) => {
            const colors = getServiceColors(service.id);
            return (
              <div 
                key={service.id} 
                className="animate-on-scroll flex flex-col h-full" 
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  animationDuration: '0.6s',
                  animationTimingFunction: 'ease-out'
                }}
              >
                <div className={`rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow ${colors.bg} h-[400px] flex flex-col`}>
                  {/* Background Image */}
                  <div 
                    className="h-48 bg-cover bg-center relative"
                    style={{ 
                      backgroundImage: `url(${getServiceImage(service.id)})`,
                    }}
                  >
                    {/* Icon Circle */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-16 h-16 ${colors.iconBg} rounded-full flex items-center justify-center shadow-lg`}>
                        {getServiceIcon(service.id)}
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 p-6 flex flex-col justify-between text-center">
                    <div>
                      <h3 className="text-xl font-bold text-dental-blue mb-2">{colors.title}</h3>
                      <p className="text-dental-gray text-sm mb-6">{colors.subtitle}</p>
                    </div>
                    
                    <Button 
                      asChild 
                      className="bg-pink-400 hover:bg-pink-500 text-white rounded-full py-3 px-8 font-medium"
                    >
                      <Link to={`/services/${service.id}`}>
                        Mehr erfahren
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Third service (if exists) - centered below */}
        {featuredServices.length > 2 && (
          <div className="flex justify-center">
            <div 
              className="animate-on-scroll w-full max-w-md" 
              style={{ 
                animationDelay: '200ms',
                animationDuration: '0.6s',
                animationTimingFunction: 'ease-out'
              }}
            >
              {(() => {
                const service = featuredServices[2];
                const colors = getServiceColors(service.id);
                return (
                  <div className={`rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow ${colors.bg} h-[400px] flex flex-col`}>
                    {/* Background Image */}
                    <div 
                      className="h-48 bg-cover bg-center relative"
                      style={{ 
                        backgroundImage: `url(${getServiceImage(service.id)})`,
                      }}
                    >
                      {/* Icon Circle */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className={`w-16 h-16 ${colors.iconBg} rounded-full flex items-center justify-center shadow-lg`}>
                          {getServiceIcon(service.id)}
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 p-6 flex flex-col justify-between text-center">
                      <div>
                        <h3 className="text-xl font-bold text-dental-blue mb-2">{colors.title}</h3>
                        <p className="text-dental-gray text-sm mb-6">{colors.subtitle}</p>
                      </div>
                      
                      <Button 
                        asChild 
                        className="bg-pink-400 hover:bg-pink-500 text-white rounded-full py-3 px-8 font-medium"
                      >
                        <Link to={`/services/${service.id}`}>
                          Mehr erfahren
                        </Link>
                      </Button>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        )}
        
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
