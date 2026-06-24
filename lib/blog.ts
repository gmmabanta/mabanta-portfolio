import fs from "fs";
import path from "path";

const POSTS_DIRECTORY = path.join(process.cwd(), "content", "blog");

export type PostFrontmatter = {
  title: string;
  description: string;
  date: string;
  author: string;
  image: string;
  imageAlt: string;
};

export type PostMeta = PostFrontmatter & {
  slug: string;
};

/**
 * Reads the exported `metadata` object from a compiled MDX post.
 * `@next/mdx` lets MDX files export plain JS values, which is the
 * idiomatic way to attach frontmatter-style data to a post.
 */
async function getPostMetadata(slug: string): Promise<PostMeta> {
  const { metadata } = (await import(`@/content/blog/${slug}.mdx`)) as {
    metadata: PostFrontmatter;
  };

  return { slug, ...metadata };
}

/** Returns the slug for every `.mdx` file in the content directory. */
export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(POSTS_DIRECTORY)) return [];

  return fs
    .readdirSync(POSTS_DIRECTORY)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

/** Returns all posts' metadata, sorted by date (newest first). */
export async function getAllPosts(): Promise<PostMeta[]> {
  const posts = await Promise.all(getAllPostSlugs().map(getPostMetadata));
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

/** Returns a single post's metadata, or null if it doesn't exist. */
export async function getPostBySlug(slug: string): Promise<PostMeta | null> {
  if (!getAllPostSlugs().includes(slug)) return null;
  return getPostMetadata(slug);
}

/** Formats an ISO date string into a display label, e.g. "MARCH 2024". */
export function formatPostDate(date: string): string {
  return new Date(date)
    .toLocaleDateString("en-US", { month: "long", year: "numeric" })
    .toUpperCase();
}
