export type Locale = "en" | "fr";

export type LocalizedText = Record<Locale, string>;
export type LocalizedList = Record<Locale, string[]>;

export type PropertyStatus = "sale" | "rent";

export interface Agent {
  id: string;
  name: string;
  role: LocalizedText;
  phone: string;
  email: string;
  whatsapp: string;
  image: string;
  bio: LocalizedText;
}

export interface Property {
  id: string;
  title: LocalizedText;
  slug: string;
  status: PropertyStatus;
  type: LocalizedText;
  price: number;
  currency: string;
  city: LocalizedText;
  neighborhood: LocalizedText;
  address: LocalizedText;
  bedrooms: number;
  bathrooms: number;
  area: number;
  parking: number;
  featured: boolean;
  furnished: boolean;
  hasPool: boolean;
  hasGarden: boolean;
  hasTerrace: boolean;
  description: LocalizedText;
  shortDescription: LocalizedText;
  features: LocalizedList;
  amenities: LocalizedList;
  images: string[];
  coordinates: {
    lat: number;
    lng: number;
  };
  agent: Agent;
  createdAt: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: LocalizedText;
  company?: string;
  quote: LocalizedText;
  image: string;
}

export interface LocationHighlight {
  id: string;
  name: LocalizedText;
  city: LocalizedText;
  description: LocalizedText;
  image: string;
  propertyCount: number;
}

export interface Service {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  icon: string;
  bullets: LocalizedList;
}

export interface BlogPost {
  id: string;
  title: LocalizedText;
  slug: string;
  excerpt: LocalizedText;
  content: LocalizedList;
  coverImage: string;
  category: LocalizedText;
  author: string;
  publishedAt: string;
  readTime: LocalizedText;
}

export interface FAQItem {
  id: string;
  question: LocalizedText;
  answer: LocalizedText;
}
