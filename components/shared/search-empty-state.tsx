import Link from "next/link";
import { SearchX, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { getLocalizedPath, type Dictionary } from "@/lib/i18n";
import type { Locale } from "@/types";

export function SearchEmptyState({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <div className="rounded-[28px] border border-dashed border-border bg-gradient-to-br from-white to-secondary p-8 text-center shadow-soft">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-primary">
        <SearchX className="h-6 w-6" />
      </div>
      <h3 className="mt-5 font-serif text-3xl text-primary">{dict.listings.noResultsTitle}</h3>
      <p className="mx-auto mt-3 max-w-lg text-muted-foreground">{dict.listings.noResultsDescription}</p>
      <div className="mx-auto mt-5 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm text-primary">
        <Sparkles className="h-4 w-4 text-accent" />
        {dict.listings.offMarket}
      </div>
      <div className="mt-6">
        <Button asChild variant="accent">
          <Link href={getLocalizedPath(locale, "contact")}>{dict.listings.sourceMatch}</Link>
        </Button>
      </div>
    </div>
  );
}
