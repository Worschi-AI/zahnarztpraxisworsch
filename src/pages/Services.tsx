
import React from 'react';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { services } from '@/data/services';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import PremiumServiceSection from '@/components/services/PremiumServiceSection';
import StandardServiceSection from '@/components/services/StandardServiceSection';
import QualityPromiseSection from '@/components/services/QualityPromiseSection';
import TestimonialSection from '@/components/services/TestimonialSection';
import ServicesPageMeta from '@/components/services/ServicesPageMeta';
import HomepageFAQ from '@/components/home/HomepageFAQ';
import AppointmentCTA from '@/components/home/AppointmentCTA';

const ServicesPage = () => {
  // Use the scroll animation hook
  useScrollAnimation();

  // Filter premium services that have the highest margins
  const premiumServices = services.filter(service => 
    ['aesthetische-zahnheilkunde', 'zahnersatz'].includes(service.id)
  );

  // Standard services
  const standardServices = services.filter(service => 
    !['aesthetische-zahnheilkunde', 'zahnersatz'].includes(service.id)
  );

  return (
    <div className="min-h-screen">
      <ServicesPageMeta />
      
      <Navbar />
      
      {/* Hero Section with dental-specific image */}
      <HeroSection 
        title="Zahnarztpraxis Worsch: Unser Leistungsspektrum für Ihr perfektes Lächeln in Dresden" 
        subtitle="Von innovativer Ästhetik über hochwertige Implantate bis zur umfassenden Vorsorge – entdecken Sie unsere modernen Zahnbehandlungen in Dresden Laubegast"
        backgroundImage="https://images.unsplash.com/photo-1571772996211-2f02c9727629?q=80&w=1740&auto=format&fit=crop"
      />

      {/* Premium Services Section */}
      <PremiumServiceSection premiumServices={premiumServices} />

      {/* Standard Services Section */}
      <StandardServiceSection standardServices={standardServices} />

      {/* Quality Promise Section */}
      <QualityPromiseSection />

      {/* Testimonial Section */}
      <TestimonialSection />

      {/* FAQ Section - same as homepage */}
      <HomepageFAQ />

      {/* Appointment CTA - same as homepage */}
      <AppointmentCTA />

      <Footer />
    </div>
  );
};

export default ServicesPage;
