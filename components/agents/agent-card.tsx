import Image from "next/image";
import Link from "next/link";
import { MessageCircleMore, PhoneCall } from "lucide-react";

import { FadeIn } from "@/components/shared/fade-in";
import { Button } from "@/components/ui/button";
import { localize, type Dictionary } from "@/lib/i18n";
import type { Agent, Locale } from "@/types";

export function AgentCard({
  agent,
  locale,
  dict,
}: {
  agent: Agent;
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <FadeIn>
      <article className="rounded-[28px] border border-border bg-white p-5 shadow-soft">
        <div className="relative h-72 overflow-hidden rounded-[24px]">
          <Image src={agent.image} alt={agent.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
        </div>
        <div className="mt-5 space-y-3">
          <div>
            <h3 className="font-serif text-3xl text-primary">{agent.name}</h3>
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">{localize(locale, agent.role)}</p>
          </div>
          <p className="text-sm leading-6 text-muted-foreground">{localize(locale, agent.bio)}</p>
        </div>
        <div className="mt-5 flex gap-3">
          <Button asChild variant="outline" className="flex-1">
            <Link href={`tel:${agent.phone.replace(/\s+/g, "")}`}>
              <PhoneCall className="h-4 w-4" />
              {dict.nav.call}
            </Link>
          </Button>
          <Button asChild variant="accent" className="flex-1">
            <Link href={`https://wa.me/${agent.whatsapp.replace("+", "")}`}>
              <MessageCircleMore className="h-4 w-4" />
              {dict.nav.whatsapp}
            </Link>
          </Button>
        </div>
      </article>
    </FadeIn>
  );
}
