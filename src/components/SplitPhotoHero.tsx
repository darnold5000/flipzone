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
}

export function SplitPhotoHero({
  image,
  imageAlt,
  imagePosition = "center center",
  children,
  className,
}: SplitPhotoHeroProps) {
  return (
    <section className={cn("overflow-hidden", className)}>
      <div className="lg:grid lg:min-h-[360px] lg:grid-cols-[minmax(0,44%)_1fr] xl:min-h-[400px]">
        <div className="relative z-10 flex items-center bg-gradient-to-br from-flip-purple via-flip-purple to-[#3a2168] px-5 py-10 sm:px-8 lg:px-10 xl:px-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="w-full max-w-xl"
          >
            {children}
          </motion.div>
        </div>

        <div className="relative aspect-[16/9] min-h-[220px] bg-muted sm:min-h-[240px] lg:aspect-auto lg:min-h-0">
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
