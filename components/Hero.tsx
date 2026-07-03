import Link from "next/link";
import Image from "next/image";
import { Phone, MessageCircle, Download, GraduationCap } from "lucide-react";
import { SITE } from "@/lib/site";
import { GALLERY_PHOTOS } from "@/lib/gallery";
import TypingText from "./TypingText";
import Particles from "./Particles";
import SealBadge from "./SealBadge";

const heroLab = GALLERY_PHOTOS.find((p) => p.id === "computer-lab-01")!;
const heroStrip = GALLERY_PHOTOS.filter((p) => ["computer-lab-02", "classroom-01", "building-01"].includes(p.id));

const COURSE_WORDS = [
  "CIT",
  "DCA",
  "ADCA",
  "PGDCA",
  "DTP",
  "Tally with GST",
  "Hardware & Networking",
  "Multimedia & Graphics",
  "Web Designing",
  "Abacus Academy",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-radial text-cream">
      <Particles />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(#F0B429 1px, transparent 1px), linear-gradient(90deg, #F0B429 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />

      <div className="container-snit relative grid gap-14 py-20 md:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="animate-fade-up">
          <span className="eyebrow border border-gold/30 bg-gold/10 rounded-full px-4 py-1.5 text-gold">
            Recognized by RCSS Bangalore · Govt. of Karnataka · Skill India
          </span>

          <h1 className="mt-6 text-balance font-display text-4xl font-semibold leading-[1.1] sm:text-5xl lg:text-6xl">
            Build a career with <span className="text-gold">real computer skills</span>, taught right here in Mulbagal.
          </h1>

          <p className="mt-5 h-8 font-mono text-lg text-gold-light sm:text-xl">
            Enroll in <TypingText words={COURSE_WORDS} />
          </p>

          <p className="mt-5 max-w-xl text-balance text-base leading-relaxed text-cream/70">
            {SITE.tagline} For over 20 years, Sri Natesh Computer Center has trained students and job-seekers of
            Mulbagal in office applications, accounting, programming, hardware and design — with small batches and
            hands-on practice on real machines.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/admissions" className="btn-gold">
              <GraduationCap size={18} /> Enroll Now
            </Link>
            <a href={`tel:${SITE.primaryPhone}`} className="btn-outline">
              <Phone size={18} /> Call Now
            </a>
            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-leaf"
            >
              <MessageCircle size={18} /> WhatsApp Us
            </a>
            <a href="/SNIT-Brochure.pdf" download className="btn-outline">
              <Download size={18} /> Download Brochure
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-6 border-t border-cream/10 pt-8 sm:grid-cols-4">
            {SITE.stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-2xl font-semibold text-gold sm:text-3xl">{s.value}</p>
                <p className="mt-1 text-xs leading-snug text-cream/60">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md animate-float">
          <div className="absolute -top-8 -left-8 hidden sm:block">
            <SealBadge label="Since Est." size="sm" />
          </div>
          {/* Computer lab illustration */}
          <div className="rounded-3xl border border-gold/20 bg-navy-800/70 p-4 shadow-gold backdrop-blur">
            <div className="mb-3 flex items-center justify-between px-2 pt-1">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">SNIT Computer Lab</span>
              <span className="flex gap-1">
                <span className="h-2 w-2 rounded-full bg-leaf" />
                <span className="h-2 w-2 rounded-full bg-gold" />
                <span className="h-2 w-2 rounded-full bg-saffron" />
              </span>
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-gold/20">
              <Image
                src={heroLab.src}
                alt={heroLab.title}
                fill
                sizes="(max-width: 1024px) 90vw, 480px"
                className="object-cover"
                priority
              />
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {heroStrip.map((p) => (
                <div key={p.id} className="relative aspect-square overflow-hidden rounded-lg border border-gold/10">
                  <Image src={p.thumb} alt={p.title} fill sizes="150px" className="object-cover" />
                </div>
              ))}
            </div>
            <p className="mt-4 px-2 pb-1 text-center text-xs text-cream/50">
              Real photos from our lab · one system per student · live guided sessions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
