
import React from 'react';
import { TextRevealByWord } from '@/components/ui/text-reveal';

const TextRevealSection = () => {
  const text = "Willkommen in Ihrer modernen Zahnarztpraxis in Dresden-Laubegast. Herzlich willkommen in der Zahnarztpraxis Worsch! Als Ihr Zahnarzt Dresden-Laubegast verbinden wir modernste Zahnmedizin mit einer persönlichen, entspannten Atmosphäre. Unser Fokus liegt auf ästhetischer Zahnheilkunde und innovativen Behandlungsmethoden, die Ihnen zu einem strahlend schönen Lächeln verhelfen. Mit digitaler Diagnostik, schonenden Behandlungsverfahren und höchsten Qualitätsstandards sorgen wir dafür, dass Sie sich bei uns rundum wohlfühlen. Ob professionelles Bleaching, unsichtbare Zahnkorrektur mit Invisalign oder ästhetische Restaurationen – wir begleiten Sie als Zahnarzt in Dresden auf dem Weg zu Ihren Traumzähnen. Vertrauen Sie auf unsere Expertise und erleben Sie Zahnmedizin, die Spaß macht.";

  return (
    <section className="relative w-full" style={{ backgroundColor: '#edf2fa' }}>
      <div className="container mx-auto px-4">
        <TextRevealByWord 
          text={text}
          className="h-[200vh]"
        />
      </div>
    </section>
  );
};

export default TextRevealSection;
