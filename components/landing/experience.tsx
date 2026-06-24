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
    period: "2022 - PRESENT",
    title: "Senior AI Engineer",
    description:
      "Leading the development of generative pipelines for enterprise-scale creative tools. Optimizing inference speeds and ensuring model alignment.",
    tags: ["PYTORCH", "TRANSFORMERS", "CUDA"],
    icon: "neurology",
    accent: {
      border: "border-primary-container",
      icon: "text-primary",
      rotation: "rotate-12",
    },
  },
  {
    period: "2020 - 2022",
    title: "ML Developer",
    description:
      "Focused on computer vision applications for autonomous systems. Designed custom CNN architectures for real-time edge processing.",
    tags: ["TENSORFLOW", "OPENCV", "SCIKIT-LEARN"],
    icon: "visibility",
    accent: {
      border: "border-secondary",
      icon: "text-secondary",
      rotation: "-rotate-12",
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
              My Journey in AI
            </h2>
            <div className="bg-secondary-container w-32 h-2" />
          </div>
          <p className="max-w-md font-body-md text-body-md text-on-surface-variant">
            A chronological record of solving impossible problems and training
            models that actually understand the assignment.
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
