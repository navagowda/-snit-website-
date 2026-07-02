"use client";

import { useEffect, useState } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  rating: number;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Deepa R.",
    role: "ADCA Graduate, now Office Assistant",
    quote:
      "The trainers at SNIT explained every topic patiently and let us practice on real systems. I got placed in an office job within a month of finishing ADCA.",
    rating: 5,
  },
  {
    name: "Manjunath K.",
    role: "Tally with GST Student",
    quote:
      "I run a small shop and needed to understand GST billing. The Tally course was very practical — I was creating real invoices by the second week.",
    rating: 5,
  },
  {
    name: "Sowmya N.",
    role: "Parent of Abacus Student",
    quote:
      "My daughter's concentration and mental maths have improved so much since joining the Abacus Academy. The weekend batch timing is very convenient for us.",
    rating: 5,
  },
  {
    name: "Praveen S.",
    role: "PGDCA Graduate",
    quote:
      "Coming from a non-computer background, PGDCA at SNIT gave me the confidence to work with databases and office applications. Highly recommend the faculty here.",
    rating: 4,
  },
  {
    name: "Ashwini T.",
    role: "Web Designing Student",
    quote:
      "I built my very first website by the end of the course. The step-by-step teaching style at SNIT makes even coding feel approachable.",
    rating: 5,
  },
];

export default function TestimonialsSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % TESTIMONIALS.length), 6000);
    return () => clearInterval(t);
  }, []);

  const t = TESTIMONIALS[index];

  return (
    <div className="mx-auto max-w-2xl">
      <div className="card relative p-8 sm:p-10">
        <Quote className="mb-4 text-gold" size={32} />
        <p className="text-balance font-display text-lg leading-relaxed text-navy-800 dark:text-cream sm:text-xl">
          “{t.quote}”
        </p>
        <div className="mt-6 flex items-center justify-between">
          <div>
            <p className="font-semibold text-navy-900 dark:text-cream">{t.name}</p>
            <p className="text-sm text-navy-500 dark:text-cream/60">{t.role}</p>
          </div>
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={16} className={i < t.rating ? "fill-gold text-gold" : "text-navy-200"} />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          onClick={() => setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
          aria-label="Previous testimonial"
          className="rounded-full border border-navy-200 p-2 hover:border-gold dark:border-navy-600"
        >
          <ChevronLeft size={18} />
        </button>
        <div className="flex gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-2 w-2 rounded-full transition ${i === index ? "w-6 bg-gold" : "bg-navy-200 dark:bg-navy-600"}`}
            />
          ))}
        </div>
        <button
          onClick={() => setIndex((i) => (i + 1) % TESTIMONIALS.length)}
          aria-label="Next testimonial"
          className="rounded-full border border-navy-200 p-2 hover:border-gold dark:border-navy-600"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
