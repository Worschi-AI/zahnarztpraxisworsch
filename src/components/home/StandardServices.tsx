
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { services } from '@/data/services';
import IconRenderer from '@/components/IconRenderer';
import { ArrowRight } from 'lucide-react';

const StandardServices = () => {
  const getServiceIcon = (serviceId: string) => {
    switch (serviceId) {
      case 'prophylaxe':
        return 'shield';
      case 'zahnerhaltung':
        return 'heart';
      case 'kinderzahnheilkunde':
        return 'smile';
      case 'parodontologie':
        return 'activity';
      case 'endodontie':
        return 'settings';
      case 'funktionstherapie':
        return 'zap';
      default:
        return 'check-circle';
    }
  };

  const getGradientColor = (index: number) => {
    const gradients = [
      'from-dental-turquoise/10 to-dental-blue/5',
      'from-dental-blue/10 to-dental-turquoise/5',
      'from-dental-turquoise/15 to-dental-blue/10',
      'from-dental-blue/15 to-dental-turquoise/10',
      'from-dental-turquoise/12 to-dental-blue/8',
      'from-dental-blue/12 to-dental-turquoise/8'
    ];
    return gradients[index % gradients.length];
  };

  return (
    <section className="py-20 bg-gradient-to-br from-dental-beige via-white to-dental-beige relative overflow-hidden" id="standard-services">
      {/* Background decorations */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-dental-turquoise/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-dental-blue/10 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-on-scroll">
          <div className="inline-flex items-center gap-2 bg-dental-turquoise/10 px-4 py-2 rounded-full mb-6">
            <IconRenderer iconName="heart" className="text-dental-turquoise w-4 h-4" />
            <span className="text-dental-turquoise font-medium text-sm">Umfassende Zahnmedizin</span>
          </div>
          
          <h2 className="mb-6 bg-gradient-to-r from-dental-blue to-dental-turquoise bg-clip-text text-transparent">
            Umfassende Zahnmedizin: Für Ihre ganzheitliche Gesundheit in Dresden
          </h2>
          <p className="text-lg text-dental-gray leading-relaxed">
            Mehr als nur schöne Zähne: Neben unseren spezialisierten ästhetischen Behandlungen bieten wir Ihnen selbstverständlich das gesamte Spektrum modernster Zahnheilkunde. Unser Ziel ist Ihre langfristige Mundgesundheit und Ihr Wohlbefinden.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.filter(service => 
            !['implantologie', 'aesthetische-zahnheilkunde', 'zahnersatz'].includes(service.id)
          ).slice(0, 6).map((service, index) => (
            <div key={service.id} className="animate-on-scroll group" style={{ animationDelay: `${index * 100}ms` }}>
              <div className={`bg-gradient-to-br ${getGradientColor(index)} p-1 rounded-2xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105`}>
                <div className="bg-white p-6 rounded-xl h-full flex flex-col relative overflow-hidden">
                  {/* Subtle animated background */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-dental-turquoise/5 to-dental-blue/5 rounded-full transform translate-x-6 -translate-y-6 group-hover:scale-150 transition-transform duration-500"></div>
                  
                  <div className="flex items-center gap-3 mb-4 relative z-10">
                    <div className={`w-12 h-12 bg-gradient-to-br ${getGradientColor(index)} rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 shadow-md`}>
                      <IconRenderer 
                        iconName={getServiceIcon(service.id)} 
                        className="text-dental-turquoise group-hover:text-dental-blue transition-colors duration-300" 
                        size={20} 
                      />
                    </div>
                    <h3 className="font-semibold text-dental-blue group-hover:text-dental-turquoise transition-colors duration-300">{service.title}</h3>
                  </div>
                  
                  <p className="text-dental-gray text-sm mb-6 leading-relaxed flex-grow">
                    {service.id === 'prophylaxe' ? 'Die professionelle Zahnreinigung ist der Grundstein für ein strahlend weißes Lächeln und den umfassenden Schutz Ihrer Zähne – für eine dauerhaft gesunde Mundhygiene und ein Leben lang.' :
                     service.id === 'zahnerhaltung' ? 'Wir setzen alles daran, Ihre natürlichen Zähne so lange wie möglich zu erhalten. Dazu bieten wir schonende Behandlungen und sichere, modernste Verfahren, auch bei der Entfernung von Weisheitszähnen.' :
                     service.id === 'kinderzahnheilkunde' ? 'Mit viel Einfühlungsvermögen und altersgerechten Methoden betreuen wir Ihre Kleinen in einer entspannten und angstfreien Atmosphäre. So legen wir gemeinsam den Grundstein für lebenslange Zahngesundheit und positive Zahnarztbesuche.' :
                     service.id === 'parodontologie' ? 'Eine effektive Behandlung von Zahnfleischerkrankungen ist essenziell für Ihre langfristige Mundgesundheit. Wir schaffen ein gesundes Fundament für Ihr Lächeln und bewahren Ihre Zähne.' :
                     service.id === 'endodontie' ? 'Mit modernster Technik führen wir schmerzfreie Wurzelbehandlungen durch, um Ihre natürlichen Zähne zu erhalten und Ihnen Ihr strahlendes Lächeln zu bewahren.' :
                     'Leiden Sie unter Kiefergelenkbeschwerden oder CMD? Wir bieten Ihnen wirksame Behandlungen, um Ihr schmerzfreies Wohlbefinden wiederherzustellen und zu harmonischen Gesichtszügen beizutragen.'}
                  </p>
                  
                  <div className="mt-auto relative z-10">
                    <Link 
                      to={`/services/${service.id}`} 
                      className="inline-flex items-center gap-2 text-dental-turquoise hover:text-dental-blue font-medium group-hover:gap-3 transition-all duration-300 text-sm"
                    >
                      Details ansehen 
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 animate-on-scroll">
          <Button asChild className="bg-gradient-to-r from-dental-turquoise to-dental-blue hover:from-dental-blue hover:to-dental-turquoise transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl px-8 py-4">
            <Link to="/services" className="flex items-center gap-2">
              Alle Leistungen ansehen
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StandardServices;
