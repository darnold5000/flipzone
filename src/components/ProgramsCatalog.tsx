"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Program, ProgramCategory } from "@/data/programs";
import { programCategories, programHighlights, programs } from "@/data/programs";
import { cn } from "@/lib/utils";

const catalogImageClass: Partial<Record<string, string>> = {
  "preschool-gymnastics": "object-contain bg-flip-purple p-3",
  "shooting-stars-preschool": "object-contain bg-flip-purple p-3",
  "recreational-gymnastics": "object-cover object-[center_40%]",
  "competitive-team": "object-cover object-[center_22%]",
  tumbling: "object-cover object-center",
  ninjanastics: "object-cover object-center",
  gymstars: "object-cover object-center",
  "private-lessons": "object-cover object-[center_30%]",
  "birthday-parties": "object-cover object-center",
  "summer-camps": "object-cover object-center",
};

function CatalogCard({ program, index }: { program: Program; index: number }) {
  const imageClass = catalogImageClass[program.slug] ?? "object-cover object-center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
    >
      <Link
        href={`/${program.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-0.5 hover:border-flip-purple/25 hover:shadow-md"
      >
        <div className="relative aspect-[5/3] overflow-hidden bg-muted">
            <Image
              src={program.image}
              alt={program.name}
              fill
              className={cn("transition-transform duration-500 group-hover:scale-[1.03]", imageClass)}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-flip-black/20 to-transparent" />
          </div>

        <div className="flex flex-1 flex-col p-5">
          <Badge variant="outline" className="mb-3 w-fit text-xs">
            {program.ageRange}
          </Badge>
          <h3 className="font-heading text-lg font-bold leading-snug text-foreground group-hover:text-flip-purple">
            {program.shortName}
          </h3>
          <p className="mt-2 flex-1 text-sm font-medium leading-snug text-flip-purple">
            {program.tagline ?? program.perfectFor}
          </p>
          <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-muted-foreground transition-colors group-hover:text-flip-purple">
            Explore
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

export function ProgramsCatalog() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-wide">
        <div className="mb-12 flex flex-wrap justify-center gap-x-8 gap-y-4 border-b border-border pb-10">
          {programHighlights.map((item) => (
            <div
              key={item.label}
              className="flex min-w-[140px] flex-col items-center gap-1.5 text-center"
            >
              <span className="text-xl" aria-hidden>
                {item.emoji}
              </span>
              <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        <div className="space-y-16">
          {programCategories.map((category) => {
            const categoryPrograms = programs.filter((p) => p.category === category.id);
            if (categoryPrograms.length === 0) return null;

            const cols: Record<ProgramCategory, string> = {
              "first-classes": "sm:grid-cols-2",
              "build-skills": "sm:grid-cols-2 lg:grid-cols-4",
              competitive: "sm:grid-cols-2",
              "more-fun": "sm:grid-cols-2 lg:grid-cols-3",
            };

            return (
              <div key={category.id}>
                <div className="mb-8 max-w-2xl">
                  <p className="text-sm font-semibold uppercase tracking-widest text-flip-purple">
                    {category.subtitle}
                  </p>
                  <h2 className="mt-2 font-heading text-3xl font-bold text-foreground sm:text-4xl">
                    {category.title}
                  </h2>
                  {category.headline && (
                    <p className="mt-2 text-muted-foreground">{category.headline}</p>
                  )}
                </div>

                <div className={cn("grid gap-5", cols[category.id])}>
                  {categoryPrograms.map((program, i) => (
                    <CatalogCard key={program.slug} program={program} index={i} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
