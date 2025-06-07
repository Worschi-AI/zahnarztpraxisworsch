
import React from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import ImplantologieHero from '@/components/implantologie/ImplantologieHero';
import ImplantologieVorteile from '@/components/implantologie/ImplantologieVorteile';
import ImplantologieProzess from '@/components/implantologie/ImplantologieProzess';
import ImplantologiePreise from '@/components/implantologie/ImplantologiePreise';
import ImplantologieExpertise from '@/components/implantologie/ImplantologieExpertise';
import ImplantologieFAQ from '@/components/implantologie/ImplantologieFAQ';
import ImplantologieTestimonial from '@/components/implantologie/ImplantologieTestimonial';
import ImplantologieCTA from '@/components/implantologie/ImplantologieCTA';
import ImplantologieMeta from '@/components/implantologie/ImplantologieMeta';

const Implantologie = () => {
  useScrollAnimation();

  return (
    <div className="min-h-screen">
      <ImplantologieMeta />
      <Navbar />
      <ImplantologieHero />
      <ImplantologieVorteile />
      <ImplantologieProzess />
      <ImplantologiePreise />
      <ImplantologieExpertise />
      <ImplantologieTestimonial />
      <ImplantologieFAQ />
      <ImplantologieCTA />
      <Footer />
    </div>
  );
};

export default Implantologie;
