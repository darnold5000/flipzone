import { Building2, Star, Trophy, Users } from "lucide-react";
import { aboutQuickStats } from "@/data/about";
import { site } from "@/data/site";

const icons = {
  building: Building2,
  users: Users,
  trophy: Trophy,
  star: Star,
};

function StatValue({ icon }: { icon: (typeof aboutQuickStats)[number]["icon"] }) {
  switch (icon) {
    case "building":
      return <>{site.stats.sqft.toLocaleString()}+</>;
    case "users":
      return <>{site.stats.yearsServing}+</>;
    case "trophy":
      return "USAG";
    case "star":
      return "1,000s";
    default:
      return null;
  }
}

export function AboutQuickStats() {
  return (
    <section className="border-y border-border bg-card py-10">
      <div className="container-wide">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {aboutQuickStats.map((stat) => {
            const Icon = icons[stat.icon];
            return (
              <div key={stat.label} className="flex flex-col items-center text-center">
                <div className="mb-3 flex size-12 items-center justify-center rounded-full bg-flip-purple/10 text-flip-purple">
                  <Icon className="size-5" strokeWidth={2.25} />
                </div>
                <p className="font-heading text-2xl font-bold text-flip-purple">
                  <StatValue icon={stat.icon} />
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
