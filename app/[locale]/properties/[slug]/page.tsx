import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, MessageCircleMore, PhoneCall } from "lucide-react";

import { AgentCard } from "@/components/agents/agent-card";
import { BookingForm } from "@/components/forms/booking-form";
import { PropertyGallery } from "@/components/properties/property-gallery";
import { PropertyGrid } from "@/components/properties/property-grid";
import { PropertyHighlights } from "@/components/properties/property-highlights";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { CTASection } from "@/components/shared/cta-section";
import { SectionContainer } from "@/components/shared/section-container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getPropertyBySlug, getSimilarProperties, properties } from "@/lib/data";
import { createMetadata } from "@/lib/seo";
import { getDictionary, getLocalizedPath, isLocale, localize, localizeList } from "@/lib/i18n";

export function generateStaticParams() {
  return ["en", "fr"].flatMap((locale) => properties.map((property) => ({ locale, slug: property.slug })));
}

export async function generateMetadata({ params }: { params: { locale: string; slug: string } }): Promise<Metadata> {
  if (!isLocale(params.locale)) return {};
  const property = getPropertyBySlug(params.slug);
  if (!property) return { title: "Property Not Found" };
  const dict = getDictionary(params.locale);
  return createMetadata({
    title: localize(params.locale, property.title),
    description: localize(params.locale, property.shortDescription),
    path: `/${params.locale}/${dict.routes.properties}/${property.slug}`,
    locale: params.locale,
  });
}

export default function PropertyDetailPage({ params }: { params: { locale: string; slug: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const dict = getDictionary(locale);
  const property = getPropertyBySlug(params.slug);
  const homeLabel = locale === "fr" ? "Accueil" : "Home";

  if (!property) notFound();

  const similar = getSimilarProperties(property.slug, property.city.en, property.type.en);

  return (
    <>
      <section className="section-space">
        <SectionContainer className="space-y-8">
          <Breadcrumbs
            items={[
              { label: homeLabel, href: `/${locale}` },
              { label: dict.nav.properties, href: getLocalizedPath(locale, "properties") },
              { label: localize(locale, property.title) },
            ]}
          />
          <PropertyGallery images={property.images} title={localize(locale, property.title)} />
          <div className="grid gap-8 xl:grid-cols-[1fr_360px]">
            <div className="space-y-10">
              <PropertyHighlights property={property} locale={locale} dict={dict} />
              <div className="grid gap-8 md:grid-cols-2">
                <div className="rounded-[28px] border border-border bg-white p-6 shadow-soft">
                  <h2 className="font-serif text-3xl text-primary">{dict.property.features}</h2>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {localizeList(locale, property.features).map((item) => (
                      <Badge key={item}>{item}</Badge>
                    ))}
                  </div>
                </div>
                <div className="rounded-[28px] border border-border bg-white p-6 shadow-soft">
                  <h2 className="font-serif text-3xl text-primary">{dict.property.amenities}</h2>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {localizeList(locale, property.amenities).map((item) => (
                      <Badge key={item} variant="accent">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              <div className="rounded-[28px] border border-border bg-white p-6 shadow-soft">
                <h2 className="font-serif text-3xl text-primary">{dict.property.insight}</h2>
                <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 text-accent" />
                  {localize(locale, property.neighborhood)}, {localize(locale, property.city)}
                </div>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">{localize(locale, property.description)}</p>
              </div>
              <div className="space-y-6">
                <h2 className="font-serif text-4xl text-primary">{dict.property.similar}</h2>
                <PropertyGrid properties={similar} locale={locale} dict={dict} />
              </div>
            </div>
            <aside className="space-y-6 xl:sticky xl:top-24 xl:self-start">
              <div className="rounded-[28px] border border-border bg-white p-5 shadow-soft">
                <h2 className="font-serif text-3xl text-primary">{dict.property.requestInformation}</h2>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{dict.property.stickyDescription}</p>
                <div className="mt-5 grid gap-3">
                  <Button asChild variant="accent">
                    <Link href={getLocalizedPath(locale, "bookVisit")}>{dict.cta.bookVisit}</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href={`https://wa.me/${property.agent.whatsapp.replace("+", "")}`}>
                      <MessageCircleMore className="h-4 w-4" />
                      {dict.cta.whatsappAgent}
                    </Link>
                  </Button>
                  <Button asChild variant="ghost">
                    <Link href={`tel:${property.agent.phone.replace(/\s+/g, "")}`}>
                      <PhoneCall className="h-4 w-4" />
                      {dict.cta.callNow}
                    </Link>
                  </Button>
                </div>
              </div>
              <BookingForm defaultPropertySlug={property.slug} locale={locale} />
              <AgentCard agent={property.agent} locale={locale} dict={dict} />
            </aside>
          </div>
        </SectionContainer>
      </section>

      <CTASection
        eyebrow={locale === "fr" ? "Recherche sur mesure" : "Tailored Search"}
        title={dict.property.tailoredTitle}
        description={dict.property.tailoredDescription}
        primaryLabel={dict.common.speakAdvisor}
        primaryHref={getLocalizedPath(locale, "contact")}
        secondaryLabel={dict.nav.bookVisit}
        secondaryHref={getLocalizedPath(locale, "bookVisit")}
      />
    </>
  );
}
