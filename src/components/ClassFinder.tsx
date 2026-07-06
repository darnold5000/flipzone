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
  { id: "parent-tot", label: "Parent & Tot", description: "Walking – 3 years" },
  { id: "preschool", label: "Preschool", description: "Ages 3–5" },
  { id: "5-8", label: "5–8", description: "Early elementary" },
  { id: "9-plus", label: "9+", description: "Older kids & teens" },
  { id: "competitive", label: "Competitive", description: "Team-ready athletes" },
];

const interestOptions = [
  { id: "gymnastics", label: "Gymnastics", description: "Vault, bars, beam, floor" },
  { id: "tumbling", label: "Tumbling", description: "Flips, handsprings, aerials" },
  { id: "ninja", label: "Ninja", description: "Obstacle courses & agility" },
  { id: "team", label: "Team", description: "Competitive gymnastics" },
  { id: "preschool", label: "Preschool", description: "Early movement & fun" },
  { id: "private-lessons", label: "Private Lessons", description: "One-on-one coaching" },
];

export function ClassFinder() {
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
    <section id="class-finder" className="section-padding bg-muted/50">
      <div className="container-wide">
        <div className="mb-10 text-center">
          <Badge className="mb-4 bg-flip-aqua/20 text-flip-blue">Class Finder</Badge>
          <h2 className="font-heading text-3xl font-bold text-flip-blue sm:text-4xl">
            Find My Child&apos;s Class
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Answer two quick questions and we&apos;ll recommend the perfect program for your child.
          </p>
        </div>

        <div className="mx-auto max-w-4xl rounded-3xl border border-border bg-card p-6 shadow-lg sm:p-10">
          <div className="mb-8 flex items-center justify-center gap-2">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`h-2 rounded-full transition-all ${
                  step >= s ? "w-12 bg-flip-blue" : "w-8 bg-border"
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
                  label="What interests them?"
                />
                <Button variant="ghost" className="mt-4" onClick={() => setStep(1)}>
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
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-flip-aqua/20 px-4 py-2 text-flip-blue">
                  <Sparkles className="size-4" />
                  <span className="font-semibold">We recommend</span>
                </div>

                <div className="overflow-hidden rounded-3xl border border-border">
                  <div className="relative aspect-video">
                    <Image
                      src={recommended.image}
                      alt={recommended.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 text-left sm:p-8">
                    <Badge className="mb-3">{recommended.ageRange}</Badge>
                    <h3 className="font-heading text-2xl font-bold text-flip-blue">
                      {recommended.name}
                    </h3>
                    <p className="mt-3 text-muted-foreground">{recommended.description}</p>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <ButtonAnchor className="rounded-xl" href={recommended.enrollUrl}>
                        Enroll Now
                      </ButtonAnchor>
                      <ButtonLink variant="outline" className="rounded-xl" href={`/${recommended.slug}`}>
                        Learn More
                        <ArrowRight className="ml-1 size-4" />
                      </ButtonLink>
                    </div>
                  </div>
                </div>

                <Button variant="ghost" className="mt-6" onClick={reset}>
                  Start Over
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="mt-12">
          <p className="mb-6 text-center text-sm font-medium text-muted-foreground">
            Or browse all programs
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {programs.filter((p) => p.featured).map((p) => (
              <Link
                key={p.slug}
                href={`/${p.slug}`}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium transition-colors hover:border-flip-blue hover:text-flip-blue"
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
