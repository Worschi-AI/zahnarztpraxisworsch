
import React from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ContactContent from '@/components/contact/ContactContent';
import ContactCTA from '@/components/contact/ContactCTA';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const ContactPage = () => {
  // Use the custom hook for animation
  useScrollAnimation();

  // Create structured data for the dental practice
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": "Zahnarztpraxis Worsch Dresden",
    "image": "https://images.unsplash.com/photo-1629909615957-f6d7e5bd7a25?q=80&w=1769&auto=format&fit=crop",
    "url": "https://www.zahnarzt-worsch.de",
    "telephone": "+4935144444444", // Replace with real number
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Bautzner Straße 123", // Replace with real address
      "addressLocality": "Dresden",
      "postalCode": "01099", // Replace with real postal code
      "addressCountry": "DE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 51.0599, // Replace with actual coordinates
      "longitude": 13.8207 // Replace with actual coordinates
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Friday",
        "opens": "08:00",
        "closes": "13:00"
      }
    ],
    "priceRange": "€€",
    "description": "Zahnarztpraxis Worsch in Dresden: Ihr Spezialist für Implantologie, ästhetische Zahnheilkunde und hochwertige Zahnmedizin."
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Kontakt & Anfahrt | Zahnarztpraxis Worsch Dresden | Termin</title>
        <meta name="description" content="Kontaktieren Sie die Zahnarztpraxis Worsch in Dresden. Hier finden Sie Adresse, Telefon, Öffnungszeiten und Anfahrtsbeschreibung. Wir freuen uns auf Sie!" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <Navbar />
      
      {/* Hero Section with dental-specific image */}
      <HeroSection 
        title="Kontakt & Anfahrt zu Ihrer Zahnarztpraxis Worsch in Dresden" 
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
