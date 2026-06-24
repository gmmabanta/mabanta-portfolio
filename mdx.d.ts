// Type declarations for importing .mdx files as React components.
// `@next/mdx` compiles each .mdx file to a module whose default export is a
// React component. Our posts also export a `metadata` object.
declare module "*.mdx" {
  import type { ComponentType } from "react";
  import type { PostFrontmatter } from "@/lib/blog";

  export const metadata: PostFrontmatter;
  const MDXComponent: ComponentType<{ components?: Record<string, unknown> }>;
  export default MDXComponent;
}
