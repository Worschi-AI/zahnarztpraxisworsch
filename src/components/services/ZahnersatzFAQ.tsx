
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ZahnersatzFAQ = () => {
  return (
    <div className="my-16">
      <h3 className="text-2xl font-medium mb-6 text-dental-blue">Häufig gestellte Fragen zu Zahnersatz</h3>
      
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-left font-medium">
            Wie lange hält moderner Zahnersatz?
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-dental-gray">
              Die Haltbarkeit von Zahnersatz hängt von Material, Lage im Mund und Ihrer Pflege ab. Als Richtwerte gelten:
            </p>
            <ul className="list-disc list-inside mt-2 text-dental-gray">
              <li>Vollkeramikkronen und -brücken: 10-15 Jahre</li>
              <li>Zirkonversorgungen: 15-20 Jahre</li>
              <li>Implantatgetragener Zahnersatz: 15-25 Jahre</li>
              <li>Qualitativ hochwertige Prothesen: 5-8 Jahre</li>
            </ul>
            <p className="mt-2 text-dental-gray">
              Mit guter Pflege und regelmäßigen Kontrollen kann die Lebensdauer deutlich verlängert werden.
            </p>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-left font-medium">
            Werden die Kosten für Zahnersatz von der Krankenkasse übernommen?
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-dental-gray">
              Gesetzliche Krankenkassen übernehmen in der Regel einen Festzuschuss für Zahnersatz, der sich nach dem Befund richtet. Bei regelmäßiger Vorsorge kann sich dieser Zuschuss um bis zu 35% erhöhen. 
              Private Versicherungen erstatten je nach Tarif einen höheren Anteil oder die gesamten Kosten.
            </p>
            <p className="mt-2 text-dental-gray">
              In unserer Praxis erstellen wir transparente Kostenvoranschläge und beraten Sie zu Finanzierungsmöglichkeiten. Sprechen Sie uns bei Fragen gerne an!
            </p>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-left font-medium">
            Was ist der Unterschied zwischen Vollkeramik und Metallkeramik?
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-dental-gray">
              <strong>Vollkeramik:</strong> Besteht komplett aus Keramik ohne Metallkern, ist besonders biokompatibel und bietet eine hervorragende Ästhetik mit lichtdurchlässigen Eigenschaften wie natürliche Zähne. Ideal für sichtbare Bereiche und bei Metallallergien.
            </p>
            <p className="mt-2 text-dental-gray">
              <strong>Metallkeramik:</strong> Hat einen Metallkern, der mit Keramik verblendet wird. Bietet hohe Stabilität, ist aber weniger lichtdurchlässig und kann bei dünnem Zahnfleisch einen gräulichen Rand zeigen.
            </p>
            <p className="mt-2 text-dental-gray">
              In der Zahnarztpraxis Worsch setzen wir bevorzugt auf metallfreie Versorgungen mit Vollkeramik oder Zirkonoxid für ein optimales ästhetisches und gesundheitliches Ergebnis.
            </p>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-left font-medium">
            Wie pflege ich meinen Zahnersatz richtig?
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-dental-gray">
              <strong>Festsitzender Zahnersatz (Kronen, Brücken):</strong> Zweimal täglich gründliche Reinigung mit weicher Zahnbürste. Besonders wichtig ist die Reinigung der Übergänge zum eigenen Zahn mit Zahnseide oder Interdentalbürsten.
            </p>
            <p className="mt-2 text-dental-gray">
              <strong>Herausnehmbarer Zahnersatz (Prothesen):</strong> Tägliche Reinigung mit spezieller Prothesenbürste und mildem Reinigungsmittel. Nachts Lagerung in einem speziellen Behälter, ggf. mit Reinigungstabletten.
            </p>
            <p className="mt-2 text-dental-gray">
              Regelmäßige professionelle Zahnreinigung und halbjährliche Kontrollbesuche helfen, die Lebensdauer Ihres Zahnersatzes deutlich zu verlängern.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default ZahnersatzFAQ;
