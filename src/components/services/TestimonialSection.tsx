
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

const TestimonialSection = () => {
  // Structured data for the specific testimonial
  const testimonialStructuredData = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "Dentist",
      "name": "Zahnarztpraxis Worsch Dresden",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Österreicher Str. 38",
        "addressLocality": "Dresden",
        "postalCode": "01279",
        "addressCountry": "DE"
      }
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5",
      "worstRating": "1"
    },
    "author": {
      "@type": "Person", 
      "name": "Maria S."
    },
    "reviewBody": "Ich bin begeistert von meinen neuen Veneers! Das Ergebnis übertrifft meine Erwartungen und das Team hat mich perfekt beraten. Der Preis war es absolut wert - mein Lächeln sieht nun natürlich schön aus.",
    "datePublished": "2024-01-15"
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(testimonialStructuredData)}
        </script>
      </Helmet>
      
      <section className="py-16 bg-dental-beige">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto animate-on-scroll">
            <h2 className="text-2xl font-medium mb-8 text-center text-dental-blue">Das sagen unsere Patienten</h2>
            
            <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 rounded-full bg-dental-turquoise flex items-center justify-center text-white font-bold">
                    MS
                  </div>
                </div>
                <div>
                  <div className="flex items-center mb-2">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  </div>
                  <p className="italic text-dental-gray mb-2">
                    "Ich bin begeistert von meinen neuen Veneers! Das Ergebnis übertrifft meine Erwartungen und das Team hat mich perfekt beraten.
                    Der Preis war es absolut wert - mein Lächeln sieht nun natürlich schön aus."
                  </p>
                  <p className="text-sm text-dental-gray">- Maria S., Veneers-Behandlung</p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <Button asChild variant="outline" className="border-dental-blue text-dental-blue hover:bg-dental-blue hover:text-white">
                <Link to="/about#testimonials">Weitere Erfahrungsberichte</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialSection;
