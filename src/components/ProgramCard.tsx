"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ButtonLink, ButtonAnchor } from "@/components/ui/button";
import type { Program } from "@/data/programs";

interface ProgramCardProps {
  program: Program;
  variant?: "default" | "compact" | "featured";
  index?: number;
}

export function ProgramCard({ program, variant = "default", index = 0 }: ProgramCardProps) {
  if (variant === "compact") {
    return (
      <Link
        href={`/${program.slug}`}
        className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-4 transition-all hover:border-flip-blue/30 hover:shadow-lg"
      >
        <div className="relative size-16 shrink-0 overflow-hidden rounded-xl">
          <Image src={program.image} alt={program.name} fill className="object-cover" />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="font-heading font-bold text-flip-blue group-hover:text-flip-purple">
            {program.shortName}
          </h3>
          <p className="text-sm text-muted-foreground">{program.ageRange}</p>
        </div>
        <ArrowRight className="size-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-flip-blue" />
      </Link>
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
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={program.image}
          alt={program.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <Badge className="absolute left-4 top-4 bg-flip-aqua text-foreground">
          {program.ageRange}
        </Badge>
      </div>

      <div className="p-6">
        <h3 className="font-heading text-xl font-bold text-flip-blue">{program.name}</h3>
        <p className="mt-1 text-sm font-medium text-flip-purple">Perfect for: {program.perfectFor}</p>

        {variant === "featured" && (
          <div className="mt-4">
            <p className="text-sm font-semibold text-foreground">What They&apos;ll Learn</p>
            <ul className="mt-2 space-y-1">
              {program.learnings.slice(0, 3).map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-flip-aqua" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

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
