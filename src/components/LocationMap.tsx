import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { site } from "@/data/site";

export function LocationMap() {
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(site.address.full)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="overflow-hidden rounded-3xl border border-border shadow-sm">
        <iframe
          title="The Flip Zone location map"
          src={mapSrc}
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-[400px] w-full"
        />
      </div>

      <div className="flex flex-col justify-center space-y-6">
        <div className="flex items-start gap-4">
          <div className="rounded-2xl bg-flip-blue/10 p-3">
            <MapPin className="size-6 text-flip-blue" />
          </div>
          <div>
            <h3 className="font-heading font-bold text-flip-blue">Address</h3>
            <p className="mt-1 text-muted-foreground">{site.address.full}</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Serving Plainfield, Avon, Brownsburg &amp; Hendricks County
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="rounded-2xl bg-flip-purple/10 p-3">
            <Phone className="size-6 text-flip-purple" />
          </div>
          <div>
            <h3 className="font-heading font-bold text-flip-blue">Phone</h3>
            <p className="mt-1">
              <a href={`tel:${site.phones.recreational}`} className="text-muted-foreground hover:text-flip-blue">
                Rec Gym: {site.phones.recreational}
              </a>
            </p>
            <p>
              <a href={`tel:${site.phones.teamPreschool}`} className="text-muted-foreground hover:text-flip-blue">
                Team/SSGNL: {site.phones.teamPreschool}
              </a>
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="rounded-2xl bg-flip-aqua/20 p-3">
            <Mail className="size-6 text-flip-blue" />
          </div>
          <div>
            <h3 className="font-heading font-bold text-flip-blue">Email</h3>
            <a href={`mailto:${site.email}`} className="mt-1 text-muted-foreground hover:text-flip-blue">
              {site.email}
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="rounded-2xl bg-flip-blue/10 p-3">
            <Clock className="size-6 text-flip-blue" />
          </div>
          <div>
            <h3 className="font-heading font-bold text-flip-blue">Hours</h3>
            <ul className="mt-1 space-y-1 text-muted-foreground">
              <li>{site.hours.weekdays}</li>
              <li>{site.hours.saturday}</li>
              <li>{site.hours.sunday}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
