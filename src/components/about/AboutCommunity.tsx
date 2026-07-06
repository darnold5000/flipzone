import { MapPin } from "lucide-react";
import { site } from "@/data/site";
import { ButtonLink } from "@/components/ui/button";

export function AboutCommunity() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-wide text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-flip-teal">Community</p>
        <h2 className="font-heading text-3xl font-bold text-flip-purple sm:text-4xl">
          Serving Hendricks County
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Conveniently located in Plainfield, we welcome families from Avon, Brownsburg,
          Indianapolis west side, and throughout Hendricks County.
        </p>
        <p className="mt-4 inline-flex items-center justify-center gap-2 font-medium text-flip-purple">
          <MapPin className="size-4 shrink-0" />
          {site.address.full}
        </p>
        <ButtonLink className="mt-8 rounded-2xl" size="lg" href="/contact">
          Get Directions
        </ButtonLink>
      </div>
    </section>
  );
}
