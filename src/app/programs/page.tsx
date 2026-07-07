import { ProgramsHero } from "@/components/programs/ProgramsHero";
import { ClassFinder } from "@/components/ClassFinder";
import { ProgramsCatalog } from "@/components/ProgramsCatalog";
import { CTA } from "@/components/CTA";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Gymnastics Programs Plainfield Indiana | Find the Right Class",
  description:
    "Explore preschool gymnastics, recreational classes, tumbling, ninja, competitive team, birthday parties, and summer camps at The Flip Zone in Plainfield, Indiana.",
  path: "/programs",
});

export default function ProgramsPage() {
  return (
    <>
      <ProgramsHero />

      <ClassFinder />

      <ProgramsCatalog />

      <CTA />
    </>
  );
}
