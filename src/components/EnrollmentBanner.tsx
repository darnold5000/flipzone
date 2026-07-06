import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ButtonAnchor } from "@/components/ui/button";
import { site } from "@/data/site";

interface EnrollmentBannerProps {
  message?: string;
  programName?: string;
  enrollUrl?: string;
}

export function EnrollmentBanner({
  message = "Ready to enroll? Spots fill up fast!",
  programName,
  enrollUrl = site.iclasspro.classes,
}: EnrollmentBannerProps) {
  return (
    <div className="sticky top-16 z-30 border-b border-flip-silver/30 bg-flip-silver/10 px-4 py-3">
      <div className="container-wide flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm font-medium text-foreground">
          {programName ? (
            <>
              <span className="font-bold text-flip-purple">{programName}</span> — {message}
            </>
          ) : (
            message
          )}
        </p>
        <ButtonAnchor size="sm" className="rounded-xl gap-1" href={enrollUrl}>
          Enroll Now
          <ArrowRight className="size-4" />
        </ButtonAnchor>
      </div>
    </div>
  );
}
