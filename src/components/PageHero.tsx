import type { ComponentProps } from "react";
import { Hero } from "@/components/Hero";
import { pickFacilityHeroImage } from "@/lib/images";

type PageHeroProps = Omit<
  ComponentProps<typeof Hero>,
  "image" | "imageAlt" | "overlay"
> & {
  /** Used to pick one of three facility photos — stable per page, varied across the site. */
  seed: string;
};

export function PageHero({ seed, ...props }: PageHeroProps) {
  return (
    <Hero
      {...props}
      image={pickFacilityHeroImage(seed)}
      imageAlt="The Flip Zone gymnastics facility in Plainfield, Indiana"
      overlay="team"
    />
  );
}
