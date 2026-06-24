import { cn } from "@/lib/utils";

interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Material Symbols ligature name, e.g. "arrow_downward" */
  name: string;
}

/**
 * Thin wrapper around Google's Material Symbols (Outlined) font.
 * Usage: <Icon name="neurology" className="text-primary" />
 */
export default function Icon({ name, className, ...props }: IconProps) {
  return (
    <span
      aria-hidden="true"
      className={cn("material-symbols-outlined", className)}
      {...props}
    >
      {name}
    </span>
  );
}
