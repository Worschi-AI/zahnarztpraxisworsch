
export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote: "Ich hatte immer Angst vor dem Zahnarzt, aber Dr. Worsch und sein Team haben mich so einfühlsam behandelt, dass ich mich jetzt bei jedem Besuch wohl fühle. Besonders die moderne Ausstattung und die schmerzfreie Behandlung haben mich überzeugt.",
    author: "Michael K.",
    rating: 5
  },
  {
    id: "2",
    quote: "Die Praxis Worsch ist für mich die erste Adresse, wenn es um Zahngesundheit geht. Die Prophylaxe-Behandlungen sind gründlich, und das Team nimmt sich immer Zeit für eine ausführliche Beratung. Ich bin seit Jahren treuer Patient.",
    author: "Sandra M.",
    rating: 5
  },
  {
    id: "3",
    quote: "Meine neue Zahnkrone passt perfekt und sieht völlig natürlich aus. Die Beratung war umfassend, und alle meine Fragen wurden geduldig beantwortet. Ich kann die Praxis Worsch uneingeschränkt weiterempfehlen.",
    author: "Thomas G.",
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
