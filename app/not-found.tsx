import Link from "next/link";

import { Button } from "@/components/ui/button";
import { SectionContainer } from "@/components/shared/section-container";

export default function NotFound() {
  return (
    <section className="section-space">
      <SectionContainer>
        <div className="rounded-[32px] border border-border bg-white px-6 py-20 text-center shadow-soft">
          <p className="text-sm uppercase tracking-[0.3em] text-accent">404</p>
          <h1 className="mt-4 font-serif text-5xl text-primary md:text-7xl">Property not found</h1>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            The page may have moved, the property may no longer be available, or the link may be outdated.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild variant="accent">
              <Link href="/en/properties">Browse Properties</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/en/contact">Contact the Agency</Link>
            </Button>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
