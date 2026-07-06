import Link from "next/link";
import { Mail, MapPin, Phone, Share2 } from "lucide-react";
import { site, navLinks } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-flip-black/20 bg-flip-black text-white">
      <div className="container-wide section-padding grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="mb-4 font-heading text-xl font-bold">The Flip Zone</h3>
          <p className="mb-4 text-sm leading-relaxed text-white/80">
            Building confidence through gymnastics in Plainfield, Indiana.
            Serving Avon, Brownsburg, and Hendricks County families.
          </p>
          <div className="flex gap-3">
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white/10 p-2 transition-colors hover:bg-white/20"
              aria-label="Facebook"
            >
              <Share2 className="size-5" />
            </a>
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white/10 p-2 transition-colors hover:bg-white/20"
              aria-label="Instagram"
            >
              <Share2 className="size-5" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-heading text-lg font-bold">Quick Links</h3>
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/80 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={site.iclasspro.portal}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/80 transition-colors hover:text-white"
              >
                Parent Portal
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-heading text-lg font-bold">Contact</h3>
          <ul className="space-y-3 text-sm text-white/80">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0" />
              <span>{site.address.full}</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="size-4 shrink-0" />
              <div>
                <a href={`tel:${site.phones.recreational}`} className="hover:text-white">
                  Rec Gym: {site.phones.recreational}
                </a>
                <br />
                <a href={`tel:${site.phones.teamPreschool}`} className="hover:text-white">
                  Team/SSGNL: {site.phones.teamPreschool}
                </a>
              </div>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="size-4 shrink-0" />
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-heading text-lg font-bold">Hours</h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li>{site.hours.weekdays}</li>
            <li>{site.hours.saturday}</li>
            <li>{site.hours.sunday}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-sm text-white/60">
        <p>&copy; {new Date().getFullYear()} The Flip Zone. All rights reserved.</p>
      </div>
    </footer>
  );
}
