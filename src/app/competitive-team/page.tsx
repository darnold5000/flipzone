import { notFound } from "next/navigation";
import Image from "next/image";
import { Trophy, Medal, Users } from "lucide-react";
import { ProgramPageTemplate } from "@/components/programs/ProgramPageTemplate";
import { CoachCard } from "@/components/CoachCard";
import { getProgram } from "@/data/programs";
import { staff } from "@/data/staff";
import { site } from "@/data/site";
import { images } from "@/lib/images";
import { createMetadata, programSchema } from "@/lib/seo";

const teamCoaches = staff.filter(
  (c) => c.role.includes("Team") || c.role.includes("Director"),
);

const teamLevels = [
  { name: "Preteam", description: "Foundation for young gymnasts — fundamentals, strength, and proper technique." },
  { name: "USAG Compulsory", description: "Structured competitive path with compulsory routines set by USA Gymnastics." },
  { name: "USAG Optionals", description: "Personalized routines showcasing individual strengths at advanced levels." },
  { name: "NGA Colors", description: "Holistic approach emphasizing skill progression and personal development." },
];

export const metadata = createMetadata({
  title: "Competitive Gymnastics Indiana | Team TFZ",
  description:
    "Join Team TFZ at The Flip Zone — competitive gymnastics with USAG and NGA programs, state and national success, and experienced coaching in Plainfield, Indiana.",
  path: "/competitive-team",
  image: images.team,
});

export default function CompetitiveTeamPage() {
  const program = getProgram("competitive-team");
  if (!program) notFound();

  const schema = programSchema(
    program.name,
    program.description,
    `${site.url}/competitive-team`,
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ProgramPageTemplate program={program} />

      <section className="section-padding bg-flip-blue text-white">
        <div className="container-wide">
          <h2 className="mb-4 font-heading text-3xl font-bold">Team Philosophy</h2>
          <p className="max-w-3xl text-lg leading-relaxed text-white/90">
            At Flip Zone, excellence meets passion in every flip, tumble, and routine.
            We nurture talent and foster a culture of excellence with success at state,
            regional, and national levels. Our commitment extends beyond winning — it&apos;s
            about the journey, camaraderie, and lifelong lessons learned through gymnastics.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <h2 className="mb-8 font-heading text-3xl font-bold text-flip-blue">
            Competitive Levels
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {teamLevels.map((level) => (
              <div
                key={level.name}
                className="rounded-3xl border border-border bg-card p-6"
              >
                <div className="mb-3 flex size-12 items-center justify-center rounded-2xl bg-flip-purple/10">
                  <Medal className="size-6 text-flip-purple" />
                </div>
                <h3 className="font-heading text-xl font-bold text-flip-blue">{level.name}</h3>
                <p className="mt-2 text-muted-foreground">{level.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/50">
        <div className="container-wide">
          <h2 className="mb-8 font-heading text-3xl font-bold text-flip-blue">
            Achievements
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { icon: Trophy, title: "State Champions", desc: "Multiple state-level titles and qualifiers" },
              { icon: Medal, title: "Regional Success", desc: "Athletes qualifying for regional competitions" },
              { icon: Users, title: "National Stage", desc: "Qualifiers for Easterns and Nationals" },
            ].map((item) => (
              <div key={item.title} className="rounded-3xl bg-card p-6 text-center">
                <item.icon className="mx-auto size-10 text-flip-aqua" />
                <h3 className="mt-4 font-heading font-bold text-flip-blue">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <h2 className="mb-8 font-heading text-3xl font-bold text-flip-blue">
            Team Coaches
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {teamCoaches.map((coach, i) => (
              <CoachCard key={coach.name} coach={coach} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/50">
        <div className="container-wide grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-video overflow-hidden rounded-3xl">
            <Image src={images.facility} alt="Team training facility" fill className="object-cover" />
          </div>
          <div>
            <h2 className="font-heading text-3xl font-bold text-flip-blue">
              Team Training Center
            </h2>
            <p className="mt-4 text-muted-foreground">
              Our dedicated Team Training Center provides a dynamic and safe environment
              for athletes to push their boundaries. State-of-the-art equipment, a 400 sq ft
              foam pit, and competition-grade apparatus support every level of training.
            </p>
            <p className="mt-4 text-muted-foreground">
              For team inquiries, call{" "}
              <a href={`tel:${site.phones.teamPreschool}`} className="font-semibold text-flip-blue">
                {site.phones.teamPreschool}
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
