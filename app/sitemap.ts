import type { MetadataRoute } from "next";

import { blogPosts, properties } from "@/lib/data";
import { locales, getDictionary } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = locales.flatMap((locale) => {
    const dict = getDictionary(locale);
    return [
      `/${locale}`,
      `/${locale}/${dict.routes.properties}`,
      `/${locale}/${dict.routes.bookVisit}`,
      `/${locale}/${dict.routes.about}`,
      `/${locale}/${dict.routes.services}`,
      `/${locale}/${dict.routes.contact}`,
      `/${locale}/${dict.routes.listYourProperty}`,
      `/${locale}/${dict.routes.blog}`,
    ];
  });

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteConfig.url}${route}`,
      lastModified: new Date(),
    })),
    ...locales.flatMap((locale) => {
      const dict = getDictionary(locale);
      return properties.map((property) => ({
        url: `${siteConfig.url}/${locale}/${dict.routes.properties}/${property.slug}`,
        lastModified: new Date(property.createdAt),
      }));
    }),
    ...locales.flatMap((locale) => {
      const dict = getDictionary(locale);
      return blogPosts.map((post) => ({
        url: `${siteConfig.url}/${locale}/${dict.routes.blog}/${post.slug}`,
        lastModified: new Date(post.publishedAt),
      }));
    }),
  ];
}
