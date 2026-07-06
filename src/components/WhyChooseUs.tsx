"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Heart,
  Shield,
  Sparkles,
  Star,
  Trophy,
  Users,
} from "lucide-react";
import { whyChooseUs, site } from "@/data/site";
import { images } from "@/lib/images";
import { cn } from "@/lib/utils";

const icons = {
  star: Star,
  shield: Shield,
  users: Users,
  heart: Heart,
  trophy: Trophy,
  building: Building2,
};

const accentStyles = {
  purple: {
    icon: "bg-flip-purple/15 text-flip-purple",
    brush: "#4b2c85",
  },
  teal: {
    icon: "bg-flip-teal/15 text-flip-teal",
    brush: "#14b8a6",
  },
  coral: {
    icon: "bg-flip-coral/15 text-flip-coral",
    brush: "#ec4899",
  },
  orange: {
    icon: "bg-flip-orange/15 text-flip-orange",
    brush: "#f97316",
  },
} as const;

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

function BrushStroke({ color, className }: { color: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 120 80"
      aria-hidden
      className={cn("pointer-events-none", className)}
      preserveAspectRatio="none"
    >
      <path
        d="M8 42 C28 8, 58 4, 88 18 C108 28, 118 48, 112 62 C100 78, 62 76, 32 68 C14 62, 2 54, 8 42 Z"
        fill={color}
        opacity="0.85"
      />
    </svg>
  );
}

function HalftoneDots({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none opacity-40",
        className,
      )}
      style={{
        backgroundImage:
          "radial-gradient(circle, var(--flip-purple) 1.5px, transparent 1.5px)",
        backgroundSize: "10px 10px",
      }}
    />
  );
}

function FeatureCard({
  item,
  index,
}: {
  item: (typeof whyChooseUs)[number];
  index: number;
}) {
  const Icon = icons[item.icon];
  const accent = accentStyles[item.accent];

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07 }}
      className="relative overflow-hidden rounded-3xl border border-border/60 bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
    >
      <div
        className={cn(
          "mb-4 inline-flex size-11 items-center justify-center rounded-full",
          accent.icon,
        )}
      >
        <Icon className="size-5" strokeWidth={2.25} />
      </div>

      <h3 className="font-heading text-xl font-bold text-foreground">{item.title}</h3>
      <p className="mt-2 max-w-[16rem] text-sm leading-relaxed text-muted-foreground">
        {item.description}
      </p>

      <div className="pointer-events-none absolute -bottom-2 -right-2 h-28 w-36">
        <BrushStroke
          color={accent.brush}
          className="absolute inset-0 h-full w-full -rotate-6 scale-110"
        />
        <div className="absolute bottom-3 right-3 h-20 w-24 overflow-hidden rounded-2xl border-2 border-white shadow-md">
          <Image
            src={item.image}
            alt=""
            fill
            className="object-cover"
            sizes="96px"
          />
        </div>
      </div>
    </motion.article>
  );
}

export function WhyChooseUs() {
  return (
    <section className="section-padding overflow-hidden">
      <div className="container-wide">
        {/* Header + hero image */}
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-flip-teal">
              <Sparkles className="size-4" />
              Why Families Choose
            </div>
            <h2 className="font-heading text-4xl font-bold uppercase leading-none text-flip-purple sm:text-5xl lg:text-6xl">
              Flip Zone
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
              A supportive community where every child builds confidence, skills, and friendships.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="inline-flex items-center gap-3 rounded-full border border-border bg-card px-4 py-2.5 shadow-sm">
                <span className="flex size-9 items-center justify-center rounded-full bg-flip-purple/10 text-flip-purple">
                  <Building2 className="size-4" />
                </span>
                <span className="text-sm">
                  <strong className="font-heading text-base text-flip-purple">
                    <AnimatedCounter value={site.stats.sqft} suffix="+" />
                  </strong>{" "}
                  <span className="text-muted-foreground">sq ft facility</span>
                </span>
              </div>
              <div className="inline-flex items-center gap-3 rounded-full border border-border bg-card px-4 py-2.5 shadow-sm">
                <span className="flex size-9 items-center justify-center rounded-full bg-flip-teal/15 text-flip-teal">
                  <Users className="size-4" />
                </span>
                <span className="text-sm">
                  <strong className="font-heading text-base text-flip-purple">
                    <AnimatedCounter value={site.stats.yearsServing} suffix="+" />
                  </strong>{" "}
                  <span className="text-muted-foreground">years serving Indiana families</span>
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="relative mx-auto flex max-w-md justify-center lg:max-w-none"
          >
            <HalftoneDots className="absolute -left-4 top-8 h-24 w-24 rounded-full" />
            <BrushStroke
              color="#4b2c85"
              className="absolute -left-6 top-1/2 h-28 w-40 -translate-y-1/2 -rotate-12"
            />
            <BrushStroke
              color="#14b8a6"
              className="absolute -right-4 bottom-4 h-24 w-36 rotate-12"
            />
            <div className="relative size-64 overflow-hidden rounded-full border-4 border-white shadow-xl sm:size-72 lg:size-80">
              <Image
                src={images.programPrivateLessons}
                alt="Coach spotting a young gymnast on beam at The Flip Zone"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 320px, 320px"
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* Feature cards */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-6">
          {whyChooseUs.map((item, i) => (
            <FeatureCard key={item.title} item={item} index={i} />
          ))}
        </div>

        {/* In-section CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mt-16 overflow-hidden rounded-[2rem] bg-flip-purple px-6 py-10 sm:px-10 sm:py-12 lg:mt-20"
        >
          <div
            aria-hidden
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 80%, #14b8a6 0%, transparent 50%), radial-gradient(circle at 80% 20%, #6b3fa8 0%, transparent 45%)",
            }}
          />
          <BrushStroke
            color="#3a2168"
            className="absolute -left-8 -top-6 h-20 w-48 rotate-[-8deg] opacity-60"
          />
          <BrushStroke
            color="#14b8a6"
            className="absolute -bottom-8 right-1/3 h-16 w-40 rotate-6 opacity-70"
          />

          <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto_1fr]">
            <div className="flex items-start gap-2 lg:justify-end">
              <Star className="mt-2 size-5 shrink-0 text-flip-teal" strokeWidth={2.5} />
              <p className="font-script max-w-xs text-3xl leading-tight text-white sm:text-4xl">
                More than a gym.
                <br />
                It&apos;s where kids shine.
              </p>
              <Star className="mt-auto size-5 shrink-0 text-flip-teal" strokeWidth={2.5} />
            </div>

            <Link
              href="/programs#class-finder"
              className="inline-flex items-center justify-center gap-2 self-center rounded-2xl bg-flip-teal px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-transform hover:-translate-y-0.5 hover:bg-[#0d9488]"
            >
              Find Your Class
              <ArrowRight className="size-5" />
            </Link>

            <div className="relative hidden h-28 w-44 justify-self-end overflow-hidden rounded-2xl border-2 border-white/30 shadow-lg lg:block">
              <Image
                src={images.heroTeam}
                alt=""
                fill
                className="object-cover object-[center_30%]"
                sizes="176px"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
