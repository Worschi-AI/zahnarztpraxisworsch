import React from 'react';
import ServiceMetaData from '@/components/services/ServiceMetaData';

interface ServiceDetailMetaProps {
  serviceId: string;
  service: any;
}

const ServiceDetailMeta: React.FC<ServiceDetailMetaProps> = ({ serviceId, service }) => {
  const baseUrl = "https://zahnarztpraxis-worsch.de";

  const getMetaTitle = () => {
    if (serviceId === 'implantologie') {
      return "Zahnimplantate Dresden | Experte für Implantologie | Zahnarztpraxis Worsch";
    }
    if (serviceId === 'aesthetische-zahnheilkunde') {
      return "Ästhetische Zahnheilkunde Dresden | Veneers, Bleaching | Zahnarztpraxis Worsch";
    }
    if (serviceId === 'zahnersatz') {
      return "Zahnersatz Dresden | Kronen, Brücken, Prothesen | Zahnarztpraxis Worsch";
    }
    if (serviceId === 'prophylaxe') {
      return "Prophylaxe & Zahnreinigung Dresden | Zahnarztpraxis Worsch Laubegast";
    }
    if (serviceId === 'zahnerhaltung') {
      return "Zahnerhaltung Dresden | Füllungen & Wurzelbehandlung | Praxis Worsch";
    }
    if (serviceId === 'kinderzahnheilkunde') {
      return "Kinderzahnarzt Dresden Laubegast | Sanfte Zahnheilkunde | Praxis Worsch";
    }
    return `${service.title} | Zahnarztpraxis Worsch Dresden`;
  };

  const getMetaDescription = () => {
    if (serviceId === 'implantologie') {
      return "Zahnarztpraxis Worsch in Dresden: Ihr Spezialist für hochwertige Zahnimplantate. Feste Zähne & natürliches Lächeln dank moderner Implantologie. Jetzt beraten lassen!";
    }
    if (serviceId === 'aesthetische-zahnheilkunde') {
      return "Zahnarztpraxis Worsch in Dresden: Ihr Experte für ästhetische Zahnheilkunde. Von Veneers über Bleaching bis zum Smile Makeover – für Ihr strahlendstes Lächeln. Jetzt beraten lassen!";
    }
    if (serviceId === 'zahnersatz') {
      return "Zahnarztpraxis Worsch Dresden: Ihr Spezialist für hochwertigen Zahnersatz. Von Kronen über Brücken bis zu Prothesen – für natürliche Ästhetik & Funktion. Jetzt beraten lassen!";
    }
    if (serviceId === 'prophylaxe') {
      return "Professionelle Zahnreinigung (PZR) und Prophylaxe in Dresden Laubegast bei Zahnarzt Worsch. Für gesunde Zähne und ein strahlendes Lächeln. Jetzt Termin!";
    }
    if (serviceId === 'zahnerhaltung') {
      return "Moderne Zahnerhaltung in Dresden Laubegast bei Zahnarzt Worsch: Hochwertige Füllungen, schonende Wurzelkanalbehandlungen für den Erhalt Ihrer natürlichen Zähne.";
    }
    if (serviceId === 'kinderzahnheilkunde') {
      return "Ihr einfühlsamer Kinderzahnarzt in Dresden Laubegast. Praxis Worsch bietet liebevolle Zahnbehandlung für Kinder und Prophylaxe für gesunde Milchzähne.";
    }
    return service.shortDescription;
  };

  const getOGImage = () => {
    if (serviceId === 'implantologie') {
      return "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1742&auto=format&fit=crop";
    }
    if (serviceId === 'aesthetische-zahnheilkunde') {
      return "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=1631&auto=format&fit=crop";
    }
    if (serviceId === 'zahnersatz') {
      return "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1740&auto=format&fit=crop";
    }
    if (serviceId === 'zahnerhaltung') {
      return "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1742&auto=format&fit=crop";
    }
    return service.imageUrl;
  };

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

    if (serviceId === 'implantologie') {
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

    if (serviceId === 'aesthetische-zahnheilkunde') {
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

    if (serviceId === 'zahnersatz') {
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

    if (serviceId === 'prophylaxe') {
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

    if (serviceId === 'zahnerhaltung') {
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

    if (serviceId === 'kinderzahnheilkunde') {
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

  return (
    <ServiceMetaData 
      title={getMetaTitle()} 
      description={getMetaDescription()}
      canonicalUrl={`${baseUrl}/services/${serviceId}`}
      ogUrl={`${baseUrl}/services/${serviceId}`}
      ogImage={getOGImage()}
      schema={getStructuredData()}
    />
  );
};

export default ServiceDetailMeta;
