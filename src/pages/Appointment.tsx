
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ServiceMetaData from '@/components/services/ServiceMetaData';
import AppointmentHero from '@/components/appointment/AppointmentHero';
import BookingOptions from '@/components/appointment/BookingOptions';
import BookingInstructions from '@/components/appointment/BookingInstructions';
import AdditionalInfo from '@/components/appointment/AdditionalInfo';
import CallToActionPhone from '@/components/appointment/CallToActionPhone';
import { AppointmentSchemaData, type DoctolibSchema } from '@/components/appointment/AppointmentSchemaData';
import useScrollAnimation from '@/components/appointment/ScrollAnimation';

const AppointmentPage = () => {
  const baseUrl = "https://zahnarztpraxis-worsch.de";

  // Define schema for structured data with real practice data
  const doctolibSchema: DoctolibSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Zahnarztpraxis Worsch Dresden",
    "description": "Zahnarztpraxis in Dresden mit Online-Terminvereinbarung über Doctolib. Spezialisiert auf Implantologie, ästhetische Zahnheilkunde und moderne Zahnmedizin.",
    "url": "https://zahnarztpraxis-worsch.de/appointment",
    "telephone": "+4935125227099",
    "email": "info@zahnarztpraxis-worsch.de",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Österreicher Str. 38",
      "addressLocality": "Dresden",
      "postalCode": "01279",
      "addressCountry": "DE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 51.0504,
      "longitude": 13.7373
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday"],
        "opens": "07:30",
        "closes": "13:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Tuesday"],
        "opens": "08:00",
        "closes": "12:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Tuesday"],
        "opens": "14:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Wednesday"],
        "opens": "07:30",
        "closes": "12:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Wednesday"],
        "opens": "14:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Thursday"],
        "opens": "07:30",
        "closes": "12:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Thursday"],
        "opens": "14:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Friday"],
        "opens": "07:30",
        "closes": "13:00"
      }
    ],
    "areaServed": {
      "@type": "City",
      "name": "Dresden"
    },
    "medicalSpecialty": [
      "Implantologie",
      "Ästhetische Zahnheilkunde",
      "Zahnerhaltung", 
      "Prophylaxe",
      "Kinderzahnheilkunde"
    ]
  };

  // Animation on scroll effect
  useScrollAnimation();

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Termin vereinbaren | Zahnarztpraxis Worsch Dresden</title>
        <meta name="description" content="Vereinbaren Sie einen Zahnarzttermin bei der Praxis Worsch in Dresden. Schnell und einfach online über Doctolib oder telefonisch erreichbar unter 0351 2522709." />
        <link rel="canonical" href={`${baseUrl}/appointment`} />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Termin vereinbaren | Zahnarztpraxis Worsch Dresden" />
        <meta property="og:description" content="Vereinbaren Sie einen Zahnarzttermin bei der Praxis Worsch in Dresden. Schnell und einfach online über Doctolib oder telefonisch erreichbar unter 0351 2522709." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${baseUrl}/appointment`} />
        <meta property="og:image" content="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=1770&auto=format&fit=crop" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(doctolibSchema)}
        </script>
      </Helmet>
      
      <Navbar />
      
      <AppointmentHero />

      <BookingOptions />

      <section className="pt-8 pb-20 bg-white">
        <div className="container mx-auto px-4">
          <BookingInstructions />
        </div>
      </section>

      <AdditionalInfo />

      <CallToActionPhone />

      <Footer />
    </div>
  );
};

export default AppointmentPage;
