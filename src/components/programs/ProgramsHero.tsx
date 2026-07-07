"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Shield, Star, Users } from "lucide-react";
import { images } from "@/lib/images";

const highlights = [
  {
    icon: Users,
    title: "All Ages",
    description: "Programs for every stage of growth",
  },
  {
    icon: Shield,
    title: "Safe & Supportive",
    description: "SafeSport certified coaches & staff",
  },
  {
    icon: Star,
    title: "Fun & Engaging",
    description: "Building skills, confidence, and friendships",
  },
] as const;

export function ProgramsHero() {
  return (
    <section className="relative flex min-h-[50vh] items-center overflow-hidden lg:min-h-[58vh]">
      <Image
        src={images.programsHeroPhoto}
        alt="Young gymnasts on beam at The Flip Zone"
        fill
        priority
        className="object-cover object-[72%_center] brightness-[1.05] saturate-[1.04]"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-flip-purple/90 via-flip-purple/55 to-flip-purple/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-flip-black/40 via-transparent to-transparent" />

      <div className="container-wide relative z-10 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-flip-teal">
            Our Programs
          </p>

          <h1 className="font-heading text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-[3.25rem]">
            Programs for{" "}
            <span className="font-script text-flip-teal">Every Stage</span>
          </h1>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
            From first steps to competitive excellence, we have the perfect program to help your
            child learn, grow, and shine.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-2xl bg-white/10 px-4 py-3 backdrop-blur-sm">
                  <div className="mb-2 inline-flex size-9 items-center justify-center rounded-full bg-white/15 text-flip-teal">
                    <Icon className="size-4" strokeWidth={2.25} />
                  </div>
                  <p className="font-heading text-sm font-bold text-white">{item.title}</p>
                  <p className="mt-1 text-xs leading-snug text-white/80">{item.description}</p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
