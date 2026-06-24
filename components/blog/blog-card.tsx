import Image from "next/image";
import Link from "next/link";
import { formatPostDate, type PostMeta } from "@/lib/blog";

export default function BlogCard({ post }: { post: PostMeta }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block cursor-pointer">
      <article>
        <div className="relative bg-surface-container-high mb-6 border-2 rounded-2xl border-outline-variant h-64 overflow-hidden">
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="grayscale group-hover:grayscale-0 object-cover transition-all duration-500"
          />
        </div>
        <div className="p-4">
          <span className="block mb-2 font-label-caps text-label-caps text-secondary">
            {formatPostDate(post.date)}
          </span>
          <h4 className="mb-4 font-headline-sm text-headline-sm text-primary group-hover:text-secondary-container transition-colors">
            {post.title}
          </h4>
          <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2">
            {post.description}
          </p>
        </div>
      </article>
    </Link>
  );
}
