
import React from 'react';
import { Button } from '@/components/ui/button';

const CallToActionPhone = () => {
  return (
    <section className="py-16 bg-dental-blue text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto animate-on-scroll">
          <h2 className="mb-4">Rufen Sie uns an</h2>
          <p className="text-lg mb-8">
            Sie können Ihren <strong>Zahnarzttermin in Dresden</strong> telefonisch vereinbaren.
          </p>
          <Button asChild size="lg" className="bg-white text-dental-blue hover:bg-dental-beige transition-all hover:scale-105">
            <a href="tel:+4935125227099" className="flex items-center justify-center gap-2 text-lg font-medium">
              <span className="underline">0351 2522709</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToActionPhone;
