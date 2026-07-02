import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";
import { SITE, NAV_LINKS } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-cream/80">
      <div className="container-snit grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="mb-4 flex items-center gap-3">
            <Image src="/images/logo.png" alt="SNIT logo" width={44} height={44} className="h-11 w-11" />
            <span className="font-display text-lg font-semibold text-cream">
              Sri Natesh <span className="text-gold">Computer Center</span>
            </span>
          </Link>
          <p className="text-sm leading-relaxed text-cream/60">{SITE.tagline}</p>
          <div className="mt-5 flex gap-3">
            <a href={SITE.social.facebook} aria-label="Facebook" className="rounded-full border border-cream/20 p-2 hover:border-gold hover:text-gold">
              <Facebook size={16} />
            </a>
            <a href={SITE.social.instagram} aria-label="Instagram" className="rounded-full border border-cream/20 p-2 hover:border-gold hover:text-gold">
              <Instagram size={16} />
            </a>
            <a href={SITE.social.youtube} aria-label="YouTube" className="rounded-full border border-cream/20 p-2 hover:border-gold hover:text-gold">
              <Youtube size={16} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-gold">Explore</h3>
          <ul className="space-y-2 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-gold">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0 text-gold" />
              <span>{SITE.address.full}</span>
            </li>
            {SITE.phones.map((p) => (
              <li key={p} className="flex items-center gap-2">
                <Phone size={16} className="shrink-0 text-gold" />
                <a href={`tel:${p}`} className="hover:text-gold">
                  +91 {p}
                </a>
              </li>
            ))}
            {SITE.emails.map((e) => (
              <li key={e} className="flex items-center gap-2">
                <Mail size={16} className="shrink-0 text-gold" />
                <a href={`mailto:${e}`} className="break-all hover:text-gold">
                  {e}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-gold">Recognized By</h3>
          <ul className="space-y-2 text-sm">
            {SITE.recognitions.map((r) => (
              <li key={r} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" /> {r}
              </li>
            ))}
          </ul>
          <Link href="/admissions" className="btn-gold mt-5 w-full">
            Enroll Now
          </Link>
        </div>
      </div>

      <div className="border-t border-cream/10 py-5 text-center text-xs text-cream/50">
        © {new Date().getFullYear()} Sri Natesh Computer Center (SNIT), Mulbagal. All rights reserved.
      </div>
    </footer>
  );
}
