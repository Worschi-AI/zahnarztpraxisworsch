
import React from 'react';
import ServiceContentImplantologie from '@/components/services/ServiceContentImplantologie';
import ServiceContentAesthetic from '@/components/services/ServiceContentAesthetic';
import ServiceContentDefault from '@/components/services/ServiceContentDefault';
import ServiceContentZahnersatz from '@/components/services/ServiceContentZahnersatz';
import ZahnersatzFAQ from '@/components/services/ZahnersatzFAQ';
import ServiceBenefits from '@/components/services/ServiceBenefits';
import ServiceFAQs from '@/components/services/ServiceFAQs';
import ServiceCTA from '@/components/services/ServiceCTA';

interface ServiceDetailContentProps {
  serviceId: string;
  service: any;
}

const ServiceDetailContent: React.FC<ServiceDetailContentProps> = ({ serviceId, service }) => {
  const isImplantologiePage = serviceId === 'implantologie';
  const isAestheticPage = serviceId === 'aesthetische-zahnheilkunde';
  const isZahnersatzPage = serviceId === 'zahnersatz';
  const isProphylaxePage = serviceId === 'prophylaxe';
  const isZahnerhaltungPage = serviceId === 'zahnerhaltung';
  const isKinderzahnheilkundePage = serviceId === 'kinderzahnheilkunde';

  return (
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
            <ServiceBenefits serviceId={serviceId} benefits={service.benefits} />
          )}
          
          {/* FAQs - Spezial-FAQs für Zahnersatz, sonst standard */}
          {isZahnersatzPage ? (
            <ZahnersatzFAQ />
          ) : (
            service.faqs && service.faqs.length > 0 && (
              <ServiceFAQs serviceId={serviceId} faqs={service.faqs} />
            )
          )}

          {/* Custom CTA - nur zeigen wenn nicht Zahnersatz (da bereits in Content-Komponente) */}
          {!isZahnersatzPage && (
            <ServiceCTA serviceId={serviceId} />
          )}
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailContent;
