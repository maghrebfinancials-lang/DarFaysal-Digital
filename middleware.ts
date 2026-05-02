import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { isLocale } from "@/lib/i18n";

const frRouteMap: Record<string, string> = {
  proprietes: "properties",
  "a-propos": "about",
  services: "services",
  contact: "contact",
  "reserver-visite": "book-visit",
  "confier-votre-bien": "list-your-property",
  blog: "blog",
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  if (pathname === "/") {
    return NextResponse.redirect(new URL("/en", request.url));
  }

  const segments = pathname.split("/").filter(Boolean);
  if (!segments.length) {
    return NextResponse.next();
  }

  const [locale, segment] = segments;
  if (!isLocale(locale) || locale !== "fr" || !segment) {
    return NextResponse.next();
  }

  const canonical = frRouteMap[segment];
  if (!canonical) {
    return NextResponse.next();
  }

  const rewritten = new URL(request.url);
  segments[1] = canonical;
  rewritten.pathname = `/${segments.join("/")}`;
  return NextResponse.rewrite(rewritten);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
