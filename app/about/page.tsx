import type { Metadata } from "next";
import { Target, Eye, HeartHandshake, Building2 } from "lucide-react";
import Section from "@/components/Section";
import SealBadge from "@/components/SealBadge";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Sri Natesh Computer Center (SNIT) in Mulbagal — our story, mission, and the recognitions (RCSS Bangalore, Government of Karnataka, Skill India) behind our computer training programs.",
  alternates: { canonical: "/about" },
};

const VALUES = [
  { icon: Target, title: "Our Mission", text: "To make quality, affordable computer and vocational education accessible to every student and job-seeker in Mulbagal and nearby villages." },
  { icon: Eye, title: "Our Vision", text: "To be the most trusted skill-training institute in the region — where learning genuinely changes a student's employability and confidence." },
  { icon: HeartHandshake, title: "Our Approach", text: "Small batches, one computer per student, and trainers who stay until a concept is actually understood — not just covered." },
];

const TIMELINE = [
  { year: "Founded", text: "SNIT opens its doors in Thygaraja Colony, Mulbagal, with a handful of computers and a commitment to hands-on teaching." },
  { year: "Growth", text: "Course offerings expand from basic computer training to full diplomas — DCA, ADCA and PGDCA — alongside Tally, DTP and hardware training." },
  { year: "Recognition", text: "SNIT earns recognition from RCSS Bangalore, the Government of Karnataka, and Skill India, formalizing our certifications." },
  { year: "Today", text: "SNIT has trained thousands of students across computer applications, programming, design and the SNIT Abacus Academy for children." },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-navy-radial py-20 text-center text-cream">
        <div className="container-snit">
          <span className="eyebrow border border-gold/30 bg-gold/10 rounded-full px-4 py-1.5 text-gold">About SNIT</span>
          <h1 className="mx-auto mt-5 max-w-3xl text-balance font-display text-4xl font-semibold sm:text-5xl">
            Learning Never Exhausts the Mind.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-balance text-cream/70">
            Sri Natesh Computer Center (SNIT) is Mulbagal&apos;s dedicated computer training institute — built to give
            every student, regardless of background, a genuine path into IT-enabled careers.
          </p>
        </div>
      </section>

      <Section eyebrow="Our Story" title="A local institute with a serious commitment to skill">
        <div className="mx-auto max-w-3xl space-y-5 text-balance leading-relaxed text-navy-600 dark:text-cream/70">
          <p>
            SNIT was started with a simple observation: talented students in Mulbagal often had to travel long
            distances to get proper, hands-on computer training. Sri Natesh Computer Center was built to close
            that gap — right here in Thygaraja Colony — with real machines, structured courses, and trainers who
            treat every student&apos;s progress personally.
          </p>
          <p>
            Today, SNIT offers a full spectrum of programs: foundational computer literacy, diploma-level courses
            like DCA, ADCA and PGDCA, professional skills such as Tally with GST and DTP, creative and technical
            tracks in multimedia, programming, Python and web designing, and dedicated typing and distance-education
            support. Our SNIT Abacus Academy extends this same hands-on philosophy to children, building focus and
            mental math from an early age.
          </p>
        </div>
      </Section>

      <Section dark eyebrow="What Drives Us" title="Mission, vision & approach">
        <div className="grid gap-6 sm:grid-cols-3">
          {VALUES.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl border border-cream/10 bg-navy-800/60 p-7">
              <Icon className="mb-4 text-gold" size={26} />
              <h3 className="font-display text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-cream/60">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Journey" title="How SNIT has grown">
        <div className="mx-auto max-w-2xl space-y-8 border-l-2 border-gold/30 pl-8">
          {TIMELINE.map((item) => (
            <div key={item.year} className="relative">
              <span className="absolute -left-[38px] top-1 h-3 w-3 rounded-full bg-gold" />
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-gold-deep dark:text-gold">{item.year}</p>
              <p className="mt-1 text-navy-600 dark:text-cream/70">{item.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Recognized By" title="Certifications you can trust">
        <div className="flex flex-wrap items-center justify-center gap-10 rounded-3xl border border-navy-100 bg-white p-10 shadow-card dark:border-navy-700 dark:bg-navy-800">
          {SITE.recognitions.map((r) => (
            <SealBadge key={r} label={r} size="lg" />
          ))}
        </div>
      </Section>

      <Section eyebrow="Visit Us" title="Our center in Mulbagal">
        <div className="mx-auto flex max-w-xl items-start gap-4 rounded-2xl border border-navy-100 bg-white p-6 shadow-card dark:border-navy-700 dark:bg-navy-800">
          <Building2 className="mt-1 shrink-0 text-gold-deep dark:text-gold" size={24} />
          <p className="text-navy-700 dark:text-cream/80">{SITE.address.full}</p>
        </div>
      </Section>
    </>
  );
}
