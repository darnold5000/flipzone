"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import type { Coach } from "@/data/staff";

export interface CoachProfileFields {
  bio?: string;
  specialties?: string[];
  certifications?: string[];
  experience?: string;
  favoriteEvent?: string;
  funFact?: string;
}

interface CoachCardProps {
  coach: Coach;
  index?: number;
  variant?: "compact" | "profile";
  placeholders?: CoachProfileFields;
  isPreview?: boolean;
}

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function Avatar({ coach }: { coach: Coach }) {
  if (coach.image) {
    return (
      <div className="relative size-16 shrink-0 overflow-hidden rounded-2xl border border-border bg-muted">
        <Image
          src={coach.image}
          alt={coach.name}
          fill
          className="object-cover object-top"
          sizes="64px"
        />
      </div>
    );
  }

  return (
    <div className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-flip-purple font-heading text-sm font-bold text-white">
      {getInitials(coach.name)}
    </div>
  );
}

function PlaceholderBlock({
  label,
  sample,
}: {
  label: string;
  sample?: string;
}) {
  return (
    <div
      className={
        sample
          ? "rounded-xl border border-flip-purple/20 bg-flip-purple/5 px-3 py-2.5"
          : "rounded-xl border border-dashed border-flip-purple/25 bg-muted/40 px-3 py-2.5"
      }
    >
      <p className="text-xs font-semibold uppercase tracking-wide text-flip-purple/70">
        {label}
      </p>
      {sample ? (
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{sample}</p>
      ) : (
        <p className="mt-1 text-sm italic text-muted-foreground/60">Coming soon</p>
      )}
    </div>
  );
}

function ProfileFields({
  placeholders,
  isPreview,
}: {
  placeholders?: CoachProfileFields;
  isPreview?: boolean;
}) {
  const sampleBio = isPreview
    ? placeholders?.bio
    : undefined;
  const sampleSpecialties = isPreview ? placeholders?.specialties : undefined;
  const sampleCerts = isPreview ? placeholders?.certifications : undefined;

  return (
    <div className="mt-4 space-y-2.5 border-t border-border pt-4">
      <PlaceholderBlock
        label="Bio"
        sample={sampleBio}
      />
      <div className="grid gap-2.5 sm:grid-cols-2">
        <PlaceholderBlock
          label="Specialties"
          sample={
            sampleSpecialties?.length
              ? sampleSpecialties.join(" · ")
              : undefined
          }
        />
        <PlaceholderBlock
          label="Certifications"
          sample={sampleCerts?.length ? sampleCerts.join(" · ") : undefined}
        />
      </div>
      <div className="grid gap-2.5 sm:grid-cols-3">
        <PlaceholderBlock
          label="Experience"
          sample={isPreview ? placeholders?.experience : undefined}
        />
        <PlaceholderBlock
          label="Favorite Event"
          sample={isPreview ? placeholders?.favoriteEvent : undefined}
        />
        <PlaceholderBlock
          label="Fun Fact"
          sample={isPreview ? placeholders?.funFact : undefined}
        />
      </div>
    </div>
  );
}

export function CoachCard({
  coach,
  index = 0,
  variant = "compact",
  placeholders,
  isPreview = false,
}: CoachCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className={`rounded-3xl border bg-card shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md ${
        isPreview ? "border-flip-purple/30 ring-1 ring-flip-purple/10" : "border-border"
      } p-5`}
    >
      <div className="flex items-start gap-4">
        <Avatar coach={coach} />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-heading text-lg font-bold leading-tight text-flip-purple">
              {coach.name}
            </h3>
            {isPreview && (
              <Badge className="bg-flip-purple/10 text-xs text-flip-purple">Sample profile</Badge>
            )}
          </div>
          <p className="mt-1 text-sm leading-snug text-muted-foreground">{coach.role}</p>
        </div>
      </div>

      {variant === "profile" && (
        <ProfileFields placeholders={placeholders} isPreview={isPreview} />
      )}
    </motion.article>
  );
}
