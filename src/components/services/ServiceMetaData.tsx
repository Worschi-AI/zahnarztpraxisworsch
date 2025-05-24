
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface ServiceMetaDataProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogUrl?: string;
  schema?: Record<string, any>; // For structured data
}

const ServiceMetaData: React.FC<ServiceMetaDataProps> = ({ 
  title, 
  description, 
  canonicalUrl,
  ogImage = "https://images.unsplash.com/photo-1629909615957-f6d7e5bd7a25?q=80&w=1769&auto=format&fit=crop",
  ogUrl,
  schema 
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Open Graph tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      {ogUrl && <meta property="og:url" content={ogUrl} />}
      <meta property="og:image" content={ogImage} />
      
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default ServiceMetaData;
