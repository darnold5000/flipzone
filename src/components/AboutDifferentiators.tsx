import Link from "next/link";
import {
  Building2,
  GraduationCap,
  Heart,
  Shield,
  Sparkles,
  Trophy,
  Users,
} from "lucide-react";
import { aboutDifferentiators } from "@/data/site";
import { cn } from "@/lib/utils";

const icons = {
  building: Building2,
  users: Users,
  graduation: GraduationCap,
  shield: Shield,
  trophy: Trophy,
  heart: Heart,
};

const accentStyles = {
  purple: "bg-flip-purple/15 text-flip-purple",
  teal: "bg-flip-teal/15 text-flip-teal",
  coral: "bg-flip-coral/15 text-flip-coral",
  orange: "bg-flip-orange/15 text-flip-orange",
} as const;

function DifferentiatorItem({
  item,
}: {
  item: (typeof aboutDifferentiators)[number];
}) {
  const Icon = icons[item.icon];
  const body = (
    <>
      <div
        className={cn(
          "mb-4 inline-flex size-11 items-center justify-center rounded-full transition-colors",
          accentStyles[item.accent],
          "href" in item && item.href && "group-hover:bg-flip-purple/25",
        )}
      >
        <Icon className="size-5" strokeWidth={2.25} />
      </div>
      <h3
        className={cn(
          "font-heading text-xl font-bold",
          "href" in item && item.href
            ? "text-flip-purple group-hover:underline"
            : "text-foreground",
        )}
      >
        {item.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
    </>
  );

  if ("href" in item && item.href) {
    return (
      <Link href={item.href} className="group block">
        {body}
      </Link>
    );
  }

  return <div>{body}</div>;
}

export function AboutDifferentiators() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-wide">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <div className="mb-3 flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-widest text-flip-teal">
            <Sparkles className="size-4" />
            The Flip Zone Difference
          </div>
          <h2 className="font-heading text-3xl font-bold text-flip-purple sm:text-4xl">
            What Makes Us Different
          </h2>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-14">
          {aboutDifferentiators.map((item) => (
            <DifferentiatorItem key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
