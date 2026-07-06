import Image from "next/image";
import { Sparkles } from "lucide-react";
import { staff } from "@/data/staff";
import { ButtonLink } from "@/components/ui/button";

const featuredCoaches = staff.filter((coach) => coach.image).slice(0, 5);

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function AboutCoachesPreview() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-14">
          <div>
            <div className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-flip-teal">
              <Sparkles className="size-4" />
              Meet Our Coaches
            </div>
            <h2 className="font-heading text-3xl font-bold text-flip-purple sm:text-4xl">
              Passionate People.
              <br />
              Positive Impact.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              USA Gymnastics certified coaches who love teaching kids of every age and level —
              from first cartwheels to competitive routines.
            </p>
            <ButtonLink className="mt-6 rounded-2xl" href="/staff">
              Meet the Team
            </ButtonLink>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-2 sm:grid sm:grid-cols-3 sm:overflow-visible lg:grid-cols-5">
            {featuredCoaches.map((coach) => (
              <div key={coach.name} className="min-w-[7rem] shrink-0 text-center sm:min-w-0">
                <div className="relative mx-auto aspect-[3/4] w-full max-w-[8rem] overflow-hidden rounded-2xl border border-border bg-muted shadow-sm">
                  {coach.image ? (
                    <Image
                      src={coach.image}
                      alt={coach.name}
                      fill
                      className="object-cover object-top"
                      sizes="128px"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-flip-purple font-heading text-lg font-bold text-white">
                      {getInitials(coach.name)}
                    </div>
                  )}
                </div>
                <p className="mt-2 text-sm font-semibold text-foreground">{coach.name.split(" ")[0]}</p>
                <p className="text-xs text-muted-foreground">{coach.role.split(" · ")[0]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
