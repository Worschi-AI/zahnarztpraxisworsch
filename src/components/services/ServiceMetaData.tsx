
import React from 'react';
import { Helmet } from 'react-helmet';

interface ServiceMetaDataProps {
  title: string;
  description: string;
  schema?: Record<string, any>; // For structured data
}

const ServiceMetaData: React.FC<ServiceMetaDataProps> = ({ title, description, schema }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default ServiceMetaData;
