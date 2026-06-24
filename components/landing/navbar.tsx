"use client";

import { useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ButtonLink } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { navLinks, siteConfig } from "@/lib/site";
import {
  useActiveSection,
  useScrollToSection,
} from "@/lib/use-scroll-to-section";

const linkBase =
  "font-body-md text-body-md transition-all hover:translate-y-[-2px] cursor-pointer";
const linkActive =
  "font-bold text-secondary underline decoration-2 underline-offset-4";
const linkInactive = "text-on-surface";

export default function Navbar() {
  const pathname = usePathname();
  const scrollToSection = useScrollToSection();

  const sectionIds = useMemo(
    () =>
      navLinks
        .filter((link) => link.kind === "section")
        .map((link) => link.sectionId),
    [],
  );
  const activeSection = useActiveSection(sectionIds);

  return (
    <nav className="top-4 left-1/2 z-50 fixed flex justify-between items-center bg-surface/80 shadow-[4px_4px_0px_0px_rgba(46,91,255,1)] backdrop-blur-xl mx-auto px-6 py-3 border-2 border-primary rounded-xl w-[90%] max-w-container-max -translate-x-1/2">
      <button
        type="button"
        onClick={() => scrollToSection("top")}
        className="font-headline-sm font-bold text-headline-sm text-primary cursor-pointer"
      >
        {siteConfig.name}
      </button>

      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) =>
          link.kind === "route" ? (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                linkBase,
                pathname.startsWith(link.href) ? linkActive : linkInactive,
              )}
            >
              {link.label}
            </Link>
          ) : (
            <button
              key={link.label}
              type="button"
              onClick={() => scrollToSection(link.sectionId)}
              className={cn(
                linkBase,
                pathname === "/" && activeSection === link.sectionId
                  ? linkActive
                  : linkInactive,
              )}
            >
              {link.label}
            </button>
          ),
        )}
      </div>

      <ButtonLink href="/contact" variant="primary" size="sm">
        Contact
      </ButtonLink>
    </nav>
  );
}
