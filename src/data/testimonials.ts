export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote: "Ein sehr netter und kompetenter Zahnarzt,das Team um ihn herum ist einfach nur Spitze und alle dort wissen was sie tun. Selbst im Notfall wird einem dort schnell geholfen. Ich war Angstpatient bin es seit fasst 3 Jahren aber nicht mehr, mir wurde dort jede Angst genommen und Ich genieße jede Behandlung mittlerweile. Ich hoffe das es so bleibt und ich dort noch lange hingehen kann. Danke weiter so",
    author: "Sven K.",
    rating: 5
  },
  {
    id: "2",
    quote: "Ich bin seit mehreren Jahrzehnten hier in Behandlung und kann ebenfalls nur Gutes berichten. Das Personal ist durch die Bank weg sehr zuvorkommend und immer freundlich, die Praxis sehr gemütlich. Nachdem ich bei meinem vorherigen Zahnarzt sehr große Probleme hatte, fühle ich mich hier nun seit Jahren wunderbar aufgehoben. Danke!",
    author: "Denise W.",
    rating: 5
  },
  {
    id: "3",
    quote: "Dr. Worsch und sein Praxis Team kann ich nur in den höchsten Tönen loben 👍👍👍 Absolut Spitze, fachlich sehr kompetent und einfühlsam! Meine absolute Empfehlung! und herzlichen Dank für jede Behandlung 👍👍👍",
    author: "Uwe K.",
    rating: 5
  },
  {
    id: "4",
    quote: "Bei Dr. Müller fühlen sich meine Kinder bestens aufgehoben. Sie hat eine besondere Art, mit den Kleinen umzugehen, sodass der Zahnarztbesuch für sie mittlerweile ein positives Erlebnis ist. Das erleichtert uns als Eltern vieles.",
    author: "Familie Schneider",
    rating: 5
  },
  {
    id: "5",
    quote: "Nach meiner Zahnaufhellung bekomme ich ständig Komplimente für mein strahlendes Lächeln. Die Beratung war ehrlich und kompetent, und das Ergebnis übertrifft meine Erwartungen. Vielen Dank an das gesamte Team!",
    author: "Julia B.",
    rating: 4
  }
];
