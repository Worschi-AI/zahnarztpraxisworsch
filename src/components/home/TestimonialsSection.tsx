
import React from 'react';
import TestimonialCard from '@/components/TestimonialCard';
import { testimonials } from '@/data/testimonials';

const TestimonialsSection = () => {
  // Featured testimonials (top 3)
  const featuredTestimonials = testimonials.slice(0, 3);

  return (
    <section className="py-20 bg-dental-blue text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="mb-4">Was unsere Patienten in Dresden sagen</h2>
          <p className="text-lg max-w-2xl mx-auto opacity-90">
            Erfahren Sie, wie zufriedene Patienten unsere zahnmedizinische Betreuung erlebt haben.
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
  );
};

export default TestimonialsSection;
