import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface IconFeature {
  icon: LucideIcon;
  label: string;
}

interface ProgramIconGridProps {
  items: IconFeature[];
  className?: string;
  columns?: 2 | 3 | 4 | 5;
}

export function ProgramIconGrid({ items, className, columns = 3 }: ProgramIconGridProps) {
  const colClass = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-2 lg:grid-cols-4",
    5: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5",
  };

  return (
    <div className={cn("grid gap-8", colClass[columns], className)}>
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <div key={item.label} className="flex flex-col items-center text-center">
            <div className="flex size-16 items-center justify-center rounded-full bg-flip-purple/10">
              <Icon className="size-7 text-flip-purple" strokeWidth={1.75} />
            </div>
            <p className="mt-4 max-w-[12rem] text-sm font-medium leading-snug text-foreground">
              {item.label}
            </p>
          </div>
        );
      })}
    </div>
  );
}
