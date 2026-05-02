import type { Metadata } from "next";

import { defaultLocale } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";
import type { Locale } from "@/types";

export function createMetadata({
  title,
  description,
  path = "",
  locale = defaultLocale,
}: {
  title: string;
  description: string;
  path?: string;
  locale?: Locale;
}): Metadata {
  const url = `${siteConfig.url}${path}`;
  const ogLocale = locale === "fr" ? "fr_FR" : "en_US";

  return {
    title,
    description,
    keywords: siteConfig.keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: ogLocale,
      type: "website",
      images: [
        {
          url: siteConfig.ogImage,
          width: 1600,
          height: 900,
          alt: `${siteConfig.name} luxury Moroccan real estate`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteConfig.ogImage],
    },
  };
}
