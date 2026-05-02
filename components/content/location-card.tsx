import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { FadeIn } from "@/components/shared/fade-in";
import { Button } from "@/components/ui/button";
import { getLocalizedPath, localize, type Dictionary } from "@/lib/i18n";
import type { Locale, LocationHighlight } from "@/types";

export function LocationCard({
  location,
  locale,
  dict,
}: {
  location: LocationHighlight;
  locale: Locale;
  dict: Dictionary;
}) {
  const name = localize(locale, location.name);
  return (
    <FadeIn>
      <article className="group overflow-hidden rounded-[28px] border border-border bg-white shadow-soft">
        <div className="relative h-72">
          <Image src={location.image} alt={name} fill className="object-cover transition duration-500 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/85 to-primary/15" />
          <div className="absolute inset-x-5 bottom-5 text-white">
            <p className="text-xs uppercase tracking-[0.28em] text-accent">{localize(locale, location.city)}</p>
            <h3 className="mt-2 font-serif text-4xl">{name}</h3>
            <p className="mt-2 text-sm leading-6 text-white/70">{localize(locale, location.description)}</p>
            <div className="mt-5 flex items-center justify-between">
              <span className="text-sm text-white/70">
                {location.propertyCount}+ {dict.common.activeOpportunities}
              </span>
              <Button asChild variant="outline" className="border-white/20 bg-white/10 text-white hover:text-accent">
                <Link href={`${getLocalizedPath(locale, "properties")}?neighborhood=${encodeURIComponent(name)}`}>
                  {dict.common.explore}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </article>
    </FadeIn>
  );
}
