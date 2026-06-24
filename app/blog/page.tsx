import type { Metadata } from "next";
import SiteShell from "@/components/layout/site-shell";
import BlogCard from "@/components/blog/blog-card";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | Mae Mabanta",
  description:
    "Deep dives into the intersection of code, ethics, and the occasional hallucination.",
};

export default async function BlogIndexPage() {
  const posts = await getAllPosts();

  return (
    <SiteShell>
      <section className="px-gutter py-section-padding-mobile md:py-section-padding-desktop">
        <div className="mx-auto max-w-container-max">
          <div className="mb-24 text-center">
            <h1 className="mb-4 font-headline-md text-headline-md text-primary">
              The AI Lab
            </h1>
            <p className="mx-auto max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
              Deep dives into the intersection of code, ethics, and the
              occasional hallucination.
            </p>
          </div>

          {posts.length > 0 ? (
            <div className="gap-8 grid grid-cols-1 md:grid-cols-3">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <p className="font-body-lg text-body-lg text-on-surface-variant text-center">
              No posts yet. Check back soon.
            </p>
          )}
        </div>
      </section>
    </SiteShell>
  );
}
