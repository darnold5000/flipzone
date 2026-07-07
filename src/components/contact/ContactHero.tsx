import { SplitPhotoHero } from "@/components/SplitPhotoHero";
import { images } from "@/lib/images";

export function ContactHero() {
  return (
    <SplitPhotoHero
      image={images.contactHero}
      imageAlt="The Flip Zone gymnastics facility in Plainfield, Indiana"
      imagePosition="center 40%"
      size="compact"
    >
      <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-flip-teal">
        Contact Us
      </p>
      <h1 className="font-heading text-3xl font-bold leading-tight text-white sm:text-4xl">
        We&apos;re Here <span className="font-script italic text-flip-teal">For You</span>
      </h1>
      <p className="mt-3 text-sm leading-relaxed text-white/90 sm:text-base">
        Have questions or ready to get started? We&apos;d love to hear from you.
      </p>
    </SplitPhotoHero>
  );
}
