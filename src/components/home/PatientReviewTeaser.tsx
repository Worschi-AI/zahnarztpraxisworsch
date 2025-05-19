
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

const PatientReviewTeaser = () => {
  return (
    <section className="py-8 bg-dental-beige">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg p-5 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6 animate-on-scroll">
          <div className="flex items-center">
            <Star className="h-8 w-8 text-yellow-400 fill-yellow-400 mr-3" aria-hidden="true" />
            <div>
              <p className="font-bold text-dental-blue text-lg mb-1">Über 95% zufriedene Patienten</p>
              <p className="text-dental-gray">Unsere Patienten in Dresden vertrauen uns seit Jahren.</p>
            </div>
          </div>
          <Button asChild variant="outline" className="border-dental-blue text-dental-blue hover:bg-dental-blue hover:text-white whitespace-nowrap">
            <Link to="/about#testimonials">Erfahrungsberichte lesen</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PatientReviewTeaser;
