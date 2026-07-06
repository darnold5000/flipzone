"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ButtonLink, ButtonAnchor } from "@/components/ui/button";
import type { Program } from "@/data/programs";
import { cn } from "@/lib/utils";

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
  const hasImage = showImage || variant === "featured";
  const isCompetitive = program.category === "competitive";

  if (variant === "compact") {
    return (
      <Link
        href={`/${program.slug}`}
        className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-4 transition-all hover:border-flip-aqua/40 hover:shadow-lg"
      >
        {showImage && (
          <div className="relative size-16 shrink-0 overflow-hidden rounded-xl">
            <Image src={program.image} alt={program.name} fill className="object-cover" />
          </div>
        )}
        <div className="min-w-0 flex-1">
          <h3 className="font-heading font-bold text-flip-purple group-hover:text-flip-aqua">
            {program.shortName}
          </h3>
          <p className="text-sm text-muted-foreground">{program.ageRange}</p>
        </div>
        <ArrowRight className="size-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-flip-aqua" />
      </Link>
    );
  }

  if (variant === "featured") {
    return (
      <motion.article
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: index * 0.08 }}
        className="group overflow-hidden rounded-3xl bg-card shadow-lg transition-all hover:-translate-y-1 hover:shadow-2xl"
      >
        <Link href={`/${program.slug}`} className="relative block">
          <div className="relative aspect-[3/4] overflow-hidden sm:aspect-[4/5]">
            <Image
              src={program.image}
              alt={program.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-flip-black/90 via-flip-black/30 to-transparent" />
            <Badge
              className={cn(
                "absolute left-4 top-4 font-semibold",
                isCompetitive
                  ? "bg-flip-gold text-flip-black"
                  : "bg-white/95 text-foreground",
              )}
            >
              {program.ageRange}
            </Badge>
            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
              <h3 className="font-heading text-2xl font-bold text-white drop-shadow sm:text-3xl">
                {program.shortName}
              </h3>
              <p className="mt-2 line-clamp-2 text-sm text-white/90 sm:text-base">
                {program.perfectFor}
              </p>
            </div>
          </div>
        </Link>
        <div className="flex gap-2 border-t border-border p-4">
          <ButtonLink
            variant="accent"
            size="sm"
            className="flex-1 rounded-xl"
            href={`/${program.slug}`}
          >
            View Program
          </ButtonLink>
          <ButtonAnchor size="sm" className="flex-1 rounded-xl" href={program.enrollUrl}>
            Enroll
          </ButtonAnchor>
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
      {hasImage && (
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={program.image}
            alt={program.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <Badge className="absolute left-4 top-4 bg-white/95 text-foreground">
            {program.ageRange}
          </Badge>
        </div>
      )}

      <div className="p-6">
        {!hasImage && (
          <Badge className="mb-3 bg-flip-aqua/15 text-flip-aqua-dark">{program.ageRange}</Badge>
        )}
        <h3 className="font-heading text-xl font-bold text-flip-purple">{program.name}</h3>
        <p className="mt-2 text-base text-muted-foreground">{program.description}</p>

        <div className="mt-6 flex flex-wrap gap-3">
          <ButtonLink variant="outline" size="sm" className="rounded-xl" href={`/${program.slug}`}>
            View Program
          </ButtonLink>
          <ButtonAnchor variant="accent" size="sm" className="rounded-xl" href={program.enrollUrl}>
            Enroll
          </ButtonAnchor>
        </div>
      </div>
    </motion.article>
  );
}
