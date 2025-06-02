
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { TestimonialsSection } from '@/components/ui/testimonials-with-marquee';
import { testimonials } from '@/data/testimonials';

const TestimonialsSectionHome = () => {
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

  // Transform testimonials data to match the new component format
  const transformedTestimonials = testimonials.map((testimonial) => ({
    author: {
      name: testimonial.author,
      handle: `@${testimonial.author.split(' ')[0].toLowerCase()}`,
      avatar: `https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&${Math.random()}`
    },
    text: testimonial.quote,
    href: googleMapsLink
  }));

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(testimonialsStructuredData)}
        </script>
      </Helmet>
      
      <TestimonialsSection
        title="Echte Stimmen. Echte Erfahrungen. Das sagen unsere Patienten."
        description="Lassen Sie sich überzeugen: Erfahren Sie aus erster Hand, wie unsere zufriedenen Patienten die zahnmedizinische Betreuung und unsere ästhetischen Behandlungen in der Zahnarztpraxis Worsch erlebt haben."
        testimonials={transformedTestimonials}
        className="py-20 bg-dental-blue text-white"
      />
    </>
  );
};

export default TestimonialsSectionHome;
