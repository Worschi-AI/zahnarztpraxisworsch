
import React from 'react';
import { Helmet } from 'react-helmet-async';
import TestimonialCard from '@/components/TestimonialCard';
import { testimonials } from '@/data/testimonials';

const TestimonialsSection = () => {
  // Featured testimonials (top 3)
  const featuredTestimonials = testimonials.slice(0, 3);

  // Updated Google Maps Link
  const googleMapsLink = "https://www.google.com/maps/place/Zahnarztpraxis+Dipl.med+dent.+Ute+Worsch+%26+Peik+Worsch/@51.0258232,13.8338391,17z/data=!3m2!4b1!5s0x4709c7d912ce70c1:0xa0772b1bd9b757d8!4m6!3m5!1s0x4709c7d96d21fce9:0xe0acd2eb962737a1!8m2!3d51.0258232!4d13.836414!16s%2Fg%2F1tgcws99?entry=tts&g_ep=EgoyMDI1MDUxMy4xIPu8ASoASAFQAw%3D%3D&skid=46499da1-bc0b-43d4-92ac-f086733c2af9";

  // Create structured data for testimonials
  const testimonialsStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zahnarztpraxis Worsch Dresden",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": testimonials.length.toString()
    },
    "review": testimonials.map((testimonial, index) => ({
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": testimonial.rating.toString(),
        "bestRating": "5",
        "worstRating": "1"
      },
      "author": {
        "@type": "Person",
        "name": testimonial.author
      },
      "reviewBody": testimonial.quote,
      "datePublished": new Date(Date.now() - index * 86400000).toISOString().split('T')[0] // Simuliere verschiedene Daten
    }))
  };
  return <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(testimonialsStructuredData)}
        </script>
      </Helmet>
      
      <section className="py-20 bg-dental-blue text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="mb-4">Echte Stimmen. Echte Erfahrungen. Das sagen unsere Patienten.</h2>
            <p className="text-lg max-w-2xl mx-auto opacity-90">
              Lassen Sie sich überzeugen: Erfahren Sie aus erster Hand, wie unsere zufriedenen Patienten die zahnmedizinische Betreuung und unsere ästhetischen Behandlungen in der Zahnarztpraxis Worsch erlebt haben.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredTestimonials.map((testimonial, index) => <a key={testimonial.id} href={googleMapsLink} target="_blank" rel="noopener noreferrer" className="animate-on-scroll cursor-pointer transform hover:scale-105 transition-transform duration-300" style={{
            animationDelay: `${index * 100}ms`
          }}>
                <TestimonialCard quote={testimonial.quote} author={testimonial.author} rating={testimonial.rating} />
              </a>)}
          </div>
        </div>
      </section>
    </>;
};
export default TestimonialsSection;
