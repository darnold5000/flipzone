import { BannerHero } from "@/components/BannerHero";
import { images } from "@/lib/images";

export function AboutHero() {
  return (
    <BannerHero
      src={images.aboutHero}
      alt="More Than Just a Gym — Flip Zone has been helping Indiana families build confidence since 2007"
      width={1024}
      height={332}
    />
  );
}
