import type { Metadata } from "next";
import { Star } from "lucide-react";
import Section from "@/components/Section";
import TestimonialsSlider, { TESTIMONIALS } from "@/components/TestimonialsSlider";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Read what students and parents say about their experience training at Sri Natesh Computer Center (SNIT), Mulbagal — from ADCA and PGDCA graduates to Abacus Academy parents.",
  alternates: { canonical: "/testimonials" },
};

export default function TestimonialsPage() {
  return (
    <>
      <section className="bg-navy-radial py-20 text-center text-cream">
        <div className="container-snit">
          <span className="eyebrow rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-gold">Testimonials</span>
          <h1 className="mx-auto mt-5 max-w-3xl text-balance font-display text-4xl font-semibold sm:text-5xl">
            Real stories from SNIT students & parents
          </h1>
        </div>
      </section>

      <Section eyebrow="Featured" title="In their own words">
        <TestimonialsSlider />
      </Section>

      <Section dark eyebrow="More Reviews" title="What the SNIT community is saying">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="rounded-2xl border border-cream/10 bg-navy-800/60 p-6">
              <div className="mb-3 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className={i < t.rating ? "fill-gold text-gold" : "text-cream/20"} />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-cream/75">“{t.quote}”</p>
              <p className="mt-4 text-sm font-semibold text-cream">{t.name}</p>
              <p className="text-xs text-cream/50">{t.role}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
