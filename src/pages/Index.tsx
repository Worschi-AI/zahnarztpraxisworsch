
import React from 'react';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import HeroIntroSection from '@/components/home/HeroIntroSection';
import PatientReviewTeaser from '@/components/home/PatientReviewTeaser';
import FeaturedServices from '@/components/home/FeaturedServices';
import TeamPreview from '@/components/home/TeamPreview';
import QualityPromiseSection from '@/components/services/QualityPromiseSection';
import StandardServices from '@/components/home/StandardServices';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import AppointmentCTA from '@/components/home/AppointmentCTA';

const Index = () => {
  // Use the scroll animation hook
  useScrollAnimation();

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section with dental-specific image */}
      <HeroSection 
        title="Ihr Experte für Implantologie & Ästhetische Zahnmedizin" 
        subtitle="Modernste Zahnheilkunde und individuelle Betreuung für Ihr strahlendes Lächeln" 
        backgroundImage="https://images.unsplash.com/photo-1629909615957-f6d7e5bd7a25?q=80&w=1769&auto=format&fit=crop"
        ctaText="Jetzt Wunschtermin finden"
      />

      {/* Intro Section */}
      <HeroIntroSection />

      {/* Patient Reviews Teaser */}
      <PatientReviewTeaser />

      {/* Premium Services Section */}
      <FeaturedServices />

      {/* Team Teaser */}
      <TeamPreview />

      {/* Quality Promise Section */}
      <QualityPromiseSection />

      {/* Services Section - Standard Services */}
      <StandardServices />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Appointment CTA */}
      <AppointmentCTA />

      <Footer />
    </div>
  );
};

export default Index;
