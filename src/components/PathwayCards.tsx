"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Baby, Sparkles, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";

const pathways = [
  {
    title: "Preschool",
    description: "Build confidence through movement.",
    href: "/preschool-gymnastics",
    icon: Baby,
    iconClass: "bg-flip-purple/10 text-flip-purple",
  },
  {
    title: "Recreational",
    description: "Learn gymnastics while having fun.",
    href: "/recreational-gymnastics",
    icon: Sparkles,
    iconClass: "bg-flip-purple/10 text-flip-purple",
  },
  {
    title: "Competitive",
    description: "Train with experienced coaches.",
    href: "/competitive-team",
    icon: Trophy,
    iconClass: "bg-flip-purple/15 text-flip-purple",
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
                  className="group flex h-full flex-col rounded-3xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-flip-purple/30 hover:shadow-md"
                >
                  <span
                    className={cn(
                      "mb-5 flex size-14 items-center justify-center rounded-2xl",
                      path.iconClass,
                    )}
                  >
                    <Icon className="size-7" strokeWidth={1.75} />
                  </span>
                  <h3 className="font-heading text-xl font-bold text-flip-purple">{path.title}</h3>
                  <p className="mt-2 flex-1 text-muted-foreground">{path.description}</p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-flip-purple group-hover:gap-2">
                    Learn more
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
