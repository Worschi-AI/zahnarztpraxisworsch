
import React from 'react';
import { useParams } from 'react-router-dom';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { services } from '@/data/services';
import useScrollAnimation from '@/hooks/useScrollAnimation';

// Import our new components
import ServiceMetaData from '@/components/services/ServiceMetaData';
import ServiceContentImplantologie from '@/components/services/ServiceContentImplantologie';
import ServiceContentAesthetic from '@/components/services/ServiceContentAesthetic';
import ServiceContentDefault from '@/components/services/ServiceContentDefault';
import ServiceBenefits from '@/components/services/ServiceBenefits';
import ServiceFAQs from '@/components/services/ServiceFAQs';
import ServiceCTA from '@/components/services/ServiceCTA';
import RelatedServices from '@/components/services/RelatedServices';
import ServiceMainCTA from '@/components/services/ServiceMainCTA';
import ServiceNotFound from '@/components/services/ServiceNotFound';

const ServiceDetail = () => {
  // Use the custom scroll animation hook
  useScrollAnimation();
  
  const { id } = useParams<{ id: string }>();
  const service = services.find(s => s.id === id);

  // Redirect if service not found
  if (!service) {
    return <ServiceNotFound />;
  }

  // Customize page title and description for specific services
  const getMetaTitle = () => {
    if (id === 'implantologie') {
      return "Zahnimplantate Dresden | Experte für Implantologie | Zahnarztpraxis Worsch";
    }
    if (id === 'aesthetische-zahnheilkunde') {
      return "Ästhetische Zahnheilkunde Dresden | Veneers, Bleaching | Zahnarztpraxis Worsch";
    }
    return `${service.title} | Zahnarztpraxis Worsch Dresden`;
  };

  const getMetaDescription = () => {
    if (id === 'implantologie') {
      return "Zahnarztpraxis Worsch in Dresden: Ihr Spezialist für hochwertige Zahnimplantate. Feste Zähne & natürliches Lächeln dank moderner Implantologie. Jetzt beraten lassen!";
    }
    if (id === 'aesthetische-zahnheilkunde') {
      return "Zahnarztpraxis Worsch in Dresden: Ihr Experte für ästhetische Zahnheilkunde. Von Veneers über Bleaching bis zum Smile Makeover – für Ihr strahlendstes Lächeln. Jetzt beraten lassen!";
    }
    return service.shortDescription;
  };

  // Customize hero section title for specific services
  const getHeroTitle = () => {
    if (id === 'implantologie') {
      return "Zahnimplantate Dresden: Feste Zähne von Ihrem Spezialisten";
    }
    if (id === 'aesthetische-zahnheilkunde') {
      return "Ästhetische Zahnheilkunde in Dresden | Für Ihr perfektes Lächeln";
    }
    return service.title;
  };

  // Check if the current page is Implantologie or Ästhetische Zahnheilkunde
  const isImplantologiePage = id === 'implantologie';
  const isAestheticPage = id === 'aesthetische-zahnheilkunde';

  return (
    <div className="min-h-screen">
      <ServiceMetaData 
        title={getMetaTitle()} 
        description={getMetaDescription()}
      />
      
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection 
        title={getHeroTitle()} 
        subtitle={service.shortDescription} 
        backgroundImage={service.imageUrl}
      />

      {/* Service Description */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 animate-on-scroll">
              {isImplantologiePage ? (
                <ServiceContentImplantologie />
              ) : isAestheticPage ? (
                <ServiceContentAesthetic />
              ) : (
                <ServiceContentDefault 
                  title={service.title}
                  fullDescription={service.fullDescription}
                  procedure={service.procedure}
                />
              )}
            </div>
            
            {/* Benefits */}
            <ServiceBenefits serviceId={id} benefits={service.benefits} />
            
            {/* FAQs */}
            <ServiceFAQs serviceId={id} faqs={service.faqs} />

            {/* Custom CTA */}
            <ServiceCTA serviceId={id} />
          </div>
        </div>
      </section>

      {/* Related Services */}
      <RelatedServices currentServiceId={service.id} services={services} />

      {/* CTA */}
      <ServiceMainCTA />

      <Footer />
    </div>
  );
};

export default ServiceDetail;
