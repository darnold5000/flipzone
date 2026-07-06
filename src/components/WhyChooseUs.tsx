"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Building2, Heart, Shield, Star, Trophy, Users } from "lucide-react";
import { whyChooseUs, site } from "@/data/site";
import { cn } from "@/lib/utils";

const icons = {
  star: Star,
  shield: Shield,
  users: Users,
  heart: Heart,
  trophy: Trophy,
  building: Building2,
};

const cardBackgrounds = [
  "bg-card",
  "bg-flip-lavender",
  "bg-flip-soft-blue",
  "bg-card",
  "bg-flip-lavender",
  "bg-flip-soft-blue",
];

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl font-bold text-flip-purple sm:text-4xl">
            Why Families Choose Flip Zone
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-muted-foreground sm:text-lg">
            Helping kids grow stronger, more confident, and more courageous.
          </p>
        </div>

        <div className="mb-14 flex flex-wrap justify-center gap-10">
          <div className="text-center">
            <p className="font-heading text-4xl font-bold text-flip-aqua sm:text-5xl">
              <AnimatedCounter value={site.stats.sqft} suffix="+" />
            </p>
            <p className="mt-1 text-sm text-muted-foreground">sq ft facility</p>
          </div>
          <div className="text-center">
            <p className="font-heading text-4xl font-bold text-flip-purple sm:text-5xl">
              <AnimatedCounter value={site.stats.yearsServing} suffix="+" />
            </p>
            <p className="mt-1 text-sm text-muted-foreground">years serving Indiana families</p>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item, i) => {
            const Icon = icons[item.icon];
            const isTrophy = item.icon === "trophy";
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={cn(
                  "rounded-3xl border border-border/60 p-6 text-center transition-all hover:-translate-y-1 hover:shadow-lg",
                  cardBackgrounds[i],
                )}
              >
                <div
                  className={cn(
                    "mx-auto mb-4 flex size-14 items-center justify-center rounded-2xl",
                    isTrophy ? "bg-flip-gold/20" : "bg-flip-aqua/15",
                  )}
                >
                  <Icon
                    className={cn("size-7", isTrophy ? "text-flip-gold" : "text-flip-aqua")}
                  />
                </div>
                <h3 className="font-heading text-lg font-bold text-flip-purple">{item.title}</h3>
                <p className="mt-2 text-base text-muted-foreground">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
