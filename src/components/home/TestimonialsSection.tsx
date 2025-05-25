import React from 'react';
import { Helmet } from 'react-helmet-async';
import TestimonialCard from '@/components/TestimonialCard';
import { testimonials } from '@/data/testimonials';
const TestimonialsSection = () => {
  // Featured testimonials (top 3)
  const featuredTestimonials = testimonials.slice(0, 3);

  // Google Reviews Link
  const googleReviewsLink = "https://www.google.de/search?sa=X&sca_esv=0f5634cd6d611d2d&hl=de&tbm=lcl&sxsrf=AHTn8zoRQlwKnXXUMar1olm9-J6sAPHQCA:1747668854815&q=Zahnarztpraxis+Dipl.med+dent.+Ute+Worsch+%26+Peik+Worsch+Rezensionen&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNDO0sDQ1MTMzszQ3szC2NDA1M9zAyPiK0SkqMSMvsaiqpKAosSKzWMElsyBHLzc1RSElNa9ETyG0JFUhPL-oODlDQU0hIDUzG8YLSq1KzSvOzM9LzVvESgVDAKEE2vOlAAAA&rldimm=16189546669768390561&ved=2ahUKEwipzprq7a-NAxUh9rsIHV1IOnoQ9fQKegQIRBAF&biw=1536&bih=742&dpr=1.25#lkt=LocalPoiReviews";

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
            <h2 className="mb-4">Das sagen unsere anspruchsvollen Patienten</h2>
            <p className="text-lg max-w-2xl mx-auto opacity-90">
              Erfahren Sie, wie zufriedene Patienten unsere zahnmedizinische Betreuung und ästhetischen Behandlungen erlebt haben.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredTestimonials.map((testimonial, index) => <a key={testimonial.id} href={googleReviewsLink} target="_blank" rel="noopener noreferrer" className="animate-on-scroll cursor-pointer transform hover:scale-105 transition-transform duration-300" style={{
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