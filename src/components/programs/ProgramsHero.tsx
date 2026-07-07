"use client";

import { SplitPhotoHero } from "@/components/SplitPhotoHero";
import { images } from "@/lib/images";

export function ProgramsHero() {
  return (
    <SplitPhotoHero
      image={images.programsHeroPhoto}
      imageAlt="Young gymnasts on beam at The Flip Zone"
      imagePosition="72% center"
    >
      <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-flip-teal">
        Our Programs
      </p>

      <h1 className="font-heading text-3xl font-bold leading-tight text-white sm:text-4xl">
        Programs for <span className="font-script italic text-flip-teal">Every Stage</span>
      </h1>

      <p className="mt-3 text-sm leading-relaxed text-white/90 sm:text-base">
        From first steps to competitive excellence, we have the perfect program to help your child
        learn, grow, and shine.
      </p>
    </SplitPhotoHero>
  );
}
