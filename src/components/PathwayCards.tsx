"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Baby, Medal, Sparkles } from "lucide-react";
import { images } from "@/lib/images";

const pathways = [
  {
    title: "Preschool",
    description: "Build confidence through movement.",
    href: "/preschool-gymnastics",
    image: images.preschool,
    icon: Baby,
    accent: "border-flip-aqua/30 hover:border-flip-aqua",
  },
  {
    title: "Recreational",
    description: "Learn gymnastics while having fun.",
    href: "/recreational-gymnastics",
    image: images.recreational,
    icon: Sparkles,
    accent: "border-flip-purple/30 hover:border-flip-purple",
  },
  {
    title: "Competitive",
    description: "Train with experienced coaches.",
    href: "/competitive-team",
    image: images.team,
    icon: Medal,
    accent: "border-flip-gold/40 hover:border-flip-gold",
  },
] as const;

export function PathwayCards() {
  return (
    <section className="section-padding bg-flip-lavender">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-flip-aqua">
            Every child belongs here
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-flip-purple sm:text-4xl">
            Find Their Path
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {pathways.map((path, i) => {
            const Icon = path.icon;
            return (
              <motion.div
                key={path.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={path.href}
                  className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border-2 bg-card shadow-md transition-all hover:-translate-y-1 hover:shadow-xl ${path.accent}`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={path.image}
                      alt={`${path.title} at The Flip Zone`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-flip-black/70 via-flip-black/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-2">
                      <span className="flex size-10 items-center justify-center rounded-xl bg-white/95 text-flip-purple shadow-sm">
                        <Icon className="size-5" />
                      </span>
                      <h3 className="font-heading text-2xl font-bold text-white drop-shadow">
                        {path.title}
                      </h3>
                    </div>
                  </div>
                  <div className="flex flex-1 items-center justify-between gap-3 p-5">
                    <p className="text-base text-foreground">{path.description}</p>
                    <ArrowRight className="size-5 shrink-0 text-flip-aqua transition-transform group-hover:translate-x-1" />
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
