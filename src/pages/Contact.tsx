
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
      
      {/* Hero Section with dental-specific image */}
      <HeroSection 
        title="Kontakt & Anfahrt" 
        subtitle="So erreichen Sie unsere Praxis" 
        backgroundImage="https://images.unsplash.com/photo-1629909615957-f6d7e5bd7a25?q=80&w=1769&auto=format&fit=crop"
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
