
import React from 'react';
import { Helmet } from 'react-helmet-async';
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

  const baseUrl = "https://zahnarztpraxis-worsch.de";

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Zahnarztpraxis Worsch Dresden | Implantologie & Ästhetische Zahnmedizin</title>
        <meta name="description" content="Zahnarztpraxis Worsch in Dresden: Ihr Experte für Implantologie, ästhetische Zahnmedizin und modernste Zahnheilkunde. Vereinbaren Sie jetzt Ihren Wunschtermin!" />
        <link rel="canonical" href={baseUrl} />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Zahnarztpraxis Worsch Dresden | Implantologie & Ästhetische Zahnmedizin" />
        <meta property="og:description" content="Zahnarztpraxis Worsch in Dresden: Ihr Experte für Implantologie, ästhetische Zahnmedizin und modernste Zahnheilkunde. Vereinbaren Sie jetzt Ihren Wunschtermin!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={baseUrl} />
        <meta property="og:image" content="https://images.unsplash.com/photo-1629909615957-f6d7e5bd7a25?q=80&w=1769&auto=format&fit=crop" />
      </Helmet>
      
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
