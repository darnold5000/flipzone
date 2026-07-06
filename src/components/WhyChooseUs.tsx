"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Building2, Heart, Shield, Star, Trophy, Users } from "lucide-react";
import { whyChooseUs, site } from "@/data/site";

const icons = {
  star: Star,
  shield: Shield,
  users: Users,
  heart: Heart,
  trophy: Trophy,
  building: Building2,
};

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
    <section className="section-padding">
      <div className="container-wide">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl font-bold text-flip-purple sm:text-4xl">
            Why Families Choose Flip Zone
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            A supportive community where every child builds confidence, skills, and friendships.
          </p>
        </div>

        <div className="mb-12 flex flex-wrap justify-center gap-8">
          <div className="text-center">
            <p className="font-heading text-4xl font-bold text-flip-purple">
              <AnimatedCounter value={site.stats.sqft} suffix="+" />
            </p>
            <p className="text-sm text-muted-foreground">sq ft facility</p>
          </div>
          <div className="text-center">
            <p className="font-heading text-4xl font-bold text-flip-purple">
              <AnimatedCounter value={site.stats.yearsServing} suffix="+" />
            </p>
            <p className="text-sm text-muted-foreground">years serving Indiana families</p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item, i) => {
            const Icon = icons[item.icon];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-3xl border border-border bg-card p-6 text-center transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-2xl bg-flip-purple/10">
                  <Icon className="size-7 text-flip-purple" />
                </div>
                <h3 className="font-heading text-lg font-bold text-flip-purple">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
