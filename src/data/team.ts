
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  specializations?: string[];
  education?: string[];
  imageUrl: string;
}

export const team: TeamMember[] = [
  {
    id: "dr-worsch",
    name: "Dr. med. dent. Thomas Worsch",
    role: "Zahnarzt und Praxisinhaber, Spezialist für Ästhetische Zahnmedizin & Implantologie",
    bio: "Dr. Worsch ist Ihr erfahrener Ansprechpartner für anspruchsvolle ästhetische Zahnmedizin und komplexe Implantatfälle in Dresden. Mit seiner Expertise und seinem Blick für natürliche Ästhetik gestaltet er Ihr individuelles Traumlächeln. Er legt besonderen Wert auf minimalinvasive Techniken und langlebige Ergebnisse, die Funktion und Schönheit perfekt vereinen. Seine Patienten schätzen seine ruhige Art und die Fähigkeit, auch komplexe Behandlungen verständlich zu erklären.",
    specializations: [
      "Master of Science (M.Sc.) Ästhetisch-Rekonstruktive Zahnmedizin",
      "Zertifizierter Experte für Implantologie (DGI) in Dresden",
      "Digitale Smile Design & Veneer-Technologie",
      "Hochwertiger Zahnersatz & Vollkeramik-Restaurationen"
    ],
    education: [
      "Studium der Zahnmedizin an der Ludwig-Maximilians-Universität München",
      "Promotion zum Dr. med. dent.",
      "Master of Science (M.Sc.) Ästhetisch-Rekonstruktive Zahnmedizin",
      "Zertifizierung Implantologie bei der DGI",
      "Fortbildungen in Digitaler Smile Design Technologie",
      "Spezialisierung auf Vollkeramik-Restaurationen"
    ],
    imageUrl: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964&auto=format&fit=crop"
  },
  {
    id: "dr-mueller",
    name: "Dr. med. dent. Lisa Müller",
    role: "Zahnärztin, Fokus auf Unsichtbare Zahnkorrektur & Prophylaxe",
    bio: "Dr. Müller verbindet moderne Prophylaxe-Konzepte mit innovativen Methoden der unsichtbaren Zahnkorrektur (z.B. Aligner-Therapie). Ihr Ziel ist es, Ihnen nicht nur zu gesunden, sondern auch zu perfekt ausgerichteten, strahlenden Zähnen zu verhelfen. Sie berät junge Erwachsene umfassend zu den Möglichkeiten, ihr Lächeln diskret und effektiv zu optimieren.",
    specializations: [
      "Zertifizierte Anwenderin für Aligner-Systeme (z.B. Invisalign) in Dresden",
      "Moderne Prophylaxe & Professionelle Zahnreinigung",
      "Bleaching-Expertin"
    ],
    education: [
      "Studium der Zahnmedizin an der Charité Berlin",
      "Promotion zum Dr. med. dent.",
      "Zertifizierung für Aligner-Systeme (Invisalign)",
      "Fortbildung in moderner Prophylaxe",
      "Spezialisierung auf Bleaching-Verfahren",
      "Weiterbildung in ästhetischer Zahnheilkunde"
    ],
    imageUrl: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1887&auto=format&fit=crop"
  },
  {
    id: "petra-schmidt",
    name: "Petra Schmidt",
    role: "Zahnmedizinische Fachangestellte & Prophylaxe-Spezialistin",
    bio: "Frau Schmidt ist seit der Praxisgründung dabei und kümmert sich mit viel Herzblut um die Organisation und den reibungslosen Ablauf in der Praxis. Als erfahrene ZFA und Prophylaxe-Spezialistin sorgt sie dafür, dass Ihre Zähne strahlend sauber bleiben und unterstützt bei Behandlungen mit ihrer umfassenden Expertise.",
    specializations: [
      "Prophylaxe-Spezialistin für ein strahlendes Lächeln",
      "Professionelle Zahnreinigung",
      "Praxismanagement & Patientenbetreuung"
    ],
    education: [
      "Ausbildung zur Zahnmedizinischen Fachangestellten",
      "Fortbildung zur Prophylaxeassistentin",
      "Qualifikation im Praxismanagement",
      "Regelmäßige Schulungen zu Patientenkommunikation"
    ],
    imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop"
  },
  {
    id: "maria-berger",
    name: "Maria Berger",
    role: "Dentalhygienikerin & Ästhetik-Assistentin",
    bio: "Als spezialisierte Dentalhygienikerin führt Frau Berger professionelle Zahnreinigungen durch und assistiert bei ästhetischen Behandlungen. In unserer Dresdner Praxis ist sie die Expertin für Prophylaxe und unterstützt bei der Umsetzung Ihres perfekten Lächelns mit ihrer präzisen Arbeitsweise.",
    specializations: [
      "Professionelle Zahnreinigung für perfekte Ästhetik",
      "Assistenz bei ästhetischen Behandlungen",
      "Individuelle Prophylaxeberatung"
    ],
    education: [
      "Ausbildung zur Zahnmedizinischen Fachangestellten",
      "Weiterbildung zur Dentalhygienikerin",
      "Spezialisierung auf ästhetische Zahnmedizin",
      "Fortbildung zur Prophylaxeberatung"
    ],
    imageUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1974&auto=format&fit=crop"
  }
];
