"use client";

import Link from "next/link";
import { CalendarCheck2, Menu, MessageCircleMore, PhoneCall } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { getLocalizedPath, type Dictionary } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";
import type { Locale } from "@/types";
import { LanguageSwitcher } from "@/components/shared/language-switcher";

export function MobileMenu({
  locale,
  dict,
  navItems,
}: {
  locale: Locale;
  dict: Dictionary;
  navItems: { title: string; href: string }[];
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm">
        <div className="space-y-6">
          <div className="rounded-[28px] bg-primary p-5 text-white">
            <p className="font-serif text-3xl">{dict.brand.name}</p>
            <p className="mt-2 text-sm text-white/70">{dict.home.heroDescription}</p>
            <div className="mt-5">
              <LanguageSwitcher locale={locale} />
            </div>
            <div className="mt-5 grid grid-cols-3 gap-2">
              <Link
                href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
                className="rounded-2xl bg-white/10 px-3 py-3 text-center text-[11px] font-semibold uppercase tracking-[0.16em] text-white"
              >
                <PhoneCall className="mx-auto mb-1 h-4 w-4 text-accent" />
                {dict.nav.call}
              </Link>
              <Link
                href={`https://wa.me/${siteConfig.whatsapp.replace("+", "")}`}
                className="rounded-2xl bg-white/10 px-3 py-3 text-center text-[11px] font-semibold uppercase tracking-[0.16em] text-white"
              >
                <MessageCircleMore className="mx-auto mb-1 h-4 w-4 text-accent" />
                {dict.nav.whatsapp}
              </Link>
              <Link
                href={getLocalizedPath(locale, "bookVisit")}
                className="rounded-2xl bg-white/10 px-3 py-3 text-center text-[11px] font-semibold uppercase tracking-[0.16em] text-white"
              >
                <CalendarCheck2 className="mx-auto mb-1 h-4 w-4 text-accent" />
                {dict.cta.bookVisit}
              </Link>
            </div>
          </div>
          <nav className="grid gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl border border-transparent px-4 py-3 text-base font-medium hover:border-border hover:bg-secondary"
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
      </DialogContent>
    </Dialog>
  );
}
