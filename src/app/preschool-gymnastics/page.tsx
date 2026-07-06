import { notFound } from "next/navigation";
import { Heart, Sparkles, Users, Ear, Zap, Smile } from "lucide-react";
import { ProgramPageTemplate } from "@/components/programs/ProgramPageTemplate";
import { getProgram } from "@/data/programs";
import { site } from "@/data/site";
import { images } from "@/lib/images";
import { createMetadata, programSchema } from "@/lib/seo";

const preschoolPillars = [
  { icon: Sparkles, title: "Confidence", description: "Every small win builds big self-esteem" },
  { icon: Zap, title: "Coordination", description: "Balance, body awareness, and control" },
  { icon: Ear, title: "Listening", description: "Following directions in a fun setting" },
  { icon: Users, title: "Social Skills", description: "Making friends and taking turns" },
  { icon: Heart, title: "Movement", description: "Running, jumping, rolling, and climbing" },
  { icon: Smile, title: "Fun", description: "Because happy kids learn best" },
];

export const metadata = createMetadata({
  title: "Preschool Gymnastics Indiana | Ages 5 & Under",
  description:
    "Preschool gymnastics classes in Plainfield, Indiana for ages 5 and under. Parent & Tot, Threes & Fours, and KinderStars — building confidence through movement.",
  path: "/preschool-gymnastics",
  image: images.preschool,
});

export default function PreschoolPage() {
  const program = getProgram("preschool-gymnastics");
  if (!program) notFound();

  const schema = programSchema(
    program.name,
    program.description,
    `${site.url}/preschool-gymnastics`,
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ProgramPageTemplate program={program} />

      <section className="section-padding bg-gradient-to-br from-flip-purple/10 via-flip-silver/30 to-flip-black/5">
        <div className="container-wide">
          <div className="mb-10 text-center">
            <h2 className="font-heading text-3xl font-bold text-flip-purple sm:text-4xl">
              Where Little Gymnasts Begin
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Preschool at Flip Zone is almost its own brand — designed entirely for
              how young children learn and grow.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {preschoolPillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-3xl border border-flip-purple/20 bg-card p-6 text-center"
              >
                <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-2xl bg-flip-purple/10">
                  <pillar.icon className="size-7 text-flip-purple" />
                </div>
                <h3 className="font-heading text-lg font-bold text-flip-purple">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide max-w-3xl">
          <h2 className="font-heading text-3xl font-bold text-flip-purple">
            Class Options
          </h2>
          <ul className="mt-6 space-y-4">
              {[
                { name: "Parent & Tot", desc: "For walking toddlers with a caregiver" },
                { name: "Threes & Fours", desc: "Independent classes for 3–4 year olds" },
                { name: "Four and Fives", desc: "Pre-K readiness through gymnastics" },
                { name: "KinderStars", desc: "Kindergarten-age introductory gymnastics" },
              ].map((cls) => (
                <li key={cls.name} className="rounded-2xl border border-border bg-card p-4">
                  <h3 className="font-heading font-bold text-flip-purple">{cls.name}</h3>
                  <p className="text-sm text-muted-foreground">{cls.desc}</p>
                </li>
              ))}
          </ul>
        </div>
      </section>
    </>
  );
}
