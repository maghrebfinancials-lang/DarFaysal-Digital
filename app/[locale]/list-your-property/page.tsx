import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Camera, MessageCircleMore, ShieldCheck, TrendingUp } from "lucide-react";
import { notFound } from "next/navigation";

import { TestimonialCard } from "@/components/content/testimonial-card";
import { ValuationForm } from "@/components/forms/valuation-form";
import { CTASection } from "@/components/shared/cta-section";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { SectionContainer } from "@/components/shared/section-container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { testimonials } from "@/lib/data";
import { createMetadata } from "@/lib/seo";
import { getDictionary, getLocalizedPath, isLocale } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  if (!isLocale(params.locale)) return {};
  const dict = getDictionary(params.locale);
  return createMetadata({
    title: dict.pages.owner.title,
    description: dict.pages.owner.description,
    path: `/${params.locale}/${dict.routes.listYourProperty}`,
    locale: params.locale,
  });
}

export default function ListYourPropertyPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const dict = getDictionary(locale);
  const homeLabel = locale === "fr" ? "Accueil" : "Home";
  const ownerProof =
    locale === "fr"
      ? [
          { value: "24h", label: "Delai moyen de reponse" },
          { value: "Premium", label: "Presentation niveau marque" },
          { value: "Qualifie", label: "Selection acheteurs avant visite" },
        ]
      : [
          { value: "24h", label: "Typical first response" },
          { value: "Premium", label: "Brand-level presentation" },
          { value: "Qualified", label: "Buyer screening before visits" },
        ];

  const benefits =
    locale === "fr"
      ? [
          "Presentation d'annonce haut de gamme et positionnement premium",
          "Gestion rapide des demandes acheteurs et locataires",
          "Strategie de prix par quartier",
          "Qualification des acquereurs avant visite",
        ]
      : [
          "Luxury-grade listing presentation and positioning",
          "Fast-response handling for inbound buyer and renter leads",
          "Neighborhood-aware pricing strategy",
          "Buyer qualification before viewings",
        ];

  const process =
    locale === "fr"
      ? [
          { title: "Positionner", description: "Nous alignons prix, cible et strategie de diffusion avant le lancement." },
          { title: "Presenter", description: "Nous donnons au bien une narration premium avec visuels selectifs et copy persuasif." },
          { title: "Promouvoir", description: "Nous qualifions la demande, organisons les visites et tenons le proprietaire informe." },
        ]
      : [
          { title: "Position", description: "We align pricing, target buyer profile, and channel strategy before launch." },
          { title: "Present", description: "We shape the listing with premium copy, selective visuals, and persuasive trust layers." },
          { title: "Promote", description: "We qualify demand, schedule visits, and keep owners informed with a clear next-step process." },
        ];

  const ownerReasons =
    locale === "fr"
      ? [
          { title: "Estimation avec strategie", description: "Les proprietaires veulent plus qu'un chiffre. Ils veulent un plan et un positionnement realiste.", icon: TrendingUp },
          { title: "Presentation qui valorise", description: "Un bien de prestige doit paraitre credible, desirable et bien positionne des le premier regard.", icon: Camera },
          { title: "Confiance a chaque etape", description: "Communication claire, qualification des leads et process transparent renforcent la conversion vendeur.", icon: ShieldCheck },
        ]
      : [
          { title: "Valuation with strategy", description: "Owners want more than a price guess. They want realistic positioning and a plan to attract the right demand.", icon: TrendingUp },
          { title: "Presentation that signals quality", description: "Luxury-minded owners need their listing to look credible, elevated, and market-aware from the first impression.", icon: Camera },
          { title: "Trust at every step", description: "Clear communication, lead qualification, and process transparency help convert hesitant owners into active clients.", icon: ShieldCheck },
        ];

  return (
    <>
      <section className="section-space">
        <SectionContainer className="grid gap-10 lg:grid-cols-[1fr_0.95fr]">
          <div className="space-y-8">
            <Breadcrumbs items={[{ label: homeLabel, href: `/${locale}` }, { label: dict.nav.listYourProperty }]} />
            <div className="space-y-5">
              <p className="text-sm uppercase tracking-[0.28em] text-accent">{dict.pages.owner.eyebrow}</p>
              <h1 className="font-serif text-5xl text-primary md:text-7xl">{dict.pages.owner.title}</h1>
              <p className="text-base leading-8 text-muted-foreground">{dict.pages.owner.description}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {ownerProof.map((item) => (
                <div key={item.label} className="rounded-[24px] border border-border bg-white p-5 shadow-soft">
                  <p className="font-serif text-4xl text-primary">{item.value}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.24em] text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div key={benefit} className="rounded-[24px] border border-border bg-white px-5 py-4 text-sm text-primary shadow-soft">
                  {benefit}
                </div>
              ))}
            </div>
            <div className="rounded-[28px] bg-primary p-6 text-white shadow-luxury">
              <p className="text-sm uppercase tracking-[0.28em] text-accent">{dict.nav.whatsapp}</p>
              <p className="mt-3 font-serif text-3xl">
                {locale === "fr"
                  ? "De nombreux proprietaires preferent commencer par un echange WhatsApp avant de partager les details du bien."
                  : "Many owners prefer to start with a quick WhatsApp exchange before sharing property details."}
              </p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="accent">
                  <Link href="https://wa.me/212661247890">
                    <MessageCircleMore className="h-4 w-4" />
                    {dict.nav.whatsapp}
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-white/20 bg-white/10 text-white hover:text-accent">
                  <Link href={getLocalizedPath(locale, "contact")}>
                    {dict.nav.contact}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          <ValuationForm locale={locale} />
        </SectionContainer>
      </section>

      <section className="section-space pt-0">
        <SectionContainer className="space-y-10">
          <SectionHeading eyebrow={dict.home.ownerEyebrow} title={dict.pages.owner.whyOwnersTitle} description={dict.pages.owner.whyOwnersDescription} />
          <div className="grid gap-6 md:grid-cols-3">
            {ownerReasons.map((item) => (
              <article key={item.title} className="rounded-[28px] border border-border bg-white p-6 shadow-soft">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-accent">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-serif text-3xl text-primary">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.description}</p>
              </article>
            ))}
          </div>
        </SectionContainer>
      </section>

      <section className="section-space bg-secondary/50">
        <SectionContainer className="space-y-10">
          <SectionHeading eyebrow={dict.pages.owner.howWeMarketEyebrow} title={dict.pages.owner.howWeMarketTitle} description={dict.pages.owner.howWeMarketDescription} />
          <div className="grid gap-6 md:grid-cols-3">
            {process.map((item) => (
              <article key={item.title} className="rounded-[28px] border border-border bg-white p-6 shadow-soft">
                <BadgeCheck className="h-6 w-6 text-accent" />
                <h3 className="mt-4 font-serif text-4xl text-primary">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">{item.description}</p>
              </article>
            ))}
          </div>
        </SectionContainer>
      </section>

      <section className="section-space">
        <SectionContainer className="space-y-10">
          <SectionHeading eyebrow={dict.pages.owner.testimonialsEyebrow} title={dict.pages.owner.testimonialsTitle} description={dict.pages.owner.testimonialsDescription} />
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} locale={locale} />
            ))}
          </div>
        </SectionContainer>
      </section>

      <CTASection
        eyebrow={locale === "fr" ? "Acquisition vendeurs" : "Seller Lead Capture"}
        title={dict.home.ownerTitle}
        description={dict.home.ownerDescription}
        primaryLabel={dict.forms.requestValuation}
        primaryHref={getLocalizedPath(locale, "listYourProperty")}
        secondaryLabel={dict.nav.contact}
        secondaryHref={getLocalizedPath(locale, "contact")}
      />
    </>
  );
}
