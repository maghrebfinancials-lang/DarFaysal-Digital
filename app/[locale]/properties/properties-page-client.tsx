"use client";

import { useMemo, useState } from "react";

import { PropertyFilters, type PropertyFilterState } from "@/components/properties/property-filters";
import { PropertyGrid } from "@/components/properties/property-grid";
import { SearchEmptyState } from "@/components/shared/search-empty-state";
import { localize, type Dictionary } from "@/lib/i18n";
import type { Locale, Property } from "@/types";

function filterProperties(properties: Property[], filters: PropertyFilterState, locale: Locale) {
  return properties
    .filter((property) => {
      if (filters.status !== "all" && property.status !== filters.status) return false;
      if (filters.city !== "all" && localize(locale, property.city) !== filters.city && property.city.en !== filters.city) return false;
      if (
        filters.neighborhood !== "all" &&
        localize(locale, property.neighborhood) !== filters.neighborhood &&
        property.neighborhood.en !== filters.neighborhood
      )
        return false;
      if (filters.type !== "all" && property.type.en !== filters.type) return false;
      if (filters.maxPrice && property.price > Number(filters.maxPrice)) return false;
      if (filters.minArea && property.area < Number(filters.minArea)) return false;
      if (filters.bedrooms !== "any" && property.bedrooms < Number(filters.bedrooms)) return false;
      if (filters.bathrooms !== "any" && property.bathrooms < Number(filters.bathrooms)) return false;
      if (filters.furnished && !property.furnished) return false;
      if (filters.parking && property.parking < 1) return false;
      if (filters.pool && !property.hasPool) return false;
      if (filters.garden && !property.hasGarden) return false;
      if (filters.terrace && !property.hasTerrace) return false;
      if (filters.featured && !property.featured) return false;
      return true;
    })
    .sort((a, b) => {
      switch (filters.sort) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "area-desc":
          return b.area - a.area;
        default:
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      }
    });
}

export function PropertiesPageClient({
  properties,
  locale,
  dict,
}: {
  properties: Property[];
  locale: Locale;
  dict: Dictionary;
}) {
  const [filters, setFilters] = useState<PropertyFilterState>({
    status: "all",
    city: "all",
    neighborhood: "all",
    type: "all",
    maxPrice: "",
    bedrooms: "any",
    bathrooms: "any",
    minArea: "",
    furnished: false,
    parking: false,
    pool: false,
    garden: false,
    terrace: false,
    featured: false,
    sort: "newest",
  });

  const filteredProperties = useMemo(() => filterProperties(properties, filters, locale), [filters, properties, locale]);

  return (
    <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
      <div className="space-y-4">
        <PropertyFilters onFiltersChange={setFilters} dict={dict} />
      </div>
      <div className="space-y-6">
        <div className="flex flex-col gap-3 rounded-[28px] border border-border bg-white p-5 shadow-soft sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-accent">{dict.listings.searchResults}</p>
            <h2 className="mt-2 font-serif text-3xl text-primary">
              {filteredProperties.length} {dict.listings.available}
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-muted-foreground">{dict.listings.description}</p>
        </div>
        {filteredProperties.length ? (
          <PropertyGrid properties={filteredProperties} locale={locale} dict={dict} />
        ) : (
          <SearchEmptyState locale={locale} dict={dict} />
        )}
      </div>
    </div>
  );
}
