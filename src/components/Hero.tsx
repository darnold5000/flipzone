"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ButtonLink, ButtonAnchor } from "@/components/ui/button";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

interface HeroProps {
  title: ReactNode;
  eyebrow?: string;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
  showButtons?: boolean;
  overlay?: "dark" | "light" | "gradient" | "team";
  size?: "full" | "large" | "medium";
  align?: "left" | "center";
  imagePosition?: string;
}

export function Hero({
  title,
  eyebrow,
  subtitle,
  image,
  imageAlt = "The Flip Zone gymnastics",
  showButtons = true,
  overlay = "gradient",
  size = "full",
  align = "left",
  imagePosition = "center center",
}: HeroProps) {
  const heights = {
    full: "min-h-[85vh]",
    large: "min-h-[60vh]",
    medium: "min-h-[45vh]",
  };

  const overlays = {
    dark: "bg-black/40",
    light: "bg-white/20",
    gradient: "bg-gradient-to-r from-flip-purple/70 via-flip-purple/35 to-transparent",
    team: "bg-gradient-to-t from-flip-black/65 via-flip-black/15 to-flip-purple/10",
  };

  return (
    <section
      className={cn(
        "relative flex items-center overflow-hidden",
        heights[size],
        !image && "bg-uniform-gradient",
      )}
    >
      {image && (
        <>
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            className="object-cover brightness-[1.12] contrast-[1.03] saturate-[1.08]"
            style={{ objectPosition: imagePosition }}
            sizes="100vw"
          />
          <div className={cn("absolute inset-0", overlays[overlay])} />
        </>
      )}

      <div className="container-wide relative z-10 px-4 py-20 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}
        >
          {eyebrow && (
            <p className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-flip-teal drop-shadow-sm">
              <span className="inline-block size-1.5 rounded-full bg-flip-teal" aria-hidden />
              {eyebrow}
            </p>
          )}
          <h1 className="font-heading text-4xl font-bold leading-tight text-white drop-shadow-md sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-lg text-white drop-shadow sm:text-xl lg:text-2xl">
              {subtitle}
            </p>
          )}
          {showButtons && (
            <div
              className={cn(
                "mt-8 flex flex-wrap gap-4",
                align === "center" && "justify-center",
              )}
            >
              <ButtonLink
                size="lg"
                href="/programs#class-finder"
                className="rounded-2xl bg-flip-white px-8 text-flip-purple hover:bg-flip-silver"
              >
                Find Classes
              </ButtonLink>
              <ButtonAnchor
                size="lg"
                href={site.iclasspro.classes}
                variant="outline"
                className="rounded-2xl border-flip-white/80 bg-flip-white/10 px-8 text-flip-white backdrop-blur-sm hover:bg-flip-white/20"
              >
                Enroll Now
              </ButtonAnchor>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
