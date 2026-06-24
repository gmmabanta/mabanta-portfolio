import Link from "next/link";
import { siteConfig } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-unit bg-surface-container-high mt-section-padding-desktop px-gutter py-section-padding-mobile md:py-section-padding-desktop border-tertiary-container border-t-4 rounded-t-[64px] w-full">
      <Link
        href="/"
        className="mb-8 font-headline-md text-headline-md text-primary"
      >
        {siteConfig.name}
      </Link>

      <div className="flex gap-8 mb-12">
        {siteConfig.socials.map((link) => {
          const isMail = link.href.startsWith("mailto:");
          return (
            <a
              key={link.label}
              href={link.href}
              target={isMail ? undefined : "_blank"}
              rel={isMail ? undefined : "noopener noreferrer"}
              className="inline-block font-label-caps text-label-caps text-on-surface-variant hover:text-primary hover:rotate-3 transition-all"
            >
              {link.label}
            </a>
          );
        })}
      </div>

      <p className="opacity-60 font-label-caps text-label-caps text-on-surface-variant text-center">
        © {new Date().getFullYear()} {siteConfig.name}. Built with human logic
        &amp; machine magic.
      </p>
    </footer>
  );
}
