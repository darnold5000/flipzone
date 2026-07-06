import {
  Building2,
  Heart,
  Shield,
  Sparkles,
  Star,
  Trophy,
  Users,
} from "lucide-react";
import { aboutDifferentiators } from "@/data/site";
import { cn } from "@/lib/utils";

const icons = {
  star: Star,
  shield: Shield,
  users: Users,
  trophy: Trophy,
  heart: Heart,
  building: Building2,
};

const accentStyles = {
  purple: "bg-flip-purple/15 text-flip-purple",
  teal: "bg-flip-teal/15 text-flip-teal",
  coral: "bg-flip-coral/15 text-flip-coral",
  orange: "bg-flip-orange/15 text-flip-orange",
} as const;

export function AboutDifferentiators() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-wide">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <div className="mb-3 flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-widest text-flip-teal">
            <Sparkles className="size-4" />
            Why Families Trust Flip Zone
          </div>
          <h2 className="font-heading text-3xl font-bold text-flip-purple sm:text-4xl">
            What Makes Flip Zone Different
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {aboutDifferentiators.map((item) => {
            const Icon = icons[item.icon];
            return (
              <div
                key={item.title}
                className="rounded-3xl border border-border/60 bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div
                  className={cn(
                    "mb-4 inline-flex size-11 items-center justify-center rounded-full",
                    accentStyles[item.accent],
                  )}
                >
                  <Icon className="size-5" strokeWidth={2.25} />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
