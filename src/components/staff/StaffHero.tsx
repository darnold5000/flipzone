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
      <h1 className="font-heading text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-[3.1rem]">
        Meet the Team
        <br />
        <span className="font-script text-flip-teal">Behind the Magic</span>
      </h1>
      <p className="mt-4 text-base leading-relaxed text-white/90 sm:text-lg">
        Experienced coaches who love what they do — and love helping kids shine.
      </p>
    </SplitPhotoHero>
  );
}
