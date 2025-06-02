
import React from 'react';
import PraxisGallery from '@/components/praxis/PraxisGallery';

const AboutPraxisGallery = () => {
  return (
    <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#edf2fa' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="mb-4 text-dental-blue">Ein Ambiente zum Wohlfühlen: Ihre moderne Zahnarztpraxis in Dresden-Laubegast</h2>
          <p className="text-lg max-w-2xl mx-auto text-dental-gray animate-on-scroll">
            Treten Sie ein und überzeugen Sie sich selbst: Unsere Praxisräume sind hell, modern und mit neuester Technik ausgestattet. Unser größter Wunsch ist es, dass jeder Besuch bei uns so angenehm und entspannt wie möglich für Sie verläuft.
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
