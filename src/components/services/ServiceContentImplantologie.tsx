
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const ServiceContentImplantologie = () => {
  return (
    <>
      <h2 className="mb-6 text-dental-blue">Was sind Zahnimplantate?</h2>
      <div className="prose prose-lg max-w-none text-dental-gray">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
          <div>
            <p>
              <strong>Zahnimplantate in Dresden</strong> sind die modernste und komfortabelste Lösung für fehlende Zähne. Bei der <strong>Implantologie in Dresden</strong> setzen wir in der Zahnarztpraxis Worsch auf hochwertige Titanimplantate, die als künstliche Zahnwurzeln im Kieferknochen verankert werden.
            </p>
            <p>
              Als erfahrener <strong>Implantologe in Dresden</strong> bietet Dr. Worsch Ihnen eine präzise Planung und schmerzarme Behandlung mit modernster 3D-Diagnostik. Unsere Patienten wählen uns aufgrund unserer langjährigen Expertise und dem Einsatz modernster implantologischer Verfahren.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1770&auto=format&fit=crop"
              alt="Zahnimplantat Modell - Zahnarztpraxis Worsch Dresden"
              className="w-full h-auto"
            />
          </div>
        </div>
        
        <h3 className="text-2xl font-medium mt-8 mb-4 text-dental-blue">Der Behandlungsablauf für Zahnimplantate in Dresden</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
          <div className="rounded-lg overflow-hidden shadow-lg order-2 md:order-1">
            <img 
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1780&auto=format&fit=crop"
              alt="3D-Planung für Zahnimplantate - Zahnarztpraxis Worsch Dresden"
              className="w-full h-auto"
            />
          </div>
          <div className="order-1 md:order-2">
            <ol className="list-decimal list-inside space-y-4">
              <li className="font-medium text-dental-blue">Ausführliche Erstberatung
                <p className="font-normal text-dental-gray mt-1">Wir analysieren Ihre individuelle Situation und klären alle Ihre Fragen zu <strong>Zahnimplantaten in Dresden</strong>.</p>
              </li>
              <li className="font-medium text-dental-blue">3D-Diagnostik und Planung
                <p className="font-normal text-dental-gray mt-1">Mit modernster Bildgebung planen wir präzise die ideale Position Ihrer Implantate.</p>
              </li>
              <li className="font-medium text-dental-blue">Implantation
                <p className="font-normal text-dental-gray mt-1">Der minimalinvasive chirurgische Eingriff erfolgt schmerzfrei unter lokaler Betäubung oder auf Wunsch in Sedierung.</p>
              </li>
              <li className="font-medium text-dental-blue">Einheilungsphase
                <p className="font-normal text-dental-gray mt-1">Die Implantate verwachsen in 2-6 Monaten mit dem Kiefer (Osseointegration).</p>
              </li>
              <li className="font-medium text-dental-blue">Prothetische Versorgung
                <p className="font-normal text-dental-gray mt-1">Ihr hochwertiger <strong>festsitzender Zahnersatz in Dresden</strong> wird eingesetzt und angepasst.</p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceContentImplantologie;
