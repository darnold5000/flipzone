import { Search } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";

export function MobileStickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-background/95 p-3 backdrop-blur-md lg:hidden">
      <ButtonLink
        href="/programs#class-finder"
        className="w-full gap-2 rounded-2xl py-6 text-base font-semibold shadow-lg"
      >
        <Search className="size-5" />
        Find My Child&apos;s Class
      </ButtonLink>
    </div>
  );
}
