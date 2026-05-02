import { FadeIn } from "@/components/shared/fade-in";
import { iconMap } from "@/lib/icon-map";
import { localize, localizeList } from "@/lib/i18n";
import type { Locale, Service } from "@/types";

export function ServiceCard({ service, locale }: { service: Service; locale: Locale }) {
  const Icon = iconMap[service.icon] ?? iconMap.Building2;

  return (
    <FadeIn>
      <article className="rounded-[28px] border border-border bg-white p-6 shadow-soft">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-accent">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="mt-5 font-serif text-3xl text-primary">{localize(locale, service.title)}</h3>
        <p className="mt-3 text-sm leading-7 text-muted-foreground">{localize(locale, service.description)}</p>
        <div className="mt-5 grid gap-2">
          {localizeList(locale, service.bullets).map((bullet) => (
            <p key={bullet} className="text-sm text-primary">
              {bullet}
            </p>
          ))}
        </div>
      </article>
    </FadeIn>
  );
}
