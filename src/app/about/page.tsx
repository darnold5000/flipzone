import { PageHero } from "@/components/PageHero";
import { AboutDifferentiators } from "@/components/AboutDifferentiators";
import { CTA } from "@/components/CTA";
import { ButtonLink } from "@/components/ui/button";
import { site } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "About The Flip Zone | Gymnastics Plainfield Indiana",
  description:
    "Learn about The Flip Zone — a 20,000+ sq ft gymnastics facility in Plainfield, Indiana serving Avon, Brownsburg, and Hendricks County families since 2007.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        seed="about"
        title="More Than a Gym"
        subtitle="A supportive community building confidence through gymnastics"
        size="medium"
        showButtons={false}
        align="center"
      />

      <section className="section-padding">
        <div className="container-wide max-w-3xl">
          <h2 className="font-heading text-3xl font-bold text-flip-purple sm:text-4xl">
            Our Story
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              At The Flip Zone in Plainfield, Indiana, you will find much more than just
              an extensive gymnastics training facility. Our gymnastics club is a supportive
              community that pushes athletes to reach better results in a healthy and safe
              environment.
            </p>
            <p>
              We aim to build a strong body and spark your curiosity while inspiring you
              to discover your talents. From beginners to team, our gymnastics club has it all.
            </p>
            <p>
              The Flip Zone is a two-building complex totaling just over 20,000 square feet.
              We create a fun, disciplined, and hard-working environment through professional
              instructors and state-of-the-art equipment.
            </p>
          </div>
        </div>
      </section>

      <AboutDifferentiators />

      <section className="section-padding">
        <div className="container-wide text-center">
          <h2 className="font-heading text-3xl font-bold text-flip-purple">
            Serving Hendricks County
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Conveniently located in Plainfield, we welcome families from Avon, Brownsburg,
            Indianapolis west side, and throughout Hendricks County.
          </p>
          <p className="mt-2 font-medium text-flip-purple">{site.address.full}</p>
          <ButtonLink className="mt-8 rounded-2xl" size="lg" href="/contact">
            Get Directions
          </ButtonLink>
        </div>
      </section>

      <CTA />
    </>
  );
}
