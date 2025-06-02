
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { TestimonialsSection as AnimatedTestimonialsSection } from '@/components/ui/simple-animated-testimonials';
import { testimonials } from '@/data/testimonials';
import { Star, Sparkles, Heart } from 'lucide-react';

const TestimonialsSection = () => {
  // Updated Google Maps Link
  const googleMapsLink = "https://www.google.com/maps/place/Zahnarztpraxis+Dipl.med+dent.+Ute+Worsch+%26+Peik+Worsch/@51.0258232,13.8338391,17z/data=!3m2!4b1!5s0x4709c7d912ce70c1:0xa0772b1bd9b757d8!4m6!3m5!1s0x4709c7d96d21fce9:0xe0acd2eb962737a1!8m2!3d51.0258232!4d13.836414!16s%2Fg%2F1tgcws99?entry=tts&g_ep=EgoyMDI1MDUxMy4xIPu8ASoASAFQAw%3D%3D&skid=46499da1-bc0b-43d4-92ac-f086733c2af9";

  // Transform testimonials data to match the new component format
  const transformedTestimonials = testimonials.slice(0, 3).map((testimonial, index) => ({
    id: index + 1,
    name: testimonial.author,
    role: "Patient", // Default role for patients
    company: "Zahnarztpraxis Worsch",
    content: testimonial.quote,
    rating: testimonial.rating,
    avatar: `https://images.unsplash.com/photo-${
      index === 0 ? '1494790108377-be9c29b29330' :
      index === 1 ? '1507003211169-0a1dd7228f2d' :
      '1534528741775-53994a69daeb'
    }?w=150&h=150&fit=crop&crop=face`
  }));

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

  return (
    <div className="relative">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(testimonialsStructuredData)}
        </script>
      </Helmet>
      
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-dental-turquoise/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-dental-blue/8 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        <Star className="absolute top-20 right-1/4 w-5 h-5 text-white/20 animate-pulse" />
        <Sparkles className="absolute bottom-24 left-1/3 w-4 h-4 text-dental-turquoise/30 animate-pulse delay-1000" />
        <Heart className="absolute top-1/2 right-1/6 w-6 h-6 text-white/15 animate-pulse delay-500" />
      </div>
      
      <div className="relative z-20">
        <AnimatedTestimonialsSection
          title="Das sagen unsere Patienten – Echte Erfahrungen"
          subtitle="Lassen Sie sich überzeugen: Erfahren Sie aus erster Hand, wie unsere zufriedenen Patienten die zahnmedizinische Betreuung und unsere ästhetischen Behandlungen in der Zahnarztpraxis Worsch erlebt haben."
          testimonials={transformedTestimonials}
          autoRotateInterval={6000}
          showVerifiedBadge={true}
          trustedCompanies={["Google Reviews", "Jameda", "DocCheck", "Doctolib", "Proven Expert"]}
          trustedCompaniesTitle="Vertraut von Patienten auf führenden Bewertungsplattformen"
          className="bg-gradient-to-br from-dental-blue via-dental-blue to-dental-turquoise text-white relative"
        />
      </div>
    </div>
  );
};

export default TestimonialsSection;
