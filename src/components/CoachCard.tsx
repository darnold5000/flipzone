"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import type { Coach } from "@/data/staff";

interface CoachCardProps {
  coach: Coach;
  index?: number;
  showImage?: boolean;
}

export function CoachCard({ coach, index = 0, showImage = false }: CoachCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
      className="group overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
    >
      {showImage ? (
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src={coach.image}
            alt={coach.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
            <h3 className="font-heading text-xl font-bold">{coach.name}</h3>
            <p className="text-sm text-white/90">{coach.role}</p>
          </div>
        </div>
      ) : (
        <div className="border-b border-border bg-flip-purple/5 px-5 py-4">
          <h3 className="font-heading text-xl font-bold text-flip-purple">{coach.name}</h3>
          <p className="text-sm text-muted-foreground">{coach.role}</p>
        </div>
      )}

      <div className="space-y-3 p-5">
        {coach.specialties && (
          <div className="flex flex-wrap gap-1.5">
            {coach.specialties.map((s) => (
              <Badge key={s} variant="secondary" className="text-xs">
                {s}
              </Badge>
            ))}
          </div>
        )}
        <dl className="grid gap-2 text-sm">
          {coach.yearsCoaching && (
            <div>
              <dt className="font-semibold text-foreground">Experience</dt>
              <dd className="text-muted-foreground">{coach.yearsCoaching}</dd>
            </div>
          )}
          {coach.favoriteEvent && (
            <div>
              <dt className="font-semibold text-foreground">Favorite Event</dt>
              <dd className="text-muted-foreground">{coach.favoriteEvent}</dd>
            </div>
          )}
          {coach.funFact && (
            <div>
              <dt className="font-semibold text-foreground">Fun Fact</dt>
              <dd className="text-muted-foreground">{coach.funFact}</dd>
            </div>
          )}
        </dl>
      </div>
    </motion.article>
  );
}
