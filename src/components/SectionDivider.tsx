import { cn } from "@/lib/utils";

type DividerColor = "white" | "lavender" | "blue" | "purple" | "muted";

const fills: Record<DividerColor, string> = {
  white: "var(--flip-white)",
  lavender: "var(--flip-lavender)",
  blue: "var(--flip-soft-blue)",
  purple: "var(--flip-purple)",
  muted: "var(--flip-gray)",
};

interface SectionDividerProps {
  fill?: DividerColor;
  flip?: boolean;
  className?: string;
}

export function SectionDivider({ fill = "lavender", flip = false, className }: SectionDividerProps) {
  return (
    <div
      aria-hidden
      className={cn("relative -mt-px h-12 w-full overflow-hidden sm:h-16", className)}
      style={{ color: fills[fill] }}
    >
      <svg
        viewBox="0 0 1440 64"
        preserveAspectRatio="none"
        className={cn("absolute inset-0 h-full w-full", flip && "rotate-180")}
      >
        <path
          d="M0,32 C360,64 720,0 1080,32 C1260,48 1380,56 1440,64 L1440,64 L0,64 Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}
