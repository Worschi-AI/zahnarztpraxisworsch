
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ContactCTA = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-dental-turquoise to-dental-blue text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto animate-on-scroll">
          <h2 className="mb-4">Wir freuen uns auf Ihren Besuch!</h2>
          <p className="text-lg mb-8">
            Vereinbaren Sie einen Termin in unserer Praxis und überzeugen Sie sich 
            selbst von unserer modernen Ausstattung und unserem freundlichen Team.
          </p>
          <Button asChild size="lg" className="bg-white text-dental-blue hover:bg-dental-beige">
            <Link to="/appointment">Termin vereinbaren</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
