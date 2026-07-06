import Image from "next/image";
import { aboutFacilityHighlights } from "@/data/about";
import { ButtonLink } from "@/components/ui/button";

export function AboutFacilityPreview() {
  return (
    <section className="section-padding bg-flip-teal/10">
      <div className="container-wide">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-14">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-flip-teal">
              Our Facility
            </p>
            <h2 className="font-heading text-3xl font-bold text-flip-purple sm:text-4xl">
              Built for Fun.
              <br />
              Designed for Growth.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Two buildings, 20,000+ square feet, and everything young athletes need — from
              preschool stations to competition equipment, a foam pit, trampolines, and a ninja rig.
            </p>
            <ButtonLink
              variant="outline"
              className="mt-6 rounded-2xl border-flip-teal text-flip-teal hover:bg-flip-teal/10"
              href="/gallery"
            >
              Take a Tour
            </ButtonLink>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {aboutFacilityHighlights.map((item) => (
              <div key={item.title} className="group">
                <div className="relative aspect-square overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <p className="mt-2 text-center text-sm font-semibold text-foreground">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
