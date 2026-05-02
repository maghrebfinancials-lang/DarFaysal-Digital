"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { SlidersHorizontal, Sparkles, X } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { cities, neighborhoods, propertyTypes } from "@/data/constants";
import { slugify } from "@/lib/utils";
import type { Dictionary } from "@/lib/i18n";

const localizedTypeLabel = (localeIsFr: boolean, value: string) =>
  localeIsFr
    ? {
        Apartment: "Appartement",
        Villa: "Villa",
        Riad: "Riad",
        Commercial: "Commercial",
        Land: "Terrain",
      }[value] ?? value
    : value;

const defaultFilters = {
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
};

export type PropertyFilterState = typeof defaultFilters;

function getActiveFilterLabels(filters: PropertyFilterState, dict: Dictionary) {
  const localeIsFr = dict.locale === "fr";
  const labels: string[] = [];
  if (filters.status !== "all") labels.push(filters.status === "sale" ? dict.listings.buy : dict.listings.rent);
  if (filters.city !== "all") labels.push(filters.city);
  if (filters.neighborhood !== "all") labels.push(filters.neighborhood);
  if (filters.type !== "all") labels.push(localizedTypeLabel(localeIsFr, filters.type));
  if (filters.maxPrice) labels.push(localeIsFr ? `Jusqu'a ${filters.maxPrice} MAD` : `Up to ${filters.maxPrice} MAD`);
  if (filters.minArea) labels.push(`${filters.minArea}+ m2`);
  if (filters.bedrooms !== "any") labels.push(`${filters.bedrooms}+ ${dict.common.bedrooms.toLowerCase()}`);
  if (filters.bathrooms !== "any") labels.push(`${filters.bathrooms}+ ${dict.common.bathrooms.toLowerCase()}`);
  if (filters.furnished) labels.push(dict.common.furnished);
  if (filters.parking) labels.push(dict.common.parking);
  if (filters.pool) labels.push(dict.common.pool);
  if (filters.garden) labels.push(dict.common.garden);
  if (filters.terrace) labels.push(dict.common.terrace);
  if (filters.featured) labels.push(dict.common.featured);
  return labels;
}

function FiltersForm({
  value,
  onChange,
  onReset,
  compact = false,
  dict,
}: {
  value: PropertyFilterState;
  onChange: (next: PropertyFilterState) => void;
  onReset: () => void;
  compact?: boolean;
  dict: Dictionary;
}) {
  const localeIsFr = dict.locale === "fr";
  return (
    <div className="grid gap-4">
      <div className="grid gap-4 md:grid-cols-2">
        <select className="h-12 rounded-2xl border border-border bg-white px-4 text-sm" value={value.status} onChange={(e) => onChange({ ...value, status: e.target.value })}>
          <option value="all">{dict.listings.buyOrRent}</option>
          <option value="sale">{dict.listings.buy}</option>
          <option value="rent">{dict.listings.rent}</option>
        </select>
        <select className="h-12 rounded-2xl border border-border bg-white px-4 text-sm" value={value.city} onChange={(e) => onChange({ ...value, city: e.target.value })}>
          <option value="all">{dict.common.allCities}</option>
          {cities.map((city) => (
            <option key={city}>{city}</option>
          ))}
        </select>
        <select className="h-12 rounded-2xl border border-border bg-white px-4 text-sm" value={value.neighborhood} onChange={(e) => onChange({ ...value, neighborhood: e.target.value })}>
          <option value="all">{dict.common.allNeighborhoods}</option>
          {neighborhoods.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
        <select className="h-12 rounded-2xl border border-border bg-white px-4 text-sm" value={value.type} onChange={(e) => onChange({ ...value, type: e.target.value })}>
          <option value="all">{dict.common.allTypes}</option>
          {propertyTypes.map((item) => (
            <option key={item} value={item}>
              {localizedTypeLabel(localeIsFr, item)}
            </option>
          ))}
        </select>
        <Input placeholder={dict.listings.maxPrice} value={value.maxPrice} onChange={(e) => onChange({ ...value, maxPrice: e.target.value })} />
        <Input placeholder={dict.listings.minArea} value={value.minArea} onChange={(e) => onChange({ ...value, minArea: e.target.value })} />
        <select className="h-12 rounded-2xl border border-border bg-white px-4 text-sm" value={value.bedrooms} onChange={(e) => onChange({ ...value, bedrooms: e.target.value })}>
          <option value="any">{dict.common.anyBedrooms}</option>
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <option key={item} value={String(item)}>
              {item}+ {dict.common.bedrooms.toLowerCase()}
            </option>
          ))}
        </select>
        <select className="h-12 rounded-2xl border border-border bg-white px-4 text-sm" value={value.bathrooms} onChange={(e) => onChange({ ...value, bathrooms: e.target.value })}>
          <option value="any">{dict.common.anyBathrooms}</option>
          {[1, 2, 3, 4, 5].map((item) => (
            <option key={item} value={String(item)}>
              {item}+ {dict.common.bathrooms.toLowerCase()}
            </option>
          ))}
        </select>
      </div>
      <select className="h-12 rounded-2xl border border-border bg-white px-4 text-sm" value={value.sort} onChange={(e) => onChange({ ...value, sort: e.target.value })}>
        <option value="newest">{dict.common.sortNewest}</option>
        <option value="price-asc">{dict.common.sortPriceAsc}</option>
        <option value="price-desc">{dict.common.sortPriceDesc}</option>
        <option value="area-desc">{dict.common.sortAreaDesc}</option>
      </select>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {[
          ["furnished", dict.common.furnished],
          ["parking", dict.common.parking],
          ["pool", dict.common.pool],
          ["garden", dict.common.garden],
          ["terrace", dict.common.terrace],
          ["featured", dict.common.featured],
        ].map(([key, label]) => (
          <label key={key} className="flex items-center gap-3 rounded-2xl border border-border bg-white px-4 py-3 text-sm">
            <input
              type="checkbox"
              checked={value[key as keyof PropertyFilterState] as boolean}
              onChange={(e) => onChange({ ...value, [key]: e.target.checked })}
            />
            {label}
          </label>
        ))}
      </div>
      <div className="flex items-center justify-between gap-3">
        <Button type="button" variant="ghost" className="justify-start px-0" onClick={onReset}>
          {dict.cta.clearFilters}
        </Button>
        {compact ? (
          <DialogClose asChild>
            <Button type="button" variant="accent">
              {dict.cta.showResults}
            </Button>
          </DialogClose>
        ) : null}
      </div>
    </div>
  );
}

export function PropertyFilters({
  onFiltersChange,
  dict,
}: {
  onFiltersChange: (filters: PropertyFilterState) => void;
  dict: Dictionary;
}) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const initial = useMemo<PropertyFilterState>(() => {
    return {
      ...defaultFilters,
      status: searchParams.get("status") ?? "all",
      city: searchParams.get("city") ?? "all",
      neighborhood: searchParams.get("neighborhood") ?? "all",
      type:
        propertyTypes.find((type) => slugify(type) === (searchParams.get("type") ?? "")) ??
        searchParams.get("type") ??
        "all",
      sort: searchParams.get("sort") ?? "newest",
    };
  }, [searchParams]);

  const [filters, setFilters] = useState<PropertyFilterState>(initial);
  const activeFilterLabels = useMemo(() => getActiveFilterLabels(filters, dict), [filters, dict]);

  useEffect(() => {
    setFilters(initial);
  }, [initial]);

  useEffect(() => {
    onFiltersChange(filters);
    const params = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (!value || value === "all" || value === "any" || value === false || value === "newest") {
        return;
      }
      params.set(key, key === "type" ? slugify(String(value)) : String(value));
    });
    router.replace(params.toString() ? `${pathname}?${params.toString()}` : pathname, { scroll: false });
  }, [filters, onFiltersChange, pathname, router]);

  return (
    <>
      <div className="hidden rounded-[28px] border border-border bg-secondary/60 p-5 lg:block">
        <FiltersForm value={filters} onChange={setFilters} onReset={() => setFilters(defaultFilters)} dict={dict} />
      </div>
      <div className="space-y-3 lg:hidden">
        <div className="rounded-[24px] border border-border bg-white p-4 shadow-soft">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-accent">{dict.listings.mobileFiltersTitle}</p>
              <p className="mt-1 text-sm text-muted-foreground">
                {activeFilterLabels.length
                  ? dict.locale === "fr"
                    ? `${activeFilterLabels.length} filtre${activeFilterLabels.length > 1 ? "s" : ""} actif${activeFilterLabels.length > 1 ? "s" : ""}`
                    : `${activeFilterLabels.length} active filter${activeFilterLabels.length > 1 ? "s" : ""}`
                  : dict.listings.mobileFiltersDescription}
              </p>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">
                  <SlidersHorizontal className="h-4 w-4" />
                  {dict.locale === "fr" ? "Filtres" : "Filters"}
                </Button>
              </DialogTrigger>
              <DialogContent className="max-h-[90vh] overflow-y-auto">
                <div className="space-y-5">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-accent">{dict.listings.searchResults}</p>
                    <h3 className="mt-2 font-serif text-3xl text-primary">{dict.listings.refineTitle}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{dict.listings.refineDescription}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {activeFilterLabels.length ? (
                      activeFilterLabels.map((label) => <Badge key={label}>{label}</Badge>)
                    ) : (
                      <Badge variant="accent">
                        <Sparkles className="mr-1 h-3.5 w-3.5" />
                        {dict.listings.noActiveFilters}
                      </Badge>
                    )}
                  </div>
                  <FiltersForm value={filters} onChange={setFilters} onReset={() => setFilters(defaultFilters)} compact dict={dict} />
                </div>
              </DialogContent>
            </Dialog>
          </div>
          {activeFilterLabels.length ? (
            <div className="mt-4 flex flex-wrap gap-2">
              {activeFilterLabels.slice(0, 5).map((label) => (
                <Badge key={label}>{label}</Badge>
              ))}
              {activeFilterLabels.length > 5 ? (
                <Badge variant="accent">
                  +{activeFilterLabels.length - 5} {dict.locale === "fr" ? "de plus" : "more"}
                </Badge>
              ) : null}
            </div>
          ) : null}
        </div>
        <div className="flex gap-2 overflow-x-auto pb-1">
          <button
            type="button"
            onClick={() => setFilters({ ...filters, status: filters.status === "sale" ? "all" : "sale" })}
            className={`rounded-full border px-4 py-2 text-sm ${filters.status === "sale" ? "border-accent bg-accent/10 text-primary" : "border-border bg-white text-muted-foreground"}`}
          >
            {dict.listings.buy}
          </button>
          <button
            type="button"
            onClick={() => setFilters({ ...filters, status: filters.status === "rent" ? "all" : "rent" })}
            className={`rounded-full border px-4 py-2 text-sm ${filters.status === "rent" ? "border-accent bg-accent/10 text-primary" : "border-border bg-white text-muted-foreground"}`}
          >
            {dict.listings.rent}
          </button>
          <button
            type="button"
            onClick={() => setFilters({ ...filters, featured: !filters.featured })}
            className={`rounded-full border px-4 py-2 text-sm ${filters.featured ? "border-accent bg-accent/10 text-primary" : "border-border bg-white text-muted-foreground"}`}
          >
            {dict.common.featured}
          </button>
          <button
            type="button"
            onClick={() => setFilters({ ...filters, pool: !filters.pool })}
            className={`rounded-full border px-4 py-2 text-sm ${filters.pool ? "border-accent bg-accent/10 text-primary" : "border-border bg-white text-muted-foreground"}`}
          >
            {dict.common.pool}
          </button>
          {activeFilterLabels.length ? (
            <button
              type="button"
              onClick={() => setFilters(defaultFilters)}
              className="inline-flex items-center rounded-full border border-border bg-white px-4 py-2 text-sm text-muted-foreground"
            >
              <X className="mr-1 h-3.5 w-3.5" />
              {dict.cta.reset}
            </button>
          ) : null}
        </div>
      </div>
    </>
  );
}
