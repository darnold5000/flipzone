import { Hero } from "@/components/Hero";
import { ProgramGrid } from "@/components/ProgramGrid";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { FacilityGallery } from "@/components/FacilityGallery";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";
import { ButtonLink } from "@/components/ui/button";
import { programs } from "@/data/programs";
import { site } from "@/data/site";
import { images } from "@/lib/images";

export default function HomePage() {
  const featuredPrograms = programs.filter((p) => p.featured);

  return (
    <>
      <Hero
        title={site.tagline}
        subtitle="Competitive Team • Preschool • Recreational • Tumbling • Ninja"
        image={images.heroTeam}
        imageAlt="The Flip Zone competitive gymnastics team in Plainfield, Indiana"
        overlay="team"
        imagePosition="center 35%"
      />

      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h2 className="font-heading text-3xl font-bold text-flip-purple sm:text-4xl">
                Our Programs
              </h2>
              <p className="mt-3 max-w-xl text-muted-foreground">
                From first steps to competitive excellence — find the perfect fit for your child.
              </p>
            </div>
            <ButtonLink variant="outline" className="rounded-xl" href="/programs">
              View All Programs
            </ButtonLink>
          </div>
          <ProgramGrid programs={featuredPrograms} variant="featured" />
        </div>
      </section>

      <WhyChooseUs />

      <FacilityGallery />

      <Testimonials />

      <CTA />
    </>
  );
}
