"use client";

import { Shield, Star, Users } from "lucide-react";
import { SplitPhotoHero } from "@/components/SplitPhotoHero";
import { images } from "@/lib/images";

const highlights = [
  {
    icon: Users,
    title: "All Ages",
    description: "Programs for every stage of growth",
  },
  {
    icon: Shield,
    title: "Safe & Supportive",
    description: "SafeSport certified coaches & staff",
  },
  {
    icon: Star,
    title: "Fun & Engaging",
    description: "Building skills, confidence, and friendships",
  },
] as const;

export function ProgramsHero() {
  return (
    <SplitPhotoHero
      image={images.programsHeroPhoto}
      imageAlt="Young gymnasts on beam at The Flip Zone"
      imagePosition="72% center"
    >
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-flip-teal">
        Our Programs
      </p>

      <h1 className="font-heading text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-[3.1rem]">
        Programs for <span className="font-script text-flip-teal">Every Stage</span>
      </h1>

      <p className="mt-4 text-base leading-relaxed text-white/90 sm:text-lg">
        From first steps to competitive excellence, we have the perfect program to help your child
        learn, grow, and shine.
      </p>

      <div className="mt-6 space-y-3">
        {highlights.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="flex gap-3 rounded-xl border border-white/15 bg-white/10 px-3 py-2.5"
            >
              <div className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-white/15 text-flip-teal">
                <Icon className="size-3.5" strokeWidth={2.25} />
              </div>
              <div>
                <p className="font-heading text-sm font-bold text-white">{item.title}</p>
                <p className="mt-0.5 text-xs leading-snug text-white/80">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </SplitPhotoHero>
  );
}
