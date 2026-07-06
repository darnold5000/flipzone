import { BannerHero } from "@/components/BannerHero";
import { ClassFinder } from "@/components/ClassFinder";
import { ProgramsCatalog } from "@/components/ProgramsCatalog";
import { CTA } from "@/components/CTA";
import { images } from "@/lib/images";
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
      <BannerHero
        src={images.programsHero}
        alt="Programs for Every Stage — from first steps to competitive excellence at The Flip Zone"
        width={1024}
        height={231}
      />

      <ClassFinder />

      <ProgramsCatalog />

      <CTA />
    </>
  );
}
