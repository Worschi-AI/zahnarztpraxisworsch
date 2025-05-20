
import React from 'react';
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
  // Define schema for structured data
  const doctolibSchema: DoctolibSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Zahnarztpraxis Worsch Dresden",
    "description": "Zahnarztpraxis in Dresden mit Terminvereinbarung",
    "url": "https://zahnarztpraxis-worsch.de/appointment",
    "telephone": "+4935125227099",
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
        "dayOfWeek": ["Tuesday", "Wednesday", "Thursday"],
        "opens": "07:30",
        "closes": "12:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Tuesday", "Wednesday", "Thursday"],
        "opens": "14:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Friday"],
        "opens": "07:30",
        "closes": "13:00"
      }
    ]
  };

  // Animation on scroll effect
  useScrollAnimation();

  return (
    <div className="min-h-screen">
      <ServiceMetaData 
        title="Termin vereinbaren | Zahnarztpraxis Worsch Dresden"
        description="Vereinbaren Sie einen Zahnarzttermin bei der Praxis Worsch in Dresden. Schnell und einfach online über Doctolib oder telefonisch erreichbar unter 0351 2522709."
        schema={doctolibSchema}
      />
      
      <Navbar />
      
      <AppointmentHero />

      <BookingOptions />

      <section className="py-20 bg-white">
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
