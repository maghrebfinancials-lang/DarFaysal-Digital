import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { AgentCard } from "@/components/agents/agent-card";
import { CTASection } from "@/components/shared/cta-section";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { SectionContainer } from "@/components/shared/section-container";
import { SectionHeading } from "@/components/shared/section-heading";
import { agents } from "@/lib/data";
import { createMetadata } from "@/lib/seo";
import { getDictionary, getLocalizedPath, isLocale } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  if (!isLocale(params.locale)) return {};
  const dict = getDictionary(params.locale);
  return createMetadata({
    title: dict.pages.about.title,
    description: dict.pages.about.description,
    path: `/${params.locale}/${dict.routes.about}`,
    locale: params.locale,
  });
}

export default function AboutPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const dict = getDictionary(locale);
  const homeLabel = locale === "fr" ? "Accueil" : "Home";
  const stats =
    locale === "fr"
      ? [
          { label: "Leads acheteurs qualifies", value: "1.8k+" },
          { label: "Delai moyen de reponse", value: "< 15 min" },
          { label: "Quartiers premium couverts", value: "18" },
          { label: "Consultations proprietaires", value: "320+" },
        ]
      : [
          { label: "Qualified buyer leads", value: "1.8k+" },
          { label: "Average response speed", value: "< 15 min" },
          { label: "Prime districts covered", value: "18" },
          { label: "Seller consultations", value: "320+" },
        ];

  return (
    <>
      <section className="section-space">
        <SectionContainer className="space-y-10">
          <Breadcrumbs items={[{ label: homeLabel, href: `/${locale}` }, { label: dict.nav.about }]} />
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-5">
              <p className="text-sm uppercase tracking-[0.28em] text-accent">{dict.pages.about.eyebrow}</p>
              <h1 className="font-serif text-5xl text-primary md:text-7xl">{dict.pages.about.title}</h1>
              <p className="text-base leading-8 text-muted-foreground">{dict.pages.about.description}</p>
            </div>
            <div className="rounded-[32px] border border-border bg-white p-8 shadow-soft">
              <h2 className="font-serif text-4xl text-primary">{dict.pages.about.mission}</h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{dict.pages.about.missionText}</p>
              <h2 className="mt-8 font-serif text-4xl text-primary">{dict.pages.about.vision}</h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{dict.pages.about.visionText}</p>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-[28px] border border-border bg-white p-6 shadow-soft">
                <p className="text-sm uppercase tracking-[0.24em] text-accent">{stat.label}</p>
                <p className="mt-4 font-serif text-5xl text-primary">{stat.value}</p>
              </div>
            ))}
          </div>
        </SectionContainer>
      </section>

      <section className="section-space bg-secondary/50">
        <SectionContainer className="space-y-10">
          <SectionHeading eyebrow={dict.home.agentsEyebrow} title={dict.home.agentsTitle} description={dict.home.agentsDescription} />
          <div className="grid gap-6 md:grid-cols-3">
            {agents.map((agent) => (
              <AgentCard key={agent.id} agent={agent} locale={locale} dict={dict} />
            ))}
          </div>
        </SectionContainer>
      </section>

      <CTASection
        eyebrow={locale === "fr" ? "Marque d'agence premium" : "Premium Agency Brand"}
        title={dict.home.finalCtaTitle}
        description={dict.home.finalCtaDescription}
        primaryLabel={dict.nav.contact}
        primaryHref={getLocalizedPath(locale, "contact")}
        secondaryLabel={dict.nav.bookVisit}
        secondaryHref={getLocalizedPath(locale, "bookVisit")}
      />
    </>
  );
}
