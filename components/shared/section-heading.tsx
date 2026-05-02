import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("max-w-3xl space-y-4", align === "center" && "mx-auto text-center")}>
      {eyebrow ? <Badge variant="accent">{eyebrow}</Badge> : null}
      <div className="space-y-3">
        <h2 className="font-serif text-4xl leading-none tracking-tight text-primary md:text-5xl">{title}</h2>
        {description ? <p className="text-base leading-7 text-muted-foreground md:text-lg">{description}</p> : null}
      </div>
    </div>
  );
}
