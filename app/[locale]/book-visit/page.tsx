import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BookingForm } from "@/components/forms/booking-form";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { SectionContainer } from "@/components/shared/section-container";
import { createMetadata } from "@/lib/seo";
import { getDictionary, isLocale } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  if (!isLocale(params.locale)) return {};
  const dict = getDictionary(params.locale);
  return createMetadata({
    title: dict.pages.bookVisit.title,
    description: dict.pages.bookVisit.description,
    path: `/${params.locale}/${dict.routes.bookVisit}`,
    locale: params.locale,
  });
}

export default function BookVisitPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const dict = getDictionary(locale);
  const homeLabel = locale === "fr" ? "Accueil" : "Home";

  return (
    <section className="section-space">
      <SectionContainer className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-6">
          <Breadcrumbs items={[{ label: homeLabel, href: `/${locale}` }, { label: dict.nav.bookVisit }]} />
          <p className="text-sm uppercase tracking-[0.28em] text-accent">{dict.pages.bookVisit.eyebrow}</p>
          <h1 className="font-serif text-5xl text-primary md:text-6xl">{dict.pages.bookVisit.title}</h1>
          <p className="text-base leading-7 text-muted-foreground">{dict.pages.bookVisit.description}</p>
          <div className="rounded-[28px] bg-primary p-6 text-white shadow-luxury">
            <h2 className="font-serif text-3xl">{dict.pages.bookVisit.whyTitle}</h2>
            <p className="mt-3 text-sm leading-7 text-white/70">{dict.pages.bookVisit.whyDescription}</p>
          </div>
        </div>
        <BookingForm locale={locale} />
      </SectionContainer>
    </section>
  );
}
