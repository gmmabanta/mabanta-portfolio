import { ButtonLink } from "@/components/ui/button";
import BlogCard from "@/components/blog/blog-card";
import { type PostMeta } from "@/lib/blog";

export default function Blog({ posts }: { posts: PostMeta[] }) {
  return (
    <section
      id="blog"
      className="px-gutter py-section-padding-desktop overflow-hidden scroll-mt-32"
    >
      <div className="relative mx-auto max-w-container-max">
        <div className="mb-24 text-center">
          <h2 className="inline-block relative mb-4 font-headline-md text-headline-md text-primary">
            The AI Lab
            <svg
              className="hidden md:block top-0 -right-24 absolute w-20 h-20 text-secondary-container"
              viewBox="0 0 100 100"
            >
              <path
                d="M10,10 Q50,0 90,50 M90,50 L70,40 M90,30 L90,50"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
              />
            </svg>
          </h2>
          <p className="mx-auto max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
            Deep dives into the intersection of code, ethics, and the occasional
            hallucination.
          </p>
        </div>

        <div className="gap-8 grid grid-cols-1 md:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <ButtonLink href="/blog" variant="outline" size="md">
            Read All Articles
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
