
import React from 'react';

const AdditionalInfo = () => {
  return (
    <section className="py-16 bg-dental-beige">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto animate-on-scroll">
          <h2 className="text-2xl font-medium mb-8 text-center text-dental-blue">Wichtige Informationen für Ihren Besuch in unserer Dresdner Praxis</h2>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium mb-3 text-dental-blue">Für Neupatienten</h3>
              <p className="text-dental-gray">
                Herzlich willkommen in der Zahnarztpraxis Worsch! Bitte bringen Sie zu Ihrem ersten Termin Ihre 
                Versichertenkarte und – falls vorhanden – aktuelle Röntgenbilder oder Ihren Bonusheft mit. 
                Planen Sie für den Erstbesuch etwas mehr Zeit für eine umfassende Anamnese und Beratung ein.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium mb-3 text-dental-blue">Bei akuten Schmerzen</h3>
              <p className="text-dental-gray">
                Haben Sie Zahnschmerzen oder einen zahnmedizinischen Notfall? Bitte rufen Sie uns umgehend an. 
                Wir bemühen uns, Ihnen schnellstmöglich einen Termin in unserer Praxis in Dresden Laubegast anzubieten. 
                Außerhalb unserer Sprechzeiten erfahren Sie über unseren Anrufbeantworter den zahnärztlichen Notdienst.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium mb-3 text-dental-blue">Terminabsage</h3>
              <p className="text-dental-gray">
                Sollten Sie einen vereinbarten Termin nicht wahrnehmen können, informieren Sie uns bitte mindestens 
                24 Stunden vorher, damit wir den Termin an andere Patienten vergeben können.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdditionalInfo;
