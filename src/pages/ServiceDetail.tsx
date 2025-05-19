
import React from 'react';
import { useParams } from 'react-router-dom';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { services } from '@/data/services';
import useScrollAnimation from '@/hooks/useScrollAnimation';

// Import unsere Komponenten
import ServiceMetaData from '@/components/services/ServiceMetaData';
import ServiceContentImplantologie from '@/components/services/ServiceContentImplantologie';
import ServiceContentAesthetic from '@/components/services/ServiceContentAesthetic';
import ServiceContentDefault from '@/components/services/ServiceContentDefault';
import ServiceContentZahnersatz from '@/components/services/ServiceContentZahnersatz';
import ZahnersatzFAQ from '@/components/services/ZahnersatzFAQ';
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
    if (id === 'zahnersatz') {
      return "Zahnersatz Dresden | Kronen, Brücken, Prothesen | Zahnarztpraxis Worsch";
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
    if (id === 'zahnersatz') {
      return "Zahnarztpraxis Worsch Dresden: Ihr Spezialist für hochwertigen Zahnersatz. Von Kronen über Brücken bis zu Prothesen – für natürliche Ästhetik & Funktion. Jetzt beraten lassen!";
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
    if (id === 'zahnersatz') {
      return "Hochwertiger Zahnersatz in Dresden | Kronen, Brücken & Prothesen";
    }
    return service.title;
  };

  // Erstellen eines strukturierten Daten-Schemas für den Zahnersatz
  const getStructuredData = () => {
    if (id === 'zahnersatz') {
      return {
        "@context": "https://schema.org",
        "@type": "MedicalProcedure",
        "name": "Zahnersatz in Dresden",
        "procedureType": "Zahnmedizinische Behandlung",
        "description": "Hochwertiger Zahnersatz wie Kronen, Brücken und Prothesen in der Zahnarztpraxis Worsch Dresden",
        "howPerformed": "Moderne Verfahren wie digitale Abformung mit Intraoralscanner und CAD/CAM-Technologie",
        "preparation": "Ausführliche Beratung, individuelle Planung und schonende Vorbereitung der Zähne",
        "followup": "Regelmäßige Kontrollen und professionelle Reinigung für optimale Haltbarkeit",
        "medicineSystem": "Zahnmedizin",
        "relevantSpecialty": {
          "@type": "MedicalSpecialty",
          "name": "Zahnheilkunde"
        },
        "provider": {
          "@type": "Dentist",
          "name": "Zahnarztpraxis Worsch Dresden",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Dresden",
            "addressRegion": "Sachsen",
            "addressCountry": "DE"
          }
        }
      };
    }
    return null;
  };

  // Check if the current page is Implantologie, Ästhetische Zahnheilkunde or Zahnersatz
  const isImplantologiePage = id === 'implantologie';
  const isAestheticPage = id === 'aesthetische-zahnheilkunde';
  const isZahnersatzPage = id === 'zahnersatz';

  return (
    <div className="min-h-screen">
      <ServiceMetaData 
        title={getMetaTitle()} 
        description={getMetaDescription()}
        schema={getStructuredData()}
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
              ) : isZahnersatzPage ? (
                <ServiceContentZahnersatz />
              ) : (
                <ServiceContentDefault 
                  title={service.title}
                  fullDescription={service.fullDescription}
                  procedure={service.procedure}
                />
              )}
            </div>
            
            {/* Benefits - nur zeigen wenn nicht Zahnersatz (da bereits in der Content-Komponente enthalten) */}
            {!isZahnersatzPage && service.benefits && service.benefits.length > 0 && (
              <ServiceBenefits serviceId={id} benefits={service.benefits} />
            )}
            
            {/* FAQs - Spezial-FAQs für Zahnersatz, sonst standard */}
            {isZahnersatzPage ? (
              <ZahnersatzFAQ />
            ) : (
              service.faqs && service.faqs.length > 0 && (
                <ServiceFAQs serviceId={id} faqs={service.faqs} />
              )
            )}

            {/* Custom CTA - nur zeigen wenn nicht Zahnersatz (da bereits in Content-Komponente) */}
            {!isZahnersatzPage && (
              <ServiceCTA serviceId={id} />
            )}
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
