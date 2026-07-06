export interface FAQItem {
  question: string;
  answer: string;
  category: "general" | "classes" | "enrollment" | "facility";
}

export const faqs: FAQItem[] = [
  {
    category: "general",
    question: "Where is The Flip Zone located?",
    answer:
      "We're at 880 Andico Road in Plainfield, Indiana 46168 — conveniently serving families from Plainfield, Avon, Brownsburg, and throughout Hendricks County.",
  },
  {
    category: "general",
    question: "What are your phone numbers?",
    answer:
      "Recreational Gym: 317-838-0667. Team and SSGNL Preschool: 317-268-4810. Email: theflipzonegym@gmail.com",
  },
  {
    category: "classes",
    question: "What age can my child start gymnastics?",
    answer:
      "We offer Parent & Tot classes for the youngest gymnasts, preschool classes for ages 3–5, and recreational classes starting at age 6. Our Shooting Stars preschool accepts children as young as 3.",
  },
  {
    category: "classes",
    question: "What should my child wear to class?",
    answer:
      "Comfortable athletic clothing or a leotard. Bare feet or gymnastics shoes. Long hair should be tied back. No jewelry.",
  },
  {
    category: "classes",
    question: "Can parents watch classes?",
    answer:
      "Yes! We have comfortable viewing areas in both our Recreational Training Center and Team Training Center so you can watch your child every step of the way.",
  },
  {
    category: "enrollment",
    question: "How do I enroll my child?",
    answer:
      "Click 'Enroll Now' on any program page to go to our iClassPro portal where you can browse classes, create an account, and register online.",
  },
  {
    category: "enrollment",
    question: "Is there an annual registration fee?",
    answer:
      "Yes, there is an annual registration fee of $50 for new enrollments in recreational programs. This is assigned when you register through iClassPro.",
  },
  {
    category: "enrollment",
    question: "Can my child try a class before enrolling?",
    answer:
      "Contact us at 317-838-0667 to discuss trial options. We're happy to help you find the right class for your child.",
  },
  {
    category: "facility",
    question: "How big is your facility?",
    answer:
      "The Flip Zone is a two-building complex totaling just over 20,000 square feet, including a 400 sq ft foam pit, 3 trampolines, a ninja rig, and all equipment for competitive gymnastics.",
  },
  {
    category: "facility",
    question: "Do you offer birthday parties?",
    answer:
      "Yes! Birthday parties include 1 hour of games and obstacle courses plus 30 minutes in our party area. $250 for up to 10 children. Contact us to book.",
  },
  {
    category: "facility",
    question: "What is Open Gym?",
    answer:
      "Open Gym is Saturdays 12:00–1:00 PM for school-age kids (6+). $15 per person. Pre-registration required. You can also use makeup tokens.",
  },
  {
    category: "classes",
    question: "How do team tryouts work?",
    answer:
      "Team tryouts are held annually for the upcoming competitive season. Sign up through our events page. There is a $25 tryout fee. Trying out shows interest but does not guarantee placement.",
  },
];
