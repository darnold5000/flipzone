import { Calendar, ClipboardList, Focus, Sparkles, TrendingUp, User } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { ProgramGrid } from "@/components/ProgramGrid";
import { ProgramIconGrid } from "@/components/programs/ProgramIconGrid";
import { EnrollmentBanner } from "@/components/EnrollmentBanner";
import { ButtonAnchor } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getProgram, programs } from "@/data/programs";
import { site } from "@/data/site";
import { images } from "@/lib/images";
import { createMetadata, programSchema } from "@/lib/seo";

const learnings = [
  { icon: Sparkles, label: "Personalized skill development" },
  { icon: Focus, label: "Targeted technique correction" },
  { icon: TrendingUp, label: "Accelerated progress on specific goals" },
] as const;

const benefits = [
  { icon: User, label: "One-on-one with experienced coaches" },
  { icon: Calendar, label: "Flexible scheduling" },
  { icon: ClipboardList, label: "Customized training plan" },
] as const;

export const metadata = createMetadata({
  title: "Private Gymnastics Lessons Plainfield Indiana",
  description:
    "One-on-one private gymnastics lessons at The Flip Zone in Plainfield, Indiana. Personalized coaching for skill development, technique, and accelerated progress.",
  path: "/private-lessons",
  image: images.programPrivateLessons,
});

export default function PrivateLessonsPage() {
  const program = getProgram("private-lessons");
  if (!program) return null;

  const related = programs
    .filter((p) => p.slug !== program.slug && p.category === program.category)
    .slice(0, 3);

  const pageFaqs = [
    {
      question: `What age is ${program.name} for?`,
      answer: program.ageRange,
      category: "classes" as const,
    },
    {
      question: "How do I enroll?",
      answer:
        "Click the Enroll button to register through our iClassPro portal. You can browse available class times and create an account online.",
      category: "enrollment" as const,
    },
  ];

  const schema = programSchema(
    program.name,
    program.description,
    `${site.url}/private-lessons`,
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <EnrollmentBanner programName={program.name} enrollUrl={program.enrollUrl} />

      <PageHero
        seed="private-lessons"
        title={program.name}
        subtitle={program.tagline ?? program.perfectFor}
        size="medium"
        showButtons={false}
      />

      <section className="section-padding">
        <div className="container-wide max-w-3xl">
          <Badge className="mb-4">{program.ageRange}</Badge>
          <h2 className="font-heading text-3xl font-bold text-flip-purple">Who It&apos;s For</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            {program.description}
          </p>
          <ButtonAnchor size="lg" className="mt-8 rounded-2xl" href={program.enrollUrl}>
            Book Private Lessons
          </ButtonAnchor>
        </div>
      </section>

      <section className="section-padding border-y border-border bg-muted/40">
        <div className="container-wide">
          <p className="text-sm font-semibold uppercase tracking-widest text-flip-purple">
            What we focus on
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-foreground sm:text-4xl">
            What They&apos;ll Learn
          </h2>
          <div className="mt-10">
            <ProgramIconGrid items={[...learnings]} columns={3} />
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <p className="text-sm font-semibold uppercase tracking-widest text-flip-purple">
            Why go private
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Benefits
          </h2>
          <div className="mt-10">
            <ProgramIconGrid items={[...benefits]} columns={3} />
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/40">
        <div className="container-wide max-w-3xl">
          <h2 className="mb-8 text-center font-heading text-3xl font-bold text-flip-purple">
            Frequently Asked Questions
          </h2>
          <FAQ items={pageFaqs} />
        </div>
      </section>

      {related.length > 0 && (
        <section className="section-padding">
          <div className="container-wide">
            <h2 className="mb-8 font-heading text-3xl font-bold text-flip-purple">
              Related Programs
            </h2>
            <ProgramGrid programs={related} variant="compact" />
          </div>
        </section>
      )}

      <CTA
        title="Ready for One-on-One Coaching?"
        subtitle="Book private lessons and get focused attention from our experienced coaches."
        secondaryHref={program.enrollUrl}
      />
    </>
  );
}
