
import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSection from '@/components/HeroSection';
import HeroIntroSection from '@/components/home/HeroIntroSection';
import FeaturedServices from '@/components/home/FeaturedServices';
import StandardServices from '@/components/home/StandardServices';
import TeamPreview from '@/components/home/TeamPreview';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import StatisticsSection from '@/components/home/StatisticsSection';
import AppointmentCTA from '@/components/home/AppointmentCTA';
import HomepageFAQ from '@/components/home/HomepageFAQ';

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": "Zahnarztpraxis Worsch Dresden",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Donathstraße 12",
      "addressLocality": "Dresden",
      "addressRegion": "Sachsen",
      "postalCode": "01277",
      "addressCountry": "DE"
    },
    "telephone": "+49 351 31406060",
    "url": "https://zahnarztpraxis-worsch.de",
    "description": "Moderne Zahnmedizin und ästhetische Behandlungen in Dresden-Laubegast. Spezialisiert auf Implantologie, ästhetische Zahnheilkunde und digitale Diagnostik.",
    "priceRange": "€€",
    "openingHours": [
      "Mo 08:00-18:00",
      "Tu 08:00-18:00", 
      "We 08:00-18:00",
      "Th 08:00-18:00",
      "Fr 08:00-15:00"
    ],
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "51.0258232",
      "longitude": "13.836414"
    }
  };

  return (
    <>
      <Helmet>
        <title>Ihr Zahnarzt in Dresden-Laubegast: Moderne Zahnmedizin & ästhetische Behandlungen</title>
        <meta name="description" content="Herzlich willkommen bei Ihrem Zahnarzt in Dresden-Laubegast! Die Zahnarztpraxis Worsch verbindet moderne Zahnheilkunde mit persönlicher Betreuung in entspannter Atmosphäre." />
        <meta name="keywords" content="Zahnarzt Dresden, Zahnarzt Dresden-Laubegast, Zahnheilkunde Dresden, Implantologie Dresden, ästhetische Zahnmedizin Dresden, Bleaching Dresden, Invisalign Dresden" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <HeroSection />
      <HeroIntroSection />
      <FeaturedServices />
      <StandardServices />
      <TeamPreview />
      <TestimonialsSection />
      <StatisticsSection />
      <AppointmentCTA />
      <HomepageFAQ />
    </>
  );
};

export default Index;
