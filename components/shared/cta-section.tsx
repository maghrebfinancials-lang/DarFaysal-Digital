import Link from "next/link";
import { ArrowUpRight, PhoneCall } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SectionContainer } from "@/components/shared/section-container";
import { siteConfig } from "@/lib/site";

export function CTASection({
  title,
  description,
  eyebrow = "Premium Real Estate, Faster",
  primaryLabel = "Browse Properties",
  primaryHref = "/properties",
  secondaryLabel = "Call Our Team",
  secondaryHref = `tel:${siteConfig.phone.replace(/\s+/g, "")}`,
}: {
  title: string;
  description: string;
  eyebrow?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="section-space">
      <SectionContainer>
        <div className="overflow-hidden rounded-[32px] bg-primary px-6 py-10 text-white shadow-luxury md:px-10 md:py-14">
          <div className="grid gap-8 md:grid-cols-[1.3fr_0.7fr] md:items-end">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.3em] text-accent">{eyebrow}</p>
              <h2 className="max-w-2xl font-serif text-4xl leading-none md:text-5xl">{title}</h2>
              <p className="max-w-2xl text-base leading-7 text-white/72">{description}</p>
            </div>
            <div className="flex flex-col gap-3 md:items-end">
              <Button asChild variant="accent" size="lg">
                <Link href={primaryHref}>
                  {primaryLabel}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/20 bg-white/10 text-white hover:text-accent">
                <Link href={secondaryHref}>
                  <PhoneCall className="h-4 w-4" />
                  {secondaryLabel}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
