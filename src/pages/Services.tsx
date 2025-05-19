
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
import CallToActionSection from '@/components/services/CallToActionSection';
import FAQSection from '@/components/services/FAQSection';

const ServicesPage = () => {
  // Use the scroll animation hook
  useScrollAnimation();

  // Filter premium services that have the highest margins
  const premiumServices = services.filter(service => 
    ['implantologie', 'aesthetische-zahnheilkunde', 'zahnersatz'].includes(service.id)
  );

  // Standard services
  const standardServices = services.filter(service => 
    !['implantologie', 'aesthetische-zahnheilkunde', 'zahnersatz'].includes(service.id)
  );

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section - Use solid color background instead of image */}
      <HeroSection 
        title="Hochwertige Zahnmedizin für Ihr strahlendes Lächeln" 
        subtitle="Unsere Premium-Leistungen für höchste Ansprüche - Jetzt Termin vereinbaren!" 
        backgroundImage="/lovable-uploads/2321cb5b-9485-4578-852b-b8525853d92e.png"
      />

      {/* Premium Services Section */}
      <PremiumServiceSection premiumServices={premiumServices} />

      {/* Standard Services Section */}
      <StandardServiceSection standardServices={standardServices} />

      {/* Quality Promise Section */}
      <QualityPromiseSection />

      {/* Testimonial Section */}
      <TestimonialSection />

      {/* Call to Action Section */}
      <CallToActionSection />

      {/* FAQ Section */}
      <FAQSection />

      <Footer />
    </div>
  );
};

export default ServicesPage;
