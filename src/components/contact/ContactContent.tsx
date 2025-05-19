
import React from 'react';
import ContactInfo from '@/components/contact/ContactInfo';
import LocationMap from '@/components/contact/LocationMap';

const ContactContent = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12">
            <ContactInfo />
            <LocationMap />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactContent;
