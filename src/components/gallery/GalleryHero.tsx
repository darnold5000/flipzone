"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { images } from "@/lib/images";

export function GalleryHero() {
  return (
    <section className="relative flex min-h-[45vh] items-center overflow-hidden lg:min-h-[52vh]">
      <Image
        src={images.galleryHeroPhoto}
        alt="Young gymnast with medals at California Grand Invitational"
        fill
        priority
        className="object-cover object-center brightness-[1.04] saturate-[1.05]"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-flip-purple/92 via-flip-purple/50 to-flip-purple/15" />
      <div className="absolute inset-0 bg-gradient-to-t from-flip-black/45 via-transparent to-transparent" />

      <div className="container-wide relative z-10 px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-xl"
        >
          <h1 className="font-heading text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-[3.25rem]">
            Moments{" "}
            <span className="font-script text-flip-coral">That Matter</span>
          </h1>

          <p className="mt-4 max-w-lg text-base leading-relaxed text-white/90 sm:text-lg">
            From first cartwheels to big victories, these are the memories we&apos;re proud to
            share.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
