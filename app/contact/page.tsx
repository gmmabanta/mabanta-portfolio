import type { Metadata } from "next";
import SiteShell from "@/components/layout/site-shell";
import ContactForm from "@/components/contact/contact-form";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact | Mae Mabanta",
  description:
    "Get in touch about collaborations on high-impact AI projects and creative engineering roles.",
};

export default function ContactPage() {
  return (
    <SiteShell>
      <section className="px-gutter py-section-padding-mobile md:py-section-padding-desktop">
        <div className="gap-gutter grid grid-cols-1 lg:grid-cols-2 mx-auto max-w-container-max">
          {/* Intro */}
          <div>
            <span className="block mb-4 font-label-caps text-label-caps text-secondary">
              LET&apos;S TALK
            </span>
            <h1 className="mb-8 font-headline-md text-headline-md text-primary">
              Ready to build something intelligent?
            </h1>
            <p className="mb-12 font-body-lg text-body-lg text-on-surface-variant">
              I&apos;m currently open to collaborations on high-impact AI
              projects and creative engineering roles. Drop a message below or
              reach me through any of the channels.
            </p>

            <div className="flex flex-col gap-4">
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-body-md text-body-md text-on-surface hover:text-primary transition-colors"
              >
                {siteConfig.email}
              </a>
              <div className="flex flex-wrap gap-6">
                {siteConfig.socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-surface p-8 md:p-10 border-4 border-primary-container rounded-2xl">
            <ContactForm />
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
