"use client";

import { Button, type ButtonProps } from "@/components/ui/button";
import { useScrollToSection } from "@/lib/use-scroll-to-section";

interface ScrollButtonProps extends Omit<ButtonProps, "onClick"> {
  /** Section id to smooth-scroll into view (use "top" for the page top). */
  sectionId: string;
}

/**
 * A Button that smooth-scrolls a landing-page section into view without
 * writing a hash to the URL. Lets server components trigger client scrolling.
 */
export default function ScrollButton({
  sectionId,
  ...props
}: ScrollButtonProps) {
  const scrollToSection = useScrollToSection();
  return <Button onClick={() => scrollToSection(sectionId)} {...props} />;
}
