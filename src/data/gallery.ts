import { images } from "@/lib/images";

export type GalleryCategory =
  | "preschool"
  | "recreational"
  | "team"
  | "camps"
  | "birthday-parties"
  | "events";

export interface GalleryImage {
  src: string;
  alt: string;
  category: GalleryCategory;
  width?: number;
  height?: number;
}

export const galleryCategories: { id: GalleryCategory; label: string }[] = [
  { id: "preschool", label: "Preschool" },
  { id: "recreational", label: "Recreational" },
  { id: "team", label: "Team" },
  { id: "camps", label: "Camps" },
  { id: "birthday-parties", label: "Birthday Parties" },
  { id: "events", label: "Events" },
];

export const galleryImages: GalleryImage[] = [
  { src: images.preschool, alt: "Preschool gymnast on beam", category: "preschool", width: 800, height: 600 },
  { src: images.recreational, alt: "Recreational gymnastics class", category: "recreational", width: 800, height: 600 },
  { src: images.tumbling, alt: "Tumbling practice", category: "recreational", width: 600, height: 800 },
  { src: images.ninja, alt: "NinjaNastics obstacle course", category: "recreational", width: 800, height: 600 },
  { src: images.team, alt: "Competitive team practice", category: "team", width: 800, height: 600 },
  { src: images.facility, alt: "Flip Zone facility overview", category: "events", width: 1200, height: 700 },
  { src: images.birthday, alt: "GymStars special needs class", category: "preschool", width: 600, height: 600 },
  { src: images.programSsgnl, alt: "Shooting Stars preschool", category: "preschool", width: 600, height: 600 },
  { src: images.programBirthdayParties, alt: "Birthday party at Flip Zone", category: "birthday-parties", width: 1024, height: 682 },
  { src: images.programSummerCamps, alt: "Summer camp activities", category: "camps", width: 678, height: 452 },
  { src: images.hero, alt: "Gymnast in action", category: "team", width: 800, height: 600 },
  { src: images.recreational, alt: "Coach helping gymnast", category: "recreational", width: 600, height: 800 },
];
