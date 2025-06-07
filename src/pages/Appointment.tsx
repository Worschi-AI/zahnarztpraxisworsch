
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AppointmentHero from '@/components/appointment/AppointmentHero';
import BookingOptions from '@/components/appointment/BookingOptions';
import BookingInstructions from '@/components/appointment/BookingInstructions';
import AdditionalInfo from '@/components/appointment/AdditionalInfo';
import { AppointmentSchemaData } from '@/components/appointment/AppointmentSchemaData';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import HomepageFAQ from '@/components/home/HomepageFAQ';
import AppointmentCTA from '@/components/home/AppointmentCTA';

const Appointment = () => {
  useScrollAnimation();

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Termin buchen | Zahnarzt Dresden Laubegast - Praxis Worsch</title>
        <meta name="description" content="Buchen Sie Ihren Zahnarzttermin in Dresden Laubegast online über Doctolib oder telefonisch. Zahnarztpraxis Worsch - Ihr moderner Zahnarzt für ästhetische Zahnmedizin." />
        <link rel="canonical" href="https://zahnarztpraxis-worsch.de/appointment" />
      </Helmet>
      
      <AppointmentSchemaData />
      <Navbar />
      <AppointmentHero />
      <BookingOptions />
      <BookingInstructions />
      <AdditionalInfo />
      
      {/* FAQ Section - same as homepage */}
      <HomepageFAQ />
      
      {/* CTA - same as homepage */}
      <AppointmentCTA />
      
      <Footer />
    </div>
  );
};

export default Appointment;
