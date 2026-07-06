import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/Hero";
import { ClassFinder } from "@/components/ClassFinder";
import { CTA } from "@/components/CTA";
import { Badge } from "@/components/ui/badge";
import { ButtonLink, ButtonAnchor } from "@/components/ui/button";
import { programs, programCategories } from "@/data/programs";
import { images } from "@/lib/images";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Gymnastics Programs Plainfield Indiana | Find the Right Class",
  description:
    "Explore preschool gymnastics, recreational classes, tumbling, ninja, competitive team, birthday parties, and summer camps at The Flip Zone in Plainfield, Indiana.",
  path: "/programs",
});

export default function ProgramsPage() {
  return (
    <>
      <Hero
        title="Find the Right Program for Your Child"
        subtitle="A decision guide — not just a list"
        image={images.recreational}
        size="medium"
        showButtons={false}
        align="center"
      />

      <ClassFinder />

      {programCategories.map((category) => {
        const categoryPrograms = programs.filter((p) => p.category === category.id);
        if (categoryPrograms.length === 0) return null;

        return (
          <section
            key={category.id}
            className={`section-padding ${category.id === "build-skills" ? "bg-muted/50" : ""}`}
          >
            <div className="container-wide">
              <div className="mb-10">
                <Badge className="mb-3 bg-flip-aqua/20 text-flip-blue">{category.subtitle}</Badge>
                <h2 className="font-heading text-3xl font-bold text-flip-blue sm:text-4xl">
                  {category.title}
                </h2>
              </div>

              <div className="space-y-8">
                {categoryPrograms.map((program) => (
                  <article
                    key={program.slug}
                    className="group overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all hover:shadow-lg"
                  >
                    <div className="grid md:grid-cols-2">
                      <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[280px]">
                        <Image
                          src={program.image}
                          alt={program.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="flex flex-col justify-center p-6 sm:p-8">
                        <Badge className="mb-3 w-fit">{program.ageRange}</Badge>
                        <h3 className="font-heading text-2xl font-bold text-flip-blue">
                          {program.name}
                        </h3>
                        {program.goals && (
                          <p className="mt-1 text-sm font-medium text-flip-purple">
                            {program.goals}
                          </p>
                        )}
                        <p className="mt-3 text-muted-foreground">{program.description}</p>
                        <div className="mt-6 flex flex-wrap gap-3">
                          <ButtonLink className="rounded-xl" href={`/${program.slug}`}>
                            View Program
                            <ArrowRight className="ml-1 size-4" />
                          </ButtonLink>
                          <ButtonAnchor variant="outline" className="rounded-xl" href={program.enrollUrl}>
                            Enroll
                          </ButtonAnchor>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <CTA />
    </>
  );
}
