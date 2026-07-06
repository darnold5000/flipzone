import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Hero } from "@/components/Hero";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { ProgramGrid } from "@/components/ProgramGrid";
import { EnrollmentBanner } from "@/components/EnrollmentBanner";
import { ButtonAnchor } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Program } from "@/data/programs";
import { programs } from "@/data/programs";

interface ProgramPageTemplateProps {
  program: Program;
}

export function ProgramPageTemplate({ program }: ProgramPageTemplateProps) {
  const related = programs
    .filter((p) => p.slug !== program.slug && p.category === program.category)
    .slice(0, 3);

  const pageFaqs = program.faqs
    ? program.faqs.map((f) => ({ ...f, category: "classes" as const }))
    : [
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

  return (
    <>
      <EnrollmentBanner programName={program.name} enrollUrl={program.enrollUrl} />

      <Hero
        title={program.name}
        subtitle={program.perfectFor}
        image={program.image}
        size="large"
        showButtons={false}
      />

      <section className="section-padding">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <Badge className="mb-4">{program.ageRange}</Badge>
              <h2 className="font-heading text-3xl font-bold text-flip-blue">
                Who It&apos;s For
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                {program.description}
              </p>
              {program.goals && (
                <p className="mt-4 font-medium text-flip-purple">
                  Goal: {program.goals}
                </p>
              )}
              <ButtonAnchor size="lg" className="mt-8 rounded-2xl" href={program.enrollUrl}>
                Enroll in {program.shortName}
              </ButtonAnchor>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image
                src={program.image}
                alt={program.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {program.learnings.length > 0 && (
        <section className="section-padding bg-muted/50">
          <div className="container-wide">
            <h2 className="mb-8 font-heading text-3xl font-bold text-flip-blue">
              What They&apos;ll Learn
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {program.learnings.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl bg-card p-4">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-flip-aqua" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {program.benefits.length > 0 && (
        <section className="section-padding">
          <div className="container-wide">
            <h2 className="mb-8 font-heading text-3xl font-bold text-flip-blue">
              Benefits
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {program.benefits.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-border bg-card p-6"
                >
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section-padding bg-muted/50">
        <div className="container-wide max-w-3xl">
          <h2 className="mb-8 text-center font-heading text-3xl font-bold text-flip-blue">
            Frequently Asked Questions
          </h2>
          <FAQ items={pageFaqs} />
        </div>
      </section>

      {related.length > 0 && (
        <section className="section-padding">
          <div className="container-wide">
            <h2 className="mb-8 font-heading text-3xl font-bold text-flip-blue">
              Related Programs
            </h2>
            <ProgramGrid programs={related} variant="compact" />
          </div>
        </section>
      )}

      <CTA
        title={`Ready for ${program.shortName}?`}
        subtitle="Enroll today and watch your child thrive at Flip Zone."
        secondaryHref={program.enrollUrl}
      />
    </>
  );
}
