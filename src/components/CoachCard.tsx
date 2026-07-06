"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Coach } from "@/data/staff";

interface CoachCardProps {
  coach: Coach;
  index?: number;
}

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function CoachCard({ coach, index = 0 }: CoachCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="rounded-3xl border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="flex items-start gap-4">
        {coach.image ? (
          <div className="relative size-16 shrink-0 overflow-hidden rounded-2xl border border-border bg-muted">
            <Image
              src={coach.image}
              alt={coach.name}
              fill
              className="object-cover object-top"
              sizes="64px"
            />
          </div>
        ) : (
          <div className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-flip-purple font-heading text-sm font-bold text-white">
            {getInitials(coach.name)}
          </div>
        )}

        <div className="min-w-0 flex-1">
          <h3 className="font-heading text-lg font-bold leading-tight text-flip-purple">
            {coach.name}
          </h3>
          <p className="mt-1 text-sm leading-snug text-muted-foreground">{coach.role}</p>
        </div>
      </div>
    </motion.article>
  );
}
