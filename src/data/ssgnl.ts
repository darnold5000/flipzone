export const ssgnl = {
  name: "Shooting Stars Gym N Learn",
  shortName: "SSGNL",
  tagline: "Hendricks County's first fitness-based educational program — since 2007.",
  intro:
    "We have the best of both worlds for you — a strong academic curriculum and an entire gymnastics gym to develop students' large and fine motor skills. We develop the whole child: academic, social, emotional, and physical — and have FUN!",
  schedule: {
    days: "Mondays, Wednesdays, and Fridays",
    hours: "9:30 AM – 1:30 PM",
    gymnastics:
      "Includes 30–45 minutes of gymnastics and fitness daily in our state-of-the-art facility at The Flip Zone.",
  },
  ageGroups: [
    {
      name: "PreK",
      requirement: "4 years old by August 1st",
    },
    {
      name: "Older 3's",
      requirement: "3 by August 1st & potty trained",
    },
    {
      name: "Young 3's",
      requirement: "3 by December 1st",
    },
  ],
  registration2026: {
    title: "Registration for 2026–2027 Opens",
    dates: [
      { group: "Current SSGNL families", date: "January 12th" },
      { group: "Flip Zone families", date: "January 26th" },
      { group: "The public", date: "February 2nd" },
    ],
  },
  whyChoose: [
    {
      title: "Drop Off Lines",
      description:
        "We offer a Drop Off/Pick Up Procedure so parents do not have to get out of their cars (or take out younger siblings) to drop off and pick up your child. Students make the transition to school so much easier!",
    },
    {
      title: "What We Believe",
      description:
        "We believe students learn best by moving, practice, and repetition. We utilize the classrooms and the gym to meet these needs. We use a modified Abeka Curriculum. We also celebrate and learn about calendar events.",
    },
    {
      title: "Special Events",
      description:
        "We have three field trips: The Apple Orchard, The Indianapolis Children's Museum, and the Plainfield Aquatic Center. We also have visitors come to us: The Plainfield Fire Department, Kasey the FireDog, a veterinarian, and a dentist, along with others! We have parent teacher conferences, report cards, a book fair, a Christmas Program and a PreKindergarten Graduation. We are always busy learning and having fun.",
    },
  ],
  tumblingTykes: {
    title: "Tumbling Tykes",
    description:
      "If your child is 18 months – 2 years old (will not be 3 by December 1st), The Flip Zone will be offering a Tumbling Tykes program in the gym that will meet from 9:30 to 11:30. Lunch will not be eaten. They will have activities in the gym and a snack. This will be offered 1, 2, and 3 days a week.",
  },
} as const;
