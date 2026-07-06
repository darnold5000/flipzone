import { images } from "@/lib/images";

export const aboutStory = {
  heroSubtitle:
    "Since 2007, helping Indiana families build confidence, strength, and a lifelong love of movement.",
  intro:
    "Since 2007, Flip Zone has helped Indiana families build confidence, strength, friendships, and a lifelong love of movement. Whether it's a toddler's first class or an athlete training for competition, every child is encouraged to grow at their own pace in a safe and supportive environment.",
  moreThanAGym:
    "At The Flip Zone, you'll find more than equipment and mats — you'll find coaches who know your child's name, teammates who cheer each other on, and a community that celebrates every small win along the way.",
  mission:
    "We build strong bodies, spark curiosity, and inspire kids to discover what they're capable of. From preschool through competitive team, every program is designed to help children grow with confidence.",
} as const;

export const aboutMilestones = [
  {
    year: "2007",
    title: "Flip Zone Opens",
    description: "Hendricks County's home for gymnastics and movement begins.",
  },
  {
    year: "20,000+ sq ft",
    title: "Expanded Facility",
    description: "Two-building complex with foam pit, trampolines, and ninja rig.",
  },
  {
    year: "USAG",
    title: "Competitive Team Growth",
    description: "State, regional, and national success across USAG and NGA pathways.",
  },
  {
    year: "Today",
    title: "Thousands of Indiana Families",
    description: "Preschool, recreational, tumbling, ninja, team, and more.",
  },
] as const;

export const aboutQuickStats = [
  {
    label: "20,000+ sq ft facility",
    icon: "building" as const,
  },
  {
    label: "15+ years serving Indiana families",
    icon: "users" as const,
  },
  {
    label: "USAG member club",
    icon: "trophy" as const,
  },
  {
    label: "Thousands of happy families",
    icon: "star" as const,
  },
] as const;

export const aboutFacilityHighlights = [
  {
    title: "Olympic Equipment",
    image: images.facilityGymFloor,
    alt: "Olympic-style bars, beams, and competition equipment at The Flip Zone",
  },
  {
    title: "Foam Pit",
    image: images.facilityOverview,
    alt: "Foam pit and training area at The Flip Zone",
  },
  {
    title: "Tumbling & Floor",
    image: images.programTumbling,
    alt: "Tumbling and floor exercise area",
  },
  {
    title: "Ninja Rig",
    image: images.programNinja,
    alt: "Ninja rig and obstacle course equipment",
  },
] as const;
