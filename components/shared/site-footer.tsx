import Link from "next/link";

import { SectionContainer } from "@/components/shared/section-container";
import { getLocalizedPath, type Dictionary } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";
import type { Locale } from "@/types";

export function SiteFooter({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const navItems = [
    { title: dict.nav.properties, href: getLocalizedPath(locale, "properties") },
    { title: dict.nav.about, href: getLocalizedPath(locale, "about") },
    { title: dict.nav.services, href: getLocalizedPath(locale, "services") },
    { title: dict.nav.listYourProperty, href: getLocalizedPath(locale, "listYourProperty") },
    { title: dict.nav.blog, href: getLocalizedPath(locale, "blog") },
    { title: dict.nav.contact, href: getLocalizedPath(locale, "contact") },
  ];

  return (
    <footer className="border-t border-border bg-primary text-white">
      <SectionContainer className="py-14">
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr_0.9fr]">
          <div className="space-y-4">
            <div>
              <p className="font-serif text-4xl">{dict.brand.name}</p>
              <p className="mt-2 text-sm uppercase tracking-[0.3em] text-white/50">{dict.brand.footerTagline}</p>
            </div>
            <p className="max-w-md text-sm leading-7 text-white/70">{dict.footer.description}</p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">{dict.footer.navigation}</p>
            <div className="mt-5 grid gap-3">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="text-sm text-white/70 hover:text-white">
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">{dict.footer.contact}</p>
            <div className="mt-5 grid gap-3 text-sm text-white/70">
              <Link href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`} className="hover:text-white">
                {siteConfig.phone}
              </Link>
              <Link href={`mailto:${siteConfig.email}`} className="hover:text-white">
                {siteConfig.email}
              </Link>
              <p>{siteConfig.address}</p>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-white/50">{dict.footer.copyright}</div>
      </SectionContainer>
    </footer>
  );
}
