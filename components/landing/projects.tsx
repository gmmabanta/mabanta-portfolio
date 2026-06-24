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
    title: "Generative Design Studio",
    description:
      "An end-to-end pipeline that turns plain-language briefs into production-ready brand systems using fine-tuned diffusion models.",
    tags: ["DIFFUSION", "NEXT.JS", "FASTAPI"],
    icon: "palette",
    href: "/contact",
    accent: {
      border: "border-primary-container",
      icon: "text-primary",
      rotation: "rotate-12",
    },
  },
  {
    title: "Edge Vision Toolkit",
    description:
      "A real-time object-detection toolkit optimized for low-power edge devices, shipping inference under 30ms on commodity hardware.",
    tags: ["PYTORCH", "ONNX", "CUDA"],
    icon: "visibility",
    href: "/contact",
    accent: {
      border: "border-secondary",
      icon: "text-secondary",
      rotation: "-rotate-12",
    },
  },
  {
    title: "Prompt Ops Platform",
    description:
      "A collaborative workspace for versioning, evaluating, and shipping LLM prompts with built-in regression testing and analytics.",
    tags: ["LLM", "TYPESCRIPT", "POSTGRES"],
    icon: "terminal",
    href: "/contact",
    accent: {
      border: "border-tertiary-container",
      icon: "text-tertiary",
      rotation: "rotate-6",
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
