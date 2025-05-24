
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
