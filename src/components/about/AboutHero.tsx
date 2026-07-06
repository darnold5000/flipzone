"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { aboutStory } from "@/data/about";
import { images } from "@/lib/images";

function HeroWave() {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 text-flip-purple">
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="block h-12 w-full sm:h-16 lg:h-20"
        aria-hidden
      >
        <path
          fill="currentColor"
          d="M0,48 C240,88 480,8 720,40 C960,72 1200,24 1440,56 L1440,80 L0,80 Z"
        />
      </svg>
    </div>
  );
}

export function AboutHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="lg:grid lg:min-h-[62vh] lg:grid-cols-[minmax(0,44%)_1fr]">
        {/* Text panel — sits left, never over the photo */}
        <div className="relative z-10 flex items-center bg-gradient-to-br from-flip-purple via-flip-purple to-[#3a2168] px-6 py-14 sm:px-10 lg:px-12 xl:px-16 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-lg"
          >
            <p className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-white">
              <Sparkles className="size-4 shrink-0 text-flip-teal" strokeWidth={2.25} />
              Our Story
            </p>

            <h1 className="font-heading text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.05]">
              More Than Just a{" "}
              <span className="italic text-flip-teal">Gym</span>
            </h1>

            <p className="mt-5 text-base leading-relaxed text-white/90 sm:text-lg">
              {aboutStory.heroSubtitle}
            </p>
          </motion.div>
        </div>

        {/* Photo — gymnasts stay on the right */}
        <div className="relative aspect-[16/10] min-h-[280px] sm:aspect-[16/9] lg:aspect-auto lg:min-h-0">
          <Image
            src={images.heroTeam}
            alt="Flip Zone gymnasts smiling and hugging in purple leotards"
            fill
            priority
            className="object-cover object-[72%_center] brightness-[1.06] saturate-[1.05]"
            sizes="(max-width: 1024px) 100vw, 56vw"
          />
        </div>
      </div>

      <HeroWave />
    </section>
  );
}
