import Link from "next/link";
import { Hero } from "@/components/Hero";
import { ClassFinder } from "@/components/ClassFinder";
import { ProgramGrid } from "@/components/ProgramGrid";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { FacilityGallery } from "@/components/FacilityGallery";
import { Testimonials } from "@/components/Testimonials";
import { CoachCard } from "@/components/CoachCard";
import { CTA } from "@/components/CTA";
import { ButtonLink, ButtonAnchor } from "@/components/ui/button";
import { programs } from "@/data/programs";
import { staff } from "@/data/staff";
import { site } from "@/data/site";
import { images } from "@/lib/images";

export default function HomePage() {
  const featuredPrograms = programs.filter((p) => p.featured);
  const featuredCoaches = staff.slice(0, 4);

  return (
    <>
      <Hero
        title={site.tagline}
        subtitle="Preschool • Recreational • Tumbling • Ninja • Competitive Team"
        image={images.heroTeam}
        imageAlt="The Flip Zone competitive gymnastics team in Plainfield, Indiana"
        overlay="team"
        imagePosition="center 35%"
      />

      <ClassFinder showImage />

      <section className="section-padding">
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
          <ProgramGrid programs={featuredPrograms} variant="featured" showImage />
        </div>
      </section>

      <WhyChooseUs />

      <FacilityGallery />

      <Testimonials />

      <section className="section-padding">
        <div className="container-wide">
          <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h2 className="font-heading text-3xl font-bold text-flip-purple sm:text-4xl">
                Meet the Coaches
              </h2>
              <p className="mt-3 max-w-xl text-muted-foreground">
                Passionate professionals who love helping kids discover their potential.
              </p>
            </div>
            <ButtonLink variant="outline" className="rounded-xl" href="/staff">
              Meet the Team
            </ButtonLink>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredCoaches.map((coach, i) => (
              <CoachCard key={coach.name} coach={coach} index={i} showImage />
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
