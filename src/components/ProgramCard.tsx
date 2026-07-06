"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ButtonLink, ButtonAnchor } from "@/components/ui/button";
import type { Program } from "@/data/programs";
import { cn } from "@/lib/utils";

const featuredImageClass: Partial<Record<string, string>> = {
  "preschool-gymnastics": "object-cover object-center",
  "recreational-gymnastics": "object-cover object-[center_40%]",
  "competitive-team": "object-contain bg-muted object-center",
  "tumbling": "object-cover object-center",
  "ninjanastics": "object-cover object-center",
};

interface ProgramCardProps {
  program: Program;
  variant?: "default" | "compact" | "featured";
  index?: number;
  showImage?: boolean;
}

export function ProgramCard({
  program,
  variant = "default",
  index = 0,
  showImage = false,
}: ProgramCardProps) {
  if (variant === "compact") {
    return (
      <Link
        href={`/${program.slug}`}
        className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-4 transition-all hover:border-flip-purple/30 hover:shadow-lg"
      >
        {showImage && (
          <div className="relative size-16 shrink-0 overflow-hidden rounded-xl">
            <Image src={program.image} alt={program.name} fill className="object-cover" />
          </div>
        )}
        <div className="min-w-0 flex-1">
          <h3 className="font-heading font-bold text-flip-purple group-hover:text-flip-purple">
            {program.shortName}
          </h3>
          <p className="text-sm text-muted-foreground">{program.ageRange}</p>
        </div>
        <ArrowRight className="size-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-flip-purple" />
      </Link>
    );
  }

  if (variant === "featured") {
    const imageClass = featuredImageClass[program.slug] ?? "object-cover";

    return (
      <motion.article
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: index * 0.08 }}
        className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:border-flip-purple/20 hover:shadow-lg"
      >
        <div className="relative h-44 shrink-0 overflow-hidden sm:h-48">
          <Image
            src={program.image}
            alt={program.name}
            fill
            className={cn(
              "transition-transform duration-500 group-hover:scale-[1.03]",
              imageClass,
            )}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-flip-black/30 to-transparent" />
          <Badge className="absolute left-4 top-4 border-0 bg-white/95 text-foreground shadow-sm">
            {program.ageRange}
          </Badge>
        </div>

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <h3 className="font-heading text-xl font-bold text-flip-purple">{program.name}</h3>
          <p className="mt-1.5 text-sm leading-snug text-muted-foreground">
            {program.perfectFor}
          </p>

          <div className="mt-4 flex-1">
            <p className="text-xs font-semibold uppercase tracking-wide text-foreground/70">
              What They&apos;ll Learn
            </p>
            <ul className="mt-2 space-y-1.5">
              {program.learnings.slice(0, 3).map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-flip-purple/40" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5 flex flex-wrap gap-2 border-t border-border pt-5">
            <ButtonLink variant="outline" size="sm" className="rounded-xl" href={`/${program.slug}`}>
              View Program
            </ButtonLink>
            <ButtonAnchor size="sm" className="rounded-xl" href={program.enrollUrl}>
              Enroll
            </ButtonAnchor>
          </div>
        </div>
      </motion.article>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
    >
      {showImage && (
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={program.image}
            alt={program.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <Badge className="absolute left-4 top-4 bg-flip-silver text-foreground">
            {program.ageRange}
          </Badge>
        </div>
      )}

      <div className="p-6">
        {!showImage && (
          <Badge className="mb-3 bg-flip-silver text-foreground">{program.ageRange}</Badge>
        )}
        <h3 className="font-heading text-xl font-bold text-flip-purple">{program.name}</h3>
        <p className="mt-1 text-sm font-medium text-flip-purple">Perfect for: {program.perfectFor}</p>
        <p className="mt-3 text-sm text-muted-foreground">{program.description}</p>

        <div className="mt-6 flex flex-wrap gap-3">
          <ButtonLink variant="outline" size="sm" className="rounded-xl" href={`/${program.slug}`}>
            View Program
          </ButtonLink>
          <ButtonAnchor size="sm" className="rounded-xl" href={program.enrollUrl}>
            Enroll
          </ButtonAnchor>
        </div>
      </div>
    </motion.article>
  );
}
