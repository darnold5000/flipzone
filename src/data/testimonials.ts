export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "My daughter went from shy and hesitant to confident and excited about gymnastics. The coaches at Flip Zone truly care about each child.",
    author: "Sarah M.",
    role: "Parent of Preschool Gymnast",
    rating: 5,
  },
  {
    quote:
      "We've tried other gyms in the area, but nothing compares to the facility and staff at Flip Zone. The 20,000 sq ft space is incredible.",
    author: "Jason & Amy T.",
    role: "Parents of Recreational Gymnast",
    rating: 5,
  },
  {
    quote:
      "The team program is top-notch. Our daughter has grown so much as an athlete and a person. We're grateful for the positive, competitive environment.",
    author: "Michelle R.",
    role: "Team Parent",
    rating: 5,
  },
  {
    quote:
      "Shooting Stars preschool has been amazing for our son. He gets daily gymnastics AND a great education. Best decision we made!",
    author: "David K.",
    role: "SSGNL Preschool Parent",
    rating: 5,
  },
];
