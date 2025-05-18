
export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  procedure?: string;
  benefits?: string[];
  faqs?: { question: string; answer: string }[];
  imageUrl?: string;
  icon?: string;
}

export const services: Service[] = [
  {
    id: "prophylaxe",
    title: "Prophylaxe",
    shortDescription: "Professionelle Vorsorge für langfristige Zahngesundheit",
    fullDescription: "Prophylaxe umfasst alle vorbeugenden Maßnahmen gegen Zahnerkrankungen. Durch regelmäßige professionelle Zahnreinigung und individuelle Beratung zur häuslichen Mundhygiene können wir Karies, Parodontitis und andere Erkrankungen effektiv vorbeugen.",
    procedure: "Bei einer professionellen Prophylaxe-Sitzung entfernen wir hartnäckige Beläge und Verfärbungen von Ihren Zähnen, reinigen schwer zugängliche Zahnzwischenräume und polieren die Zahnoberflächen glatt, um neuen Ablagerungen vorzubeugen.",
    benefits: [
      "Vermeidung von Karies und Zahnfleischerkrankungen",
      "Erhalt natürlicher, gesunder Zähne",
      "Früherkennung von Zahnproblemen",
      "Strahlend saubere Zähne",
      "Reduzierung von Mundgeruch"
    ],
    faqs: [
      {
        question: "Wie oft sollte ich eine professionelle Zahnreinigung durchführen lassen?",
        answer: "In der Regel empfehlen wir eine professionelle Zahnreinigung alle 6 Monate. Je nach individuellem Risiko kann jedoch auch ein kürzeres oder längeres Intervall sinnvoll sein."
      },
      {
        question: "Werden die Kosten von der Krankenkasse übernommen?",
        answer: "Gesetzliche Krankenkassen übernehmen die Kosten für eine professionelle Zahnreinigung in der Regel nicht oder nur teilweise. Viele private Krankenkassen erstatten die Kosten jedoch vollständig."
      }
    ],
    imageUrl: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1770&auto=format&fit=crop"
  },
  {
    id: "zahnerhaltung",
    title: "Zahnerhaltung",
    shortDescription: "Hochwertige Füllungen und Wurzelbehandlungen",
    fullDescription: "Die Zahnerhaltung umfasst alle Maßnahmen, die darauf abzielen, Ihre natürlichen Zähne so lange wie möglich zu erhalten. Dazu gehören moderne Füllungstherapien, Wurzelkanalbehandlungen und minimalinvasive Verfahren.",
    procedure: "Bei der Behandlung von Karies entfernen wir zunächst das erkrankte Zahngewebe und füllen den entstehenden Hohlraum mit hochwertigen Materialien. Wir verwenden vorwiegend zahnfarbene Komposite, die ästhetisch ansprechend und langlebig sind.",
    benefits: [
      "Erhalt der natürlichen Zahnsubstanz",
      "Ästhetisch ansprechende Ergebnisse",
      "Langlebige, hochwertige Materialien",
      "Schmerzfreie Behandlung durch moderne Anästhesieverfahren"
    ],
    imageUrl: "https://images.unsplash.com/photo-1643913067177-25ce9fdbc717?q=80&w=1932&auto=format&fit=crop"
  },
  {
    id: "zahnersatz",
    title: "Zahnersatz",
    shortDescription: "Individueller Zahnersatz für natürliche Ästhetik und Funktion",
    fullDescription: "Mit modernem Zahnersatz können fehlende Zähne so ersetzt werden, dass sowohl Ästhetik als auch Funktion wiederhergestellt werden. Je nach individueller Situation kommen Kronen, Brücken, Implantate oder herausnehmbare Prothesen zum Einsatz.",
    procedure: "Nach einer umfassenden Beratung und Planung fertigen wir in Zusammenarbeit mit qualifizierten Dentallaboren passgenauen Zahnersatz an, der sich harmonisch in Ihr Gebiss einfügt. Moderne digitale Technologien unterstützen uns dabei, präzise Ergebnisse zu erzielen.",
    benefits: [
      "Wiederherstellung der Kaufunktion",
      "Natürliche Ästhetik",
      "Langlebige Versorgung",
      "Verbesserung der Lebensqualität",
      "Schutz vor Folgeschäden durch Zahnlücken"
    ],
    imageUrl: "https://images.unsplash.com/photo-1535452613787-13042f744779?q=80&w=1770&auto=format&fit=crop"
  },
  {
    id: "implantologie",
    title: "Implantologie",
    shortDescription: "Fest verankerte Zähne durch moderne Implantattechnologie",
    fullDescription: "Zahnimplantate sind künstliche Zahnwurzeln, die im Kieferknochen verankert werden und als Basis für Kronen, Brücken oder Prothesen dienen. Sie bieten maximale Stabilität und ein natürliches Gefühl.",
    procedure: "Nach sorgfältiger Planung, eventuell unterstützt durch 3D-Röntgenaufnahmen, setzen wir das Implantat in einer schonenden Operation in den Kieferknochen ein. Nach einer Einheilphase von einigen Wochen bis Monaten wird der endgültige Zahnersatz auf dem Implantat befestigt.",
    benefits: [
      "Fester Sitz wie eigene Zähne",
      "Erhalt des Kieferknochens",
      "Keine Beeinträchtigung der Nachbarzähne",
      "Hohe Erfolgssrate und Langlebigkeit",
      "Verbesserung des Selbstwertgefühls"
    ],
    imageUrl: "https://images.unsplash.com/photo-1601342630314-8427c39bf3e7?q=80&w=1932&auto=format&fit=crop"
  },
  {
    id: "aesthetische-zahnheilkunde",
    title: "Ästhetische Zahnheilkunde",
    shortDescription: "Strahlend schöne Zähne für Ihr perfektes Lächeln",
    fullDescription: "Die ästhetische Zahnheilkunde umfasst alle Behandlungen, die auf die Verbesserung des Aussehens Ihrer Zähne abzielen. Dazu gehören Zahnaufhellung (Bleaching), Veneers, ästhetische Füllungen und Zahnformkorrekturen.",
    procedure: "Je nach gewünschtem Ergebnis und Ausgangssituation stellen wir für Sie einen individuellen Behandlungsplan zusammen. Bei Veneers werden hauchdünne Keramikschalen auf die sichtbaren Zahnflächen geklebt, um Form- und Farbveränderungen zu erzielen.",
    benefits: [
      "Steigerung des Selbstbewusstseins",
      "Natürlich aussehendes Ergebnis",
      "Schonende Verfahren",
      "Langanhaltende Resultate",
      "Individuell angepasste Lösungen"
    ],
    imageUrl: "https://images.unsplash.com/photo-1581701244939-bf25b2f7b691?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: "kinderzahnheilkunde",
    title: "Kinderzahnheilkunde",
    shortDescription: "Behutsame und freundliche Zahnbehandlung für die Kleinsten",
    fullDescription: "Bei der Behandlung von Kindern stehen behutsames Vorgehen und vertrauensvoller Umgang im Vordergrund. Wir möchten, dass Kinder positive Erfahrungen bei Zahnarztbesuchen sammeln und lernen, wie wichtig Zahngesundheit ist.",
    procedure: "Bei der ersten Begegnung geben wir Ihrem Kind Zeit, unsere Praxis kennenzulernen. Wir erklären altersgerecht alle Behandlungsschritte und belohnen tapfere kleine Patienten mit einer kleinen Überraschung.",
    benefits: [
      "Vermeidung von Zahnarztangst",
      "Altersgerechte Behandlung und Kommunikation",
      "Frühzeitige Erkennung von Fehlstellungen",
      "Effektive Kariesprophylaxe",
      "Aufklärung über richtige Zahnpflege"
    ],
    imageUrl: "https://images.unsplash.com/photo-1494949837018-3d132402ffce?q=80&w=1874&auto=format&fit=crop"
  }
];
