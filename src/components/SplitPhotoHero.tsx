"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SplitPhotoHeroProps {
  image: string;
  imageAlt: string;
  imagePosition?: string;
  children: ReactNode;
  className?: string;
  size?: "default" | "compact";
}

export function SplitPhotoHero({
  image,
  imageAlt,
  imagePosition = "center center",
  children,
  className,
  size = "default",
}: SplitPhotoHeroProps) {
  const isCompact = size === "compact";

  return (
    <section className={cn("overflow-hidden", className)}>
      <div
        className={cn(
          "lg:grid lg:grid-cols-[minmax(0,44%)_1fr]",
          isCompact ? "lg:min-h-[300px] xl:min-h-[340px]" : "lg:min-h-[420px] xl:min-h-[460px]",
        )}
      >
        <div
          className={cn(
            "relative z-10 flex items-center bg-gradient-to-br from-flip-purple via-flip-purple to-[#3a2168]",
            isCompact
              ? "px-5 py-8 sm:px-8 lg:px-10 xl:px-12"
              : "px-6 py-12 sm:px-10 lg:px-12 xl:px-14",
          )}
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="w-full max-w-xl"
          >
            {children}
          </motion.div>
        </div>

        <div
          className={cn(
            "relative bg-muted lg:min-h-0",
            isCompact
              ? "aspect-[16/9] min-h-[200px] sm:aspect-[2/1] lg:aspect-auto"
              : "aspect-[16/10] min-h-[240px] sm:aspect-[16/9] lg:aspect-auto",
          )}
        >
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            unoptimized
            className="object-cover brightness-[1.14] contrast-[1.08] saturate-[1.1]"
            style={{ objectPosition: imagePosition }}
            sizes="(max-width: 1024px) 100vw, 56vw"
          />
        </div>
      </div>
    </section>
  );
}
