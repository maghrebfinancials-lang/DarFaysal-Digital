import Image from "next/image";
import Link from "next/link";
import { Bath, BedDouble, Car, Clock3, MapPin, Maximize, MessageCircleMore, PhoneCall, Sparkles } from "lucide-react";

import { FadeIn } from "@/components/shared/fade-in";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/utils";
import { getLocalizedPath, localize, type Dictionary } from "@/lib/i18n";
import type { Locale, Property } from "@/types";

export function PropertyCard({
  property,
  locale,
  dict,
}: {
  property: Property;
  locale: Locale;
  dict: Dictionary;
}) {
  const href = getLocalizedPath(locale, "properties", property.slug);

  return (
    <FadeIn>
      <article className="group overflow-hidden rounded-[28px] border border-border bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-luxury">
        <Link href={href} className="block">
          <div className="relative h-72 overflow-hidden">
            <Image
              src={property.images[0]}
              alt={localize(locale, property.title)}
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-x-4 top-4 flex items-center justify-between">
              <Badge variant="inverted">{property.status === "sale" ? dict.common.forSale : dict.common.forRent}</Badge>
              {property.featured ? <Badge variant="accent">{dict.common.featured}</Badge> : null}
            </div>
            <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3">
              <div className="rounded-full bg-black/45 px-3 py-2 text-xs font-medium text-white backdrop-blur">
                {localize(locale, property.type)}
              </div>
              <div className="rounded-full bg-white/12 px-3 py-2 text-xs font-medium uppercase tracking-[0.18em] text-white backdrop-blur">
                {dict.property.sameDayReply}
              </div>
            </div>
          </div>
        </Link>
        <div className="space-y-5 p-5">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-accent" />
              {localize(locale, property.neighborhood)}, {localize(locale, property.city)}
            </div>
            <div className="flex items-start justify-between gap-4">
              <div>
                <Link href={href} className="font-serif text-3xl leading-none text-primary">
                  {localize(locale, property.title)}
                </Link>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{localize(locale, property.shortDescription)}</p>
              </div>
              <div className="whitespace-nowrap text-right">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {property.status === "rent" ? dict.common.monthly : dict.common.asking}
                </p>
                <p className="mt-1 text-xl font-semibold text-primary">{formatPrice(property.price, property.currency)}</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-2 rounded-3xl bg-secondary p-3 text-sm text-primary">
            <div className="flex flex-col items-center gap-1">
              <BedDouble className="h-4 w-4 text-accent" />
              <span>{property.bedrooms || "-"}</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Bath className="h-4 w-4 text-accent" />
              <span>{property.bathrooms || "-"}</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Maximize className="h-4 w-4 text-accent" />
              <span>{property.area} m2</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Car className="h-4 w-4 text-accent" />
              <span>{property.parking || "-"}</span>
            </div>
          </div>
          <div className="rounded-[24px] border border-border/80 bg-gradient-to-r from-secondary to-white p-4">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white">
                  <Sparkles className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary">{property.agent.name}</p>
                  <p className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock3 className="h-3.5 w-3.5 text-accent" />
                    {dict.property.sameDayReply}
                  </p>
                </div>
              </div>
              <Button asChild variant="ghost" size="sm" className="min-w-fit">
                <Link href={`tel:${property.agent.phone.replace(/\s+/g, "")}`}>
                  <PhoneCall className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <Button asChild variant="outline" className="w-full">
                <Link href={href}>{dict.common.viewDetails}</Link>
              </Button>
              <Button asChild variant="accent" className="w-full">
                <Link href={`https://wa.me/${property.agent.whatsapp.replace("+", "")}`}>
                  <MessageCircleMore className="h-4 w-4" />
                  {dict.nav.whatsapp}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </article>
    </FadeIn>
  );
}
