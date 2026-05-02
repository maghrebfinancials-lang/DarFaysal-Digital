"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarCheck2, MessageCircleMore, PhoneCall } from "lucide-react";

import { getLocalizedPath, type Dictionary } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";
import type { Locale } from "@/types";

export function MobileStickyCta({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const pathname = usePathname();

  if (
    pathname.startsWith(`/${locale}/${dict.routes.bookVisit}`) ||
    pathname.startsWith(`/${locale}/${dict.routes.contact}`) ||
    pathname.startsWith(`/${locale}/${dict.routes.listYourProperty}`) ||
    pathname.includes(`/${dict.routes.properties}/`)
  ) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 px-3 py-3 backdrop-blur-xl md:hidden">
      <div className="grid grid-cols-3 gap-2">
        <Link
          href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
          className="flex flex-col items-center justify-center rounded-2xl border border-border bg-white px-3 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary shadow-soft"
        >
          <PhoneCall className="mb-1 h-4 w-4 text-accent" />
          {dict.nav.call}
        </Link>
        <Link
          href={`https://wa.me/${siteConfig.whatsapp.replace("+", "")}`}
          className="flex flex-col items-center justify-center rounded-2xl bg-success px-3 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-white shadow-soft"
        >
          <MessageCircleMore className="mb-1 h-4 w-4" />
          {dict.nav.whatsapp}
        </Link>
        <Link
          href={getLocalizedPath(locale, "bookVisit")}
          className="flex flex-col items-center justify-center rounded-2xl bg-primary px-3 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-white shadow-soft"
        >
          <CalendarCheck2 className="mb-1 h-4 w-4 text-accent" />
          {dict.cta.bookVisit}
        </Link>
      </div>
    </div>
  );
}
