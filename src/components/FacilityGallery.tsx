"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { facilityFeatures } from "@/data/site";
import { images } from "@/lib/images";

export function FacilityGallery() {
  const facilityImages = [
    { src: images.facility, alt: "Flip Zone facility overview", span: "col-span-2 row-span-2" },
    { src: images.preschool, alt: "Preschool area", span: "" },
    { src: images.ninja, alt: "Ninja rig", span: "" },
    { src: images.recreational, alt: "Recreational gym", span: "" },
    { src: images.team, alt: "Competitive team area", span: "" },
  ];

  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl font-bold text-flip-blue sm:text-4xl">
            Our Facility
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Over 20,000 square feet of state-of-the-art equipment — a selling point
            that sets Flip Zone apart.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {facilityImages.map((img, i) => (
            <motion.div
              key={img.alt}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl ${img.span}`}
            >
              <div className={`relative ${img.span ? "aspect-square md:aspect-auto md:h-full min-h-[280px]" : "aspect-square"}`}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {facilityFeatures.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-border bg-card p-5"
            >
              <h3 className="font-heading font-bold text-flip-blue">{feature.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
