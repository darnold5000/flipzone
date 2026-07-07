import { BannerHero } from "@/components/BannerHero";
import { LocationMap } from "@/components/LocationMap";
import { CTA } from "@/components/CTA";
import { ButtonLink, ButtonAnchor } from "@/components/ui/button";
import {
  FacebookIcon,
  InstagramIcon,
  MailLetterIcon,
  PhoneCallIcon,
} from "@/components/icons/ContactLinkIcons";
import { images } from "@/lib/images";
import { site } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contact The Flip Zone | Plainfield Indiana Gymnastics",
  description:
    "Contact The Flip Zone at 880 Andico Road, Plainfield, IN. Call 317-838-0667 for recreational gym or 317-268-4810 for team and preschool. Serving Avon and Brownsburg.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <BannerHero
        src={images.contactHero}
        alt="The Flip Zone gymnastics facility in Plainfield, Indiana"
        width={640}
        height={456}
      />

      <section className="section-padding">
        <div className="container-wide">
          <LocationMap />
        </div>
      </section>

      <section className="section-padding bg-muted/50">
        <div className="container-wide">
          <div className="mx-auto max-w-2xl rounded-3xl border border-border bg-card p-8 text-center shadow-sm">
            <h2 className="font-heading text-2xl font-bold text-flip-purple">
              Ready to Enroll?
            </h2>
            <p className="mt-3 text-muted-foreground">
              Browse classes and register online through our parent portal.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <ButtonAnchor size="lg" className="rounded-2xl" href={site.iclasspro.classes}>
                Enroll Now
              </ButtonAnchor>
              <ButtonLink size="lg" variant="outline" className="rounded-2xl" href="/programs#class-finder">
                Find Your Class
              </ButtonLink>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-2xl border border-border bg-card px-6 py-3 transition-colors hover:border-[#1877F2]/40 hover:bg-[#1877F2]/5"
            >
              <FacebookIcon />
              Facebook
            </a>
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-2xl border border-border bg-card px-6 py-3 transition-colors hover:border-[#DD2A7B]/40 hover:bg-[#DD2A7B]/5"
            >
              <InstagramIcon />
              Instagram
            </a>
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-2 rounded-2xl border border-border bg-card px-6 py-3 transition-colors hover:border-[#EA4335]/40 hover:bg-[#EA4335]/5"
            >
              <MailLetterIcon />
              Email Us
            </a>
            <a
              href={`tel:${site.phones.recreational}`}
              className="flex items-center gap-2 rounded-2xl border border-border bg-card px-6 py-3 transition-colors hover:border-[#16A34A]/40 hover:bg-[#16A34A]/5"
            >
              <PhoneCallIcon />
              Call Us
            </a>
          </div>
        </div>
      </section>

      <CTA variant="default" />
    </>
  );
}
