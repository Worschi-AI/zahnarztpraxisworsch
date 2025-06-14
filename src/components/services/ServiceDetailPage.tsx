
import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { services } from '@/data/services';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import ServiceDetailMeta from '@/components/services/ServiceDetailMeta';
import ServiceDetailHero from '@/components/services/ServiceDetailHero';
import ServiceDetailContent from '@/components/services/ServiceDetailContent';
import RelatedServices from '@/components/services/RelatedServices';
import ServiceNotFound from '@/components/services/ServiceNotFound';
import HomepageFAQ from '@/components/home/HomepageFAQ';
import AppointmentCTA from '@/components/home/AppointmentCTA';

const ServiceDetailPage = () => {
  useScrollAnimation();
  
  const { id } = useParams<{ id: string }>();
  const service = services.find(s => s.id === id);

  if (!service || !id) {
    return <ServiceNotFound />;
  }

  return (
    <div className="min-h-screen">
      <ServiceDetailMeta serviceId={id} service={service} />
      <Navbar />
      <ServiceDetailHero serviceId={id} service={service} />
      <ServiceDetailContent serviceId={id} service={service} />
      <RelatedServices currentServiceId={service.id} services={services} />
      
      {/* FAQ Section - same as homepage */}
      <HomepageFAQ />

      {/* Appointment CTA - same as homepage */}
      <AppointmentCTA />
      
      <Footer />
    </div>
  );
};

export default ServiceDetailPage;
