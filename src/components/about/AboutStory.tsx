import Image from "next/image";
import { Sparkles } from "lucide-react";
import { aboutMilestones, aboutStory } from "@/data/about";
import { images } from "@/lib/images";
import { ButtonLink } from "@/components/ui/button";

function StoryBlock({
  label,
  title,
  children,
  image,
  imageAlt,
  imageLeft = false,
  badge,
}: {
  label: string;
  title: string;
  children: React.ReactNode;
  image: string;
  imageAlt: string;
  imageLeft?: boolean;
  badge?: string;
}) {
  const text = (
    <div className="flex flex-col justify-center">
      <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-flip-teal">{label}</p>
      <h2 className="font-heading text-3xl font-bold text-flip-purple sm:text-4xl">{title}</h2>
      <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
        {children}
      </div>
    </div>
  );

  const visual = (
    <div className="relative">
      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border shadow-lg">
        <Image src={image} alt={imageAlt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
      </div>
      {badge && (
        <div className="absolute -bottom-4 -right-2 max-w-[11rem] rounded-2xl bg-flip-purple px-4 py-3 text-center shadow-lg sm:-right-4">
          <p className="font-script text-lg leading-tight text-white">{badge}</p>
        </div>
      )}
    </div>
  );

  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      {imageLeft ? (
        <>
          {visual}
          {text}
        </>
      ) : (
        <>
          {text}
          {visual}
        </>
      )}
    </div>
  );
}

export function AboutStory() {
  return (
    <section className="section-padding">
      <div className="container-wide space-y-20 lg:space-y-28">
        <StoryBlock
          label="Our Story"
          title="A Legacy of Confidence and Community"
          image={images.heroTeam}
          imageAlt="Flip Zone gymnasts and coaches smiling together"
          badge="Proudly serving Indiana families since 2007"
        >
          <p>{aboutStory.intro}</p>
          <ButtonLink className="mt-2 rounded-2xl" href="/programs#class-finder">
            Find Your Class
          </ButtonLink>
        </StoryBlock>

        <StoryBlock
          label="More Than a Gym"
          title="Where Kids Feel Seen and Supported"
          image={images.programRecreational}
          imageAlt="Young gymnasts training at The Flip Zone"
          imageLeft
        >
          <p>{aboutStory.moreThanAGym}</p>
        </StoryBlock>

        <StoryBlock
          label="Our Mission"
          title="Grow Strong. Build Confidence. Have Fun."
          image={images.programPrivateLessons}
          imageAlt="Coach working one-on-one with a gymnast at The Flip Zone"
        >
          <p>{aboutStory.mission}</p>
        </StoryBlock>

        <div>
          <div className="mb-10 text-center">
            <div className="mb-3 flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-widest text-flip-teal">
              <Sparkles className="size-4" />
              Our Journey
            </div>
            <h2 className="font-heading text-3xl font-bold text-flip-purple sm:text-4xl">
              Milestones Along the Way
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {aboutMilestones.map((item, i) => (
              <div key={item.title} className="relative text-center">
                {i < aboutMilestones.length - 1 && (
                  <div
                    aria-hidden
                    className="absolute left-[calc(50%+2rem)] top-8 hidden h-0.5 w-[calc(100%-4rem)] bg-flip-purple/20 lg:block"
                  />
                )}
                <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-flip-purple text-sm font-bold text-white">
                  {item.year}
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
