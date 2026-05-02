import { Bath, BedDouble, Car, MapPin, Maximize, Trees, Waves } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { formatPrice } from "@/lib/utils";
import { localize, type Dictionary } from "@/lib/i18n";
import type { Locale, Property } from "@/types";

export function PropertyHighlights({
  property,
  locale,
  dict,
}: {
  property: Property;
  locale: Locale;
  dict: Dictionary;
}) {
  const highlights = [
    { icon: BedDouble, label: dict.common.bedrooms, value: property.bedrooms || "Studio" },
    { icon: Bath, label: dict.common.bathrooms, value: property.bathrooms || "-" },
    { icon: Maximize, label: dict.common.area, value: `${property.area} m2` },
    { icon: Car, label: dict.common.parking, value: property.parking || "-" },
    { icon: Waves, label: dict.common.pool, value: property.hasPool ? dict.common.yes : dict.common.no },
    { icon: Trees, label: dict.common.garden, value: property.hasGarden ? dict.common.yes : dict.common.no },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center gap-3">
        <Badge variant="accent">{property.status === "sale" ? dict.common.forSale : dict.common.forRent}</Badge>
        <Badge>{localize(locale, property.type)}</Badge>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 text-accent" />
          {localize(locale, property.address)}
        </div>
      </div>
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="space-y-4">
          <h1 className="max-w-3xl font-serif text-5xl leading-none text-primary md:text-6xl">{localize(locale, property.title)}</h1>
          <p className="max-w-2xl text-base leading-7 text-muted-foreground">{localize(locale, property.description)}</p>
        </div>
        <div className="rounded-[28px] bg-primary p-6 text-white shadow-luxury">
          <p className="text-xs uppercase tracking-[0.26em] text-white/60">
            {property.status === "sale" ? dict.common.asking : dict.common.monthly}
          </p>
          <p className="mt-2 text-3xl font-semibold">{formatPrice(property.price, property.currency)}</p>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {highlights.map((item) => (
          <div key={item.label} className="rounded-[24px] border border-border bg-white p-5 shadow-soft">
            <item.icon className="h-5 w-5 text-accent" />
            <p className="mt-4 text-sm text-muted-foreground">{item.label}</p>
            <p className="mt-1 text-lg font-semibold text-primary">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
