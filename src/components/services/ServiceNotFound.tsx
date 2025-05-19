
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const ServiceNotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-2xl mb-4">Leistung nicht gefunden</h2>
      <p className="mb-6">Die angeforderte Leistung existiert nicht.</p>
      <Button asChild>
        <Link to="/services" className="text-white">
          Zurück zur Leistungsübersicht
        </Link>
      </Button>
    </div>
  );
};

export default ServiceNotFound;
