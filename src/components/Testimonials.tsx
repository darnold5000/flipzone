"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section className="section-padding bg-flip-purple/5">
      <div className="container-wide">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl font-bold text-flip-purple sm:text-4xl">
            What Parents Say
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Real stories from families who trust Flip Zone with their children.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative rounded-3xl border border-border bg-card p-8 shadow-sm"
            >
              <Quote className="absolute right-6 top-6 size-10 text-flip-silver/30" />
              <div className="mb-4 flex gap-1">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="size-5 fill-flip-silver text-flip-silver" />
                ))}
              </div>
              <p className="text-lg leading-relaxed text-foreground">&ldquo;{t.quote}&rdquo;</p>
              <footer className="mt-6 border-t border-border pt-4">
                <cite className="not-italic">
                  <span className="font-heading font-bold text-flip-purple">{t.author}</span>
                  <span className="block text-sm text-muted-foreground">{t.role}</span>
                </cite>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
