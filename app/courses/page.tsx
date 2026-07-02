import type { Metadata } from "next";
import Section from "@/components/Section";
import CourseCard from "@/components/CourseCard";
import { COURSES, CATEGORIES } from "@/lib/courses";

export const metadata: Metadata = {
  title: "Courses",
  description:
    "Explore SNIT's full range of computer courses in Mulbagal — Basic Computer, CIT, DCA, ADCA, PGDCA, DTP, Tally with GST, Hardware, Software, Multimedia, Programming, Python, Web Designing, Typing and more.",
  alternates: { canonical: "/courses" },
};

export default function CoursesPage() {
  return (
    <>
      <section className="bg-navy-radial py-20 text-center text-cream">
        <div className="container-snit">
          <span className="eyebrow border border-gold/30 bg-gold/10 rounded-full px-4 py-1.5 text-gold">
            {COURSES.length}+ Courses
          </span>
          <h1 className="mx-auto mt-5 max-w-3xl text-balance font-display text-4xl font-semibold sm:text-5xl">
            Every course you need for a career in IT
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-balance text-cream/70">
            From two-month foundation programs to full diplomas — each course includes hands-on practice, a
            structured syllabus, and a completion certificate.
          </p>
        </div>
      </section>

      {CATEGORIES.map((category) => (
        <Section key={category} eyebrow="Category" title={category}>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {COURSES.filter((c) => c.category === category).map((course) => (
              <CourseCard key={course.slug} course={course} />
            ))}
          </div>
        </Section>
      ))}
    </>
  );
}
