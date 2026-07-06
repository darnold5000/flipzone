"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button, ButtonLink, ButtonAnchor } from "@/components/ui/button";
import { navLinks, site } from "@/data/site";
import { images } from "@/lib/images";
import { cn } from "@/lib/utils";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/95 backdrop-blur-md">
      <div className="container-wide flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={images.logo}
            alt={site.name}
            width={44}
            height={44}
            className="rounded-full"
          />
          <span className="font-heading text-lg font-bold text-flip-blue sm:text-xl">
            The Flip Zone
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-flip-blue"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button
            variant="ghost"
            size="sm"
            render={<a href={`tel:${site.phones.recreational}`} />}
            nativeButton={false}
          >
            <Phone className="mr-1.5 size-4" />
            {site.phones.recreational}
          </Button>
          <ButtonLink variant="outline" size="sm" href="/programs#class-finder">
            Find Classes
          </ButtonLink>
          <ButtonAnchor size="sm" href={site.iclasspro.classes}>
            Enroll Now
          </ButtonAnchor>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-border/60 bg-background transition-all lg:hidden",
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="flex flex-col gap-1 p-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-xl px-4 py-3 font-medium hover:bg-muted"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-2 flex flex-col gap-2 border-t border-border pt-4">
            <ButtonLink variant="outline" href="/programs#class-finder" onClick={() => setMobileOpen(false)}>
              Find Classes
            </ButtonLink>
            <ButtonAnchor href={site.iclasspro.classes}>Enroll Now</ButtonAnchor>
          </div>
        </nav>
      </div>
    </header>
  );
}
