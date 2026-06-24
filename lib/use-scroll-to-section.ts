"use client";

import { useCallback, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";


// Where to scroll after landing on "/" from another route. Stored outside the
// URL so no hash is ever written to the address bar.
const PENDING_SECTION_KEY = "pending-scroll-section";

function scrollToSection(sectionId: string) {
  if (sectionId === "top") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  document
    .getElementById(sectionId)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
}

/**
 * Returns a handler that smooth-scrolls a landing-page section into view
 * without ever changing the URL hash. If the user is on another route, it
 * navigates home first and completes the scroll once the section mounts.
 */
export function useScrollToSection() {
  const pathname = usePathname();
  const router = useRouter();

  // After a cross-route navigation home, finish any pending scroll.
  useEffect(() => {
    if (pathname !== "/") return;
    const pending = sessionStorage.getItem(PENDING_SECTION_KEY);
    if (!pending) return;

    sessionStorage.removeItem(PENDING_SECTION_KEY);
    // Wait a frame so the target section is in the DOM before scrolling.
    requestAnimationFrame(() => scrollToSection(pending));
  }, [pathname]);

  return useCallback(
    (sectionId: string) => {
      if (pathname === "/") {
        scrollToSection(sectionId);
        return;
      }

      sessionStorage.setItem(PENDING_SECTION_KEY, sectionId);
      router.push("/");
    },
    [pathname, router],
  );
}

/**
 * Scrollspy: returns the id of the section currently in view. Only active on
 * the landing page ("/"); returns null elsewhere. Tracks the section whose
 * top is nearest the top of the viewport (below the fixed navbar).
 */
export function useActiveSection(sectionIds: string[]): string | null {
  const pathname = usePathname();
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (pathname !== "/") {
      setActiveId(null);
      return;
    }

    const ids = sectionIds.filter((id) => id !== "top");

    const update = () => {
      // "top" wins while the page is scrolled near the very top.
      if (window.scrollY < 200) {
        setActiveId("top");
        return;
      }

      // Otherwise pick the section whose top has passed the navbar offset.
      const offset = 160;
      let current: string | null = "top";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= offset) {
          current = id;
        }
      }
      setActiveId(current);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [pathname, sectionIds]);

  return activeId;
}


