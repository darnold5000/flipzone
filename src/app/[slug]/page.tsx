import { notFound } from "next/navigation";
import { ProgramPageTemplate } from "@/components/programs/ProgramPageTemplate";
import { getProgram, programs } from "@/data/programs";
import { site } from "@/data/site";
import { createMetadata, programSchema } from "@/lib/seo";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const dedicatedPages = new Set(["preschool-gymnastics", "competitive-team"]);

export async function generateStaticParams() {
  return programs
    .filter((p) => !dedicatedPages.has(p.slug))
    .map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const program = getProgram(slug);
  if (!program) return {};

  const seoTitles: Record<string, string> = {
    "preschool-gymnastics": "Preschool Gymnastics Plainfield Indiana | Ages 5 & Under",
    "recreational-gymnastics": "Recreational Gymnastics Plainfield Indiana | Ages 6+",
    tumbling: "Tumbling Classes Indiana | Back Handsprings & More",
    ninjanastics: "Ninja Classes Indiana | NinjaNastics for Kids",
    "competitive-team": "Competitive Gymnastics Indiana | Team TFZ",
    gymstars: "Special Needs Gymnastics | GymStars Program",
    "shooting-stars-preschool": "Preschool Gym N Learn | Shooting Stars SSGNL",
    "private-lessons": "Private Gymnastics Lessons Plainfield Indiana",
    "birthday-parties": "Birthday Parties Plainfield | Gymnastics Party Venue",
    "open-gym": "Open Gym Plainfield Indiana | Saturday Gym Time",
    "summer-camps": "Gymnastics Summer Camps Indiana | Flip Zone",
  };

  return createMetadata({
    title: seoTitles[slug] ?? program.name,
    description: program.description,
    path: `/${slug}`,
    image: program.image,
  });
}

export default async function ProgramPage({ params }: PageProps) {
  const { slug } = await params;
  const program = getProgram(slug);
  if (!program) notFound();

  const schema = programSchema(
    program.name,
    program.description,
    `${site.url}/${slug}`,
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ProgramPageTemplate program={program} />
    </>
  );
}
