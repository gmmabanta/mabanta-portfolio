/**
 * Central site configuration: navigation, contact details, social links, and
 * file paths. Update values here and they propagate across the whole app.
 */

/**
 * Prefix a path in `public/` with the deploy base path (e.g. GitHub Pages
 * project subpath). next/link and next/image handle this automatically, but
 * plain anchors and downloads need it applied manually.
 */
export function withBasePath(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return `${base}${path}`;
}

export const siteConfig = {
  name: "Mae Mabanta",
  email: "hello@maemabanta.com",
  resumePath: "/resume/mae-mabanta-resume.pdf",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/glorie-mae-mabanta" },
    { label: "GitHub", href: "https://github.com/gmmabanta" },
    { label: "Email", href: "mailto:hello@maemabanta.com" },
  ],
};

/**
 * A nav item is either:
 * - a route link (`href`), or
 * - an in-page section link (`sectionId`) that smooth-scrolls the matching
 *   element on the landing page into view without changing the URL hash.
 */
export type NavLink =
  | { label: string; kind: "route"; href: string }
  | { label: string; kind: "section"; sectionId: string };

/**
 * Primary navigation. Section links scroll landing-page sections into view;
 * route links navigate to dedicated pages.
 */
export const navLinks: NavLink[] = [
  { label: "Home", kind: "section", sectionId: "top" },
  { label: "Experience", kind: "section", sectionId: "experience" },
  { label: "Work", kind: "section", sectionId: "work" },
  { label: "Blog", kind: "route", href: "/blog" },
];


