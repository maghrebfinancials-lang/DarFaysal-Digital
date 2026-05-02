import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ContactForm } from "@/components/forms/contact-form";
import { FAQAccordion } from "@/components/content/faq-accordion";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { SectionContainer } from "@/components/shared/section-container";
import { faqs } from "@/lib/data";
import { createMetadata } from "@/lib/seo";
import { getDictionary, isLocale } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  if (!isLocale(params.locale)) return {};
  const dict = getDictionary(params.locale);
  return createMetadata({
    title: dict.pages.contact.title,
    description: dict.pages.contact.description,
    path: `/${params.locale}/${dict.routes.contact}`,
    locale: params.locale,
  });
}

export default function ContactPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const dict = getDictionary(locale);
  const homeLabel = locale === "fr" ? "Accueil" : "Home";

  return (
    <section className="section-space">
      <SectionContainer className="grid gap-10 xl:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-8">
          <Breadcrumbs items={[{ label: homeLabel, href: `/${locale}` }, { label: dict.nav.contact }]} />
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.28em] text-accent">{dict.pages.contact.eyebrow}</p>
            <h1 className="font-serif text-5xl text-primary md:text-6xl">{dict.pages.contact.title}</h1>
            <p className="text-base leading-7 text-muted-foreground">{dict.pages.contact.description}</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-[28px] border border-border bg-white p-6 shadow-soft">
              <p className="text-sm uppercase tracking-[0.24em] text-accent">{dict.nav.call}</p>
              <Link href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`} className="mt-3 block font-serif text-3xl text-primary">
                {siteConfig.phone}
              </Link>
            </div>
            <div className="rounded-[28px] border border-border bg-white p-6 shadow-soft">
              <p className="text-sm uppercase tracking-[0.24em] text-accent">{dict.nav.whatsapp}</p>
              <Link href={`https://wa.me/${siteConfig.whatsapp.replace("+", "")}`} className="mt-3 block font-serif text-3xl text-primary">
                {dict.pages.contact.whatsappLabel}
              </Link>
            </div>
            <div className="rounded-[28px] border border-border bg-white p-6 shadow-soft">
              <p className="text-sm uppercase tracking-[0.24em] text-accent">{dict.forms.email}</p>
              <Link href={`mailto:${siteConfig.email}`} className="mt-3 block text-lg text-primary">
                {siteConfig.email}
              </Link>
            </div>
            <div className="rounded-[28px] border border-border bg-white p-6 shadow-soft">
              <p className="text-sm uppercase tracking-[0.24em] text-accent">{dict.pages.contact.hours}</p>
              <p className="mt-3 text-lg text-primary">
                {locale === "fr" ? "Lun a Sam, 9:00 a 19:00" : "Mon to Sat, 9:00 to 19:00"}
              </p>
            </div>
          </div>
          <div className="rounded-[28px] border border-border bg-primary p-6 text-white shadow-luxury">
            <p className="text-sm uppercase tracking-[0.24em] text-accent">{dict.pages.contact.office}</p>
            <p className="mt-3 font-serif text-3xl">{siteConfig.address}</p>
            <div className="mt-5 rounded-[22px] bg-white/10 p-8 text-sm text-white/70">{dict.pages.contact.mapPlaceholder}</div>
          </div>
          <FAQAccordion items={faqs.slice(0, 2)} locale={locale} />
        </div>
        <ContactForm locale={locale} />
      </SectionContainer>
    </section>
  );
}
