
import React from 'react';

interface DoctolibSchema {
  "@context": string;
  "@type": string;
  name: string;
  description: string;
  url: string;
  telephone: string;
  address: {
    "@type": string;
    streetAddress: string;
    addressLocality: string;
    postalCode: string;
    addressCountry: string;
  };
  geo: {
    "@type": string;
    latitude: number;
    longitude: number;
  };
  openingHoursSpecification: Array<{
    "@type": string;
    dayOfWeek: string[];
    opens: string;
    closes: string;
  }>;
}

const AppointmentSchemaData: React.FC = () => {
  const doctolibSchema: DoctolibSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Zahnarztpraxis Worsch Dresden",
    "description": "Zahnarztpraxis in Dresden mit Terminvereinbarung",
    "url": "https://zahnarztpraxis-worsch.de/appointment",
    "telephone": "+4935125227099",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Österreicher Str. 38",
      "addressLocality": "Dresden",
      "postalCode": "01279",
      "addressCountry": "DE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 51.0504,
      "longitude": 13.7373
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday"],
        "opens": "07:30",
        "closes": "13:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Tuesday", "Wednesday", "Thursday"],
        "opens": "07:30",
        "closes": "12:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Tuesday", "Wednesday", "Thursday"],
        "opens": "14:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Friday"],
        "opens": "07:30",
        "closes": "13:00"
      }
    ]
  };

  return null;
};

export { AppointmentSchemaData, type DoctolibSchema };
