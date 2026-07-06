import { coachPhoto } from "@/lib/images";

export interface Coach {
  name: string;
  role: string;
  image?: string;
}

/** Names and roles from theflipzone.com/staff. Photos from the same page where available. */
export const staff: Coach[] = [
  {
    name: "Stephanie Paluchniak",
    role: "Owner",
    image: coachPhoto("3c407f_fadae3a0eeae4cf79d4000dc105aee37"),
  },
  {
    name: "Irving Nochez",
    role: "Competitive Team Director",
    image: coachPhoto("3c407f_82e3d0c674df4213b532fc723aaf8353"),
  },
  {
    name: "Megan Guptill",
    role: "SSGNL Preschool Director",
    image: coachPhoto("3c407f_6700a88fd81d4cbfa489683a84e3bf48", "jpeg"),
  },
  {
    name: "Mariah Hawk",
    role: "Team Coach",
  },
  {
    name: "Brittany Kollar",
    role: "Tumbling Director · Recreational Director · Class Coach",
    image: coachPhoto("3c407f_8516e0b82f194acc80e9533e98cfec50"),
  },
  {
    name: "Patrick Hatmaker",
    role: "Team Coach",
    image: coachPhoto("3c407f_48b89a884adf4e73a829d460af4b1a68"),
  },
  {
    name: "Trae Richards",
    role: "Team Coach",
  },
  {
    name: "Jana Cutler",
    role: "Team Coach",
    image: coachPhoto("3c407f_100faeaebd79453a8801e9d03198fed6"),
  },
  {
    name: "Michelle Hart",
    role: "Facilities Director · Team Coach",
    image: coachPhoto("3c407f_1d516f866a09405790e30ed6f47814b1"),
  },
  {
    name: "Katie Hancock",
    role: "Team Coach",
    image: coachPhoto("3c407f_ada54cd5d06f44819dc459065a180898"),
  },
  {
    name: "Lisa Welch",
    role: "Team Coach",
    image: coachPhoto("3c407f_f0e19678db5a42d0a824b0faabdf5428"),
  },
  {
    name: "Katie Winter",
    role: "Team Coach",
    image: coachPhoto("3c407f_5ff223fb483f4eb4ab78daddfe8a5db5"),
  },
  {
    name: "Ania Alsum",
    role: "Team Coach",
    image: coachPhoto("3c407f_15a42fad5bee4326bbfd65012a4f5a19"),
  },
  {
    name: "Nancy Rice",
    role: "Team Coach",
  },
  {
    name: "Annie Williamson",
    role: "SSGNL Preschool Teacher",
    image: coachPhoto("3c407f_416818c43bb245e18c0258df612bd9a5", "jpeg"),
  },
  {
    name: "Cameron Jones",
    role: "Class Coach · Team Coach",
  },
  {
    name: "Amber Hitch",
    role: "SSGNL Preschool Teacher",
    image: coachPhoto("3c407f_2951a6e6d54e4cdbb2901cd84a0c5cc9", "jpeg"),
  },
  {
    name: "Lauren Gentry",
    role: "SSGNL Preschool Teacher",
    image: coachPhoto("3c407f_a677b389973c4d069067ff62ae94286c", "jpeg"),
  },
];
