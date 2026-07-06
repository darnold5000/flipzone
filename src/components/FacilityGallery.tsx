"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { images } from "@/lib/images";
import { facilityFeatures } from "@/data/site";

const facilityPhotos = [
  {
    src: images.facilityGymFloor,
    alt: "Olympic apparatus and competition floor at The Flip Zone",
    caption: "Olympic apparatus",
    span: "lg:col-span-7",
    height: "min-h-[280px] sm:min-h-[360px] lg:min-h-[480px]",
  },
  {
    src: images.facilityOverview,
    alt: "Foam pit and trampolines at The Flip Zone",
    caption: "Foam pit & trampolines",
    span: "lg:col-span-5",
    height: "min-h-[240px] sm:min-h-[300px] lg:min-h-[480px]",
  },
  {
    src: images.facilityBeams,
    alt: "Balance beams and training area at The Flip Zone",
    caption: "Balance beams",
    span: "lg:col-span-4",
    height: "min-h-[240px] sm:min-h-[280px] lg:min-h-[360px]",
  },
] as const;

const extraFeatures = ["Preschool area", "Ninja rig"] as const;

export function FacilityGallery() {
  return (
    <section className="overflow-hidden bg-flip-lavender py-16 sm:py-20 lg:py-24">
      <div className="container-wide mb-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-flip-aqua">
          20,000+ sq ft
        </p>
        <h2 className="mt-2 font-heading text-3xl font-bold text-flip-purple sm:text-4xl">
          See Our Facility
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-base text-muted-foreground sm:text-lg">
          Foam pit, trampolines, ninja rig, and everything your child needs to learn and grow.
        </p>
      </div>

      <div className="full-bleed px-2 sm:px-4">
        <div className="grid gap-2 sm:gap-3 lg:grid-cols-12 lg:gap-4">
          {facilityPhotos.map((photo, i) => (
            <motion.div
              key={photo.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl sm:rounded-3xl ${photo.span} ${photo.height}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-flip-black/70 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-4 font-heading text-lg font-bold text-white drop-shadow sm:text-xl">
                {photo.caption}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="container-wide mt-8">
        <div className="flex flex-wrap justify-center gap-3">
          {facilityFeatures.slice(0, 4).map((feature) => (
            <span
              key={feature.title}
              className="rounded-full border border-flip-purple/15 bg-white/80 px-4 py-2 text-sm font-medium text-flip-purple"
            >
              {feature.title}
            </span>
          ))}
          {extraFeatures.map((label) => (
            <span
              key={label}
              className="rounded-full border border-flip-aqua/30 bg-flip-aqua/10 px-4 py-2 text-sm font-medium text-flip-aqua-dark"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
