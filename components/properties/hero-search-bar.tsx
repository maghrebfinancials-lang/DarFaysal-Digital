"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cities, propertyTypes } from "@/data/constants";
import { getLocalizedPath, type Dictionary } from "@/lib/i18n";
import { slugify } from "@/lib/utils";
import type { Locale } from "@/types";

const localizedTypeLabel = (locale: Locale, value: string) =>
  locale === "fr"
    ? {
        Apartment: "Appartement",
        Villa: "Villa",
        Riad: "Riad",
        Commercial: "Commercial",
        Land: "Terrain",
      }[value] ?? value
    : value;

export function HeroSearchBar({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [status, setStatus] = useState("sale");
  const [city, setCity] = useState("Marrakech");
  const [type, setType] = useState("all");

  const href = useMemo(() => {
    const params = new URLSearchParams();
    params.set("status", status);
    params.set("city", city);
    if (type !== "all") {
      params.set("type", slugify(type));
    }
    return `${getLocalizedPath(locale, "properties")}?${params.toString()}`;
  }, [city, locale, status, type]);

  return (
    <div className="glass-panel rounded-[28px] p-4 md:p-5">
      <div className="grid gap-3 md:grid-cols-[1fr_1fr_1fr_auto]">
        <select
          className="h-12 rounded-2xl border border-white/15 bg-white/95 px-4 text-sm text-primary"
          value={status}
          onChange={(event) => setStatus(event.target.value)}
          aria-label={dict.listings.buyOrRent}
        >
          <option value="sale">{dict.listings.buy}</option>
          <option value="rent">{dict.listings.rent}</option>
        </select>
        <select
          className="h-12 rounded-2xl border border-white/15 bg-white/95 px-4 text-sm text-primary"
          value={city}
          onChange={(event) => setCity(event.target.value)}
          aria-label={dict.common.city}
        >
          {cities.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <select
          className="h-12 rounded-2xl border border-white/15 bg-white/95 px-4 text-sm text-primary"
          value={type}
          onChange={(event) => setType(event.target.value)}
          aria-label={dict.common.propertyType}
        >
          <option value="all">{dict.common.allTypes}</option>
          {propertyTypes.map((item) => (
            <option key={item} value={item}>
              {localizedTypeLabel(locale, item)}
            </option>
          ))}
        </select>
        <Button asChild variant="accent" size="lg" className="w-full">
          <Link href={href}>
            <Search className="h-4 w-4" />
            {dict.common.explore}
          </Link>
        </Button>
      </div>
    </div>
  );
}
