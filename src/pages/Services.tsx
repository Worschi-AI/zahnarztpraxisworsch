
import React from 'react';
import { Helmet } from 'react-helmet-async';
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

  const baseUrl = "https://zahnarztpraxis-worsch.de";

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
      <Helmet>
        <title>Leistungen Zahnarztpraxis Worsch Dresden | Implantate, Ästhetik & Mehr</title>
        <meta name="description" content="Entdecken Sie das breite Leistungsspektrum der Zahnarztpraxis Worsch in Dresden: Von Implantologie über ästhetische Zahnmedizin bis zur Prophylaxe. Ihr Partner für gesunde Zähne." />
        <meta name="keywords" content="Zahnarzt Dresden, Zahnimplantate Dresden, Ästhetische Zahnheilkunde, Prophylaxe, Zahnerhaltung, Parodontologie, Kinderzahnheilkunde" />
        <link rel="canonical" href={`${baseUrl}/services`} />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Leistungen Zahnarztpraxis Worsch Dresden | Implantate, Ästhetik & Mehr" />
        <meta property="og:description" content="Entdecken Sie das breite Leistungsspektrum der Zahnarztpraxis Worsch in Dresden: Von Implantologie über ästhetische Zahnmedizin bis zur Prophylaxe." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${baseUrl}/services`} />
        <meta property="og:image" content="https://images.unsplash.com/photo-1571772996211-2f02c9727629?q=80&w=1740&auto=format&fit=crop" />
      </Helmet>
      
      <Navbar />
      
      {/* Hero Section with dental-specific image */}
      <HeroSection 
        title="Unser Leistungsspektrum für Ihre Zahngesundheit" 
        subtitle="Von der Prophylaxe bis zur Implantologie - Umfassende zahnmedizinische Versorgung für Ihr strahlendes Lächeln"
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

      {/* Call to Action Section */}
      <CallToActionSection />

      {/* FAQ Section */}
      <FAQSection />

      <Footer />
    </div>
  );
};

export default ServicesPage;
