import Link from "next/link";
import { Calendar, Car, GraduationCap, Sparkles } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CTA } from "@/components/CTA";
import { ButtonAnchor, ButtonLink } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getProgram } from "@/data/programs";
import { ssgnl } from "@/data/ssgnl";
import { site } from "@/data/site";
import { images } from "@/lib/images";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Shooting Stars Gym N Learn | SSGNL Preschool Plainfield Indiana",
  description:
    "SSGNL is Hendricks County's first fitness-based educational preschool since 2007. PreK and 3's programs with daily gymnastics at The Flip Zone in Plainfield, Indiana.",
  path: "/shooting-stars-preschool",
  image: images.ssgnl,
});

export default function ShootingStarsPreschoolPage() {
  const program = getProgram("shooting-stars-preschool");

  return (
    <>
      <PageHero
        seed="shooting-stars-preschool"
        title={ssgnl.name}
        subtitle={ssgnl.tagline}
        size="medium"
        showButtons={false}
        align="center"
      />

      <section className="section-padding">
        <div className="container-wide max-w-3xl">
          <p className="text-lg leading-relaxed text-muted-foreground">{ssgnl.intro}</p>
          <ButtonAnchor size="lg" className="mt-8 rounded-2xl" href={program?.enrollUrl ?? site.iclasspro.portal}>
            Register Now
          </ButtonAnchor>
        </div>
      </section>

      <section className="section-padding bg-muted/50">
        <div className="container-wide">
          <h2 className="font-heading text-3xl font-bold text-flip-purple">Programs & Ages</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">We offer the following age groups:</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {ssgnl.ageGroups.map((group) => (
              <div key={group.name} className="rounded-3xl border border-border bg-card p-6">
                <h3 className="font-heading text-xl font-bold text-flip-purple">{group.name}</h3>
                <p className="mt-2 text-muted-foreground">{group.requirement}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-flip-purple/20 bg-card p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <Calendar className="mt-1 size-6 shrink-0 text-flip-purple" />
              <div>
                <h3 className="font-heading text-xl font-bold text-flip-purple">Schedule</h3>
                <p className="mt-2 text-muted-foreground">
                  Classes meet on <strong className="text-foreground">{ssgnl.schedule.days}</strong>.
                </p>
                <p className="mt-2 text-muted-foreground">
                  <strong className="text-foreground">{ssgnl.schedule.hours}</strong> —{" "}
                  {ssgnl.schedule.gymnastics}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide max-w-3xl">
          <Badge className="mb-4 bg-flip-purple/10 text-flip-purple">2026–2027 School Year</Badge>
          <h2 className="font-heading text-3xl font-bold text-flip-purple">
            {ssgnl.registration2026.title}
          </h2>
          <ul className="mt-6 space-y-3">
            {ssgnl.registration2026.dates.map((item) => (
              <li
                key={item.group}
                className="flex flex-col justify-between gap-1 rounded-2xl border border-border bg-card px-5 py-4 sm:flex-row sm:items-center"
              >
                <span className="font-medium text-foreground">{item.group}</span>
                <span className="font-heading font-bold text-flip-purple">{item.date}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding bg-muted/50">
        <div className="container-wide">
          <h2 className="mb-10 text-center font-heading text-3xl font-bold text-flip-purple">
            Why Choose SSGNL
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {ssgnl.whyChoose.map((item, i) => {
              const icons = [Car, GraduationCap, Sparkles];
              const Icon = icons[i] ?? Sparkles;
              return (
                <div key={item.title} className="rounded-3xl border border-border bg-card p-6">
                  <div className="mb-4 flex size-12 items-center justify-center rounded-2xl bg-flip-purple/10">
                    <Icon className="size-6 text-flip-purple" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-flip-purple">{item.title}</h3>
                  <p className="mt-3 text-muted-foreground">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide max-w-3xl">
          <h2 className="font-heading text-3xl font-bold text-flip-purple">{ssgnl.tumblingTykes.title}</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            {ssgnl.tumblingTykes.description}
          </p>
          <p className="mt-6 text-sm text-muted-foreground">
            Looking for gymnastics-only preschool classes?{" "}
            <Link href="/preschool-gymnastics" className="font-medium text-flip-purple hover:underline">
              View Preschool Gymnastics →
            </Link>
          </p>
        </div>
      </section>

      <CTA
        title="Ready to Register?"
        subtitle="Join Hendricks County's original fitness-based preschool program at The Flip Zone."
        primaryLabel="Register Now"
        primaryHref={program?.enrollUrl ?? site.iclasspro.portal}
        secondaryLabel="Call SSGNL"
        secondaryHref={`tel:${site.phones.teamPreschool}`}
      />
    </>
  );
}
