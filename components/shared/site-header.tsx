import Link from "next/link";
import { MessageCircleMore, PhoneCall } from "lucide-react";

import { MobileMenu } from "@/components/shared/mobile-menu";
import { SectionContainer } from "@/components/shared/section-container";
import { Button } from "@/components/ui/button";
import { getLocalizedPath, type Dictionary } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";
import type { Locale } from "@/types";
import { LanguageSwitcher } from "@/components/shared/language-switcher";

export function SiteHeader({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const mainNav = [
    { title: dict.nav.properties, href: getLocalizedPath(locale, "properties") },
    { title: dict.nav.about, href: getLocalizedPath(locale, "about") },
    { title: dict.nav.services, href: getLocalizedPath(locale, "services") },
    { title: dict.nav.listYourProperty, href: getLocalizedPath(locale, "listYourProperty") },
    { title: dict.nav.blog, href: getLocalizedPath(locale, "blog") },
    { title: dict.nav.contact, href: getLocalizedPath(locale, "contact") },
  ];

  return (
    <header className="sticky top-0 z-30 border-b border-border/60 bg-background/90 backdrop-blur-xl">
      <SectionContainer>
        <div className="flex h-20 items-center justify-between gap-4">
          <Link href={`/${locale}`} className="min-w-fit">
            <p className="font-serif text-3xl text-primary">{dict.brand.name}</p>
            <p className="-mt-1 text-[10px] uppercase tracking-[0.32em] text-muted-foreground">{dict.brand.tagline}</p>
          </Link>
          <nav className="hidden items-center gap-7 md:flex">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-sm font-medium text-muted-foreground after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all hover:text-primary hover:after:w-full"
              >
                {item.title}
              </Link>
            ))}
          </nav>
          <div className="hidden items-center gap-3 md:flex">
            <LanguageSwitcher locale={locale} />
            <Button asChild variant="ghost">
              <Link href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}>
                <PhoneCall className="h-4 w-4" />
                {dict.nav.call}
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href={`https://wa.me/${siteConfig.whatsapp.replace("+", "")}`}>
                <MessageCircleMore className="h-4 w-4" />
                {dict.nav.whatsapp}
              </Link>
            </Button>
            <Button asChild variant="accent">
              <Link href={getLocalizedPath(locale, "bookVisit")}>{dict.nav.bookVisit}</Link>
            </Button>
          </div>
          <MobileMenu locale={locale} dict={dict} navItems={mainNav} />
        </div>
      </SectionContainer>
    </header>
  );
}
