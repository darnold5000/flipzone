"use client";

import { SplitPhotoHero } from "@/components/SplitPhotoHero";
import { images } from "@/lib/images";

export function GalleryHero() {
  return (
    <SplitPhotoHero
      image={images.galleryHeroPhoto}
      imageAlt="Young gymnast with medals at California Grand Invitational"
      imagePosition="center 40%"
    >
      <h1 className="font-heading text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-[3.1rem]">
        Moments <span className="font-script text-flip-coral">That Matter</span>
      </h1>

      <p className="mt-4 text-base leading-relaxed text-white/90 sm:text-lg">
        From first cartwheels to big victories, these are the memories we&apos;re proud to share.
      </p>
    </SplitPhotoHero>
  );
}
