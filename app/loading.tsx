import { SectionContainer } from "@/components/shared/section-container";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <section className="section-space">
      <SectionContainer className="space-y-6">
        <Skeleton className="h-6 w-32" />
        <Skeleton className="h-16 w-full max-w-3xl" />
        <Skeleton className="h-8 w-full max-w-2xl" />
        <div className="luxury-divider" />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <Skeleton className="h-[420px] w-full rounded-[28px]" />
          <Skeleton className="h-[420px] w-full rounded-[28px]" />
          <Skeleton className="h-[420px] w-full rounded-[28px]" />
        </div>
      </SectionContainer>
    </section>
  );
}
