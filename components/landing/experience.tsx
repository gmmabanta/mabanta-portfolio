import Icon from "@/components/ui/icon";
import { cn } from "@/lib/utils";

type Experience = {
  period: string;
  title: string;
  description: string;
  tags: string[];
  icon: string;
  /** Tailwind classes controlling the accent (border + icon color + rotation) */
  accent: {
    border: string;
    icon: string;
    rotation: string;
  };
};

const EXPERIENCES: Experience[] = [
  {
    period: "MAY 2025 - PRESENT",
    title: "Application Developer — IBM Solutions Delivery",
    description:
      "Building AI-powered products end to end: an agentic AI coding assistant prepared for commercialization, a Japanese localization suite, and an end-to-end agentic solution for Maximo automation scripting using WatsonX Orchestrate.",
    tags: ["NEXTJS", "FASTAPI", "LANGGRAPH", "WATSONX", "AWS BEDROCK"],
    icon: "smart_toy",
    accent: {
      border: "border-primary-container",
      icon: "text-primary",
      rotation: "rotate-12",
    },
  },
  {
    period: "AUG 2021 - APR 2025",
    title: "Engineer, Cloud Solutions — Samsung R&D Philippines",
    description:
      "Led fullstack development of an internal AI Dashboard and its release to other R&D centers, integrating the company IdP. Migrated legacy dashboards to NextJS and React, improving performance, maintainability, and user experience.",
    tags: ["NEXTJS", "REACT", "TYPESCRIPT", "PRISMA", "POSTGRES"],
    icon: "cloud",
    accent: {
      border: "border-secondary",
      icon: "text-secondary",
      rotation: "-rotate-12",
    },
  },
  {
    period: "OCT 2020 - JAN 2021",
    title: "JavaScript Developer — Deloitte Consulting PH",
    description:
      "Analyzed current workflow implementations, customized scripts, and proposed workflow improvements using ServiceNow for clients based in New Zealand.",
    tags: ["SERVICENOW", "JAVASCRIPT", "WORKFLOWS"],
    icon: "integration_instructions",
    accent: {
      border: "border-tertiary",
      icon: "text-tertiary",
      rotation: "rotate-6",
    },
  },
];

function ExperienceCard({
  period,
  title,
  description,
  tags,
  icon,
  accent,
}: Experience) {
  return (
    <div
      className={cn(
        "relative bg-surface p-10 border-4 rounded-2xl overflow-hidden neo-brutalist-card",
        accent.border,
      )}
    >
      <span className="block mb-2 font-label-caps text-label-caps text-secondary">
        {period}
      </span>
      <h3 className="mb-4 font-headline-sm text-headline-sm text-primary">
        {title}
      </h3>
      <p className="mb-6 font-body-md text-body-md text-on-surface-variant">
        {description}
      </p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="bg-tertiary/10 px-3 py-1 border border-tertiary rounded font-label-caps text-[12px] text-tertiary"
          >
            {tag}
          </span>
        ))}
      </div>
      <Icon
        name={icon}
        className={cn(
          "-right-4 -bottom-4 absolute opacity-5 text-9xl",
          accent.icon,
          accent.rotation,
        )}
      />
    </div>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative bg-surface-container-low px-gutter py-section-padding-desktop scroll-mt-32"
    >
      <div className="mx-auto max-w-container-max">
        <div className="flex md:flex-row flex-col justify-between items-end gap-8 mb-24">
          <div>
            <h2 className="mb-4 font-headline-md text-headline-md text-primary">
              Work & Research Experience
            </h2>
            <div className="bg-secondary-container w-32 h-2" />
          </div>
          <p className="max-w-md font-body-md text-body-md text-on-surface-variant">
            A chronological record of building fullstack products, shipping
            agentic AI solutions, and modernizing applications across global
            teams.
          </p>
        </div>

        <div className="gap-12 grid grid-cols-1 md:grid-cols-2">
          {EXPERIENCES.map((experience) => (
            <ExperienceCard key={experience.title} {...experience} />
          ))}
        </div>
      </div>
    </section>
  );
}
