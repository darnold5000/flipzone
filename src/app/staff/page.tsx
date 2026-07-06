import { Hero } from "@/components/Hero";
import { CoachCard } from "@/components/CoachCard";
import { CTA } from "@/components/CTA";
import { staff } from "@/data/staff";
import { images } from "@/lib/images";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Meet Our Coaches | The Flip Zone Staff",
  description:
    "Meet the passionate coaches and staff at The Flip Zone in Plainfield, Indiana — experienced professionals dedicated to helping your child thrive.",
  path: "/staff",
});

export default function StaffPage() {
  return (
    <>
      <Hero
        title="Meet the Flip Zone Family"
        subtitle="Coaches who love what they do — and love your kids"
        image={images.recreational}
        size="medium"
        showButtons={false}
        align="center"
      />

      <section className="section-padding">
        <div className="container-wide">
          <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-muted-foreground">
            Our team brings expertise, passion, and personalized attention to every
            training session. These aren&apos;t business headshots — these are coaches
            who show up every day to help your child grow.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {staff.map((coach, i) => (
              <CoachCard key={coach.name} coach={coach} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Ready to Meet Us in Person?"
        subtitle="Schedule a visit or enroll in a class today."
      />
    </>
  );
}
