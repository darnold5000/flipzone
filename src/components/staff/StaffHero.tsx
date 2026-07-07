"use client";

import { Hero } from "@/components/Hero";
import { images } from "@/lib/images";

export function StaffHero() {
  return (
    <Hero
      title={
        <>
          Meet the Team
          <br />
          <span className="font-script text-flip-teal">Behind the Magic</span>
        </>
      }
      subtitle="Experienced coaches who love what they do — and love helping kids shine."
      image={images.staffHeroPhoto}
      imageAlt="Flip Zone coaches at USA Gymnastics Indiana"
      overlay="gradient"
      imagePosition="center 40%"
      size="large"
      showButtons={false}
      align="left"
    />
  );
}
