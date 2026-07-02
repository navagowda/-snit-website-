import type { Metadata } from "next";
import Section from "@/components/Section";
import TestimonialsSlider from "@/components/TestimonialsSlider";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Read what students and parents say about Sri Natesh Computer Center (SNIT), Mulbagal.",
  alternates: { canonical: "/testimonials" },
};

export default function TestimonialsPage() {
  return (
    <>
      <section className="bg-navy-radial py-20 text-center text-cream">
        <div className="container-snit">
          <span className="eyebrow rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-gold">
            Testimonials
          </span>
          <h1 className="mx-auto mt-5 max-w-3xl text-balance font-display text-4xl font-semibold sm:text-5xl">
            Real stories from SNIT students & parents
          </h1>
        </div>
      </section>

      <Section eyebrow="Testimonials" title="What our students say">
        <TestimonialsSlider />
      </Section>
    </>
  );
}
