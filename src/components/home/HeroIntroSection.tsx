import React from 'react';
import { Heart, Star, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const HeroIntroSection = () => {
  const statistics = [
    {
      label: "Zufriedene Patienten",
      value: "1500+",
      description: "Jedes Jahr schenken uns zahlreiche Patienten Ihr Vertrauen.",
      icon: <Users className="w-6 h-6 text-dental-turquoise" />,
    },
    {
      label: "Jahre Erfahrung",
      value: "15+",
      description: "Langjährige Expertise in allen Bereichen der Zahnmedizin.",
      icon: <Star className="w-6 h-6 text-dental-turquoise" />,
    },
    {
      label: "Herzblut",
      value: "100%",
      description: "Wir lieben was wir tun und das spüren unsere Patienten.",
      icon: <Heart className="w-6 h-6 text-dental-turquoise" />,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-8 text-dental-blue animate-on-scroll">
            Willkommen in der Zahnarztpraxis Worsch in Dresden Laubegast
          </h2>
          
          <div className="mb-12 animate-on-scroll">
            <p className="text-lg text-dental-gray mb-8">
              Seit über 15 Jahren 
              <strong className="text-dental-blue"> sind wir für unsere Patienten da</strong> und verbinden dabei Erfahrung mit Innovation.
            </p>
            
            {/* Highlighted text in a beautiful card */}
            <div className="bg-gradient-to-br from-dental-turquoise to-dental-blue p-8 rounded-xl text-white max-w-3xl mx-auto">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-white/20 rounded-full">
                  <Heart className="w-8 h-8 text-white" />
                </div>
              </div>
              <p className="text-lg leading-relaxed">
                Wir verstehen, dass ein Lächeln mehr ist als nur gesunde Zähne – es ist ein Ausdruck Ihrer Persönlichkeit und Ihres Wohlbefindens.
              </p>
            </div>
          </div>

          {/* Statistics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {statistics.map((stat, index) => (
              <Card key={index} className="border border-dental-beige hover:shadow-lg transition-all duration-300 hover:border-dental-turquoise/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-3 bg-dental-beige rounded-lg">
                      {stat.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-dental-blue mb-2">
                        {stat.value}
                      </h4>
                      <p className="text-dental-gray text-sm leading-relaxed">
                        {stat.label} - {stat.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroIntroSection;
