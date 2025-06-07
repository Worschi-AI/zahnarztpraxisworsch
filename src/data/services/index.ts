
import { Service } from './types';
import { prophylaxe } from './prophylaxe';
import { zahnerhaltung } from './zahnerhaltung';
import { zahnersatz } from './zahnersatz';
import { implantologie } from './implantologie';
import { aesthetischeZahnheilkunde } from './aesthetische-zahnheilkunde';
import { kinderzahnheilkunde } from './kinderzahnheilkunde';

// Additional services that were in the original file but not yet split
const parodontologie: Service = {
  id: "parodontologie",
  title: "Parodontologie",
  shortDescription: "Effektive Behandlung von Zahnfleischerkrankungen",
  fullDescription: "Parodontitis ist eine der häufigsten Volkskrankheiten und die Hauptursache für Zahnverlust im Erwachsenenalter. In der Zahnarztpraxis Worsch in Dresden bieten wir Ihnen eine umfassende parodontologische Betreuung zur Behandlung und Vorbeugung von Zahnfleischerkrankungen.",
  imageUrl: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1770&auto=format&fit=crop"
};

const endodontie: Service = {
  id: "endodontie",
  title: "Endodontie",
  shortDescription: "Schmerzfreie Wurzelbehandlungen mit modernster Technik",
  fullDescription: "Die Endodontie beschäftigt sich mit der Behandlung des Zahninneren. Moderne Wurzelkanalbehandlungen ermöglichen es, auch stark geschädigte Zähne zu erhalten und Schmerzen effektiv zu beseitigen.",
  imageUrl: "https://images.unsplash.com/photo-1643913067177-25ce9fdbc717?q=80&w=1932&auto=format&fit=crop"
};

const funktionstherapie: Service = {
  id: "funktionstherapie",
  title: "Funktionstherapie",
  shortDescription: "CMD-Behandlung und Kiefergelenktherapie",
  fullDescription: "Craniomandibuläre Dysfunktion (CMD) kann zu Schmerzen im Kiefer, Kopf und Nackenbereich führen. Unsere Funktionstherapie hilft dabei, diese Beschwerden zu lindern und die normale Funktion wiederherzustellen.",
  imageUrl: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1770&auto=format&fit=crop"
};

const chirurgie: Service = {
  id: "chirurgie",
  title: "Chirurgie",
  shortDescription: "Schonende Zahnentfernung und Weisheitszahnentfernung",
  fullDescription: "Wenn eine Zahnentfernung unvermeidlich ist, führen wir den Eingriff so schonend wie möglich durch. Besonders bei Weisheitszähnen setzen wir auf minimalinvasive Techniken für eine schnelle Heilung.",
  imageUrl: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1770&auto=format&fit=crop"
};

export const services: Service[] = [
  prophylaxe,
  zahnerhaltung,
  zahnersatz,
  implantologie,
  aesthetischeZahnheilkunde,
  kinderzahnheilkunde,
  parodontologie,
  endodontie,
  funktionstherapie,
  chirurgie
];

// Re-export the Service type for backward compatibility
export type { Service };
