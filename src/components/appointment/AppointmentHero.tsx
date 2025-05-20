
import React from 'react';
import HeroSection from '@/components/HeroSection';
import { PhoneCall } from 'lucide-react';

const AppointmentHero = () => {
  return (
    <HeroSection 
      title="Termin vereinbaren" 
      subtitle="Einfach und bequem online oder telefonisch einen Termin in unserer Praxis vereinbaren" 
      backgroundImage="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=3000&auto=format&fit=crop"
      rightButtonText="Termin telefonisch buchen"
      rightButtonLink="tel:+4935125227099"
      rightButtonIcon={<PhoneCall className="mr-2 h-5 w-5" />}
    />
  );
};

export default AppointmentHero;
