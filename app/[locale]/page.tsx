import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, BadgeCheck, Building2, Handshake, Landmark, Search, ShieldCheck, Sparkles, TrendingUp } from "lucide-react";
import { notFound } from "next/navigation";

import { AgentCard } from "@/components/agents/agent-card";
import { FAQAccordion } from "@/components/content/faq-accordion";
import { LocationCard } from "@/components/content/location-card";
import { TestimonialCard } from "@/components/content/testimonial-card";
import { HeroSearchBar } from "@/components/properties/hero-search-bar";
import { PropertyGrid } from "@/components/properties/property-grid";
import { CTASection } from "@/components/shared/cta-section";
import { SectionContainer } from "@/components/shared/section-container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { agents, faqs, locations, testimonials } from "@/lib/data";
import { getFeaturedProperties } from "@/lib/data";
import { getDictionary, getLocalizedPath, isLocale } from "@/lib/i18n";
import { createMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  if (!isLocale(params.locale)) return {};
  const dict = getDictionary(params.locale);
  return createMetadata({
    title: dict.home.heroTitle,
    description: dict.home.heroDescription,
    path: `/${params.locale}`,
    locale: params.locale,
  });
}

export default function LocaleHomePage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const dict = getDictionary(locale);
  const featuredProperties = getFeaturedProperties();

  const categories =
    locale === "fr"
      ? [
          { label: "Appartements", description: "Residences urbaines a Gueliz, Hivernage et dans les meilleurs quartiers de Casablanca." },
          { label: "Villas", description: "Domaines prives, maisons familiales et proprietes d'exception a Palmeraie et Targa." },
          { label: "Riads", description: "Biens authentiques de Medina pour usage prive ou hospitality boutique." },
          { label: "Commercial", description: "Retail, showroom et surfaces d'activite positionnees pour la visibilite et la croissance." },
          { label: "Terrains", description: "Parcelles strategiques pour developpement residentiel ou projet sur mesure." },
        ]
      : [
          { label: "Apartments", description: "Urban residences in Gueliz, Hivernage, and Casablanca's prime districts." },
          { label: "Villas", description: "Private compounds, family homes, and statement properties across Palmeraie and Targa." },
          { label: "Riads", description: "Authentic Medina opportunities for private use or boutique hospitality." },
          { label: "Commercial", description: "Retail, showroom, and office opportunities positioned for visibility and growth." },
          { label: "Land", description: "Strategic plots for custom residential or boutique development plays." },
        ];

  const valueProps =
    locale === "fr"
      ? [
          { title: "Expertise locale fiable", description: "Connaissance fine des quartiers, pricing realiste et accompagnement discret.", icon: ShieldCheck },
          { title: "Culture de reponse rapide", description: "Gestion WhatsApp-first alignee sur le comportement reel des clients au Maroc.", icon: Sparkles },
          { title: "Vision investissement", description: "Lecture rendement, revente et desirabilite pour soutenir la decision.", icon: TrendingUp },
          { title: "Negociation premium", description: "Une trajectoire claire du premier contact jusqu'a l'offre et la conclusion.", icon: Handshake },
        ]
      : [
          { title: "Trusted local expertise", description: "Grounded neighborhood insight, realistic pricing, and discreet handling.", icon: ShieldCheck },
          { title: "Fast response culture", description: "WhatsApp-first lead handling built for how Moroccan clients actually inquire.", icon: Sparkles },
          { title: "Investment-minded advice", description: "Guidance for rental yield, resale logic, and demand-backed positioning.", icon: TrendingUp },
          { title: "High-conviction negotiation", description: "Clear next steps from first inquiry through visit, offer, and closing.", icon: Handshake },
        ];

  const process =
    locale === "fr"
      ? [
          { title: "Decouvrir", description: "Explorez une selection de biens avec profondeur de contenu, confiance et lecture par localisation.", icon: Search },
          { title: "Programmer", description: "Reservez une visite en quelques minutes via formulaire, appel direct ou WhatsApp.", icon: BadgeCheck },
          { title: "Acquerir ou louer", description: "Avancez avec un conseil expert, une negociation precise et un pilotage local fiable.", icon: Building2 },
        ]
      : [
          { title: "Discover", description: "Explore curated listings with rich details, trust signals, and location-first discovery.", icon: Search },
          { title: "Schedule", description: "Book a viewing in minutes through mobile-first forms, click-to-call, or WhatsApp.", icon: BadgeCheck },
          { title: "Acquire or Rent", description: "Move forward with expert guidance, smart negotiation, and local execution support.", icon: Building2 },
        ];

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=80"
            alt="Luxury property in Marrakech"
            fill
            className="object-cover"
            priority
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <SectionContainer className="relative py-20 md:py-32">
          <div className="grid gap-8 xl:grid-cols-[1.15fr_0.85fr] xl:items-end">
            <div className="max-w-4xl space-y-8 text-white">
              <p className="text-sm uppercase tracking-[0.36em] text-accent">{dict.home.heroEyebrow}</p>
              <h1 className="max-w-3xl font-serif text-6xl leading-none text-balance md:text-8xl">{dict.home.heroTitle}</h1>
              <p className="max-w-2xl text-lg leading-8 text-white/78">{dict.home.heroDescription}</p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="accent" size="lg">
                  <Link href={getLocalizedPath(locale, "properties")}>
                    {dict.cta.browseProperties}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white/20 bg-white/10 text-white hover:text-accent">
                  <Link href={getLocalizedPath(locale, "bookVisit")}>{dict.cta.bookVisit}</Link>
                </Button>
              </div>
              <HeroSearchBar locale={locale} dict={dict} />
            </div>
            <div className="editorial-panel hidden p-6 text-white xl:block">
              <div className="space-y-5">
                <div className="flex items-center gap-2 text-sm uppercase tracking-[0.24em] text-accent">
                  <Landmark className="h-4 w-4" />
                  {dict.home.marketPerspective}
                </div>
                <p className="font-serif text-4xl leading-none">{dict.home.marketQuote}</p>
                <p className="text-sm leading-7 text-white/72">{dict.home.marketDescription}</p>
                <div className="luxury-divider" />
                <div className="space-y-4">
                  {dict.home.marketSignals.map((item) => (
                    <div key={item.label} className="grid gap-1">
                      <p className="text-xs uppercase tracking-[0.24em] text-accent">{item.label}</p>
                      <p className="text-sm text-white/76">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {dict.home.brandStats.map((item) => (
              <div key={item.label} className="editorial-panel p-5 text-white">
                <p className="font-serif text-4xl leading-none">{item.value}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.24em] text-white/65">{item.label}</p>
              </div>
            ))}
          </div>
        </SectionContainer>
      </section>

      <section className="py-10">
        <SectionContainer>
          <div className="grid gap-4 md:grid-cols-3">
            {dict.home.marketSignals.map((item) => (
              <div key={item.label} className="rounded-[28px] border border-border bg-white/80 p-6 shadow-soft backdrop-blur">
                <p className="text-xs uppercase tracking-[0.28em] text-accent">{item.label}</p>
                <p className="mt-3 font-serif text-3xl text-primary">{item.value}</p>
              </div>
            ))}
          </div>
        </SectionContainer>
      </section>

      <section className="section-space">
        <SectionContainer className="space-y-10">
          <SectionHeading eyebrow={dict.home.featuredEyebrow} title={dict.home.featuredTitle} description={dict.home.featuredDescription} />
          <PropertyGrid properties={featuredProperties} locale={locale} dict={dict} />
        </SectionContainer>
      </section>

      <section className="section-space pt-0">
        <SectionContainer className="space-y-10">
          <SectionHeading eyebrow={dict.home.categoriesEyebrow} title={dict.home.categoriesTitle} description={dict.home.categoriesDescription} />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {categories.map((category) => (
              <div key={category.label} className="rounded-[28px] border border-border bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-accent/30">
                <h3 className="font-serif text-3xl text-primary">{category.label}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{category.description}</p>
              </div>
            ))}
          </div>
        </SectionContainer>
      </section>

      <section className="section-space bg-secondary/50">
        <SectionContainer className="space-y-10">
          <SectionHeading eyebrow={dict.home.locationsEyebrow} title={dict.home.locationsTitle} description={dict.home.locationsDescription} />
          <div className="grid gap-6 md:grid-cols-2">
            {locations.map((location) => (
              <LocationCard key={location.id} location={location} locale={locale} dict={dict} />
            ))}
          </div>
        </SectionContainer>
      </section>

      <section className="section-space">
        <SectionContainer className="space-y-10">
          <SectionHeading eyebrow={dict.home.whyEyebrow} title={dict.home.whyTitle} description={dict.home.whyDescription} />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {valueProps.map((item) => (
              <article key={item.title} className="rounded-[28px] border border-border bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-luxury">
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

      <section className="section-space pt-0">
        <SectionContainer className="space-y-10">
          <SectionHeading eyebrow={dict.home.processEyebrow} title={dict.home.processTitle} description={dict.home.processDescription} align="center" />
          <div className="grid gap-4 md:grid-cols-3">
            {process.map((item, index) => (
              <article key={item.title} className="rounded-[28px] border border-border bg-white p-6 text-center shadow-soft">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white">
                  <item.icon className="h-7 w-7" />
                </div>
                <p className="mt-5 text-sm uppercase tracking-[0.24em] text-accent">{locale === "fr" ? "Etape" : "Step"} {index + 1}</p>
                <h3 className="mt-3 font-serif text-4xl text-primary">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.description}</p>
              </article>
            ))}
          </div>
        </SectionContainer>
      </section>

      <section className="section-space bg-secondary/50">
        <SectionContainer className="space-y-10">
          <SectionHeading eyebrow={dict.home.testimonialsEyebrow} title={dict.home.testimonialsTitle} description={dict.home.testimonialsDescription} />
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} locale={locale} />
            ))}
          </div>
        </SectionContainer>
      </section>

      <section className="section-space">
        <SectionContainer className="space-y-10">
          <SectionHeading eyebrow={dict.home.agentsEyebrow} title={dict.home.agentsTitle} description={dict.home.agentsDescription} />
          <div className="grid gap-6 md:grid-cols-3">
            {agents.map((agent) => (
              <AgentCard key={agent.id} agent={agent} locale={locale} dict={dict} />
            ))}
          </div>
        </SectionContainer>
      </section>

      <section className="section-space pt-0">
        <SectionContainer>
          <div className="grid gap-8 rounded-[32px] bg-primary px-6 py-10 text-white shadow-luxury md:grid-cols-[1.15fr_0.85fr] md:px-10">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.32em] text-accent">{dict.home.ownerEyebrow}</p>
              <h2 className="font-serif text-5xl leading-none">{dict.home.ownerTitle}</h2>
              <p className="max-w-2xl text-base leading-7 text-white/72">{dict.home.ownerDescription}</p>
            </div>
            <div className="flex flex-col items-start justify-center gap-3 md:items-end">
              <Button asChild variant="accent" size="lg">
                <Link href={getLocalizedPath(locale, "listYourProperty")}>{dict.cta.requestValuation}</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/20 bg-white/10 text-white hover:text-accent">
                <Link href={getLocalizedPath(locale, "services")}>{dict.cta.seeOwnerServices}</Link>
              </Button>
            </div>
          </div>
        </SectionContainer>
      </section>

      <section className="section-space bg-secondary/50">
        <SectionContainer className="space-y-10">
          <SectionHeading eyebrow={dict.home.faqEyebrow} title={dict.home.faqTitle} description={dict.home.faqDescription} />
          <FAQAccordion items={faqs} locale={locale} />
        </SectionContainer>
      </section>

      <CTASection
        eyebrow={locale === "fr" ? "Immobilier premium, plus efficace" : "Premium Real Estate, Faster"}
        title={dict.home.finalCtaTitle}
        description={dict.home.finalCtaDescription}
        primaryLabel={dict.cta.bookVisit}
        primaryHref={getLocalizedPath(locale, "bookVisit")}
        secondaryLabel={dict.nav.listYourProperty}
        secondaryHref={getLocalizedPath(locale, "listYourProperty")}
      />
    </>
  );
}
