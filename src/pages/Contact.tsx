
import React, { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ContactContent from '@/components/contact/ContactContent';
import ContactCTA from '@/components/contact/ContactCTA';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const ContactPage = () => {
  // Use the custom hook for animation
  useScrollAnimation();

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection 
        title="Kontakt & Anfahrt" 
        subtitle="So erreichen Sie unsere Praxis" 
        backgroundImage="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=1770&auto=format&fit=crop"
      />

      {/* Contact Content */}
      <ContactContent />

      {/* CTA Section */}
      <ContactCTA />

      <Footer />
    </div>
  );
};

export default ContactPage;
