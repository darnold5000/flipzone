"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ButtonLink, ButtonAnchor } from "@/components/ui/button";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

interface HeroProps {
  title: string;
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
    dark: "bg-black/55",
    light: "bg-white/30",
    gradient: "bg-gradient-to-r from-flip-purple/85 via-flip-purple/50 to-transparent",
    team: "bg-gradient-to-t from-flip-black/90 via-flip-black/45 to-flip-purple/25",
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
            className="object-cover"
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
          <h1 className="font-heading text-4xl font-bold leading-tight text-white drop-shadow-sm sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-lg text-white/90 sm:text-xl lg:text-2xl">
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
                variant="accent"
                href="/programs#class-finder"
                className="rounded-2xl px-8"
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
