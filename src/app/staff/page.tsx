import { StaffHero } from "@/components/staff/StaffHero";
import { CoachCard } from "@/components/CoachCard";
import { CTA } from "@/components/CTA";
import { Badge } from "@/components/ui/badge";
import { staff, staffProfilePreviews } from "@/data/staff";
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
      <StaffHero />

      <section className="section-padding border-b border-border bg-flip-purple/5">
        <div className="container-wide">
          <div className="mb-10 text-center">
            <Badge className="mb-4 bg-flip-purple/10 text-flip-purple">Coming soon</Badge>
            <h2 className="font-heading text-3xl font-bold text-flip-purple sm:text-4xl">
              Rich Coach Profiles
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              Each coach will get a full profile with bio, specialties, certifications, and
              more — so parents can get to know the people teaching their kids. Here&apos;s
              a preview of what&apos;s coming.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-2">
            {staffProfilePreviews.map(({ coach, placeholders }, i) => (
              <CoachCard
                key={coach.name}
                coach={coach}
                index={i}
                variant="profile"
                placeholders={placeholders}
                isPreview
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <div className="mb-10 text-center">
            <h2 className="font-heading text-3xl font-bold text-flip-purple sm:text-4xl">
              Our Team
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              Real names, roles, and photos from Flip Zone today. Dashed fields below show
              where bios and details will be added.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {staff.map((coach, i) => (
              <CoachCard key={coach.name} coach={coach} index={i} variant="profile" />
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
