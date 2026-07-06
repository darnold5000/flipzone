import { Hero } from "@/components/Hero";
import { ClassFinder } from "@/components/ClassFinder";
import { PathwayCards } from "@/components/PathwayCards";
import { SectionDivider } from "@/components/SectionDivider";
import { ProgramGrid } from "@/components/ProgramGrid";
import { TeamSpotlight } from "@/components/TeamSpotlight";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { FacilityGallery } from "@/components/FacilityGallery";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";
import { ButtonLink } from "@/components/ui/button";
import { programs } from "@/data/programs";
import { images } from "@/lib/images";

export default function HomePage() {
  const featuredPrograms = programs.filter((p) => p.featured);

  return (
    <>
      <Hero
        title="Where Confidence Begins One Cartwheel at a Time"
        subtitle="Preschool • Recreational • Tumbling • Ninja • Competitive Team"
        image={images.heroTeam}
        imageAlt="The Flip Zone competitive gymnastics team in Plainfield, Indiana"
        overlay="team"
        imagePosition="center 35%"
      />

      <ClassFinder prominent showImage />

      <SectionDivider fill="lavender" />

      <PathwayCards />

      <SectionDivider fill="white" flip />

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-flip-aqua">
                Programs
              </p>
              <h2 className="mt-2 font-heading text-3xl font-bold text-flip-purple sm:text-4xl">
                Something for Every Child
              </h2>
              <p className="mt-3 max-w-xl text-base text-muted-foreground sm:text-lg">
                From first cartwheel to competitive team — find the perfect fit.
              </p>
            </div>
            <ButtonLink variant="outline" className="rounded-xl" href="/programs">
              View All Programs
            </ButtonLink>
          </div>
          <ProgramGrid programs={featuredPrograms} variant="featured" />
        </div>
      </section>

      <TeamSpotlight />

      <SectionDivider fill="white" />

      <WhyChooseUs />

      <SectionDivider fill="lavender" flip />

      <FacilityGallery />

      <SectionDivider fill="blue" flip />

      <Testimonials />

      <CTA
        title="Ready to Watch Them Shine?"
        subtitle="Join hundreds of Indiana families who trust Flip Zone to help their kids grow confident and strong."
        primaryLabel="Find Your Class"
        primaryHref="/#class-finder"
      />
    </>
  );
}
