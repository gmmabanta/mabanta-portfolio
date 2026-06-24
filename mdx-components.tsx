import type { MDXComponents } from "mdx/types";
import Image, { type ImageProps } from "next/image";
import Link from "next/link";

/**
 * Global MDX component map. These styled elements are applied to every MDX file
 * rendered in the app, keeping blog content consistent with the design system.
 */
const components: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="mb-8 font-headline-md text-headline-md text-primary">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="mt-12 mb-4 font-headline-sm text-headline-sm text-primary">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-8 mb-3 font-headline-sm text-primary">{children}</h3>
  ),
  p: ({ children }) => (
    <p className="mb-6 font-body-lg text-body-lg text-on-surface-variant">
      {children}
    </p>
  ),
  a: ({ href = "", children }) => {
    const isInternal = href.startsWith("/") || href.startsWith("#");
    const className =
      "text-secondary hover:text-primary underline decoration-2 underline-offset-4";
    return isInternal ? (
      <Link href={href} className={className}>
        {children}
      </Link>
    ) : (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    );
  },
  ul: ({ children }) => (
    <ul className="mb-6 pl-6 font-body-lg text-body-lg text-on-surface-variant list-disc">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="mb-6 pl-6 font-body-lg text-body-lg text-on-surface-variant list-decimal">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="mb-2">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="my-8 pl-6 border-primary-container border-l-4 font-body-lg text-body-lg text-on-surface-variant italic">
      {children}
    </blockquote>
  ),
  strong: ({ children }) => (
    <strong className="font-bold text-on-surface">{children}</strong>
  ),
  code: ({ children }) => (
    <code className="bg-surface-container-high px-1.5 py-0.5 rounded font-label-caps text-secondary text-sm whitespace-pre-wrap">
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre className="[&>code]:block bg-surface-container-low [&>code]:bg-transparent my-8 p-6 [&>code]:p-0 border-2 rounded-xl border-outline-variant max-w-full overflow-x-auto [&>code]:font-normal text-on-surface [&>code]:text-on-surface text-sm [&>code]:break-words whitespace-pre-wrap [&>code]:whitespace-pre-wrap [&>code]:[text-wrap:auto]">
      {children}
    </pre>
  ),

  img: (props) => (
    <Image
      sizes="100vw"
      className="my-8 rounded-2xl w-full h-auto"
      {...(props as ImageProps)}
    />
  ),
};

export function useMDXComponents(inherited: MDXComponents = {}): MDXComponents {
  return { ...inherited, ...components };
}
