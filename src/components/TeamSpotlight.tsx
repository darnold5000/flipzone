"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { images } from "@/lib/images";

export function TeamSpotlight() {
  return (
    <section className="relative overflow-hidden bg-flip-black py-0 text-white">
      <div className="grid lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative min-h-[320px] lg:min-h-[480px]"
        >
          <Image
            src={images.heroTeam}
            alt="The Flip Zone competitive gymnastics team"
            fill
            className="object-cover"
            style={{ objectPosition: "center 35%" }}
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-flip-black/80 lg:to-flip-black" />
        </motion.div>

        <div className="relative flex items-center section-padding lg:py-24">
          <div className="container-wide lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-lg"
            >
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-flip-gold/20 px-4 py-1.5 text-sm font-semibold text-flip-gold">
                <Trophy className="size-4" />
                Competitive Team
              </div>
              <h2 className="font-heading text-3xl font-bold sm:text-4xl">
                Where Dedication Meets Opportunity
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-white/85">
                Our team athletes train with purpose, compete with heart, and grow into
                confident leaders — on and off the floor.
              </p>
              <ButtonLink
                href="/competitive-team"
                variant="accent"
                size="lg"
                className="mt-8 rounded-2xl px-8"
              >
                Explore Competitive Team
              </ButtonLink>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
