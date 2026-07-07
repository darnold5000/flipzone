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
      <h1 className="font-heading text-3xl font-bold leading-tight text-white sm:text-4xl">
        Moments <span className="font-script italic text-flip-coral">That Matter</span>
      </h1>

      <p className="mt-3 text-sm leading-relaxed text-white/90 sm:text-base">
        From first cartwheels to big victories, these are the memories we&apos;re proud to share.
      </p>
    </SplitPhotoHero>
  );
}
