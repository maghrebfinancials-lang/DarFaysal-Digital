"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { switchLocalePath } from "@/lib/i18n";
import type { Locale } from "@/types";

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();

  return (
    <div className="inline-flex rounded-full border border-border bg-white p-1 shadow-soft">
      {(["en", "fr"] as const).map((item) => {
        const active = item === locale;
        return (
          <Link
            key={item}
            href={switchLocalePath(pathname, item)}
            className={`rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] transition ${
              active ? "bg-primary text-white" : "text-muted-foreground hover:text-primary"
            }`}
          >
            {item}
          </Link>
        );
      })}
    </div>
  );
}
