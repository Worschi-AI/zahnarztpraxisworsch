
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  icon?: string;
  imageUrl?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  id, 
  title, 
  description, 
  icon, 
  imageUrl 
}) => {
  return (
    <Card 
      className="bg-white hover:shadow-lg transition-shadow overflow-hidden hover-scale animate-on-scroll"
      style={{
        borderRadius: '16px',
        boxShadow: '0px 6px 18px rgba(0, 0, 0, 0.12)',
        margin: '20px',
        paddingBottom: '20px'
      }}
    >
      {imageUrl && (
        <div 
          className="w-full bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${imageUrl})`,
            height: '200px',
            borderTopLeftRadius: '16px',
            borderTopRightRadius: '16px',
            objectFit: 'cover'
          }}
        />
      )}
      
      <CardHeader style={{ padding: '20px 20px 0 20px' }}>
        <CardTitle className="flex items-center gap-2">
          {icon && (
            <span className="text-dental-turquoise" dangerouslySetInnerHTML={{ __html: icon }} />
          )}
          <span>{title}</span>
        </CardTitle>
      </CardHeader>
      
      <CardContent style={{ padding: '10px 20px 0 20px' }}>
        <p className="text-dental-gray line-clamp-3">{description}</p>
      </CardContent>
      
      <CardFooter style={{ padding: '20px 20px 0 20px' }}>
        <Link 
          to={`/services/${id}`} 
          className="flex items-center gap-2 text-dental-blue hover:text-dental-turquoise transition-colors font-semibold"
          style={{ fontWeight: '600' }}
        >
          Mehr erfahren <ArrowRight size={16} />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
