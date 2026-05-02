import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { SectionContainer } from "@/components/shared/section-container";
import { blogPosts } from "@/lib/data";
import { createMetadata } from "@/lib/seo";
import { getDictionary, getLocalizedPath, isLocale, localize, localizeList } from "@/lib/i18n";

export function generateStaticParams() {
  return ["en", "fr"].flatMap((locale) => blogPosts.map((post) => ({ locale, slug: post.slug })));
}

export async function generateMetadata({ params }: { params: { locale: string; slug: string } }): Promise<Metadata> {
  if (!isLocale(params.locale)) return {};
  const post = blogPosts.find((item) => item.slug === params.slug);
  if (!post) return { title: "Article" };
  const dict = getDictionary(params.locale);
  return createMetadata({
    title: localize(params.locale, post.title),
    description: localize(params.locale, post.excerpt),
    path: `/${params.locale}/${dict.routes.blog}/${post.slug}`,
    locale: params.locale,
  });
}

export default function BlogPostPage({ params }: { params: { locale: string; slug: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const dict = getDictionary(locale);
  const homeLabel = locale === "fr" ? "Accueil" : "Home";
  const post = blogPosts.find((item) => item.slug === params.slug);

  if (!post) notFound();

  return (
    <section className="section-space">
      <SectionContainer className="max-w-4xl space-y-8">
        <Breadcrumbs items={[{ label: homeLabel, href: `/${locale}` }, { label: dict.nav.blog, href: getLocalizedPath(locale, "blog") }, { label: localize(locale, post.title) }]} />
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.28em] text-accent">{localize(locale, post.category)}</p>
          <h1 className="font-serif text-5xl text-primary md:text-6xl">{localize(locale, post.title)}</h1>
          <p className="text-sm text-muted-foreground">
            {post.author} | {post.publishedAt} | {localize(locale, post.readTime)}
          </p>
        </div>
        <div className="relative h-[420px] overflow-hidden rounded-[32px]">
          <Image src={post.coverImage} alt={localize(locale, post.title)} fill className="object-cover" />
        </div>
        <article className="rounded-[32px] border border-border bg-white p-8 shadow-soft">
          <div className="space-y-6 text-base leading-8 text-muted-foreground">
            {localizeList(locale, post.content).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </article>
      </SectionContainer>
    </section>
  );
}
