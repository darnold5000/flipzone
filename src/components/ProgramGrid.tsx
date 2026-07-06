import { ProgramCard } from "@/components/ProgramCard";
import type { Program } from "@/data/programs";

interface ProgramGridProps {
  programs: Program[];
  variant?: "default" | "compact" | "featured";
  columns?: 2 | 3 | 4;
}

export function ProgramGrid({
  programs,
  variant = "default",
  columns = 3,
}: ProgramGridProps) {
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  };

  if (variant === "compact") {
    return (
      <div className="grid gap-3 sm:grid-cols-2">
        {programs.map((program, i) => (
          <ProgramCard key={program.slug} program={program} variant="compact" index={i} />
        ))}
      </div>
    );
  }

  return (
    <div className={`grid gap-6 sm:grid-cols-2 ${gridCols[columns]}`}>
      {programs.map((program, i) => (
        <ProgramCard
          key={program.slug}
          program={program}
          variant={variant}
          index={i}
        />
      ))}
    </div>
  );
}
