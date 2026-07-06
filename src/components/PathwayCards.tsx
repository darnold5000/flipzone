"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Baby, Sparkles, Trophy } from "lucide-react";
import { images } from "@/lib/images";
import { cn } from "@/lib/utils";

const pathways = [
  {
    title: "Preschool",
    description: "Build confidence through movement.",
    href: "/preschool-gymnastics",
    image: images.pathwayPreschool,
    imageAlt: "Preschool children doing a craft activity at The Flip Zone",
    imageClass: "object-cover",
    icon: Baby,
    iconClass: "bg-white/95 text-flip-purple",
  },
  {
    title: "Recreational",
    description: "Learn gymnastics while having fun.",
    href: "/recreational-gymnastics",
    image: images.pathwayRecreational,
    imageAlt: "Recreational gymnastics students at The Flip Zone",
    imageClass: "object-contain bg-flip-purple p-2",
    icon: Sparkles,
    iconClass: "bg-white/95 text-flip-purple",
  },
  {
    title: "Competitive",
    description: "Train with experienced coaches.",
    href: "/competitive-team",
    image: images.pathwayCompetitive,
    imageAlt: "The Flip Zone competitive team with medals",
    imageClass: "object-cover object-[center_25%]",
    icon: Trophy,
    iconClass: "bg-white/95 text-flip-purple",
  },
] as const;

export function PathwayCards() {
  return (
    <section className="section-padding border-b border-border bg-muted/40">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <p className="font-heading text-sm font-semibold uppercase tracking-widest text-flip-purple">
            Plainfield, Indiana
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Find Their Path
          </h2>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-3">
          {pathways.map((path, i) => {
            const Icon = path.icon;
            return (
              <motion.div
                key={path.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  href={path.href}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:border-flip-purple/30 hover:shadow-lg"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={path.image}
                      alt={path.imageAlt}
                      fill
                      className={cn(
                        "transition-transform duration-500 group-hover:scale-105",
                        path.imageClass,
                      )}
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-flip-black/75 via-flip-black/15 to-transparent" />
                    <span
                      className={cn(
                        "absolute left-4 top-4 flex size-11 items-center justify-center rounded-xl shadow-sm",
                        path.iconClass,
                      )}
                    >
                      <Icon className="size-5" strokeWidth={1.75} />
                    </span>
                    <h3 className="absolute bottom-4 left-4 font-heading text-2xl font-bold text-white drop-shadow">
                      {path.title}
                    </h3>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <p className="flex-1 text-muted-foreground">{path.description}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-flip-purple group-hover:gap-2">
                      Learn more
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
