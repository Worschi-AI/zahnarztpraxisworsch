
import React from 'react';
import HeroSection from '@/components/HeroSection';

interface ServiceDetailHeroProps {
  serviceId: string;
  service: any;
}

const ServiceDetailHero: React.FC<ServiceDetailHeroProps> = ({ serviceId, service }) => {
  const getHeroTitle = () => {
    if (serviceId === 'aesthetische-zahnheilkunde') {
      return "Ästhetische Zahnheilkunde in Dresden | Für Ihr perfektes Lächeln";
    }
    if (serviceId === 'zahnersatz') {
      return "Hochwertiger Zahnersatz in Dresden | Kronen, Brücken & Prothesen";
    }
    if (serviceId === 'prophylaxe') {
      return "Prophylaxe in Dresden: Vorsorge für Ihr schönstes Lächeln";
    }
    if (serviceId === 'zahnerhaltung') {
      return "Zahnerhaltung in Dresden: Ihre natürlichen Zähne bewahren";
    }
    if (serviceId === 'kinderzahnheilkunde') {
      return "Kinderzahnheilkunde in Dresden: Gesunde Zähne von Anfang an!";
    }
    return service.title;
  };

  const getHeroSubtitle = () => {
    if (serviceId === 'kinderzahnheilkunde') {
      return "Mit viel Geduld und Spaß führen wir Ihre Kinder an die Zahnpflege heran – für ein positives Erlebnis bei Ihrem Zahnarzt in Dresden Laubegast.";
    }
    return service.shortDescription;
  };

  return (
    <HeroSection 
      title={getHeroTitle()} 
      subtitle={getHeroSubtitle()} 
      backgroundImage={service.imageUrl}
    />
  );
};

export default ServiceDetailHero;
