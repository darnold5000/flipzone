import { AboutHero } from "@/components/about/AboutHero";
import { AboutDifferentiators } from "@/components/AboutDifferentiators";
import { AboutQuickStats } from "@/components/about/AboutQuickStats";
import { AboutStory } from "@/components/about/AboutStory";
import { AboutFacilityPreview } from "@/components/about/AboutFacilityPreview";
import { AboutCoachesPreview } from "@/components/about/AboutCoachesPreview";
import { AboutCommunity } from "@/components/about/AboutCommunity";
import { CTA } from "@/components/CTA";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "About The Flip Zone | Gymnastics Plainfield Indiana",
  description:
    "Learn about The Flip Zone — a 20,000+ sq ft gymnastics facility in Plainfield, Indiana serving Avon, Brownsburg, and Hendricks County families since 2007.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <AboutHero />

      <AboutDifferentiators />

      <AboutQuickStats />

      <AboutStory />

      <AboutFacilityPreview />

      <AboutCoachesPreview />

      <AboutCommunity />

      <CTA
        title="Ready to Get Started?"
        subtitle="Find the perfect class for your child and join the Flip Zone family today."
      />
    </>
  );
}
