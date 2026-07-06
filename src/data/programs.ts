import { images } from "@/lib/images";
import { site } from "./site";

export type ProgramCategory =
  | "first-classes"
  | "build-skills"
  | "competitive"
  | "more-fun";

export interface Program {
  slug: string;
  name: string;
  shortName: string;
  ageRange: string;
  category: ProgramCategory;
  perfectFor: string;
  description: string;
  learnings: string[];
  benefits: string[];
  goals?: string;
  image: string;
  enrollUrl: string;
  featured?: boolean;
  faqs?: { question: string; answer: string }[];
}

export const programs: Program[] = [
  {
    slug: "preschool-gymnastics",
    name: "Preschool Gymnastics",
    shortName: "Preschool",
    ageRange: "Ages 5 & under",
    category: "first-classes",
    perfectFor: "Little ones taking their first steps into movement and gymnastics",
    description:
      "Our preschool program introduces young children to gymnastics in a playful, structured environment. Classes focus on coordination, listening skills, and building confidence through fun obstacle courses, beam walks, and tumbling basics.",
    learnings: [
      "Basic body awareness and coordination",
      "Listening and following directions",
      "Social skills with peers",
      "Fundamental gymnastics shapes and movements",
      "Confidence through achievable challenges",
    ],
    benefits: [
      "Age-appropriate equipment and stations",
      "Small class sizes for individual attention",
      "Certified preschool coaches",
      "Fun, energetic environment",
    ],
    goals: "Build coordination, confidence, and a love of movement",
    image: images.pathwayPreschool,
    enrollUrl: site.iclasspro.preschool,
    featured: true,
    faqs: [
      {
        question: "What should my child wear?",
        answer: "Comfortable athletic clothing or a leotard. Bare feet or gymnastics shoes. Hair tied back.",
      },
      {
        question: "Can parents watch?",
        answer: "Yes! We have comfortable viewing areas where parents can watch every class.",
      },
    ],
  },
  {
    slug: "recreational-gymnastics",
    name: "Recreational Gymnastics",
    shortName: "Recreational",
    ageRange: "Ages 6 & up",
    category: "build-skills",
    perfectFor: "School-age kids who want to learn gymnastics skills and have fun",
    description:
      "From first-time gymnasts to intermediate athletes, our recreational program teaches vault, bars, beam, and floor in a progressive, skill-based curriculum. Girls progress through Beginner, Intermediate, and advanced levels at their own pace.",
    learnings: [
      "Vault, bars, beam, and floor skills",
      "Strength and flexibility",
      "Proper technique and form",
      "Goal-setting and perseverance",
      "Teamwork and sportsmanship",
    ],
    benefits: [
      "Progressive skill levels (Beginner I–III, Intermediate I & II)",
      "State-of-the-art equipment",
      "Pathway to competitive team",
      "Fun, supportive coaching",
    ],
    goals: "Master fundamentals and progress at your own pace",
    image: images.pathwayRecreational,
    enrollUrl: site.iclasspro.recreational,
    featured: true,
  },
  {
    slug: "tumbling",
    name: "Tumbling",
    shortName: "Tumbling",
    ageRange: "Ages 6 & up",
    category: "build-skills",
    perfectFor: "Kids and teens focused on floor skills, flips, and aerials",
    description:
      "Our tumbling program is perfect for cheerleaders, dancers, or anyone who wants to master floor skills. Classes range from Tumbling 1 basics through advanced back handsprings and Level 3–5 tumbling.",
    learnings: [
      "Cartwheels, round-offs, and handstands",
      "Back handsprings and aerials",
      "Advanced tumbling passes",
      "Strength and flexibility for tumbling",
    ],
    benefits: [
      "Dedicated tumbling floor and trampolines",
      "Levels from beginner to advanced",
      "Great for cheer and dance cross-training",
    ],
    image: images.tumbling,
    enrollUrl: site.iclasspro.tumbling,
    featured: true,
  },
  {
    slug: "ninjanastics",
    name: "NinjaNastics",
    shortName: "Ninja",
    ageRange: "Ages 5–12",
    category: "build-skills",
    perfectFor: "Active kids who love obstacle courses and ninja-style movement",
    description:
      "A combination of ninja and gymnastics skills! Coed classes use our ninja rig, obstacle courses, and gymnastics equipment to build strength, agility, and confidence in a high-energy format.",
    learnings: [
      "Obstacle course navigation",
      "Ninja-style climbing and swinging",
      "Gymnastics fundamentals",
      "Agility and coordination",
    ],
    benefits: [
      "Dedicated ninja rig and equipment",
      "Coed classes for all skill levels",
      "High-energy, fun format",
    ],
    image: images.ninja,
    enrollUrl: site.iclasspro.ninja,
    featured: true,
  },
  {
    slug: "competitive-team",
    name: "Competitive Team",
    shortName: "Team",
    ageRange: "By invitation / tryout",
    category: "competitive",
    perfectFor: "Dedicated gymnasts ready for competition and excellence",
    description:
      "Flip Zone is renowned for high-caliber competitive programs with success at state, regional, and national levels. We offer Preteam, USAG Compulsory, USAG Optionals, and NGA Colors programs tailored to each athlete's goals.",
    learnings: [
      "Competition-ready routines",
      "Advanced skills on all four events",
      "Mental toughness and focus",
      "Team camaraderie and sportsmanship",
    ],
    benefits: [
      "Dedicated Team Training Center",
      "Experienced competitive coaching staff",
      "State, regional, and national success",
      "Multiple competitive pathways (USAG & NGA)",
    ],
    goals: "Excel in competition while growing as an athlete and person",
    image: images.pathwayCompetitive,
    enrollUrl: site.iclasspro.team,
    featured: true,
    faqs: [
      {
        question: "How do I join the team?",
        answer: "Team tryouts are held annually. Sign up through our events page. Current recreational gymnasts and athletes from other clubs are welcome.",
      },
      {
        question: "What competitive programs do you offer?",
        answer: "Preteam, USAG Compulsory, USAG Optionals, and NGA Colors — each designed for different skill levels and goals.",
      },
    ],
  },
  {
    slug: "gymstars",
    name: "GymStars",
    shortName: "GymStars",
    ageRange: "All ages",
    category: "more-fun",
    perfectFor: "Children with special needs who want to experience gymnastics",
    description:
      "GymStars offers special needs gymnastics classes in our Recreational Training Center. Our patient, trained coaches create an inclusive environment where every child can move, play, and build confidence.",
    learnings: [
      "Fundamental movement skills",
      "Balance and coordination",
      "Social interaction",
      "Self-confidence through achievement",
    ],
    benefits: [
      "Inclusive, adaptive programming",
      "Patient, trained coaches",
      "Small class sizes",
    ],
    image: images.gymstars,
    enrollUrl: site.iclasspro.classes,
  },
  {
    slug: "shooting-stars-preschool",
    name: "Shooting Stars Gym N Learn Preschool",
    shortName: "SSGNL Preschool",
    ageRange: "Ages 3–5",
    category: "first-classes",
    perfectFor: "Families seeking a fitness-based educational preschool program",
    description:
      "Since 2007, Shooting Stars Gym N Learn is Hendricks County's first fitness-based educational program. PreK and 3's programs meet Mon/Wed/Fri, 9:30 AM–1:30 PM, with daily gymnastics at The Flip Zone.",
    learnings: [
      "PreK (4 by August 1st), Older 3's (3 by August 1st, potty trained), Young 3's (3 by December 1st)",
      "30–45 minutes of daily gymnastics and fitness",
      "Modified Abeka curriculum with movement-based learning",
      "Field trips, visitors, conferences, and Pre-K graduation",
    ],
    benefits: [
      "Academic curriculum plus a full gymnastics gym",
      "Convenient car drop-off and pick-up lines",
      "Develops academic, social, emotional, and physical skills",
      "Special events: orchard, Children's Museum, aquatic center, and more",
    ],
    goals: "Learn, move, and grow in a unique fitness-based preschool",
    image: images.ssgnl,
    enrollUrl: site.iclasspro.portal,
    faqs: [
      {
        question: "What ages does SSGNL accept?",
        answer:
          "We offer PreK (4 by August 1st), Older 3's (3 by August 1st and potty trained), and Young 3's (3 by December 1st). Tumbling Tykes is available for children 18 months–2 years who will not be 3 by December 1st.",
      },
      {
        question: "When does registration open for 2026–2027?",
        answer:
          "Current SSGNL families: January 12th. Flip Zone families: January 26th. The public: February 2nd.",
      },
      {
        question: "What are class days and times?",
        answer:
          "Classes meet Mondays, Wednesdays, and Fridays from 9:30 AM to 1:30 PM, including 30–45 minutes of gymnastics and fitness daily.",
      },
      {
        question: "Who do I call about SSGNL?",
        answer: `Call ${site.phones.teamPreschool} for team and SSGNL preschool questions.`,
      },
    ],
  },
  {
    slug: "private-lessons",
    name: "Private Lessons",
    shortName: "Private",
    ageRange: "All ages",
    category: "competitive",
    perfectFor: "Athletes wanting one-on-one coaching for specific skills",
    description:
      "Private lessons offer personalized coaching tailored to your child's goals. Whether working on a specific skill, preparing for team tryouts, or accelerating progress, our coaches provide focused, individual attention.",
    learnings: [
      "Personalized skill development",
      "Targeted technique correction",
      "Accelerated progress on specific goals",
    ],
    benefits: [
      "One-on-one with experienced coaches",
      "Flexible scheduling",
      "Customized training plan",
    ],
    image: images.recreational,
    enrollUrl: site.iclasspro.classes,
  },
  {
    slug: "birthday-parties",
    name: "Birthday Parties",
    shortName: "Parties",
    ageRange: "All ages",
    category: "more-fun",
    perfectFor: "Unforgettable birthday celebrations with gymnastics fun",
    description:
      "Birthday parties are back at The Flip Zone! Enjoy 1 hour of games, obstacle courses, and gymnastics fun plus 30 minutes in our party area. Perfect for active kids who want a unique celebration.",
    learnings: [],
    benefits: [
      "1 hour of games and obstacle courses",
      "30 minutes in party area",
      "$250 for up to 10 children (active families)",
      "Additional children $15 each",
    ],
    image: images.birthday,
    enrollUrl: site.iclasspro.portal,
  },
  {
    slug: "open-gym",
    name: "Open Gym",
    shortName: "Open Gym",
    ageRange: "Ages 6 & up",
    category: "more-fun",
    perfectFor: "Kids who want extra practice time or just want to play in the gym",
    description:
      "Open Gym is a time for your child to work on skills from class or just play on the trampolines, bars, and beams. School-age Open Gym is Saturdays 12:00–1:00 PM. Pre-registration required.",
    learnings: [],
    benefits: [
      "Saturdays 12:00–1:00 PM",
      "$15 per person",
      "Use makeup tokens",
      "Pre-registration required",
    ],
    image: images.facility,
    enrollUrl: site.iclasspro.classes,
  },
  {
    slug: "summer-camps",
    name: "Summer Camps",
    shortName: "Camps",
    ageRange: "Ages 5 & up",
    category: "more-fun",
    perfectFor: "Summer fun with themed weekly adventures",
    description:
      "Four fun-filled weeks of summer camp in June! Each week features a unique theme — Animal Adventures, Super Hero Adventures, Around the World, and Sportsmania. Campers bring lunch and water daily.",
    learnings: [
      "Gymnastics skills and games",
      "Theme-based activities",
      "Social skills and teamwork",
    ],
    benefits: [
      "4 themed weeks in June",
      "One-time $30 camp fee",
      "Payment plans available",
      "Bring lunch and water daily",
    ],
    image: images.camps,
    enrollUrl: site.iclasspro.classes,
  },
];

export const programCategories: {
  id: ProgramCategory;
  title: string;
  subtitle: string;
}[] = [
  { id: "first-classes", title: "First Classes", subtitle: "Perfect for getting started" },
  { id: "build-skills", title: "Build Skills", subtitle: "Grow and progress" },
  { id: "competitive", title: "Competitive", subtitle: "Take it to the next level" },
  { id: "more-fun", title: "More Fun", subtitle: "Parties, camps, and extras" },
];

export function getProgram(slug: string): Program | undefined {
  return programs.find((p) => p.slug === slug);
}

export const classFinderMap: Record<string, Record<string, string>> = {
  "parent-tot": {
    gymnastics: "preschool-gymnastics",
    preschool: "preschool-gymnastics",
    default: "preschool-gymnastics",
  },
  preschool: {
    gymnastics: "preschool-gymnastics",
    preschool: "preschool-gymnastics",
    ninja: "ninjanastics",
    default: "preschool-gymnastics",
  },
  "5-8": {
    gymnastics: "recreational-gymnastics",
    tumbling: "tumbling",
    ninja: "ninjanastics",
    team: "competitive-team",
    default: "recreational-gymnastics",
  },
  "9-plus": {
    gymnastics: "recreational-gymnastics",
    tumbling: "tumbling",
    ninja: "ninjanastics",
    team: "competitive-team",
    "private-lessons": "private-lessons",
    default: "recreational-gymnastics",
  },
  competitive: {
    team: "competitive-team",
    gymnastics: "competitive-team",
    default: "competitive-team",
  },
};
