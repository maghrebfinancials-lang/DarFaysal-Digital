import Image from "next/image";

import { FadeIn } from "@/components/shared/fade-in";
import { localize } from "@/lib/i18n";
import type { Locale, Testimonial } from "@/types";

export function TestimonialCard({
  testimonial,
  locale,
}: {
  testimonial: Testimonial;
  locale: Locale;
}) {
  return (
    <FadeIn>
      <article className="rounded-[28px] border border-border bg-white p-6 shadow-soft">
        <p className="font-serif text-3xl leading-tight text-primary">"{localize(locale, testimonial.quote)}"</p>
        <div className="mt-6 flex items-center gap-4">
          <div className="relative h-14 w-14 overflow-hidden rounded-full">
            <Image src={testimonial.image} alt={testimonial.name} fill className="object-cover" sizes="56px" />
          </div>
          <div>
            <p className="font-medium text-primary">{testimonial.name}</p>
            <p className="text-sm text-muted-foreground">{localize(locale, testimonial.role)}</p>
          </div>
        </div>
      </article>
    </FadeIn>
  );
}
