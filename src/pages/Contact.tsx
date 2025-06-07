import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import ContactContent from '@/components/contact/ContactContent';
import LocationMap from '@/components/contact/LocationMap';
import HomepageFAQ from '@/components/home/HomepageFAQ';
import AppointmentCTA from '@/components/home/AppointmentCTA';

const Contact = () => {
  useScrollAnimation();

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Kontakt & Anfahrt | Zahnarzt Dresden Laubegast - Praxis Worsch</title>
        <meta name="description" content="Kontakt zur Zahnarztpraxis Worsch in Dresden Laubegast: Österreicher Str. 38, Tel: 0351 2522709. Öffnungszeiten, Anfahrt und Online-Terminbuchung." />
        <link rel="canonical" href="https://zahnarztpraxis-worsch.de/contact" />
      </Helmet>
      
      <Navbar />
      
      <HeroSection 
        title="Kontakt & Anfahrt zur Zahnarztpraxis Worsch in Dresden-Laubegast" 
        subtitle="Besuchen Sie uns in der Österreicher Str. 38 oder kontaktieren Sie uns telefonisch. Wir freuen uns auf Ihren Besuch in unserer modernen Zahnarztpraxis."
        backgroundImage="https://images.unsplash.com/photo-1629909615184-74d4dac4754e?q=80&w=2069&auto=format&fit=crop"
      />

      <ContactContent />
      <LocationMap />
      
      {/* FAQ Section - same as homepage */}
      <HomepageFAQ />

      {/* Appointment CTA - same as homepage */}
      <AppointmentCTA />

      <Footer />
    </div>
  );
};

export default Contact;
