"use client";

import { motion } from "framer-motion";

const introText =
  "At The Flip Zone in Plainfield, Indiana, you will find much more than just an extensive gymnastics training facility. Our Gymnastics Club is a supportive community that pushes athletes to reach better results in a healthy and safe environment. We aim to build a strong body and spark your curiosity while inspiring you to discover your talents. From beginners to team our Gymnastics Club has it all.";

export function WelcomeIntro() {
  return (
    <section className="section-padding border-b border-border bg-background">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="font-heading text-sm font-semibold uppercase tracking-widest text-flip-purple">
            Plainfield, Indiana
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
            More Than a Gym
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {introText}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
