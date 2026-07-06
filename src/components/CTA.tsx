import { ButtonLink, ButtonAnchor } from "@/components/ui/button";
import { site } from "@/data/site";

function isExternal(href: string) {
  return href.startsWith("http");
}

interface CTAProps {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  variant?: "default" | "gradient";
}

export function CTA({
  title = "Ready to Get Started?",
  subtitle = "Find the perfect class for your child and join the Flip Zone family today.",
  primaryLabel = "Find Your Class",
  primaryHref = "/programs#class-finder",
  secondaryLabel = "Enroll Now",
  secondaryHref = site.iclasspro.classes,
  variant = "gradient",
}: CTAProps) {
  return (
    <section
      className={
        variant === "gradient"
          ? "section-padding bg-uniform-gradient text-white"
          : "section-padding bg-muted/50"
      }
    >
      <div className="container-wide text-center">
        <h2 className="font-heading text-3xl font-bold sm:text-4xl">{title}</h2>
        <p
          className={`mx-auto mt-4 max-w-xl text-lg ${
            variant === "gradient" ? "text-white/90" : "text-muted-foreground"
          }`}
        >
          {subtitle}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <ButtonLink
            size="lg"
            variant="accent"
            href={primaryHref}
            className="rounded-2xl px-8"
          >
            {primaryLabel}
          </ButtonLink>
          {isExternal(secondaryHref) ? (
            <ButtonAnchor
              size="lg"
              href={secondaryHref}
              variant="outline"
              className={`rounded-2xl px-8 ${
                variant === "gradient"
                  ? "border-white/80 bg-white/10 text-white hover:bg-white/20"
                  : ""
              }`}
            >
              {secondaryLabel}
            </ButtonAnchor>
          ) : (
            <ButtonLink
              size="lg"
              href={secondaryHref}
              variant="outline"
              className={`rounded-2xl px-8 ${
                variant === "gradient"
                  ? "border-white/80 bg-white/10 text-white hover:bg-white/20"
                  : ""
              }`}
            >
              {secondaryLabel}
            </ButtonLink>
          )}
        </div>
      </div>
    </section>
  );
}
