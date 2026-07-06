import Image from "next/image";
import { images } from "@/lib/images";

export function AboutHero() {
  return (
    <section className="w-full">
      <Image
        src={images.aboutHero}
        alt="More Than Just a Gym — Flip Zone has been helping Indiana families build confidence since 2007"
        width={1024}
        height={332}
        className="h-auto w-full"
        priority
        sizes="100vw"
      />
    </section>
  );
}
