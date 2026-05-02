"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import { SectionContainer } from "@/components/shared/section-container";
import { getDictionary, getLocalizedPath, isLocale } from "@/lib/i18n";
import type { Locale } from "@/types";

export default function LocaleNotFound() {
  const params = useParams();
  const locale = typeof params.locale === "string" && isLocale(params.locale) ? params.locale : ("en" as Locale);
  const dict = getDictionary(locale);

  return (
    <section className="section-space">
      <SectionContainer>
        <div className="rounded-[32px] border border-border bg-white px-6 py-20 text-center shadow-soft">
          <p className="text-sm uppercase tracking-[0.3em] text-accent">404</p>
          <h1 className="mt-4 font-serif text-5xl text-primary md:text-7xl">
            {locale === "fr" ? "Page introuvable" : "Page not found"}
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            {locale === "fr"
              ? "Le lien est peut-etre obsolete, le bien n'est plus disponible ou la page a ete deplacee."
              : "The link may be outdated, the property may no longer be available, or the page may have moved."}
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild variant="accent">
              <Link href={getLocalizedPath(locale, "properties")}>{dict.cta.browseProperties}</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href={getLocalizedPath(locale, "contact")}>{dict.nav.contact}</Link>
            </Button>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
