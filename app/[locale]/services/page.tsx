import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ServiceCard } from "@/components/content/service-card";
import { CTASection } from "@/components/shared/cta-section";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { SectionContainer } from "@/components/shared/section-container";
import { SectionHeading } from "@/components/shared/section-heading";
import { services } from "@/lib/data";
import { createMetadata } from "@/lib/seo";
import { getDictionary, getLocalizedPath, isLocale } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  if (!isLocale(params.locale)) return {};
  const dict = getDictionary(params.locale);
  return createMetadata({
    title: dict.pages.services.title,
    description: dict.pages.services.description,
    path: `/${params.locale}/${dict.routes.services}`,
    locale: params.locale,
  });
}

export default function ServicesPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const dict = getDictionary(locale);
  const homeLabel = locale === "fr" ? "Accueil" : "Home";

  return (
    <>
      <section className="section-space">
        <SectionContainer className="space-y-8">
          <Breadcrumbs items={[{ label: homeLabel, href: `/${locale}` }, { label: dict.nav.services }]} />
          <SectionHeading eyebrow={dict.pages.services.eyebrow} title={dict.pages.services.title} description={dict.pages.services.description} />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} locale={locale} />
            ))}
          </div>
        </SectionContainer>
      </section>
      <CTASection
        eyebrow={locale === "fr" ? "Conseil & execution" : "Advisory & Execution"}
        title={dict.home.ownerTitle}
        description={dict.home.ownerDescription}
        primaryLabel={dict.nav.listYourProperty}
        primaryHref={getLocalizedPath(locale, "listYourProperty")}
        secondaryLabel={dict.nav.contact}
        secondaryHref={getLocalizedPath(locale, "contact")}
      />
    </>
  );
}
