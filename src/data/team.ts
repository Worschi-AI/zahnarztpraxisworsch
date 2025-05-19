
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
    role: "Zahnarzt und Praxisinhaber",
    bio: "Dr. Worsch gründete die Praxis im Jahr 2005 und leitet sie seither mit großem Engagement und Fachwissen. Als führender Experte für Implantologie in Dresden bietet er Ihnen modernste Behandlungsmethoden auf höchstem Niveau. Seine umfangreiche Erfahrung macht ihn zu einem gefragten Spezialisten für komplexe zahnmedizinische Fälle in Dresden.",
    specializations: [
      "Implantologie in Dresden",
      "Ästhetische Zahnheilkunde",
      "Zahnerhaltung und moderne Füllungstherapie"
    ],
    education: [
      "Studium der Zahnmedizin an der Ludwig-Maximilians-Universität München",
      "Promotion zum Dr. med. dent.",
      "Weiterbildung Implantologie",
      "Zertifizierter Spezialist für ästhetische Zahnmedizin",
      "Regelmäßige Fortbildungen zu aktuellen Behandlungsmethoden"
    ],
    imageUrl: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964&auto=format&fit=crop"
  },
  {
    id: "dr-mueller",
    name: "Dr. med. dent. Lisa Müller",
    role: "Zahnärztin",
    bio: "Dr. Müller verstärkt seit 2018 unser Team. Als Spezialistin für Kinderzahnheilkunde in Dresden sorgt sie dafür, dass selbst die kleinsten Patienten gerne zu uns kommen. Mit ihrem besonderen Einfühlungsvermögen hat sie sich auf die Behandlung von Angstpatienten und Kindern spezialisiert und schafft eine angenehme Atmosphäre.",
    specializations: [
      "Kinderzahnheilkunde in Dresden",
      "Behandlung von Angstpatienten",
      "Prophylaxe und Präventionskonzepte"
    ],
    education: [
      "Studium der Zahnmedizin an der Charité Berlin",
      "Promotion zum Dr. med. dent.",
      "Weiterbildung Kinderzahnheilkunde",
      "Zertifizierung für die Behandlung von Angstpatienten",
      "Spezialisierung auf altersgerechte Prophylaxe"
    ],
    imageUrl: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1887&auto=format&fit=crop"
  },
  {
    id: "petra-schmidt",
    name: "Petra Schmidt",
    role: "Zahnmedizinische Fachangestellte",
    bio: "Frau Schmidt ist seit der Praxisgründung dabei und kümmert sich mit viel Herzblut um die Organisation und den reibungslosen Ablauf in der Praxis. Als erfahrene ZFA kennt sie die besonderen Anforderungen einer modernen Zahnarztpraxis in Dresden und unterstützt bei Behandlungen mit ihrer umfassenden Expertise.",
    specializations: [
      "Prophylaxe und professionelle Zahnreinigung",
      "Praxismanagement",
      "Patientenbetreuung und -beratung"
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
    role: "Dentalhygienikerin",
    bio: "Als spezialisierte Dentalhygienikerin führt Frau Berger professionelle Zahnreinigungen durch und berät unsere Patienten umfassend zur optimalen Mundhygiene. In unserer Dresdner Praxis ist sie die Expertin für Prophylaxe und Zahngesundheitsvorsorge und sorgt dafür, dass Ihre Zähne strahlend sauber bleiben.",
    specializations: [
      "Professionelle Zahnreinigung in Dresden",
      "Parodontitisbehandlung und -nachsorge",
      "Individuelle Prophylaxeberatung für alle Altersgruppen"
    ],
    education: [
      "Ausbildung zur Zahnmedizinischen Fachangestellten",
      "Weiterbildung zur Dentalhygienikerin",
      "Spezialisierung auf Parodontitistherapie",
      "Fortbildung zur Prophylaxeberatung für verschiedene Patientengruppen"
    ],
    imageUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1974&auto=format&fit=crop"
  }
];
