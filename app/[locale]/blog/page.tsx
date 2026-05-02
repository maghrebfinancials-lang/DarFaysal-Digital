import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { SectionContainer } from "@/components/shared/section-container";
import { blogPosts } from "@/lib/data";
import { createMetadata } from "@/lib/seo";
import { getDictionary, getLocalizedPath, isLocale, localize } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  if (!isLocale(params.locale)) return {};
  const dict = getDictionary(params.locale);
  return createMetadata({
    title: dict.pages.blog.title,
    description: dict.pages.blog.description,
    path: `/${params.locale}/${dict.routes.blog}`,
    locale: params.locale,
  });
}

export default function BlogPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const dict = getDictionary(locale);
  const homeLabel = locale === "fr" ? "Accueil" : "Home";

  return (
    <section className="section-space">
      <SectionContainer className="space-y-8">
        <Breadcrumbs items={[{ label: homeLabel, href: `/${locale}` }, { label: dict.nav.blog }]} />
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.28em] text-accent">{dict.pages.blog.eyebrow}</p>
          <h1 className="font-serif text-5xl text-primary md:text-6xl">{dict.pages.blog.title}</h1>
          <p className="max-w-3xl text-base leading-7 text-muted-foreground">{dict.pages.blog.description}</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.id} className="overflow-hidden rounded-[28px] border border-border bg-white shadow-soft">
              <div className="relative h-64">
                <Image src={post.coverImage} alt={localize(locale, post.title)} fill className="object-cover" />
              </div>
              <div className="space-y-4 p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-accent">{localize(locale, post.category)}</p>
                <Link href={getLocalizedPath(locale, "blog", post.slug)} className="font-serif text-3xl leading-none text-primary">
                  {localize(locale, post.title)}
                </Link>
                <p className="text-sm leading-7 text-muted-foreground">{localize(locale, post.excerpt)}</p>
                <p className="text-sm text-muted-foreground">
                  {post.author} | {localize(locale, post.readTime)}
                </p>
              </div>
            </article>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
