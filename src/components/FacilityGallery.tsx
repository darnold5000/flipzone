"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { images } from "@/lib/images";

const facilityPhotos = [
  {
    src: images.facilityOverview,
    alt: "The Flip Zone gym overview with foam pit, trampolines, and competition equipment",
  },
  {
    src: images.facilityGymFloor,
    alt: "The Flip Zone competition gym floor with bars, beams, and state championship banners",
  },
  {
    src: images.facilityBeams,
    alt: "Balance beams and training area at The Flip Zone",
  },
] as const;

const facilityDescription =
  "The Flip Zone is a two building complex totaling just over 20,000 square feet. We aim to create a fun, disciplined and hard working environment for our athletes through professional instructors and state of the art equipment. The Flip Zone complex contains a daytime preschool program, a 400 square foot loose foam pit, 3 separate trampolines, a ninja rig and all of the equipment necessary for competitive gymnastics.";

export function FacilityGallery() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-wide">
        <div className="mb-10 text-center">
          <h2 className="font-heading text-3xl font-bold text-flip-purple sm:text-4xl">
            Our Facility
          </h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-3xl text-center text-lg leading-relaxed text-muted-foreground"
        >
          {facilityDescription}
        </motion.p>

        <div className="grid gap-4 md:grid-cols-3 md:gap-6">
          {facilityPhotos.map((photo, i) => (
            <motion.div
              key={photo.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative aspect-[4/3] overflow-hidden rounded-3xl border border-border shadow-sm"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
