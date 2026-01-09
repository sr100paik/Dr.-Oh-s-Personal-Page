
export interface ServicePackage {
  title: string;
  description: string;
  target: string;
  features: string[];
  process: string[];
}

export interface Insight {
  id: string;
  category: string;
  title: string;
  summary: string;
  content: string;
}

export interface Testimonial {
  name: string;
  position: string;
  company: string;
  text: string;
}
