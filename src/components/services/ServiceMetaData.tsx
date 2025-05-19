
import React from 'react';
import { Helmet } from 'react-helmet';

interface ServiceMetaDataProps {
  title: string;
  description: string;
}

const ServiceMetaData: React.FC<ServiceMetaDataProps> = ({ title, description }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default ServiceMetaData;
