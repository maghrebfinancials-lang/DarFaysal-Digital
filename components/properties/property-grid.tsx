import type { Locale, Property } from "@/types";
import type { Dictionary } from "@/lib/i18n";
import { PropertyCard } from "@/components/properties/property-card";

export function PropertyGrid({
  properties,
  locale,
  dict,
}: {
  properties: Property[];
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} locale={locale} dict={dict} />
      ))}
    </div>
  );
}
