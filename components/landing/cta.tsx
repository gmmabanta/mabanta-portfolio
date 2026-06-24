import { ButtonLink } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { siteConfig, withBasePath } from "@/lib/site";

export default function CallToAction() {
  return (
    <section className="px-gutter py-section-padding-desktop">
      <div className="relative bg-primary-container mx-auto p-12 md:p-24 border-4 border-on-primary-container rounded-[40px] max-w-container-max overflow-hidden">
        <div className="top-0 right-0 absolute opacity-10 p-12">
          <Icon name="auto_awesome" className="text-[300px]" />
        </div>

        <div className="z-10 relative mx-auto max-w-3xl text-center">
          <h2 className="mb-8 font-display-lg-mobile md:font-headline-md text-display-lg-mobile text-on-primary-container md:text-headline-md">
            Ready to build something intelligent?
          </h2>
          <p className="mb-12 font-body-lg text-body-lg text-on-primary-container/80">
            I&apos;m currently open to collaborations on high-impact AI projects
            and creative engineering roles.
          </p>
          <div className="flex sm:flex-row flex-col justify-center gap-6">
            <ButtonLink
              href="/contact"
              variant="elevated"
              tone="accent"
              size="xl"
            >
              Send Me a Message
            </ButtonLink>
            <ButtonLink
              href={withBasePath(siteConfig.resumePath)}
              external
              download
              target="_blank"
              rel="noopener noreferrer"
              variant="elevated"
              tone="surface"
              size="xl"
            >
              Download Resume
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
