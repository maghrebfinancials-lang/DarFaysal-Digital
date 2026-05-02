import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PropertiesPageClient } from "@/app/[locale]/properties/properties-page-client";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { SectionContainer } from "@/components/shared/section-container";
import { properties } from "@/lib/data";
import { createMetadata } from "@/lib/seo";
import { getDictionary, isLocale } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  if (!isLocale(params.locale)) return {};
  const dict = getDictionary(params.locale);
  return createMetadata({
    title: dict.listings.title,
    description: dict.listings.description,
    path: `/${params.locale}/${dict.routes.properties}`,
    locale: params.locale,
  });
}

export default function PropertiesPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const dict = getDictionary(locale);
  const homeLabel = locale === "fr" ? "Accueil" : "Home";

  return (
    <section className="section-space">
      <SectionContainer className="space-y-8">
        <Breadcrumbs items={[{ label: homeLabel, href: `/${locale}` }, { label: dict.nav.properties }]} />
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.28em] text-accent">{dict.listings.eyebrow}</p>
          <h1 className="font-serif text-5xl text-primary md:text-6xl">{dict.listings.title}</h1>
          <p className="max-w-3xl text-base leading-7 text-muted-foreground">{dict.listings.description}</p>
        </div>
        <PropertiesPageClient properties={properties} locale={locale} dict={dict} />
      </SectionContainer>
    </section>
  );
}
