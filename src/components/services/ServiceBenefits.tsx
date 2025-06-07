
import React from 'react';

interface ServiceBenefitsProps {
  serviceId?: string;
  benefits?: string[];
}

const ServiceBenefits: React.FC<ServiceBenefitsProps> = ({ serviceId, benefits }) => {
  // If no benefits, return null
  if (!benefits || benefits.length === 0) {
    return null;
  }

  const isAestheticPage = serviceId === 'aesthetische-zahnheilkunde';

  return (
    <div className="mb-12 animate-on-scroll">
      <h3 className="text-2xl font-medium mb-6 text-dental-blue">
        {isAestheticPage ? 'Vorteile ästhetischer Zahnbehandlungen bei Praxis Worsch' : 'Ihre Vorteile'}
      </h3>
      <div className="bg-dental-beige rounded-lg p-6">
        <ul className="space-y-4">
          {isAestheticPage ? (
            // Custom benefits for Ästhetische Zahnheilkunde
            <>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-dental-turquoise" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-dental-gray"><strong>Natürliche Ästhetik</strong> - Unsichtbare Verbesserungen für ein authentisches, strahlendes Lächeln</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-dental-turquoise" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-dental-gray"><strong>Stärkeres Selbstbewusstsein</strong> - Lächeln Sie wieder unbeschwert in jeder Situation</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-dental-turquoise" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-dental-gray"><strong>Hochwertige Materialien</strong> - Langlebige Ergebnisse mit erstklassigen Keramik- und Kompositmaterialien</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-dental-turquoise" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-dental-gray"><strong>Minimal-invasive Verfahren</strong> - Maximale Schonung Ihrer natürlichen Zahnsubstanz</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-dental-turquoise" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-dental-gray"><strong>Individuelle Planung</strong> - Maßgeschneiderte Lösungen für Ihr persönliches Traum-Lächeln</span>
              </li>
            </>
          ) : (
            // Default benefits for other services
            benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-dental-turquoise" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-dental-gray">{benefit}</span>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default ServiceBenefits;
