import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import AboutPhilosophy from '@/components/about/AboutPhilosophy';
import AboutPraxisGallery from '@/components/about/AboutPraxisGallery';
import HomepageFAQ from '@/components/home/HomepageFAQ';
import AppointmentCTA from '@/components/home/AppointmentCTA';

const About = () => {
  useScrollAnimation();

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Über uns | Zahnarzt Dresden Laubegast - Dr. Worsch & Team</title>
        <meta name="description" content="Lernen Sie Dr. med. dent. Thomas Worsch und das Team der Zahnarztpraxis in Dresden Laubegast kennen. Moderne Zahnmedizin mit persönlicher Betreuung seit Jahren." />
        <link rel="canonical" href="https://zahnarztpraxis-worsch.de/about" />
      </Helmet>
      
      <Navbar />
      
      <HeroSection 
        title="Zahnarztpraxis Worsch Dresden: Ihr vertrauensvoller Partner für moderne Zahnmedizin" 
        subtitle="Lernen Sie Dr. med. dent. Thomas Worsch und unser erfahrenes Praxisteam kennen. Seit Jahren stehen wir für erstklassige zahnmedizinische Versorgung in Dresden-Laubegast."
        backgroundImage="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop"
      />

      <AboutPhilosophy />
      <AboutPraxisGallery />
      
      {/* FAQ Section - same as homepage */}
      <HomepageFAQ />

      {/* Appointment CTA - same as homepage */}
      <AppointmentCTA />

      <Footer />
    </div>
  );
};

export default About;
