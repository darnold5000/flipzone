"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Hero } from "@/components/Hero";
import { CTA } from "@/components/CTA";
import { galleryImages, galleryCategories, type GalleryCategory } from "@/data/gallery";
import { images } from "@/lib/images";
import { cn } from "@/lib/utils";

export function GalleryContent() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory | "all">("all");

  const filtered =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <>
      <Hero
        title="Gallery"
        subtitle="Action, smiles, and moments that matter"
        image={images.hero}
        size="medium"
        showButtons={false}
        align="center"
      />

      <section className="section-padding">
        <div className="container-wide">
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            <button
              type="button"
              onClick={() => setActiveCategory("all")}
              className={cn(
                "rounded-full px-5 py-2 text-sm font-medium transition-all",
                activeCategory === "all"
                  ? "bg-flip-blue text-white"
                  : "bg-muted text-muted-foreground hover:bg-muted/80",
              )}
            >
              All
            </button>
            {galleryCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "rounded-full px-5 py-2 text-sm font-medium transition-all",
                  activeCategory === cat.id
                    ? "bg-flip-blue text-white"
                    : "bg-muted text-muted-foreground hover:bg-muted/80",
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
            {filtered.map((img, i) => (
              <motion.div
                key={`${img.src}-${i}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="mb-4 break-inside-avoid overflow-hidden rounded-2xl"
              >
                <div className="group relative">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={img.width ?? 800}
                    height={img.height ?? 600}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100">
                    <p className="absolute bottom-4 left-4 text-sm font-medium text-white">
                      {img.alt}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
