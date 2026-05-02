import Link from "next/link";
import { MessageCircleMore } from "lucide-react";

import type { Dictionary } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";
import type { Locale } from "@/types";

export function WhatsAppFloatingButton({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <Link
      href={`https://wa.me/${siteConfig.whatsapp.replace("+", "")}`}
      target="_blank"
      rel="noreferrer"
      hrefLang={locale}
      aria-label="Chat on WhatsApp"
      className="fixed bottom-24 right-5 z-40 hidden items-center gap-3 rounded-full bg-success px-5 py-4 text-sm font-semibold text-white shadow-luxury transition hover:-translate-y-1 md:inline-flex"
    >
      <MessageCircleMore className="h-5 w-5" />
      {dict.nav.whatsapp}
    </Link>
  );
}
