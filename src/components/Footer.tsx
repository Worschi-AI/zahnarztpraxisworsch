
import React from 'react';
import PracticeInfo from './footer/PracticeInfo';
import OpeningHours from './footer/OpeningHours';
import FooterNavigation from './footer/FooterNavigation';
import Copyright from './footer/Copyright';

const Footer = () => {
  return (
    <footer className="bg-dental-blue text-white py-12 pb-24 md:pb-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Practice Info */}
          <PracticeInfo />

          {/* Öffnungszeiten */}
          <OpeningHours />

          {/* Navigation */}
          <FooterNavigation />
        </div>

        <Copyright />
      </div>
    </footer>
  );
};

export default Footer;
