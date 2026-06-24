import { ButtonLink } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { cn } from "@/lib/utils";

type Project = {
  title: string;
  description: string;
  tags: string[];
  icon: string;
  href: string;
  /** Tailwind classes controlling the accent (border + icon color + rotation). */
  accent: {
    border: string;
    icon: string;
    rotation: string;
  };
};

const PROJECTS: Project[] = [
  {
    title: "Agentic AI Coding Assistant",
    description:
      "An AI coding assistant built from the ground up using an agentic AI approach, with authorization features, performance optimizations, and end-to-end readiness for commercialization.",
    tags: ["AGENTIC AI", "LANGGRAPH", "NEXT.JS"],
    icon: "smart_toy",
    href: "/contact",
    accent: {
      border: "border-primary-container",
      icon: "text-primary",
      rotation: "rotate-12",
    },
  },
  {
    title: "SAP Terms Translator",
    description:
      "A proof-of-concept agentic AI application that translates SAP terminology between English and Japanese, presented to several Japanese enterprise clients.",
    tags: ["AGENTIC AI", "LLM", "FASTAPI"],
    icon: "translate",
    href: "/contact",
    accent: {
      border: "border-secondary",
      icon: "text-secondary",
      rotation: "-rotate-12",
    },
  },
  {
    title: "AI QA Evidence Validator",
    description:
      "An AI testing tool that parses Japanese unit specs, source code, and reference docs to generate an evidence guide, then cross-checks QA replication videos against it to confirm test steps were fulfilled correctly.",
    tags: ["NEXT.JS", "AWS BEDROCK", "AWS ECS"],
    icon: "fact_check",
    href: "/contact",
    accent: {
      border: "border-tertiary-container",
      icon: "text-tertiary",
      rotation: "rotate-6",
    },
  },
  {
    title: "Telerehabilitation Sensor Network",
    description:
      "A wireless sensor network for Parkinson's disease telerehabilitation using rhythmic auditory stimulation—published on Springer and presented at EAI PervasiveHealth 2021.",
    tags: ["ARDUINO", "BLUETOOTH", "FLUTTER"],
    icon: "sensors",
    href: "https://link.springer.com/",
    accent: {
      border: "border-primary-container",
      icon: "text-primary",
      rotation: "-rotate-6",
    },
  },
];

function ProjectCard({
  title,
  description,
  tags,
  icon,
  href,
  accent,
}: Project) {
  return (
    <a
      href={href}
      className={cn(
        "group block relative bg-surface p-10 border-4 rounded-2xl overflow-hidden neo-brutalist-card",
        accent.border,
      )}
    >
      <h3 className="mb-4 font-headline-sm text-headline-sm text-primary group-hover:text-secondary-container transition-colors">
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
    </a>
  );
}

export default function Projects() {
  return (
    <section
      id="work"
      className="px-gutter py-section-padding-desktop scroll-mt-32"
    >
      <div className="mx-auto max-w-container-max">
        <div className="flex md:flex-row flex-col justify-between items-end gap-8 mb-24">
          <div>
            <h2 className="mb-4 font-headline-md text-headline-md text-primary">
              Selected Work
            </h2>
            <div className="bg-secondary-container w-32 h-2" />
          </div>
          <p className="max-w-md font-body-md text-body-md text-on-surface-variant">
            A handful of projects where human logic and machine magic met to
            ship something genuinely useful.
          </p>
        </div>

        <div className="gap-12 grid grid-cols-1 md:grid-cols-3">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <ButtonLink href="/contact" variant="outline" size="md">
            Work With Me
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
