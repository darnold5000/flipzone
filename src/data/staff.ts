import { images } from "@/lib/images";

export interface Coach {
  name: string;
  role: string;
  specialties?: string[];
  certifications?: string[];
  yearsCoaching?: string;
  favoriteEvent?: string;
  funFact?: string;
  image: string;
}

export const staff: Coach[] = [
  {
    name: "Stephanie Paluchniak",
    role: "Owner",
    specialties: ["Leadership", "Program Development"],
    yearsCoaching: "20+ years",
    favoriteEvent: "Floor",
    funFact: "Built Flip Zone into Hendricks County's premier gymnastics destination.",
    image: images.coach1,
  },
  {
    name: "Irving Nochez",
    role: "Competitive Team Director",
    specialties: ["Competitive Gymnastics", "USAG", "NGA"],
    certifications: ["USA Gymnastics"],
    yearsCoaching: "15+ years",
    favoriteEvent: "High Bar",
    funFact: "Has coached athletes to state, regional, and national levels.",
    image: images.recreational,
  },
  {
    name: "Megan Guptill",
    role: "SSGNL Preschool Director",
    specialties: ["Early Childhood Education", "Preschool Gymnastics"],
    yearsCoaching: "10+ years",
    favoriteEvent: "Beam",
    funFact: "Leads Hendricks County's first fitness-based preschool program.",
    image: images.preschool,
  },
  {
    name: "Brittany Kollar",
    role: "Tumbling & Recreational Director",
    specialties: ["Tumbling", "Recreational Gymnastics"],
    certifications: ["USA Gymnastics"],
    yearsCoaching: "12+ years",
    favoriteEvent: "Floor",
    funFact: "Passionate about helping every child find their love of gymnastics.",
    image: images.tumbling,
  },
  {
    name: "Mariah Hawk",
    role: "Team Coach",
    specialties: ["Competitive Gymnastics"],
    certifications: ["USA Gymnastics"],
    yearsCoaching: "8+ years",
    favoriteEvent: "Vault",
    image: images.team,
  },
  {
    name: "Patrick Hatmaker",
    role: "Team Coach",
    specialties: ["Competitive Gymnastics"],
    certifications: ["USA Gymnastics"],
    yearsCoaching: "10+ years",
    favoriteEvent: "Parallel Bars",
    image: images.team,
  },
  {
    name: "Michelle Hart",
    role: "Facilities Director & Team Coach",
    specialties: ["Facilities", "Competitive Gymnastics"],
    yearsCoaching: "10+ years",
    favoriteEvent: "Beam",
    image: images.facility,
  },
  {
    name: "Cameron Jones",
    role: "Class & Team Coach",
    specialties: ["Recreational", "Competitive"],
    yearsCoaching: "5+ years",
    favoriteEvent: "Floor",
    image: images.recreational,
  },
  {
    name: "Annie Williamson",
    role: "SSGNL Preschool Teacher",
    specialties: ["Early Childhood Education"],
    yearsCoaching: "5+ years",
    favoriteEvent: "Preschool obstacle courses",
    image: images.ssgnl,
  },
  {
    name: "Amber Hitch",
    role: "SSGNL Preschool Teacher",
    specialties: ["Early Childhood Education"],
    yearsCoaching: "5+ years",
    image: images.preschool,
  },
  {
    name: "Lauren Gentry",
    role: "SSGNL Preschool Teacher",
    specialties: ["Early Childhood Education"],
    yearsCoaching: "5+ years",
    image: images.preschool,
  },
];
