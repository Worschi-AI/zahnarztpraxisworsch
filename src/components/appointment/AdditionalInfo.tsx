
import React from 'react';

const AdditionalInfo = () => {
  return (
    <section className="py-16 bg-dental-beige">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto animate-on-scroll">
          <h2 className="text-2xl font-medium mb-8 text-center text-dental-blue">Gut zu wissen</h2>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium mb-3 text-dental-blue">Erstbesucher</h3>
              <p className="text-dental-gray">
                Wenn Sie zum ersten Mal zu uns kommen, planen Sie bitte etwas mehr Zeit ein. 
                Bitte bringen Sie Ihre Versichertenkarte und, falls vorhanden, Ihren Zahnbonus-Pass mit.
              </p>
              <p className="text-dental-gray mt-3">
                Für spezielle Beratungen zu Implantaten oder ästhetischen Behandlungen empfehlen wir eine telefonische 
                Vorabklärung, damit wir ausreichend Zeit für Sie einplanen können.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium mb-3 text-dental-blue">Notfälle</h3>
              <p className="text-dental-gray">
                Bei akuten Schmerzen oder Notfällen rufen Sie uns bitte direkt an. 
                Wir werden unser Bestes tun, um Ihnen schnellstmöglich zu helfen.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium mb-3 text-dental-blue">Terminabsagen</h3>
              <p className="text-dental-gray">
                Falls Sie einen Termin nicht wahrnehmen können, bitten wir Sie, uns mindestens 24 Stunden 
                vorher zu informieren. So können wir den Termin an andere Patienten vergeben.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdditionalInfo;
