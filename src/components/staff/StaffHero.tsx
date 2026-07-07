"use client";

import { SplitPhotoHero } from "@/components/SplitPhotoHero";
import { images } from "@/lib/images";

export function StaffHero() {
  return (
    <SplitPhotoHero
      image={images.staffHeroPhoto}
      imageAlt="Flip Zone coaches at USA Gymnastics Indiana"
      imagePosition="center 35%"
    >
      <h1 className="font-heading text-3xl font-bold leading-tight text-white sm:text-4xl">
        Meet the Team
        <br />
        <span className="font-script italic text-flip-teal">Behind the Magic</span>
      </h1>
      <p className="mt-3 text-sm leading-relaxed text-white/90 sm:text-base">
        Experienced coaches who love what they do — and love helping kids shine.
      </p>
    </SplitPhotoHero>
  );
}
