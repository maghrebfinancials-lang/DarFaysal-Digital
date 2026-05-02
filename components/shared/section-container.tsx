import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function SectionContainer({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return <div className={cn("container", className)}>{children}</div>;
}
