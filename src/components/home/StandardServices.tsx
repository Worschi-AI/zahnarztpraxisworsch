
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { services } from '@/data/services';
import IconRenderer from '@/components/IconRenderer';

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

  return (
    <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#edf2fa' }} id="standard-services">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12 animate-on-scroll">
          <h2 className="mb-4 text-dental-blue">Umfassende Zahnmedizin: Für Ihre ganzheitliche Gesundheit in Dresden</h2>
          <p className="text-lg text-dental-gray">
            Mehr als nur schöne Zähne: Neben unseren spezialisierten ästhetischen Behandlungen bieten wir Ihnen selbstverständlich das gesamte Spektrum modernster Zahnheilkunde. Unser Ziel ist Ihre langfristige Mundgesundheit und Ihr Wohlbefinden.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {services.filter(service => 
            !['implantologie', 'aesthetische-zahnheilkunde', 'zahnersatz'].includes(service.id)
          ).slice(0, 6).map((service, index) => (
            <div key={service.id} className="animate-on-scroll" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="bg-white p-6 rounded-lg shadow-md h-full flex flex-col">
                <div className="flex items-center gap-2 mb-2">
                  <IconRenderer 
                    iconName={getServiceIcon(service.id)} 
                    className="text-dental-turquoise" 
                    size={20} 
                  />
                  <h3 className="font-semibold text-dental-blue">{service.title}</h3>
                </div>
                <p className="text-dental-gray text-sm mb-4">
                  {service.id === 'prophylaxe' ? 'Die professionelle Zahnreinigung ist der Grundstein für ein strahlend weißes Lächeln und den umfassenden Schutz Ihrer Zähne – für eine dauerhaft gesunde Mundhygiene und ein Leben lang.' :
                   service.id === 'zahnerhaltung' ? 'Wir setzen alles daran, Ihre natürlichen Zähne so lange wie möglich zu erhalten. Dazu bieten wir schonende Behandlungen und sichere, modernste Verfahren, auch bei der Entfernung von Weisheitszähnen.' :
                   service.id === 'kinderzahnheilkunde' ? 'Mit viel Einfühlungsvermögen und altersgerechten Methoden betreuen wir Ihre Kleinen in einer entspannten und angstfreien Atmosphäre. So legen wir gemeinsam den Grundstein für lebenslange Zahngesundheit und positive Zahnarztbesuche.' :
                   service.id === 'parodontologie' ? 'Eine effektive Behandlung von Zahnfleischerkrankungen ist essenziell für Ihre langfristige Mundgesundheit. Wir schaffen ein gesundes Fundament für Ihr Lächeln und bewahren Ihre Zähne.' :
                   service.id === 'endodontie' ? 'Mit modernster Technik führen wir schmerzfreie Wurzelbehandlungen durch, um Ihre natürlichen Zähne zu erhalten und Ihnen Ihr strahlendes Lächeln zu bewahren.' :
                   'Leiden Sie unter Kiefergelenkbeschwerden oder CMD? Wir bieten Ihnen wirksame Behandlungen, um Ihr schmerzfreies Wohlbefinden wiederherzustellen und zu harmonischen Gesichtszügen beizutragen.'}
                </p>
                <div className="mt-auto">
                  <Link to={`/services/${service.id}`} className="text-dental-turquoise hover:text-dental-blue font-medium">
                    Details ansehen
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-6 animate-on-scroll">
          <Button asChild className="bg-dental-turquoise hover:bg-dental-blue">
            <Link to="/services">Alle Leistungen ansehen</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StandardServices;
