import { agents } from "@/data/agents";
import { blogPosts, services } from "@/data/services";
import { locations } from "@/data/locations";
import { properties } from "@/data/properties";
import { faqs, testimonials } from "@/data/testimonials";

export function getFeaturedProperties() {
  return properties.filter((property) => property.featured).slice(0, 6);
}

export function getPropertyBySlug(slug: string) {
  return properties.find((property) => property.slug === slug);
}

export function getSimilarProperties(slug: string, city: string, type: string) {
  return properties
    .filter((property) => property.slug !== slug && (property.city.en === city || property.type.en === type))
    .slice(0, 3);
}

export { agents, blogPosts, faqs, locations, properties, services, testimonials };
