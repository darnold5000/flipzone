"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ButtonLink, ButtonAnchor } from "@/components/ui/button";
import { site } from "@/data/site";

interface HeroProps {
  title: string;
  subtitle?: string;
  image: string;
  imageAlt?: string;
  showButtons?: boolean;
  overlay?: "dark" | "light" | "gradient";
  size?: "full" | "large" | "medium";
  align?: "left" | "center";
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
}: HeroProps) {
  const heights = {
    full: "min-h-[85vh]",
    large: "min-h-[60vh]",
    medium: "min-h-[45vh]",
  };

  const overlays = {
    dark: "bg-black/50",
    light: "bg-white/30",
    gradient: "bg-gradient-to-r from-flip-blue/80 via-flip-purple/60 to-transparent",
  };

  return (
    <section className={`relative ${heights[size]} flex items-center overflow-hidden`}>
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className={`absolute inset-0 ${overlays[overlay]}`} />

      <div className="container-wide relative z-10 px-4 py-20 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
        >
          <h1 className="font-heading text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-lg text-white/90 sm:text-xl lg:text-2xl">
              {subtitle}
            </p>
          )}
          {showButtons && (
            <div className={`mt-8 flex flex-wrap gap-4 ${align === "center" ? "justify-center" : ""}`}>
              <ButtonLink
                size="lg"
                href="/programs#class-finder"
                className="rounded-2xl bg-white px-8 text-flip-blue hover:bg-white/90"
              >
                Find Classes
              </ButtonLink>
              <ButtonAnchor
                size="lg"
                href={site.iclasspro.classes}
                variant="outline"
                className="rounded-2xl border-white/80 bg-white/10 px-8 text-white backdrop-blur-sm hover:bg-white/20"
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
