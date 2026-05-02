import { en } from "@/messages/en";
import { fr } from "@/messages/fr";
import type { Locale, LocalizedText } from "@/types";

export const locales: Locale[] = ["en", "fr"];
export const defaultLocale: Locale = "en";

export const dictionaries = { en, fr };
export type Dictionary = typeof en;

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}

export function localize(locale: Locale, value: LocalizedText) {
  return value[locale];
}

export function localizeList(locale: Locale, value: Record<Locale, string[]>) {
  return value[locale];
}

export function getLocalizedPath(
  locale: Locale,
  key: keyof typeof en.routes,
  slug?: string
) {
  const route = dictionaries[locale].routes[key];
  return slug ? `/${locale}/${route}/${slug}` : `/${locale}/${route}`;
}

export function switchLocalePath(pathname: string, nextLocale: Locale) {
  const segments = pathname.split("/").filter(Boolean);
  if (!segments.length) {
    return `/${nextLocale}`;
  }
  if (isLocale(segments[0])) {
    const currentLocale = segments[0];
    const currentRoutes = dictionaries[currentLocale].routes as Record<string, string>;
    const nextRoutes = dictionaries[nextLocale].routes as Record<string, string>;
    const currentSegment = segments[1];
    if (currentSegment) {
      const routeKey = Object.keys(currentRoutes).find((key) => currentRoutes[key] === currentSegment);
      if (routeKey && nextRoutes[routeKey]) {
        segments[1] = nextRoutes[routeKey];
      }
    }
    segments[0] = nextLocale;
    return `/${segments.join("/")}`;
  }
  return `/${nextLocale}/${segments.join("/")}`;
}
