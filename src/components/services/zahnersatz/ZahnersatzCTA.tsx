
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const ZahnersatzCTA = () => {
  return (
    <div className="mt-12 text-center px-4">
      <Button asChild size="lg" className="bg-dental-turquoise hover:bg-dental-blue w-full max-w-md text-sm sm:text-base px-4 py-3 leading-tight">
        <Link to="/appointment">
          <span className="block sm:inline">Persönliche Beratung zu</span>
          <span className="block sm:inline sm:ml-1">Ihrem optimalen Zahnersatz</span>
        </Link>
      </Button>
    </div>
  );
};

export default ZahnersatzCTA;
