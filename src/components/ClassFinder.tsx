"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import { AgeSelector } from "@/components/AgeSelector";
import { Button, ButtonAnchor, ButtonLink } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { classFinderMap, getProgram, programs } from "@/data/programs";

const ageOptions = [
  { id: "walking-3", label: "Walking – 3", description: "Parent & tot, first movers" },
  { id: "3-5", label: "3 – 5", description: "Preschool gymnastics" },
  { id: "6-8", label: "6 – 8", description: "Early elementary" },
  { id: "9-plus", label: "9+", description: "Older kids & teens" },
  { id: "competitive", label: "Competitive", description: "Team-ready athletes" },
];

const interestOptions = [
  { id: "gymnastics", label: "Gymnastics", description: "Vault, bars, beam, floor" },
  { id: "tumbling", label: "Tumbling", description: "Flips, handsprings, aerials" },
  { id: "ninja", label: "Ninja", description: "Obstacle courses & agility" },
  { id: "preschool", label: "Preschool", description: "Early movement & fun" },
  { id: "team", label: "Team", description: "Competitive gymnastics" },
];

interface ClassFinderProps {
  showImage?: boolean;
  prominent?: boolean;
}

export function ClassFinder({ showImage = true, prominent = false }: ClassFinderProps) {
  const [step, setStep] = useState(1);
  const [age, setAge] = useState<string | null>(null);
  const [interest, setInterest] = useState<string | null>(null);

  const recommendedSlug =
    age && interest
      ? classFinderMap[age]?.[interest] ?? classFinderMap[age]?.default
      : null;

  const recommended = recommendedSlug ? getProgram(recommendedSlug) : null;

  const handleAgeSelect = (id: string) => {
    setAge(id);
    setStep(2);
  };

  const handleInterestSelect = (id: string) => {
    setInterest(id);
    setStep(3);
  };

  const reset = () => {
    setStep(1);
    setAge(null);
    setInterest(null);
  };

  return (
    <section
      id="class-finder"
      className={
        prominent
          ? "relative -mt-8 section-padding bg-gradient-to-b from-flip-lavender via-white to-white pb-20 pt-4 sm:-mt-12"
          : "section-padding bg-flip-soft-blue/60"
      }
    >
      <div className="container-wide">
        <div className="mb-10 text-center">
          {prominent && (
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-flip-aqua">
              Start here
            </p>
          )}
          <h2 className="font-heading text-3xl font-bold text-flip-purple sm:text-4xl lg:text-5xl">
            Find the Right Class
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-muted-foreground sm:text-lg">
            Two quick questions — we&apos;ll point you to the perfect program.
          </p>
        </div>

        <div
          className={`mx-auto max-w-4xl rounded-3xl border border-flip-purple/10 bg-card p-6 shadow-xl shadow-flip-purple/5 sm:p-10 ${
            prominent ? "ring-1 ring-flip-aqua/20" : ""
          }`}
        >
          <div className="mb-8 flex items-center justify-center gap-2">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`h-2.5 rounded-full transition-all ${
                  step >= s ? "w-14 bg-flip-aqua" : "w-8 bg-border"
                }`}
              />
            ))}
          </div>

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <AgeSelector
                  options={ageOptions}
                  selected={age}
                  onSelect={handleAgeSelect}
                />
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <AgeSelector
                  options={interestOptions}
                  selected={interest}
                  onSelect={handleInterestSelect}
                  label="What are they interested in?"
                />
                <Button variant="ghost" className="mt-4 text-flip-purple" onClick={() => setStep(1)}>
                  ← Back
                </Button>
              </motion.div>
            )}

            {step === 3 && recommended && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center"
              >
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-flip-aqua/15 px-4 py-2 text-flip-aqua-dark">
                  <Sparkles className="size-4" />
                  <span className="font-semibold">We recommend</span>
                </div>

                <div className="overflow-hidden rounded-3xl border border-border shadow-lg">
                  {showImage && (
                    <div className="relative aspect-[21/9] sm:aspect-[2.4/1]">
                      <Image
                        src={recommended.image}
                        alt={recommended.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 896px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <Badge className="absolute left-4 top-4 bg-white/95 text-foreground">
                        {recommended.ageRange}
                      </Badge>
                    </div>
                  )}
                  <div className="p-6 text-left sm:p-8">
                    {!showImage && (
                      <Badge className="mb-3 bg-flip-aqua/15 text-flip-aqua-dark">
                        {recommended.ageRange}
                      </Badge>
                    )}
                    <h3 className="font-heading text-2xl font-bold text-flip-purple sm:text-3xl">
                      {recommended.name}
                    </h3>
                    <p className="mt-3 text-base text-muted-foreground">{recommended.description}</p>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <ButtonAnchor variant="accent" className="rounded-xl" href={recommended.enrollUrl}>
                        Enroll Now
                      </ButtonAnchor>
                      <ButtonLink variant="outline" className="rounded-xl" href={`/${recommended.slug}`}>
                        Learn More
                        <ArrowRight className="ml-1 size-4" />
                      </ButtonLink>
                    </div>
                  </div>
                </div>

                <Button variant="ghost" className="mt-6 text-flip-purple" onClick={reset}>
                  Start Over
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="mt-10">
          <p className="mb-5 text-center text-sm font-medium text-muted-foreground">
            Or browse all programs
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {programs.filter((p) => p.featured).map((p) => (
              <Link
                key={p.slug}
                href={`/${p.slug}`}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium transition-colors hover:border-flip-aqua hover:text-flip-aqua"
              >
                {p.shortName}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
