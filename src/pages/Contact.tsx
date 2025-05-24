
import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ContactContent from '@/components/contact/ContactContent';
import ContactCTA from '@/components/contact/ContactCTA';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const ContactPage = () => {
  // Use the custom hook for animation
  useScrollAnimation();

  const baseUrl = "https://zahnarztpraxis-worsch.de";

  // Create structured data for the dental practice with real data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": "Zahnarztpraxis Worsch Dresden",
    "image": "https://zahnarztpraxis-worsch.de/images/praxis-exterior.jpg",
    "url": "https://zahnarztpraxis-worsch.de",
    "telephone": "+4935125227099",
    "email": "info@zahnarztpraxis-worsch.de",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Österreicher Str. 38",
      "addressLocality": "Dresden",
      "postalCode": "01279",
      "addressRegion": "Sachsen",
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
    "priceRange": "€€",
    "description": "Zahnarztpraxis Worsch in Dresden: Ihr Spezialist für Implantologie, ästhetische Zahnheilkunde und hochwertige Zahnmedizin. Österreicher Str. 38, 01279 Dresden.",
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

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Kontakt & Anfahrt | Zahnarztpraxis Worsch Dresden | Termin</title>
        <meta name="description" content="Kontaktieren Sie die Zahnarztpraxis Worsch in Dresden. Hier finden Sie Adresse, Telefon, Öffnungszeiten und Anfahrtsbeschreibung. Wir freuen uns auf Sie!" />
        <link rel="canonical" href={`${baseUrl}/contact`} />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Kontakt & Anfahrt | Zahnarztpraxis Worsch Dresden" />
        <meta property="og:description" content="Kontaktieren Sie die Zahnarztpraxis Worsch in Dresden. Hier finden Sie Adresse, Telefon, Öffnungszeiten und Anfahrtsbeschreibung." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${baseUrl}/contact`} />
        <meta property="og:image" content="https://images.unsplash.com/photo-1629909615957-f6d7e5bd7a25?q=80&w=1769&auto=format&fit=crop" />
        
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <Navbar />
      
      {/* Hero Section with dental-specific image */}
      <HeroSection 
        title="Kontakt & Anfahrt" 
        subtitle="So erreichen Sie unsere Praxis in Dresden einfach und schnell" 
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
