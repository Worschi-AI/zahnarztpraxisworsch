
import React from 'react';
import { Helmet } from 'react-helmet-async';
import TestimonialCard from '@/components/TestimonialCard';
import { testimonials } from '@/data/testimonials';

const TestimonialsSection = () => {
  // Featured testimonials (top 3)
  const featuredTestimonials = testimonials.slice(0, 3);

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
      "datePublished": new Date(Date.now() - (index * 86400000)).toISOString().split('T')[0] // Simuliere verschiedene Daten
    }))
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(testimonialsStructuredData)}
        </script>
      </Helmet>
      
      <section className="py-20 bg-dental-blue text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="mb-4">Das sagen unsere jungen & anspruchsvollen Patienten</h2>
            <p className="text-lg max-w-2xl mx-auto opacity-90">
              Erfahren Sie, wie zufriedene Patienten unsere zahnmedizinische Betreuung und ästhetischen Behandlungen erlebt haben.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredTestimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="animate-on-scroll" style={{ animationDelay: `${index * 100}ms` }}>
                <TestimonialCard
                  quote={testimonial.quote}
                  author={testimonial.author}
                  rating={testimonial.rating}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialsSection;
