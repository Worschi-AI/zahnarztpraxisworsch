
import React from 'react';
import PraxisGallery from '@/components/praxis/PraxisGallery';

const AboutPraxisGallery = () => {
  return (
    <section className="py-20 bg-dental-beige">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="mb-4 text-dental-blue">Ein Ambiente zum Wohlfühlen: Unsere moderne Zahnarztpraxis in Dresden Laubegast</h2>
          <p className="text-lg max-w-2xl mx-auto text-dental-gray animate-on-scroll">
            Treten Sie ein und überzeugen Sie sich selbst: Unsere Praxisräume sind hell, modern und mit neuester Technik ausgestattet. Wir möchten, dass Ihr Besuch bei uns so angenehm wie möglich verläuft.
          </p>
        </div>
        
        <div className="animate-on-scroll">
          <PraxisGallery />
        </div>
      </div>
    </section>
  );
};

export default AboutPraxisGallery;
