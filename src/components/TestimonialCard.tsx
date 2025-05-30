
import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  rating?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  rating = 5
}) => {
  return (
    <Card 
      className="bg-white hover:shadow-lg transition-shadow overflow-hidden hover-scale my-5 mx-5" 
      style={{
        borderRadius: '16px',
        boxShadow: '0px 6px 18px rgba(0, 0, 0, 0.12)',
        margin: '20px',
        padding: '0'
      }}
    >
      <CardContent className="pt-6" style={{ padding: '25px 20px' }}>
        <div className="flex justify-center mb-4" style={{ marginBottom: '15px' }}>
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="h-6 w-6 fill-current drop-shadow-sm"
              style={{ 
                color: '#FFD700',
                fill: '#FFD700',
                width: '24px',
                height: '24px',
                marginRight: i < 4 ? '4px' : '0'
              }}
            />
          ))}
        </div>
        <blockquote className="text-center italic text-dental-gray">
          "{quote}"
        </blockquote>
      </CardContent>
      
      <CardFooter className="flex justify-center pb-6 text-dental-blue font-semibold" style={{ padding: '0 20px 25px 20px' }}>
        - {author}
      </CardFooter>
    </Card>
  );
};

export default TestimonialCard;
