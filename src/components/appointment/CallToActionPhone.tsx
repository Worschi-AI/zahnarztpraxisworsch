
import React from 'react';
import PhoneButton from '@/components/PhoneButton';

const CallToActionPhone = () => {
  return (
    <section className="py-16 bg-dental-blue text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto animate-on-scroll">
          <h2 className="mb-4">Rufen Sie uns an</h2>
          <p className="text-lg mb-8">
            Sie können Ihren <strong>Zahnarzttermin in Dresden</strong> telefonisch vereinbaren.
          </p>
          <PhoneButton 
            size="lg" 
            className="bg-white text-dental-blue hover:bg-dental-beige transition-all hover:scale-105"
            buttonText="0351 2522709"
            showIcon={false}
          />
        </div>
      </div>
    </section>
  );
};

export default CallToActionPhone;
