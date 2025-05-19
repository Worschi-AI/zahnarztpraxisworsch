
import React from 'react';

interface ServiceContentDefaultProps {
  title: string;
  fullDescription: string;
  procedure?: string;
}

const ServiceContentDefault: React.FC<ServiceContentDefaultProps> = ({
  title,
  fullDescription,
  procedure
}) => {
  return (
    <>
      <h2 className="mb-6 text-dental-blue">Über {title}</h2>
      <div className="prose prose-lg max-w-none text-dental-gray">
        <p>{fullDescription}</p>
        
        {procedure && (
          <>
            <h3 className="text-2xl font-medium mt-8 mb-4 text-dental-blue">Ablauf der Behandlung</h3>
            <p>{procedure}</p>
          </>
        )}
      </div>
    </>
  );
};

export default ServiceContentDefault;
