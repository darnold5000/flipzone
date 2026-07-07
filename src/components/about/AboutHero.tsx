import { Sparkles } from "lucide-react";
import { SplitPhotoHero } from "@/components/SplitPhotoHero";
import { aboutStory } from "@/data/about";
import { images } from "@/lib/images";

export function AboutHero() {
  return (
    <SplitPhotoHero
      image={images.aboutHeroPhoto}
      imageAlt="Flip Zone gymnasts celebrating in front of a purple balloon arch"
      imagePosition="center 45%"
    >
      <p className="mb-2 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-flip-teal">
        <Sparkles className="size-4 shrink-0" />
        Our Story
      </p>
      <h1 className="font-heading text-3xl font-bold leading-tight text-white sm:text-4xl">
        More Than Just a <span className="font-script italic text-flip-teal">Gym</span>
      </h1>
      <p className="mt-3 text-sm leading-relaxed text-white/90 sm:text-base">
        {aboutStory.heroSubtitle}
      </p>
    </SplitPhotoHero>
  );
}
