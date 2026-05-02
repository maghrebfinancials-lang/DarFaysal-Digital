import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";

import { MobileStickyCta } from "@/components/shared/mobile-sticky-cta";
import { SiteFooter } from "@/components/shared/site-footer";
import { SiteHeader } from "@/components/shared/site-header";
import { WhatsAppFloatingButton } from "@/components/shared/whatsapp-floating-button";
import { getDictionary, isLocale } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";
import type { Locale } from "@/types";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = params.locale;
  if (!isLocale(locale)) {
    return {};
  }

  const dict = getDictionary(locale);

  return {
    title: {
      default: `${siteConfig.name} | ${dict.brand.tagline}`,
      template: `%s | ${siteConfig.name}`,
    },
    alternates: {
      languages: {
        en: `${siteConfig.url}/en`,
        fr: `${siteConfig.url}/fr`,
      },
    },
  };
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) {
    notFound();
  }

  const locale = params.locale as Locale;
  const dict = getDictionary(locale);

  return (
    <div lang={locale}>
      <SiteHeader locale={locale} dict={dict} />
      <main className="pb-24 md:pb-0">{children}</main>
      <SiteFooter locale={locale} dict={dict} />
      <WhatsAppFloatingButton locale={locale} dict={dict} />
      <MobileStickyCta locale={locale} dict={dict} />
    </div>
  );
}
