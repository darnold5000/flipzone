export const site = {
  name: "The Flip Zone",
  tagline: "Building Confidence Through Gymnastics",
  description:
    "Premier gymnastics facility in Plainfield, Indiana serving Avon, Brownsburg, and Hendricks County families with preschool, recreational, tumbling, ninja, and competitive team programs.",
  url: "https://www.theflipzone.com",
  address: {
    street: "880 Andico Road",
    city: "Plainfield",
    state: "IN",
    zip: "46168",
    full: "880 Andico Road, Plainfield, Indiana 46168",
  },
  phones: {
    recreational: "317-838-0667",
    teamPreschool: "317-268-4810",
  },
  email: "theflipzonegym@gmail.com",
  social: {
    facebook: "https://www.facebook.com/TheFlipZone",
    instagram: "https://www.instagram.com/theflipzone_tfz/",
  },
  iclasspro: {
    portal: "https://app.iclasspro.com/portal/flipzone",
    classes: "https://app.iclasspro.com/portal/flipzone/classes",
    preschool: "https://app.iclasspro.com/portal/flipzone/classes?programs=78",
    recreational: "https://app.iclasspro.com/portal/flipzone/classes?programs=16",
    tumbling: "https://app.iclasspro.com/portal/flipzone/classes?programs=60",
    ninja: "https://app.iclasspro.com/portal/flipzone/classes?programs=17",
    team: "https://app.iclasspro.com/portal/flipzone/classes?programs=75",
  },
  hours: {
    weekdays: "Monday – Friday: 9:00 AM – 8:00 PM",
    saturday: "Saturday: 9:00 AM – 2:00 PM",
    sunday: "Sunday: Closed",
  },
  stats: {
    sqft: 20000,
    yearsServing: 15,
  },
} as const;

export const navLinks = [
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Staff", href: "/staff" },
  { label: "Gallery", href: "/gallery" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
] as const;

export const whyChooseUs = [
  {
    title: "Confidence",
    description: "Every class builds self-esteem through achievable goals and celebration.",
    icon: "star" as const,
  },
  {
    title: "Safe Coaching",
    description: "USA Gymnastics certified coaches in a SafeSport committed facility.",
    icon: "shield" as const,
  },
  {
    title: "Experienced Staff",
    description: "Dedicated professionals who love teaching kids of every age and level.",
    icon: "users" as const,
  },
  {
    title: "Positive Environment",
    description: "Fun, disciplined, and hard-working — where every child feels welcome.",
    icon: "heart" as const,
  },
  {
    title: "Competitive Path",
    description: "From first cartwheel to national-level competition, we grow with your child.",
    icon: "trophy" as const,
  },
  {
    title: "20,000+ sq ft Facility",
    description: "Two-building complex with foam pit, trampolines, ninja rig, and more.",
    icon: "building" as const,
  },
] as const;

export const facilityFeatures = [
  { title: "Foam Pit", description: "400 sq ft loose foam pit for safe landings" },
  { title: "Bars & Beam", description: "Full Olympic-style equipment for all levels" },
  { title: "Vault & Floor", description: "Competition-grade spring floors and vault tables" },
  { title: "Trampolines", description: "Three separate trampolines for training" },
  { title: "Ninja Rig", description: "Obstacle course and ninja training equipment" },
  { title: "Preschool Area", description: "Dedicated space sized for little gymnasts" },
  { title: "Viewing Areas", description: "Comfortable seating so parents can watch every moment" },
] as const;
