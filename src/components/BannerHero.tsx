import Image from "next/image";

interface BannerHeroProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
}

export function BannerHero({ src, alt, width, height, priority = true }: BannerHeroProps) {
  return (
    <section className="w-full">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="h-auto w-full"
        priority={priority}
        sizes="100vw"
      />
    </section>
  );
}
