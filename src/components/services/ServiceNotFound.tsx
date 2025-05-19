
import React from 'react';
import { Link } from 'react-router-dom';

const ServiceNotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-2xl mb-4">Leistung nicht gefunden</h2>
      <p className="mb-6">Die angeforderte Leistung existiert nicht.</p>
      <Link to="/services" className="text-dental-blue hover:underline">
        Zurück zur Leistungsübersicht
      </Link>
    </div>
  );
};

export default ServiceNotFound;
