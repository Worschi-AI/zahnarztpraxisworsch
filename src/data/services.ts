
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
    fullDescription: "Die professionelle Prophylaxe in Dresden bildet das Fundament Ihrer langfristigen Zahngesundheit. Als vorbeugende Maßnahme gegen Karies, Parodontitis und Zahnfleischerkrankungen ist die regelmäßige professionelle Zahnreinigung (PZR) unverzichtbar für gesunde Zähne und ein strahlendes Lächeln. In der Zahnarztpraxis Worsch in Dresden setzen wir auf ein ganzheitliches Prophylaxe-Konzept, das individuell auf Ihre Bedürfnisse abgestimmt wird. Unsere erfahrenen Dentalhygienikerinnen verwenden modernste Techniken und Geräte, um auch hartnäckige Beläge und Verfärbungen schonend zu entfernen. Die Prophylaxe umfasst nicht nur die mechanische Reinigung, sondern auch eine umfassende Beratung zur optimalen häuslichen Mundhygiene, Ernährungsberatung und Fluoridierung zum Schutz vor Karies. Durch regelmäßige Prophylaxe-Termine können wir Zahnprobleme frühzeitig erkennen und behandeln, bevor größere Schäden entstehen. Dies spart nicht nur Kosten, sondern erhält auch Ihre natürlichen Zähne ein Leben lang.",
    procedure: "Die professionelle Zahnreinigung in unserer Praxis erfolgt in mehreren systematischen Schritten: Zunächst führen wir eine gründliche Untersuchung Ihrer Mundhöhle durch und dokumentieren den aktuellen Zustand. Anschließend entfernen wir mit speziellen Handinstrumenten und Ultraschallgeräten alle harten und weichen Beläge oberhalb und unterhalb des Zahnfleischrandes. Hartnäckige Verfärbungen werden mit einem Pulverstrahlgerät (Airflow) schonend beseitigt. Nach der Reinigung polieren wir alle Zahnoberflächen mit speziellen Pasten, um sie zu glätten und neuen Ablagerungen vorzubeugen. Abschließend tragen wir einen hochkonzentrierten Fluoridlack auf, der Ihre Zähne vor Karies schützt. Während der gesamten Behandlung erklären wir Ihnen jeden Schritt und geben individuelle Tipps für die häusliche Mundpflege. Die Behandlung dauert je nach Ausgangssituation zwischen 45 und 60 Minuten und ist praktisch schmerzfrei.",
    benefits: [
      "Effektive Vorbeugung gegen Karies und Parodontitis",
      "Erhalt der natürlichen Zahnsubstanz ein Leben lang",
      "Früherkennung und Prävention von Zahnproblemen",
      "Entfernung von Verfärbungen für strahlend weiße Zähne",
      "Reduzierung von Mundgeruch und Zahnfleischbluten",
      "Stärkung des Immunsystems durch gesunde Mundflora",
      "Kostenersparnis durch Vermeidung aufwendiger Behandlungen"
    ],
    faqs: [
      {
        question: "Wie oft sollte ich eine professionelle Zahnreinigung durchführen lassen?",
        answer: "Die Häufigkeit der professionellen Zahnreinigung hängt von Ihrem individuellen Risiko ab. In der Regel empfehlen wir eine PZR alle 6 Monate. Bei erhöhtem Karies- oder Parodontitis-Risiko, starken Verfärbungen oder während einer kieferorthopädischen Behandlung kann ein kürzeres Intervall von 3-4 Monaten sinnvoll sein. Patienten mit sehr guter Mundhygiene und niedrigem Risiko können auch ein 9-12 Monats-Intervall wählen."
      },
      {
        question: "Werden die Kosten von der Krankenkasse übernommen?",
        answer: "Gesetzliche Krankenkassen übernehmen die Kosten für eine professionelle Zahnreinigung in der Regel nicht vollständig. Einige Kassen gewähren jedoch Zuschüsse von 20-40 Euro pro Jahr oder übernehmen die Kosten im Rahmen von Bonusprogrammen. Private Krankenkassen und Zahnzusatzversicherungen erstatten die Kosten oft vollständig. Wir beraten Sie gerne über die Möglichkeiten in Ihrem individuellen Fall."
      },
      {
        question: "Ist die professionelle Zahnreinigung schmerzhaft?",
        answer: "Die professionelle Zahnreinigung ist in der Regel völlig schmerzfrei. Bei empfindlichen Zähnen oder entzündlichem Zahnfleisch kann es zu leichten Beschwerden kommen. In solchen Fällen können wir eine lokale Betäubung anwenden oder die Behandlung besonders schonend durchführen. Die meisten Patienten empfinden die PZR als angenehm und entspannend."
      },
      {
        question: "Was ist der Unterschied zwischen der PZR und der normalen Zahnreinigung beim Zahnarzt?",
        answer: "Die professionelle Zahnreinigung geht weit über die normale Zahnsteinentfernung hinaus. Während bei der Kontrolluntersuchung nur grober Zahnstein entfernt wird, reinigen wir bei der PZR alle Zahnoberflächen gründlich, entfernen auch weiche Beläge und Verfärbungen, polieren die Zähne und tragen Fluorid auf. Die PZR dauert deutlich länger und wird von speziell ausgebildeten Fachkräften durchgeführt."
      },
      {
        question: "Kann ich direkt nach der PZR wieder normal essen und trinken?",
        answer: "Nach der professionellen Zahnreinigung sollten Sie etwa 1-2 Stunden auf Essen und Trinken verzichten, damit das aufgetragene Fluorid optimal wirken kann. Anschließend können Sie wieder normal essen. In den ersten 24 Stunden sollten Sie stark färbende Lebensmittel wie Kaffee, Rotwein oder Nikotin meiden, da die Zahnoberflächen in dieser Zeit besonders aufnahmefähig für Verfärbungen sind."
      }
    ],
    imageUrl: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1770&auto=format&fit=crop"
  },
  {
    id: "zahnerhaltung",
    title: "Zahnerhaltung",
    shortDescription: "Hochwertige Füllungen und Wurzelbehandlungen",
    fullDescription: "Die Zahnerhaltung steht im Mittelpunkt unserer zahnmedizinischen Philosophie in Dresden. Unser Ziel ist es, Ihre natürlichen Zähne so lange wie möglich zu erhalten und dabei höchste ästhetische und funktionelle Ansprüche zu erfüllen. Die moderne Zahnerhaltung umfasst verschiedene Behandlungsmethoden: von minimal-invasiven Füllungstherapien über Wurzelkanalbehandlungen bis hin zu Inlays und Onlays. Durch den Einsatz modernster Materialien wie biokompatible Komposite, Glasionomerzemente und Keramiken können wir defekte Zähne nahezu unsichtbar reparieren. Besonders bei der Kariesbehandlung setzen wir auf substanzschonende Verfahren, bei denen nur das erkrankte Gewebe entfernt wird. Unsere Wurzelkanalbehandlungen führen wir mit rotierenden Nickel-Titan-Instrumenten und elektronischer Längenmessung durch, was die Erfolgsquote deutlich erhöht. Durch präzise Diagnostik mittels digitaler Röntgentechnik können wir Probleme frühzeitig erkennen und minimal-invasiv behandeln.",
    procedure: "Der Behandlungsablauf bei der Zahnerhaltung richtet sich nach dem individuellen Befund. Bei Karies beginnen wir mit einer lokalen Betäubung für eine schmerzfreie Behandlung. Anschließend entfernen wir das kariöse Gewebe mit modernen rotierenden Instrumenten unter ständiger Wasserkühlung. Der entstandene Defekt wird sorgfältig gereinigt und desinfiziert. Bei kleineren Defekten verwenden wir direkte Kompositfüllungen, die in mehreren Schichten aufgetragen und mit LED-Licht ausgehärtet werden. Größere Defekte versorgen wir mit laborgefertigten Inlays oder Onlays aus Keramik oder Gold. Bei einer Wurzelkanalbehandlung erweitern und desinfizieren wir die Wurzelkanäle mit speziellen Instrumenten und spülen sie mit antibakteriellen Lösungen. Nach der Aufbereitung werden die Kanäle bakteriendicht verschlossen. Abschließend wird der Zahn mit einer Krone oder Füllung versorgt. Alle Behandlungen führen wir unter Lupenhilfe durch, um höchste Präzision zu gewährleisten.",
    benefits: [
      "Erhalt der natürlichen Zahnsubstanz durch minimal-invasive Verfahren",
      "Ästhetisch perfekte Ergebnisse mit zahnfarbenen Materialien",
      "Langlebige und biokompatible Füllungswerkstoffe",
      "Schmerzfreie Behandlung durch moderne Anästhesieverfahren",
      "Hohe Erfolgsquote bei Wurzelkanalbehandlungen",
      "Vermeidung von Zahnverlust und aufwendigem Zahnersatz",
      "Funktionserhalt für optimale Kaufunktion"
    ],
    faqs: [
      {
        question: "Wie lange halten Kompositfüllungen?",
        answer: "Hochwertige Kompositfüllungen halten bei guter Pflege und regelmäßigen Kontrollen durchschnittlich 8-12 Jahre. Die Haltbarkeit hängt von verschiedenen Faktoren ab: Größe der Füllung, Kaubelastung, Mundhygiene und individuelle Faktoren wie Zähneknirschen. Kleinere Füllungen halten oft deutlich länger, während große Füllungen im Seitenzahnbereich stärkeren Belastungen ausgesetzt sind."
      },
      {
        question: "Ist eine Wurzelkanalbehandlung schmerzhaft?",
        answer: "Eine professionell durchgeführte Wurzelkanalbehandlung ist dank moderner Anästhesieverfahren praktisch schmerzfrei. Während der Behandlung spüren Sie durch die örtliche Betäubung nichts. In den ersten Tagen nach der Behandlung können leichte Beschwerden auftreten, die sich gut mit Schmerzmitteln behandeln lassen. Die meisten Patienten sind überrascht, wie angenehm die Behandlung verläuft."
      },
      {
        question: "Wann ist eine Wurzelkanalbehandlung notwendig?",
        answer: "Eine Wurzelkanalbehandlung wird notwendig, wenn der Zahnnerv (Pulpa) irreversibel geschädigt oder abgestorben ist. Dies kann durch tiefe Karies, einen Zahnunfall, wiederholte Behandlungen am Zahn oder starke thermische Belastung geschehen. Typische Symptome sind anhaltende Schmerzen, Klopfempfindlichkeit, Schwellungen oder eine Verfärbung des Zahnes. Manchmal verläuft der Prozess aber auch völlig schmerzfrei."
      },
      {
        question: "Was passiert, wenn eine Wurzelkanalbehandlung nicht erfolgreich ist?",
        answer: "Die Erfolgsquote moderner Wurzelkanalbehandlungen liegt bei über 90%. Sollte eine Behandlung nicht erfolgreich sein, gibt es mehrere Optionen: Eine Revision der Wurzelkanalbehandlung, eine Wurzelspitzenresektion (chirurgische Entfernung der Wurzelspitze) oder als letzter Ausweg die Entfernung des Zahnes mit anschließendem Zahnersatz. Wir besprechen alle Möglichkeiten ausführlich mit Ihnen."
      },
      {
        question: "Sind zahnfarbene Füllungen genauso stabil wie Amalgamfüllungen?",
        answer: "Moderne Kompositfüllungen sind bei korrekter Anwendung genauso stabil und langlebig wie Amalgamfüllungen. Sie haben sogar Vorteile: Sie sind zahnfarben, enthalten kein Quecksilber, erfordern weniger Substanzabtrag und können repariert werden. Für sehr große Defekte empfehlen wir allerdings laborgefertigte Einlagefüllungen (Inlays) aus Keramik oder Gold."
      }
    ],
    imageUrl: "https://images.unsplash.com/photo-1643913067177-25ce9fdbc717?q=80&w=1932&auto=format&fit=crop"
  },
  {
    id: "zahnersatz",
    title: "Zahnersatz",
    shortDescription: "Individueller Zahnersatz für natürliche Ästhetik und Funktion",
    fullDescription: "Hochwertiger Zahnersatz in Dresden von der Zahnarztpraxis Worsch verbindet modernste Technologie mit handwerklicher Perfektion. Wenn Zähne nicht mehr erhalten werden können, bieten wir Ihnen individuell angepasste Lösungen, die in Funktion, Ästhetik und Tragekomfort höchsten Ansprüchen gerecht werden. Unser Spektrum umfasst festsitzenden Zahnersatz wie Kronen und Brücken, herausnehmbaren Zahnersatz wie Teil- und Vollprothesen sowie die Königsdisziplin - implantatgetragenen Zahnersatz. Durch die enge Zusammenarbeit mit deutschen Meisterlaboren und den Einsatz modernster CAD/CAM-Technologie entstehen Unikate, die von Ihren natürlichen Zähnen kaum zu unterscheiden sind. Wir verwenden ausschließlich hochwertige, biokompatible Materialien wie Vollkeramik, Zirkonoxid und E.max-Keramik, die nicht nur ästhetisch überzeugen, sondern auch allergische Reaktionen ausschließen. Die digitale Abformung mit dem Intraoralscanner macht unangenehme Abdrücke überflüssig und erhöht die Passgenauigkeit erheblich.",
    procedure: "Die Herstellung von hochwertigem Zahnersatz erfolgt in mehreren präzisen Schritten: Nach der ausführlichen Beratung und Behandlungsplanung führen wir eine umfassende Diagnostik durch, die bei komplexeren Fällen auch eine 3D-Röntgenaufnahme umfassen kann. Bei festsitzendem Zahnersatz werden die tragenden Zähne schonend präpariert, wobei wir nur so viel Zahnsubstanz entfernen wie unbedingt notwendig. Die Abformung erfolgt bevorzugt digital mit unserem Intraoralscanner, was sofort präzise Ergebnisse liefert. Während der Herstellungszeit im Meisterlabor erhalten Sie ein hochwertiges Provisorium, das sowohl funktionell als auch ästhetisch überzeugt. Bei der Einprobe überprüfen wir Passform, Okklusion und Ästhetik gemeinsam mit Ihnen. Nach eventuellen Korrekturen erfolgt die endgültige Eingliederung mit modernen Befestigungszementen. Abschließend instruieren wir Sie ausführlich über die optimale Pflege Ihres neuen Zahnersatzes und vereinbaren regelmäßige Kontrolltermine.",
    benefits: [
      "Wiederherstellung der vollständigen Kaufunktion und Lebensqualität",
      "Natürliche Ästhetik durch modernste Materialien und Techniken",
      "Langlebige Versorgung mit jahrzehntelanger Haltbarkeit",
      "Biokompatible Materialien ohne Allergierisiko",
      "Präzise Passform durch digitale Technologien",
      "Schutz vor Folgeschäden durch Zahnlücken und Kiefergelenksproblemen",
      "Wiederherstellung der natürlichen Gesichtsproportionen",
      "Verbesserung der Aussprache und des Selbstbewusstseins"
    ],
    faqs: [
      {
        question: "Wie lange hält hochwertiger Zahnersatz?",
        answer: "Die Haltbarkeit von Zahnersatz hängt von verschiedenen Faktoren ab. Vollkeramikkronen halten durchschnittlich 15-20 Jahre, bei optimaler Pflege auch länger. Brücken haben eine ähnliche Lebensdauer. Prothesen sollten alle 5-8 Jahre überprüft und eventuell erneuert werden. Implantatgetragener Zahnersatz hält bei guter Pflege oft ein Leben lang. Entscheidend sind regelmäßige Kontrollen, gute Mundhygiene und die Qualität der verwendeten Materialien."
      },
      {
        question: "Was kostet hochwertiger Zahnersatz in Dresden?",
        answer: "Die Kosten für Zahnersatz variieren je nach Art, Material und Umfang der Versorgung. Eine Vollkeramikkrone kostet etwa 800-1200 Euro, eine Brücke je nach Anzahl der Glieder 1500-3000 Euro. Teilprothesen beginnen bei etwa 1500 Euro, Vollprothesen bei 2000 Euro. Die gesetzliche Krankenkasse übernimmt einen Festzuschuss basierend auf dem Befund. Wir erstellen Ihnen gerne einen detaillierten Kostenvoranschlag und beraten Sie über Finanzierungsmöglichkeiten."
      },
      {
        question: "Ist eine Gewöhnungszeit bei neuem Zahnersatz normal?",
        answer: "Eine Gewöhnungsphase von 1-2 Wochen ist völlig normal, besonders bei herausnehmbarem Zahnersatz. In dieser Zeit kann es zu einem Fremdkörpergefühl, vermehrtem Speichelfluss oder leichten Sprachveränderungen kommen. Bei festsitzendem Zahnersatz ist die Gewöhnung meist schneller. Sollten nach 2 Wochen noch Probleme bestehen, vereinbaren Sie einen Kontrolltermin - oft sind nur kleine Anpassungen nötig."
      },
      {
        question: "Kann man mit Zahnersatz alles essen?",
        answer: "Mit hochwertigem, gut sitzendem Zahnersatz können Sie fast alle Speisen genießen. Festsitzender Zahnersatz bietet nahezu die gleiche Kaufunktion wie natürliche Zähne. Bei herausnehmbaren Prothesen sollten Sie anfangs harte oder klebrige Speisen meiden und das Kauen langsam steigern. Implantatgetragener Zahnersatz bietet die beste Kaufunktion und ermöglicht uneingeschränktes Essen."
      },
      {
        question: "Wie pflege ich meinen Zahnersatz richtig?",
        answer: "Die Pflege hängt von der Art des Zahnersatzes ab. Festsitzenden Zahnersatz pflegen Sie wie natürliche Zähne mit Zahnbürste, Zahnseide und Mundspülung. Besonders wichtig ist die Reinigung der Kronenränder. Herausnehmbaren Zahnersatz reinigen Sie täglich mit speziellen Prothesenbürsten und Reinigungstabletten. Zusätzlich empfehlen wir regelmäßige professionelle Reinigungen in unserer Praxis."
      },
      {
        question: "Was ist der Unterschied zwischen verschiedenen Kronenmaterialien?",
        answer: "Vollkeramikkronen bieten die beste Ästhetik und sind metallfrei, eignen sich aber weniger für extreme Kaubelastungen. Zirkonoxidkronen sind extrem stabil und trotzdem ästhetisch ansprechend. Verblend-Metallkeramik-Kronen sind sehr haltbar, aber weniger ästhetisch. Goldkronen sind sehr langlebig und gewebeverträglich, aber wenig ästhetisch. Wir beraten Sie individuell über das optimale Material für Ihre Situation."
      }
    ],
    imageUrl: "https://images.unsplash.com/photo-1535452613787-13042f744779?q=80&w=1770&auto=format&fit=crop"
  },
  {
    id: "implantologie",
    title: "Implantologie",
    shortDescription: "Fest verankerte Zähne durch moderne Implantattechnologie",
    fullDescription: "Zahnimplantate in Dresden von der Zahnarztpraxis Worsch stellen die modernste und komfortabelste Lösung für fehlende Zähne dar. Als künstliche Zahnwurzeln aus biokompatiblem Titan werden Implantate fest im Kieferknochen verankert und bieten die Basis für ästhetischen und funktionellen Zahnersatz. Dr. Worsch verfügt über langjährige Erfahrung in der Implantologie und setzt auf modernste 3D-Diagnostik und computergestützte Planung für präzise und vorhersagbare Ergebnisse. Zahnimplantate bieten gegenüber herkömmlichem Zahnersatz entscheidende Vorteile: Sie erhalten den Kieferknochen, beeinträchtigen gesunde Nachbarzähne nicht und bieten das natürlichste Kau- und Beißgefühl. Ob Einzelzahnimplantat, Brückenversorgung oder implantatgetragene Prothese - wir finden für jeden Fall die optimale Lösung. Durch minimalinvasive Operationstechniken und auf Wunsch auch Sedierung oder Vollnarkose gestalten wir den Eingriff so schonend und angenehm wie möglich. Die hohe Erfolgsquote von über 95% und die Langzeithaltbarkeit machen Implantate zur Investition fürs Leben.",
    procedure: "Die Implantation erfolgt in mehreren sorgfältig geplanten Phasen: Zunächst führen wir eine umfassende Diagnostik mit 3D-Röntgenaufnahme (DVT) durch, um die Knochenstruktur exakt zu beurteilen. Anhand dieser Daten erstellen wir eine computergestützte Planung, die die optimale Position und Größe des Implantats bestimmt. Der chirurgische Eingriff erfolgt unter lokaler Betäubung oder auf Wunsch in Sedierung. Nach einem präzisen Schnitt wird das Implantatbett im Knochen vorbereitet und das Titanimplantat eingesetzt. Bei ausreichendem Knochenangebot können wir oft sofort ein Provisorium einsetzen (Sofortversorgung). Während der Einheilphase von 2-6 Monaten verwächst das Implantat fest mit dem Knochen (Osseointegration). Nach der Freilegung wird ein Aufbau (Abutment) aufgeschraubt und der endgültige Zahnersatz befestigt. Regelmäßige Nachkontrollen sichern den langfristigen Erfolg.",
    benefits: [
      "Fester Sitz und natürliches Kaugefühl wie eigene Zähne",
      "Erhalt des Kieferknochens durch funktionelle Belastung",
      "Schonung gesunder Nachbarzähne (keine Beschleifung)",
      "Höchste Ästhetik und unauffällige Integration",
      "Hohe Erfolgsrate von über 95% bei fachgerechter Durchführung",
      "Langzeithaltbarkeit - oft ein Leben lang",
      "Verbesserung der Lebensqualität und des Selbstbewusstseins",
      "Keine Einschränkungen beim Essen und Sprechen"
    ],
    faqs: [
      {
        question: "Wie schmerzhaft ist eine Implantation?",
        answer: "Eine Implantation ist weniger schmerzhaft als oft befürchtet. Der Eingriff erfolgt unter lokaler Betäubung und ist völlig schmerzfrei. Nach der Operation können für 2-3 Tage leichte bis mäßige Schmerzen auftreten, die sich gut mit Schmerzmitteln behandeln lassen. Die meisten Patienten sind überrascht, wie wenig Beschwerden sie haben. Bei Angst vor der Behandlung bieten wir auch Sedierung oder Vollnarkose an."
      },
      {
        question: "Wie lange halten Zahnimplantate?",
        answer: "Bei guter Pflege und regelmäßigen Kontrollen können Zahnimplantate ein Leben lang halten. Studien zeigen eine Erfolgsquote von über 95% nach 10 Jahren. Entscheidend für die Langzeithaltbarkeit sind eine gute Mundhygiene, regelmäßige professionelle Reinigungen und der Verzicht auf das Rauchen. Der aufgesetzte Zahnersatz (Krone, Brücke) muss eventuell nach 15-20 Jahren erneuert werden, das Implantat selbst bleibt meist erhalten."
      },
      {
        question: "Bin ich für Implantate geeignet?",
        answer: "Die meisten Erwachsenen sind für Implantate geeignet, wenn ausreichend Kieferknochen vorhanden ist und keine schweren Allgemeinerkrankungen vorliegen. Ausschlusskriterien sind unkontrollierter Diabetes, schwere Herz-Kreislauf-Erkrankungen, starkes Rauchen oder bestimmte Medikamente (Bisphosphonate). Bei zu wenig Knochensubstanz können wir in vielen Fällen durch Knochenaufbau die Voraussetzungen schaffen. Eine gründliche Untersuchung klärt Ihre Eignung."
      },
      {
        question: "Was kostet ein Zahnimplantat in Dresden?",
        answer: "Die Kosten für ein Zahnimplantat variieren je nach Aufwand und gewähltem Zahnersatz. Ein Einzelimplantat mit Krone kostet etwa 2500-3500 Euro. Die gesetzliche Krankenkasse übernimmt den Festzuschuss für die Regelversorgung (ca. 400-500 Euro). Private Krankenversicherungen übernehmen oft einen Großteil der Kosten. Wir erstellen Ihnen einen detaillierten Kostenvoranschlag und informieren über Finanzierungsmöglichkeiten."
      },
      {
        question: "Kann man Implantate auch bei wenig Knochen setzen?",
        answer: "Ja, auch bei reduziertem Knochenangebot können oft Implantate gesetzt werden. Moderne Verfahren wie Knochenaufbau (Augmentation), Sinuslift im Oberkiefer oder die Verwendung kurzer Implantate ermöglichen auch in schwierigen Fällen eine Implantation. Manchmal können wir durch sofortigen Knochenaufbau zeitgleich mit der Implantation das gewünschte Ergebnis erzielen. Die 3D-Diagnostik hilft uns, die optimale Strategie zu planen."
      },
      {
        question: "Wie lange dauert die gesamte Implantationsbehandlung?",
        answer: "Die Gesamtbehandlungsdauer variiert je nach Fall. Bei Sofortversorgung können Sie die Praxis mit festem Zahnersatz verlassen. Normalerweise beträgt die Einheilzeit 2-3 Monate im Unterkiefer und 4-6 Monate im Oberkiefer. Bei Knochenaufbau verlängert sich die Behandlung entsprechend. Nach der Einheilung benötigen wir noch 2-3 Termine für die prothetische Versorgung. Insgesamt sollten Sie 3-6 Monate einplanen."
      }
    ],
    imageUrl: "https://images.unsplash.com/photo-1601342630314-8427c39bf3e7?q=80&w=1932&auto=format&fit=crop"
  },
  {
    id: "aesthetische-zahnheilkunde",
    title: "Ästhetische Zahnheilkunde",
    shortDescription: "Strahlend schöne Zähne für Ihr perfektes Lächeln",
    fullDescription: "Die ästhetische Zahnheilkunde in Dresden verbindet modernste zahnmedizinische Techniken mit höchsten ästhetischen Ansprüchen. In der Zahnarztpraxis Worsch bieten wir Ihnen ein umfassendes Spektrum an Behandlungen für Ihr perfektes Lächeln: von professionellem Bleaching über hauchdünne Veneers bis hin zu kompletten Smile-Makeovers. Unser Ziel ist es, Ihre natürliche Schönheit zu unterstreichen und Ihnen zu einem selbstbewussten Lächeln zu verhelfen. Ästhetische Zahnmedizin bedeutet für uns nicht nur oberflächliche Verschönerung, sondern die harmonische Balance zwischen Funktion und Schönheit. Wir analysieren Ihre Gesichtsproportionen, Lippenlinien und natürlichen Zahnfarben, um ein individuelles Behandlungskonzept zu entwickeln. Dabei verwenden wir ausschließlich hochwertige Materialien wie E.max-Keramik für Veneers und professionelle Bleaching-Systeme für schonenste Zahnaufhellung. Durch digitale Lächeln-Planung können Sie Ihr neues Lächeln bereits vor der Behandlung sehen. Unsere minimal-invasiven Verfahren erhalten dabei maximale Zahnsubstanz.",
    procedure: "Die ästhetische Behandlung beginnt mit einer ausführlichen Analyse Ihres Lächelns und Ihrer Wünsche. Wir fotografieren Ihr Lächeln aus verschiedenen Winkeln und führen eine digitale Lächeln-Analyse durch. Bei Veneers erstellen wir zunächst ein Wax-up (Modell) oder eine digitale Simulation Ihres zukünftigen Lächelns. Nach Ihrer Freigabe werden die Zähne minimal präpariert (0,3-0,7mm). Eine präzise Abformung oder digitaler Scan dient als Grundlage für die Herstellung im Meisterlabor. Während der Anfertigungszeit tragen Sie ästhetische Provisorien. Bei der Eingliederung werden die Veneers zunächst anprobiert und bei Bedarf angepasst. Nach Ihrer Freigabe werden sie mit speziellen Klebetechniken dauerhaft befestigt. Beim Bleaching führen wir zunächst eine professionelle Zahnreinigung durch, tragen dann das Aufhellungsgel auf und aktivieren es mit LED-Licht. Der Vorgang wird je nach gewünschtem Ergebnis mehrfach wiederholt.",
    benefits: [
      "Deutliche Steigerung des Selbstbewusstseins und der Ausstrahlung",
      "Natürlich wirkendes Ergebnis durch individuelle Gestaltung",
      "Minimal-invasive Verfahren mit maximalem Substanzerhalt",
      "Langanhaltende Resultate bei guter Pflege (10-15 Jahre)",
      "Sofortige Sichtbarkeit des Behandlungserfolgs",
      "Verbesserung der Gesichtsproportionen und Lippenlinie",
      "Korrektur von Zahnfehlstellungen ohne Zahnspange",
      "Schutzfunktion für die darunterliegenden Zähne"
    ],
    faqs: [
      {
        question: "Wie lange halten Veneers?",
        answer: "Hochwertige Keramik-Veneers halten bei guter Pflege und regelmäßigen Kontrollen 10-15 Jahre oder länger. Die Haltbarkeit hängt von der Qualität des Materials, der Verarbeitung und Ihrer Mundhygiene ab. Entscheidend ist auch, dass Sie harte Gegenstände nicht mit den Zähnen bearbeiten und bei Zähneknirschen eine Knirscherschiene tragen. Bei Beschädigungen können Veneers oft repariert oder einzeln ausgetauscht werden."
      },
      {
        question: "Ist das Aufhellen der Zähne schädlich?",
        answer: "Professionelles Bleaching in der Zahnarztpraxis ist bei sachgemäßer Anwendung unbedenklich. Wir verwenden zugelassene Bleaching-Gele und führen vorher eine gründliche Untersuchung durch. Während der Behandlung können vorübergehend die Zähne empfindlich werden, was aber nach wenigen Tagen wieder verschwindet. Wichtig ist, dass defekte Füllungen vorher erneuert werden und die Behandlung unter zahnärztlicher Aufsicht erfolgt."
      },
      {
        question: "Können Veneers repariert werden?",
        answer: "Kleine Beschädigungen an Veneers können oft repariert werden, ohne das gesamte Veneer zu erneuern. Bei größeren Schäden ist meist ein Austausch notwendig. Da Veneers einzeln gefertigt werden, kann ein beschädigtes Veneer ausgetauscht werden, ohne die anderen zu beeinträchtigen. Wichtig ist, bei Problemen schnell in die Praxis zu kommen, um Folgeschäden zu vermeiden."
      },
      {
        question: "Muss ich meine Zähne für Veneers stark abschleifen lassen?",
        answer: "Moderne Veneers erfordern nur einen minimalen Substanzabtrag von 0,3-0,7mm - das entspricht etwa der Dicke eines Fingernagels. Bei Non-Prep-Veneers ist teilweise gar kein Beschleifen nötig. Der Substanzabtrag ist deutlich geringer als bei Kronen. Durch die dünne Präparation bleibt der Zahn vital und es ist keine Wurzelbehandlung erforderlich."
      },
      {
        question: "Was ist der Unterschied zwischen Veneers und Kronen?",
        answer: "Veneers sind hauchdünne Schalen, die nur auf die Vorderseite der Zähne geklebt werden und minimal Substanz erfordern. Kronen umhüllen den gesamten Zahn und erfordern einen größeren Substanzabtrag. Veneers sind die schonendere Lösung für ästhetische Korrekturen an gesunden Zähnen, während Kronen bei stark geschädigten Zähnen notwendig sind. Veneers eignen sich nur für Frontzähne, Kronen können überall eingesetzt werden."
      },
      {
        question: "Wie viele Nuancen kann man die Zähne aufhellen?",
        answer: "Mit professionellem Bleaching können Zähne um 2-8 Nuancen aufgehellt werden, je nach Ausgangssituation und gewählter Methode. In-Office-Bleaching erzielt meist stärkere Aufhellungen als Home-Bleaching. Gelbe Verfärbungen lassen sich besser aufhellen als graue. Wichtig ist eine realistische Erwartungshaltung - wir zeigen Ihnen vorher anhand einer Farbskala, welches Ergebnis möglich ist."
      }
    ],
    imageUrl: "https://images.unsplash.com/photo-1581701244939-bf25b2f7b691?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: "kinderzahnheilkunde",
    title: "Kinderzahnheilkunde",
    shortDescription: "Behutsame und freundliche Zahnbehandlung für die Kleinsten",
    fullDescription: "Die Kinderzahnheilkunde in Dresden liegt uns besonders am Herzen. In der Zahnarztpraxis Worsch schaffen wir eine vertrauensvolle und entspannte Atmosphäre, in der sich Kinder wohlfühlen und positive Erfahrungen mit der Zahnmedizin sammeln. Unser einfühlsames Team ist speziell für die Behandlung von Kindern geschult und versteht es, auch die kleinsten Patienten zu motivieren und Ängste abzubauen. Die Kinderzahnheilkunde unterscheidet sich grundlegend von der Erwachsenenbehandlung: Milchzähne haben eine andere Struktur, Kinder benötigen altersgerechte Kommunikation und spezielle Behandlungstechniken. Wir setzen auf spielerische Heranführung an die Zahnpflege, kindgerechte Aufklärung über Mundhygiene und präventive Maßnahmen wie Fissurenversiegelung und Fluoridierung. Besonders wichtig ist uns die Früherkennung von Zahn- und Kieferfehlstellungen, um rechtzeitig kieferorthopädische Maßnahmen einleiten zu können. Unser Ziel ist es, dass Kinder gerne zum Zahnarzt kommen und eine lebenslange positive Beziehung zur Zahngesundheit entwickeln.",
    procedure: "Der erste Besuch Ihres Kindes in unserer Praxis ist ein besonderes Erlebnis. Wir nehmen uns viel Zeit, um Ihr Kind spielerisch an die Praxisumgebung zu gewöhnen. Zunächst darf das Kind die Behandlungsgeräte kennenlernen und ausprobieren - der 'Zauberstab' (Bohrer) macht lustige Geräusche, der 'Staubsauger' (Absaugung) kann Wasser wegsaugen. Bei der Untersuchung erklären wir jeden Schritt kindgerecht und verwenden eine für Kinder verständliche Sprache. Die Zähne werden mit einem kleinen Spiegel 'angezählt' und auf Karies oder andere Probleme untersucht. Bei Bedarf führen wir eine professionelle Zahnreinigung durch, wobei wir besonders schonend vorgehen. Behandlungen erfolgen in mehreren kurzen Terminen, um die Konzentrationsfähigkeit der Kinder nicht zu überfordern. Nach jeder erfolgreichen Behandlung gibt es eine kleine Überraschung aus unserer Schatzkiste. Wir beziehen die Eltern aktiv in die Aufklärung über richtige Zahnpflege und zahngesunde Ernährung ein.",
    benefits: [
      "Aufbau einer positiven Beziehung zur Zahngesundheit von klein auf",
      "Vermeidung von Zahnarztangst durch einfühlsame Betreuung",
      "Altersgerechte Behandlung und kindgerechte Kommunikation",
      "Frühzeitige Erkennung und Behandlung von Zahn- und Kieferproblemen",
      "Effektive Kariesprophylaxe durch Fluoridierung und Versiegelung",
      "Aufklärung über richtige Zahnpflege und gesunde Ernährung",
      "Individuelle Betreuung in entspannter Atmosphäre",
      "Grundstein für lebenslange Zahngesundheit"
    ],
    faqs: [
      {
        question: "Ab welchem Alter sollte mein Kind zum ersten Mal zum Zahnarzt?",
        answer: "Wir empfehlen den ersten Zahnarztbesuch mit dem Durchbruch des ersten Milchzahns, spätestens aber zum ersten Geburtstag. Diese frühen Besuche dienen der spielerischen Gewöhnung und Aufklärung der Eltern. Zwischen dem 2. und 3. Lebensjahr sollten dann regelmäßige Kontrolltermine alle 6 Monate stattfinden. Je früher Kinder positive Erfahrungen beim Zahnarzt sammeln, desto entspannter sind spätere Behandlungen."
      },
      {
        question: "Müssen Milchzähne überhaupt behandelt werden?",
        answer: "Ja, unbedingt! Milchzähne erfüllen wichtige Funktionen: Sie halten den Platz für die bleibenden Zähne frei, sind wichtig für die Sprachentwicklung und das Kauen. Karies an Milchzähnen kann sich auf die bleibenden Zähne übertragen und zu Schmerzen und Entzündungen führen. Außerdem ist eine frühzeitige Behandlung meist weniger aufwendig als das Abwarten bis zum Zahnwechsel."
      },
      {
        question: "Wie kann ich mein Kind auf den Zahnarztbesuch vorbereiten?",
        answer: "Sprechen Sie positiv über den Zahnarztbesuch und vermeiden Sie Wörter wie 'Schmerzen' oder 'Spritze'. Lesen Sie Kinderbücher über Zahnarztbesuche vor oder spielen Sie 'Zahnarzt' zu Hause. Kommen Sie eventuell vorher einmal mit zur eigenen Behandlung, damit Ihr Kind die Praxis kennenlernt. Bleiben Sie während der Behandlung ruhig und vertrauen Sie unserem Team - Kinder spüren die Nervosität der Eltern."
      },
      {
        question: "Was ist eine Fissurenversiegelung und wann ist sie sinnvoll?",
        answer: "Eine Fissurenversiegelung verschließt die Grübchen und Rillen auf den Kauflächen der Backenzähne mit einem dünnfließenden Kunststoff. Diese Fissuren sind besonders kariesanfällig, da sie schwer zu reinigen sind. Die Versiegelung wird meist bei den ersten bleibenden Backenzähnen (6-Jahr-Molaren) um das 6.-7. Lebensjahr durchgeführt. Sie ist schmerzfrei und reduziert das Kariesrisiko um bis zu 80%."
      },
      {
        question: "Ab wann sollten Kinder ihre Zähne selbst putzen?",
        answer: "Kinder können ab etwa 2-3 Jahren beginnen, unter Anleitung ihre Zähne zu putzen. Bis zum Schulalter (6-7 Jahre) sollten Eltern aber immer nachputzen, da Kinder noch nicht die motorischen Fähigkeiten für eine gründliche Reinigung haben. Die Regel lautet: 'Bis das Kind flüssig schreiben kann, sollten Eltern die Zähne nachputzen.' Wichtig ist, das Zähneputzen spielerisch zu gestalten und zu einer festen Routine zu machen."
      },
      {
        question: "Wie schädlich ist Daumenlutschen für die Zähne?",
        answer: "Daumenlutschen ist bis zum 3.-4. Lebensjahr normal und unbedenklich. Hält es länger an, kann es zu Zahnfehlstellungen und Kieferverformungen führen. Der Zeitpunkt des Aufhörens ist wichtiger als die Intensität. Wir beraten Sie gerne über sanfte Entwöhnungsmethoden. Meist hören Kinder von selbst auf, wenn sie in den Kindergarten kommen und andere Interessen entwickeln."
      }
    ],
    imageUrl: "https://images.unsplash.com/photo-1494949837018-3d132402ffce?q=80&w=1874&auto=format&fit=crop"
  }
];
```

Jetzt erweitere ich auch die ServiceContentDefault Komponente, um die strukturierteren und längeren Inhalte besser darzustellen:

<lov-write file_path="src/components/services/ServiceContentDefault.tsx">
import React from 'react';

interface ServiceContentDefaultProps {
  title: string;
  fullDescription: string;
  procedure?: string;
  isZahnersatz?: boolean;
}

const ServiceContentDefault: React.FC<ServiceContentDefaultProps> = ({
  title,
  fullDescription,
  procedure,
  isZahnersatz = false
}) => {
  // Split description into paragraphs for better readability
  const descriptionParagraphs = fullDescription.split('. ').reduce((acc, sentence, index, array) => {
    const sentenceWithPeriod = index < array.length - 1 ? sentence + '.' : sentence;
    
    if (index === 0) {
      acc.push([sentenceWithPeriod]);
    } else if (index % 3 === 0) {
      acc.push([sentenceWithPeriod]);
    } else {
      acc[acc.length - 1].push(sentenceWithPeriod);
    }
    
    return acc;
  }, [] as string[][]).map(paragraphSentences => paragraphSentences.join(' '));

  return (
    <>
      {isZahnersatz ? (
        <>
          <h2 className="mb-6 text-dental-blue">Hochwertiger Zahnersatz in Dresden für Ihre Zahngesundheit</h2>
          <div className="prose prose-lg max-w-none text-dental-gray">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
              <div>
                <p>
                  <strong>Zahnersatz in Dresden</strong> von höchster Qualität ist unsere Spezialität. In der Zahnarztpraxis Worsch bieten wir Ihnen individuell angepasste Lösungen, die in Funktion und Ästhetik höchsten Ansprüchen gerecht werden.
                </p>
                <p>
                  Unser erfahrenes Team für <strong>hochwertigen Zahnersatz Dresden</strong> setzt auf modernste Materialien und Techniken für ein natürliches Ergebnis, das kaum vom eigenen Zahn zu unterscheiden ist.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1770&auto=format&fit=crop"
                  alt="Hochwertiger Zahnersatz - Zahnarztpraxis Worsch Dresden"
                  className="w-full h-auto"
                />
              </div>
            </div>
            
            <h3 className="text-2xl font-medium mt-10 mb-6 text-dental-blue">Unsere Zahnersatz-Lösungen für Sie in Dresden</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mb-10">
              <div className="bg-dental-beige p-5 rounded-lg">
                <h4 className="text-xl font-medium mb-3 text-dental-blue">Zahnkronen Dresden</h4>
                <p className="text-base">
                  Hochwertige Vollkeramikkronen für einzelne Zähne, die stark geschädigt sind. Natürliche Optik und höchste Stabilität für Ihre Zahngesundheit.
                </p>
              </div>
              
              <div className="bg-dental-beige p-5 rounded-lg">
                <h4 className="text-xl font-medium mb-3 text-dental-blue">Zahnbrücken Dresden</h4>
                <p className="text-base">
                  Festsitzender Zahnersatz für Lücken zwischen gesunden Zähnen. Wiederherstellung der Kaufunktion und Ästhetik ohne Implantate.
                </p>
              </div>
              
              <div className="bg-dental-beige p-5 rounded-lg">
                <h4 className="text-xl font-medium mb-3 text-dental-blue">Teilprothesen & Vollprothesen</h4>
                <p className="text-base">
                  Herausnehmbare Lösungen für größere Zahnlücken oder zahnlose Kiefer. Modern, komfortabel und natürlich wirkend.
                </p>
              </div>
              
              <div className="bg-dental-beige p-5 rounded-lg">
                <h4 className="text-xl font-medium mb-3 text-dental-blue">Implantatgetragener Zahnersatz</h4>
                <p className="text-base">
                  Die Premium-Lösung: Fest verankerter Zahnersatz auf Implantaten für höchsten Tragekomfort und Ästhetik. Wie eigene Zähne.
                </p>
              </div>
            </div>
            
            <div className="mt-12 pt-4">
              <h3 className="text-2xl font-medium mb-4 text-dental-blue">Materialien für Ihren Zahnersatz in Dresden</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
                <div className="rounded-lg overflow-hidden shadow-lg order-2 md:order-1">
                  <img 
                    src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1740&auto=format&fit=crop" 
                    alt="Vollkeramischer Zahnersatz - Zahnarztpraxis Worsch Dresden"
                    className="w-full h-auto"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <p className="mb-4">
                    In der Zahnarztpraxis Worsch in Dresden verarbeiten wir ausschließlich hochwertige Materialien für Ihren Zahnersatz:
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong>Vollkeramik:</strong> Höchste Ästhetik, biokompatibel und metallfrei</li>
                    <li><strong>Zirkonoxid:</strong> Extrem belastbar und gleichzeitig ästhetisch ansprechend</li>
                    <li><strong>E.max Keramik:</strong> Ideal für Frontzähne mit naturidentischer Lichtdurchlässigkeit</li>
                    <li><strong>Hochwertige Kunststoffe:</strong> Für komfortable Teilprothesen und Interimslösungen</li>
                  </ul>
                  <p className="mt-4">
                    Wir arbeiten eng mit deutschen Meisterlaboren zusammen, um Ihnen <strong>Zahnersatz in Dresden</strong> in handwerklicher Perfektion bieten zu können.
                  </p>
                </div>
              </div>
            </div>
            
            {procedure && (
              <>
                <h3 className="text-2xl font-medium mt-8 mb-4 text-dental-blue">So entstehen Ihre neuen Zähne: Ablauf der Behandlung</h3>
                <div className="bg-dental-beige rounded-lg p-6">
                  <ol className="list-decimal list-inside space-y-4">
                    <li className="font-medium text-dental-blue">Ausführliche Beratung und Planung
                      <p className="font-normal text-dental-gray mt-1">Wir analysieren Ihre Situation, besprechen die Möglichkeiten und erstellen einen individuellen Behandlungsplan.</p>
                    </li>
                    <li className="font-medium text-dental-blue">Digitale Abformung mit Intraoralscanner
                      <p className="font-normal text-dental-gray mt-1">Präzise und angenehm ohne unangenehme Abformmaterialien (oder klassische Abformung, falls erforderlich).</p>
                    </li>
                    <li className="font-medium text-dental-blue">Vorbereitung der Zähne
                      <p className="font-normal text-dental-gray mt-1">Bei festsitzendem Zahnersatz werden die betreffenden Zähne schonend präpariert.</p>
                    </li>
                    <li className="font-medium text-dental-blue">Provisorische Versorgung
                      <p className="font-normal text-dental-gray mt-1">Während der Herstellungsphase erhalten Sie ein hochwertiges Provisorium.</p>
                    </li>
                    <li className="font-medium text-dental-blue">Anfertigung im Meisterlabor
                      <p className="font-normal text-dental-gray mt-1">Ihr <strong>individueller Zahnersatz in Dresden</strong> wird nach höchsten Standards gefertigt.</p>
                    </li>
                    <li className="font-medium text-dental-blue">Einprobe und Farbanpassung
                      <p className="font-normal text-dental-gray mt-1">Für ein perfektes Ergebnis wird der Zahnersatz angepasst und die Farbe optimal abgestimmt.</p>
                    </li>
                    <li className="font-medium text-dental-blue">Eingliederung und Nachsorge
                      <p className="font-normal text-dental-gray mt-1">Nach der finalen Eingliederung beraten wir Sie zur optimalen Pflege Ihres Zahnersatzes.</p>
                    </li>
                  </ol>
                </div>
              </>
            )}
          </div>
        </>
      ) : (
        <>
          <h2 className="mb-6 text-dental-blue">Über {title}</h2>
          <div className="prose prose-lg max-w-none text-dental-gray">
            {/* Strukturierte Darstellung der erweiterten Beschreibung */}
            <div className="space-y-6">
              {descriptionParagraphs.map((paragraph, index) => (
                <p key={index} className="text-lg leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
            
            {procedure && (
              <>
                <h3 className="text-2xl font-medium mt-10 mb-6 text-dental-blue">Ablauf der Behandlung</h3>
                <div className="bg-dental-beige rounded-lg p-6">
                  <div className="text-lg leading-relaxed space-y-4">
                    {procedure.split('. ').map((sentence, index, array) => {
                      const sentenceWithPeriod = index < array.length - 1 ? sentence + '.' : sentence;
                      
                      // Check if sentence starts with common procedure step indicators
                      const isStepSentence = sentenceWithPeriod.match(/^(Zunächst|Anschließend|Nach|Bei|Während|Abschließend|Der|Die|Zuerst)/);
                      
                      if (isStepSentence && index > 0) {
                        return (
                          <p key={index} className="mt-4 font-medium text-dental-blue">
                            {sentenceWithPeriod}
                          </p>
                        );
                      }
                      
                      return (
                        <p key={index} className={index === 0 ? "font-medium text-dental-blue" : ""}>
                          {sentenceWithPeriod}
                        </p>
                      );
                    })}
                  </div>
                </div>
              </>
            )}
            
            {/* Zusätzliche Informationsbox für wichtige Keywords */}
            <div className="mt-10 bg-gradient-to-r from-dental-turquoise/10 to-dental-blue/10 rounded-lg p-6 border-l-4 border-dental-turquoise">
              <h4 className="text-xl font-medium mb-3 text-dental-blue">
                Warum {title} in der Zahnarztpraxis Worsch Dresden?
              </h4>
              <ul className="space-y-2 text-dental-gray">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-dental-turquoise rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Modernste Technologie und bewährte Verfahren
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-dental-turquoise rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Erfahrenes und einfühlsames Praxisteam
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-dental-turquoise rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Individuelle Beratung und Behandlungsplanung
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-dental-turquoise rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Zentrale Lage in Dresden mit guter Erreichbarkeit
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ServiceContentDefault;
```
