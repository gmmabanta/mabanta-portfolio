import * as React from "react";
import Link, { type LinkProps } from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex justify-center items-center disabled:opacity-50 font-bold active:scale-95 transition-all disabled:pointer-events-none",
  {
    variants: {
      variant: {
        // Solid orange button with a small white shadow lift (nav "Contact")
        primary:
          "bg-secondary-container text-on-secondary-container border-2 border-on-secondary-container hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]",
        // Hero CTA with hard-edge blue depth shadow
        hero: "bg-secondary-container text-on-secondary-container border-2 border-black hard-edge-depth hover:translate-y-[-4px]",
        // Outline button that fills on hover ("Read All Articles")
        outline:
          "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-on-primary",
        // Big black-shadow buttons used in the CTA section
        elevated:
          "border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]",
      },
      tone: {
        none: "",
        // for elevated variant color choices
        accent: "bg-secondary-container text-on-secondary-container",
        surface: "bg-surface text-on-surface",
      },
      size: {
        sm: "px-6 py-2 rounded-lg font-body-md text-body-md",
        md: "px-8 py-4 rounded-xl font-body-md text-body-md",
        lg: "px-10 py-5 rounded-xl font-headline-sm text-headline-sm",
        xl: "px-12 py-6 rounded-2xl font-body-md text-body-md",
      },
    },
    defaultVariants: {
      variant: "primary",
      tone: "none",
      size: "sm",
    },
  },
);

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, tone, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, tone, size }), className)}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export interface ButtonLinkProps
  extends LinkProps, VariantProps<typeof buttonVariants> {
  className?: string;
  children: React.ReactNode;
  /** Render as an external anchor (e.g. mailto:, downloads, off-site links). */
  external?: boolean;
  download?: boolean | string;
  target?: string;
  rel?: string;
}

/**
 * A link styled like a Button. Uses next/link for internal navigation and a
 * plain anchor for external/download links.
 */
const ButtonLink = React.forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  (
    { className, variant, tone, size, external, href, children, ...props },
    ref,
  ) => {
    const classes = cn(buttonVariants({ variant, tone, size }), className);

    if (external) {
      return (
        <a ref={ref} href={href as string} className={classes} {...props}>
          {children}
        </a>
      );
    }

    return (
      <Link ref={ref} href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  },
);
ButtonLink.displayName = "ButtonLink";

export { Button, ButtonLink, buttonVariants };
