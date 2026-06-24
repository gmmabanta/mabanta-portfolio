import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export default function Text({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <span className={cn("text", className)}>{children}</span>;
}
