import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import SiteShell from "@/components/layout/site-shell";
import Icon from "@/components/ui/icon";
import { getAllPostSlugs, getPostBySlug, formatPostDate } from "@/lib/blog";

// Only pre-rendered slugs are valid; anything else 404s.
export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Post Not Found | Mae Mabanta" };

  return {
    title: `${post.title} | Mae Mabanta`,
    description: post.description,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  // Dynamically import the compiled MDX. The body renders through the
  // global component map defined in `mdx-components.tsx`.
  const { default: PostContent } = await import(`@/content/blog/${slug}.mdx`);

  return (
    <SiteShell>
      <article className="px-gutter py-section-padding-mobile md:py-section-padding-desktop">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 mb-8 font-label-caps text-label-caps text-secondary hover:text-primary transition-colors"
          >
            <Icon name="arrow_back" className="text-base" />
            ALL ARTICLES
          </Link>

          <span className="block mb-4 font-label-caps text-label-caps text-secondary">
            {formatPostDate(post.date)} · {post.author}
          </span>
          <h1 className="mb-8 font-headline-md text-headline-md text-primary">
            {post.title}
          </h1>

          <div className="relative bg-surface-container-high mb-12 border-2 rounded-2xl border-outline-variant aspect-video overflow-hidden">
            <Image
              src={post.image}
              alt={post.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
              priority
            />
          </div>

          <div className="prose-portfolio">
            <PostContent />
          </div>
        </div>
      </article>
    </SiteShell>
  );
}
