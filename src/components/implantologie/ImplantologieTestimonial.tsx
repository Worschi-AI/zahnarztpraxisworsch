
import React from 'react';
import { Quote, Star } from 'lucide-react';

const ImplantologieTestimonial = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-dental-turquoise to-dental-blue text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center animate-on-scroll">
          <Quote className="w-16 h-16 mx-auto mb-8 opacity-60" />
          
          <blockquote className="text-xl md:text-2xl lg:text-3xl leading-relaxed mb-8 font-light">
            "Nach dem Verlust mehrerer Zähne war ich skeptisch gegenüber Implantaten. Dr. Worsch hat mich umfassend beraten und die Behandlung war viel angenehmer als erwartet. Heute fühlen sich meine Implantate an wie meine eigenen Zähne – ich kann wieder unbeschwert lachen und essen!"
          </blockquote>
          
          <div className="flex items-center justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-current text-yellow-300" />
            ))}
          </div>
          
          <div className="text-lg">
            <div className="font-semibold">Maria K., 54 Jahre</div>
            <div className="opacity-80">Patientin seit 2022</div>
          </div>
          
          <div className="mt-12 p-6 bg-white/10 rounded-lg backdrop-blur-sm">
            <div className="flex items-center justify-center mb-4">
              <Quote className="w-8 h-8 opacity-60" />
            </div>
            <p className="text-lg italic">
              "Mit über 500 erfolgreich gesetzten Implantaten ist jede Behandlung für mich eine Vertrauenssache. 
              Mein Ziel ist es, jedem Patienten zu einem neuen, selbstbewussten Lächeln zu verhelfen."
            </p>
            <div className="mt-4 font-semibold">
              Dr. med. dent. Thomas Worsch
            </div>
            <div className="opacity-80">
              Spezialist für Implantologie & ästhetische Zahnmedizin
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImplantologieTestimonial;
