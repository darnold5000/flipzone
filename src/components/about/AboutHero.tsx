import { Sparkles } from "lucide-react";
import { BannerHero } from "@/components/BannerHero";
import { aboutStory } from "@/data/about";
import { images } from "@/lib/images";

export function AboutHero() {
  return (
    <>
      <BannerHero
        src={images.aboutHeroPhoto}
        alt="Flip Zone gymnasts celebrating in front of a purple balloon arch"
        width={1024}
        height={619}
      />

      <section className="border-b border-border bg-muted/30">
        <div className="container-wide px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-flip-teal">
              <Sparkles className="size-4" />
              Our Story
            </p>
            <h1 className="font-heading text-4xl font-bold text-flip-purple sm:text-5xl">
              More Than Just a <span className="italic text-flip-teal">Gym</span>
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              {aboutStory.heroSubtitle}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
