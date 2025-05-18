
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
    bio: "Dr. Worsch gründete die Praxis im Jahr 2005 und leitet sie seither mit großem Engagement und Fachwissen. Nach seinem Studium in München und mehrjähriger Tätigkeit in verschiedenen Praxen hat er sich hier niedergelassen, um Patienten eine umfassende und moderne zahnmedizinische Versorgung zu bieten.",
    specializations: [
      "Implantologie",
      "Ästhetische Zahnheilkunde",
      "Zahnerhaltung"
    ],
    education: [
      "Studium der Zahnmedizin an der Ludwig-Maximilians-Universität München",
      "Promotion zum Dr. med. dent.",
      "Weiterbildung Implantologie",
      "Zertifizierter Spezialist für ästhetische Zahnmedizin"
    ],
    imageUrl: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964&auto=format&fit=crop"
  },
  {
    id: "dr-mueller",
    name: "Dr. med. dent. Lisa Müller",
    role: "Zahnärztin",
    bio: "Dr. Müller verstärkt seit 2018 unser Team. Mit ihrem besonderen Einfühlungsvermögen hat sie sich auf die Behandlung von Angstpatienten und Kindern spezialisiert. Ihre sanfte und geduldige Art schafft eine angenehme Atmosphäre für unsere Patienten.",
    specializations: [
      "Kinderzahnheilkunde",
      "Behandlung von Angstpatienten",
      "Prophylaxe"
    ],
    education: [
      "Studium der Zahnmedizin an der Charité Berlin",
      "Promotion zum Dr. med. dent.",
      "Weiterbildung Kinderzahnheilkunde"
    ],
    imageUrl: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1887&auto=format&fit=crop"
  },
  {
    id: "petra-schmidt",
    name: "Petra Schmidt",
    role: "Zahnmedizinische Fachangestellte",
    bio: "Frau Schmidt ist seit der Praxisgründung dabei und kümmert sich mit viel Herzblut um die Organisation und den reibungslosen Ablauf in der Praxis. Als erfahrene ZFA unterstützt sie bei Behandlungen und ist Ansprechpartnerin für alle Patientenanliegen.",
    specializations: [
      "Prophylaxe",
      "Praxismanagement",
      "Patientenbetreuung"
    ],
    imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop"
  },
  {
    id: "maria-berger",
    name: "Maria Berger",
    role: "Dentalhygienikerin",
    bio: "Als spezialisierte Dentalhygienikerin führt Frau Berger professionelle Zahnreinigungen durch und berät unsere Patienten umfassend zur optimalen Mundhygiene. Mit ihrer freundlichen Art macht sie selbst diese Routinebehandlung zu einer angenehmen Erfahrung.",
    specializations: [
      "Professionelle Zahnreinigung",
      "Parodontitisbehandlung",
      "Prophylaxeberatung"
    ],
    imageUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1974&auto=format&fit=crop"
  }
];
