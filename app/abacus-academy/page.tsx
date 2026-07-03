import type { Metadata } from "next";
import Link from "next/link";
import { Brain, Sparkles, ShieldCheck, Calculator, Calendar, Clock } from "lucide-react";
import Section from "@/components/Section";
import Gallery from "@/components/Gallery";
import EnquiryForm from "@/components/EnquiryForm";
import { SITE } from "@/lib/site";
import { GALLERY_PHOTOS } from "@/lib/gallery";

export const metadata: Metadata = {
  title: "Abacus Academy",
  description:
    "SNIT Abacus Academy in Mulbagal builds concentration, memory and mental maths in children through structured weekend abacus classes — Saturdays 5:30–7:00 PM and Sundays 10:30 AM–12:30 PM.",
  alternates: { canonical: "/abacus-academy" },
};

const BENEFITS = [
  { icon: Brain, title: "Improves Concentration", text: "Structured bead exercises train children to focus deeply on one task at a time." },
  { icon: Sparkles, title: "Enhances Memory", text: "Visualizing the abacus in the mind strengthens photographic and working memory." },
  { icon: ShieldCheck, title: "Boosts Confidence", text: "Mastering quick calculations in front of peers builds real, lasting self-belief." },
  { icon: Calculator, title: "Mental Maths Mastery", text: "Children learn to add, subtract, multiply and divide rapidly — without a calculator." },
];

const SCHEDULE = [
  { day: "Saturday", time: "5:30 PM – 7:00 PM" },
  { day: "Sunday", time: "10:30 AM – 12:30 PM" },
];

const ABACUS_PHOTOS = GALLERY_PHOTOS.filter((p) => p.category === "Abacus");

export default function AbacusAcademyPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-leaf via-leaf to-navy-900 py-20 text-white">
        <div className="container-snit relative grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="eyebrow rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-white">
              SNIT Abacus Academy
            </span>
            <h1 className="mt-5 text-balance font-display text-4xl font-semibold leading-tight sm:text-5xl">
              Give your child a sharper, calmer, more confident mind.
            </h1>
            <p className="mt-4 max-w-lg text-balance text-white/85">
              Our Abacus Academy uses proven bead-and-visualization techniques to build concentration, memory and
              mental math skills in children — in fun, structured weekend sessions.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="#enroll" className="btn-gold">Enroll Your Child</Link>
              <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn-outline">
                Ask a Question on WhatsApp
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur">
            <div className="flex items-center gap-2 text-white/80">
              <Calendar size={18} /> <span className="font-mono text-xs uppercase tracking-[0.25em]">Weekend Batches</span>
            </div>
            <div className="mt-5 space-y-4">
              {SCHEDULE.map((s) => (
                <div key={s.day} className="flex items-center justify-between rounded-xl bg-white/10 px-5 py-4">
                  <span className="font-display text-lg font-semibold">{s.day}</span>
                  <span className="flex items-center gap-2 text-sm text-white/85">
                    <Clock size={15} /> {s.time}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-white/60">Age groups: 5 to 13 years · Level-based curriculum</p>
          </div>
        </div>
      </section>

      <Section eyebrow="Why Abacus" title="Real cognitive benefits, not just calculation speed">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map(({ icon: Icon, title, text }) => (
            <div key={title} className="card p-6">
              <Icon className="mb-4 text-leaf" size={28} />
              <h3 className="font-display text-lg font-semibold text-navy-900 dark:text-cream">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-600 dark:text-cream/70">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      <section className="bg-navy-900 py-16 text-cream">
        <div className="container-snit text-center">
          <span className="section-label">Structured Program</span>
          <h2 className="mx-auto max-w-xl text-balance font-display text-3xl font-semibold sm:text-4xl">
            Level-based curriculum that grows with your child
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-cream/70">
            Children progress through structured levels, each building on the last — from basic bead recognition
            to advanced mental calculation, with regular assessments and friendly in-class competitions.
          </p>
        </div>
      </section>

      <Section eyebrow="Student Gallery" title="Moments from our Abacus Academy">
        <Gallery items={ABACUS_PHOTOS} showTabs={false} />
      </Section>

      <Section id="enroll" eyebrow="Admissions" title="Enroll your child in the SNIT Abacus Academy">
        <div className="mx-auto max-w-2xl card p-8">
          <EnquiryForm source="abacus-page" presetCourse="Abacus Academy" />
        </div>
      </Section>
    </>
  );
}
