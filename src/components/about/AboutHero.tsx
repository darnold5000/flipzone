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
    <section className="relative flex min-h-[55vh] items-center overflow-hidden lg:min-h-[62vh]">
      <Image
        src={images.heroTeam}
        alt="Flip Zone gymnasts smiling and hugging in purple leotards"
        fill
        priority
        className="object-cover brightness-[1.08] contrast-[1.02] saturate-[1.06]"
        style={{ objectPosition: "72% center" }}
        sizes="100vw"
      />

      {/* Left-weighted overlay so gymnasts stay visible on the right */}
      <div className="absolute inset-0 bg-gradient-to-r from-flip-purple/85 via-flip-purple/45 to-flip-purple/5" />
      <div className="absolute inset-0 bg-gradient-to-t from-flip-black/50 via-transparent to-flip-black/10" />

      <div className="container-wide relative z-10 px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="max-w-xl"
        >
          <p className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-white">
            <Sparkles className="size-4 text-flip-teal" strokeWidth={2.25} />
            Our Story
          </p>

          <h1 className="font-heading text-4xl font-bold leading-[1.05] text-white drop-shadow-md sm:text-5xl lg:text-6xl">
            More Than Just a{" "}
            <span className="italic text-flip-teal">Gym</span>
          </h1>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-white/95 drop-shadow sm:text-lg">
            {aboutStory.heroSubtitle}
          </p>
        </motion.div>
      </div>

      <HeroWave />
    </section>
  );
}
