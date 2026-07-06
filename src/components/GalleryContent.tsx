"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Camera } from "lucide-react";
import { BannerHero } from "@/components/BannerHero";
import { CTA } from "@/components/CTA";
import { galleryCategories, type GalleryCategory } from "@/data/gallery";
import { images } from "@/lib/images";
import { cn } from "@/lib/utils";

export function GalleryContent() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory | "all">("all");

  const categories =
    activeCategory === "all"
      ? galleryCategories
      : galleryCategories.filter((c) => c.id === activeCategory);

  return (
    <>
      <BannerHero
        src={images.galleryHero}
        alt="Moments That Matter — memories from first cartwheels to big victories at The Flip Zone"
        width={1024}
        height={164}
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
                  ? "bg-flip-purple text-white"
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
                    ? "bg-flip-purple text-white"
                    : "bg-muted text-muted-foreground hover:bg-muted/80",
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-muted/30 p-12 text-center"
              >
                <Camera className="mb-4 size-10 text-flip-purple/40" />
                <h3 className="font-heading text-lg font-bold text-flip-purple">{cat.label}</h3>
                <p className="mt-2 text-sm text-muted-foreground">Photos coming soon</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
