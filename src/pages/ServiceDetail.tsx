
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

  const baseUrl = "https://zahnarztpraxis-worsch.de";

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
    if (id === 'prophylaxe') {
      return "Prophylaxe & Zahnreinigung Dresden | Zahnarztpraxis Worsch Laubegast";
    }
    if (id === 'zahnerhaltung') {
      return "Zahnerhaltung Dresden | Füllungen & Wurzelbehandlung | Praxis Worsch";
    }
    if (id === 'kinderzahnheilkunde') {
      return "Kinderzahnarzt Dresden Laubegast | Sanfte Zahnheilkunde | Praxis Worsch";
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
    if (id === 'prophylaxe') {
      return "Professionelle Zahnreinigung (PZR) und Prophylaxe in Dresden Laubegast bei Zahnarzt Worsch. Für gesunde Zähne und ein strahlendes Lächeln. Jetzt Termin!";
    }
    if (id === 'zahnerhaltung') {
      return "Moderne Zahnerhaltung in Dresden Laubegast bei Zahnarzt Worsch: Hochwertige Füllungen, schonende Wurzelkanalbehandlungen für den Erhalt Ihrer natürlichen Zähne.";
    }
    if (id === 'kinderzahnheilkunde') {
      return "Ihr einfühlsamer Kinderzahnarzt in Dresden Laubegast. Praxis Worsch bietet liebevolle Zahnbehandlung für Kinder und Prophylaxe für gesunde Milchzähne.";
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
    if (id === 'prophylaxe') {
      return "Prophylaxe in Dresden: Vorsorge für Ihr schönstes Lächeln";
    }
    if (id === 'zahnerhaltung') {
      return "Zahnerhaltung in Dresden: Ihre natürlichen Zähne bewahren";
    }
    if (id === 'kinderzahnheilkunde') {
      return "Kinderzahnheilkunde in Dresden: Gesunde Zähne von Anfang an!";
    }
    return service.title;
  };

  // Get appropriate subtitle for specific services
  const getHeroSubtitle = () => {
    if (id === 'kinderzahnheilkunde') {
      return "Mit viel Geduld und Spaß führen wir Ihre Kinder an die Zahnpflege heran – für ein positives Erlebnis bei Ihrem Zahnarzt in Dresden Laubegast.";
    }
    return service.shortDescription;
  };

  // Get appropriate OG image for service
  const getOGImage = () => {
    if (id === 'implantologie') {
      return "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1742&auto=format&fit=crop";
    }
    if (id === 'aesthetische-zahnheilkunde') {
      return "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=1631&auto=format&fit=crop";
    }
    if (id === 'zahnersatz') {
      return "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1740&auto=format&fit=crop";
    }
    if (id === 'zahnerhaltung') {
      return "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1742&auto=format&fit=crop";
    }
    return service.imageUrl;
  };

  // Erstellen von strukturierten Daten für alle wichtigen Leistungen
  const getStructuredData = () => {
    const baseProvider = {
      "@type": "Dentist",
      "name": "Zahnarztpraxis Worsch Dresden",
      "url": "https://zahnarztpraxis-worsch.de",
      "telephone": "+4935125227099",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Österreicher Str. 38",
        "addressLocality": "Dresden",
        "postalCode": "01279",
        "addressRegion": "Sachsen",
        "addressCountry": "DE"
      }
    };

    if (id === 'implantologie') {
      return {
        "@context": "https://schema.org",
        "@type": "MedicalProcedure",
        "name": "Zahnimplantate in Dresden",
        "procedureType": "Implantologie",
        "description": "Hochwertige Zahnimplantate für feste Zähne und natürliches Lächeln. Moderne Implantologie in der Zahnarztpraxis Worsch Dresden mit jahrelanger Erfahrung und neuester Technik.",
        "howPerformed": "Schonendes Einsetzen von Titanimplantaten mit digitaler Planung und modernster Technik. Vollnarkose oder lokale Betäubung möglich.",
        "preparation": "Umfassende Diagnostik mit 3D-Röntgen, individuelle Beratung und detaillierte Behandlungsplanung",
        "followup": "Regelmäßige Kontrollen und professionelle Implantatpflege für optimale Langzeitergebnisse",
        "medicineSystem": "Zahnmedizin",
        "relevantSpecialty": {
          "@type": "MedicalSpecialty",
          "name": "Implantologie"
        },
        "provider": baseProvider
      };
    }

    if (id === 'aesthetische-zahnheilkunde') {
      return {
        "@context": "https://schema.org",
        "@type": "MedicalProcedure", 
        "name": "Ästhetische Zahnheilkunde in Dresden",
        "procedureType": "Ästhetische Zahnmedizin",
        "description": "Ästhetische Zahnheilkunde für Ihr perfektes Lächeln: Veneers, Bleaching, Smile Makeover und kosmetische Zahnkorrekturen in Dresden.",
        "howPerformed": "Moderne Verfahren wie Keramik-Veneers, professionelles Bleaching und digitale Lächeln-Planung für natürlich schöne Ergebnisse",
        "preparation": "Digitale Lächeln-Analyse, Farbbestimmung und individuelle Behandlungsplanung",
        "followup": "Nachkontrollen und Pflegeempfehlungen für langanhaltende ästhetische Ergebnisse",
        "medicineSystem": "Zahnmedizin",
        "relevantSpecialty": {
          "@type": "MedicalSpecialty",
          "name": "Ästhetische Zahnheilkunde"
        },
        "provider": baseProvider
      };
    }

    if (id === 'zahnersatz') {
      return {
        "@context": "https://schema.org",
        "@type": "MedicalProcedure",
        "name": "Zahnersatz in Dresden",
        "procedureType": "Prothetische Zahnmedizin",
        "description": "Hochwertiger Zahnersatz wie Kronen, Brücken und Prothesen in der Zahnarztpraxis Worsch Dresden für natürliche Ästhetik und optimale Funktion",
        "howPerformed": "Moderne Verfahren wie digitale Abformung mit Intraoralscanner und CAD/CAM-Technologie für präzisen und ästhetischen Zahnersatz",
        "preparation": "Ausführliche Beratung, individuelle Planung und schonende Vorbereitung der Zähne",
        "followup": "Regelmäßige Kontrollen und professionelle Reinigung für optimale Haltbarkeit",
        "medicineSystem": "Zahnmedizin",
        "relevantSpecialty": {
          "@type": "MedicalSpecialty",
          "name": "Prothetische Zahnheilkunde"
        },
        "provider": baseProvider
      };
    }

    if (id === 'prophylaxe') {
      return {
        "@context": "https://schema.org",
        "@type": "MedicalProcedure",
        "name": "Prophylaxe und professionelle Zahnreinigung in Dresden",
        "procedureType": "Präventive Zahnmedizin",
        "description": "Professionelle Zahnreinigung und Prophylaxe für gesunde Zähne und Zahnfleisch. Vorbeugende Zahnmedizin in der Zahnarztpraxis Worsch Dresden.",
        "howPerformed": "Gründliche Entfernung von Plaque und Zahnstein, Politur und Fluoridierung für optimalen Schutz",
        "preparation": "Untersuchung von Zähnen und Zahnfleisch, individuelle Risikoanalyse",
        "followup": "Regelmäßige Prophylaxe-Termine und individuelle Mundhygiene-Beratung",
        "medicineSystem": "Zahnmedizin",
        "relevantSpecialty": {
          "@type": "MedicalSpecialty",
          "name": "Präventive Zahnmedizin"
        },
        "provider": baseProvider
      };
    }

    if (id === 'zahnerhaltung') {
      return {
        "@context": "https://schema.org",
        "@type": "MedicalProcedure",
        "name": "Zahnerhaltung in Dresden",
        "procedureType": "Konservierende Zahnheilkunde",
        "description": "Moderne Zahnerhaltung mit hochwertigen Füllungen und schonenden Wurzelkanalbehandlungen. Erhalt der natürlichen Zähne in der Zahnarztpraxis Worsch Dresden.",
        "howPerformed": "Minimalinvasive Verfahren mit modernen Materialien wie Kompositfüllungen und Keramikinlays. Präzise Wurzelkanalbehandlungen mit elektronischer Längenmessung",
        "preparation": "Gründliche Untersuchung, Aufklärung über Behandlungsoptionen und individuelle Behandlungsplanung",
        "followup": "Regelmäßige Kontrollen und Nachsorge für optimale Langzeitergebnisse",
        "medicineSystem": "Zahnmedizin",
        "relevantSpecialty": {
          "@type": "MedicalSpecialty",
          "name": "Konservierende Zahnheilkunde"
        },
        "provider": baseProvider
      };
    }

    if (id === 'kinderzahnheilkunde') {
      return {
        "@context": "https://schema.org",
        "@type": "MedicalProcedure",
        "name": "Kinderzahnheilkunde in Dresden",
        "procedureType": "Kinderzahnmedizin",
        "description": "Einfühlsame Zahnbehandlung für Kinder in Dresden. Kinderzahnheilkunde mit viel Geduld und altersgerechter Betreuung in der Zahnarztpraxis Worsch.",
        "howPerformed": "Kindgerechte Behandlungsmethoden, spielerischer Umgang und einfühlsame Betreuung für angstfreie Zahnarztbesuche",
        "preparation": "Spielerisches Kennenlernen, altersgerechte Aufklärung und vertrauensvolle Atmosphäre",
        "followup": "Regelmäßige Kontrollen und Aufbau einer positiven Beziehung zur Zahngesundheit",
        "medicineSystem": "Zahnmedizin",
        "relevantSpecialty": {
          "@type": "MedicalSpecialty",
          "name": "Kinderzahnheilkunde"
        },
        "provider": baseProvider
      };
    }

    // Fallback für andere Services
    return {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": service.title,
      "procedureType": "Zahnmedizinische Behandlung",
      "description": service.shortDescription,
      "medicineSystem": "Zahnmedizin",
      "provider": baseProvider
    };
  };

  // Check if the current page is Implantologie, Ästhetische Zahnheilkunde or Zahnersatz
  const isImplantologiePage = id === 'implantologie';
  const isAestheticPage = id === 'aesthetische-zahnheilkunde';
  const isZahnersatzPage = id === 'zahnersatz';
  const isProphylaxePage = id === 'prophylaxe';
  const isZahnerhaltungPage = id === 'zahnerhaltung';
  const isKinderzahnheilkundePage = id === 'kinderzahnheilkunde';

  return (
    <div className="min-h-screen">
      <ServiceMetaData 
        title={getMetaTitle()} 
        description={getMetaDescription()}
        canonicalUrl={`${baseUrl}/services/${id}`}
        ogUrl={`${baseUrl}/services/${id}`}
        ogImage={getOGImage()}
        schema={getStructuredData()}
      />
      
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection 
        title={getHeroTitle()} 
        subtitle={getHeroSubtitle()} 
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
                  isProphylaxe={isProphylaxePage}
                  isZahnerhaltung={isZahnerhaltungPage}
                  isKinderzahnheilkunde={isKinderzahnheilkundePage}
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
