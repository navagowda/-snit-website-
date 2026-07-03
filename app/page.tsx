import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  Laptop, Award, Users, BookOpenCheck, ArrowRight, Sparkles, ShieldCheck, Clock,
} from "lucide-react";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import CourseCard from "@/components/CourseCard";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import FAQ from "@/components/FAQ";
import { COURSES } from "@/lib/courses";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Home",
  description: SITE.description,
  alternates: { canonical: "/" },
};

const WHY_US = [
  { icon: Laptop, title: "One System Per Student", text: "Hands-on practice on real machines — never crowd around a shared screen." },
  { icon: Award, title: "Government Recognized", text: "Certifications backed by RCSS Bangalore, Govt. of Karnataka & Skill India." },
  { icon: Users, title: "Small Batch Sizes", text: "Personal attention from experienced trainers, at a pace that suits you." },
  { icon: BookOpenCheck, title: "Job-Ready Curriculum", text: "Courses designed around what local employers and exams actually require." },
];

const FAQ_ITEMS = [
  { q: "What is the minimum qualification to join a course?", a: "Most courses accept students who have completed SSLC or above. Basic Computer and typing courses are open to all ages. Our team can guide you to the right course based on your background." },
  { q: "Do you provide certificates?", a: "Yes — every course concludes with an assessment and a course-completion certificate, and several programs are recognized by RCSS Bangalore, the Government of Karnataka, and Skill India." },
  { q: "Are timings flexible for working students?", a: "Yes, we run morning, afternoon and evening batches, along with weekend-only batches for Abacus and other short courses." },
  { q: "Can I pay course fees in installments?", a: "Yes, flexible installment plans are available for most diploma courses. Speak to our admissions desk for details specific to your chosen course." },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* About preview */}
      <Section eyebrow="About SNIT" title="A trusted computer education institute in Mulbagal">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-balance leading-relaxed text-navy-600 dark:text-cream/70">
              Since our founding, Sri Natesh Computer Center has stood for one idea captured in our motto —
              <span className="font-semibold text-navy-900 dark:text-cream"> “Learning Never Exhausts the Mind.”</span>{" "}
              We built SNIT to bring quality, affordable computer education to students, job-seekers and
              professionals of Mulbagal and the surrounding villages, without needing to travel to the city.
            </p>
            <p className="mt-4 text-balance leading-relaxed text-navy-600 dark:text-cream/70">
              From absolute beginners taking their first Basic Computer course, to graduates pursuing PGDCA, to
              children building focus through our Abacus Academy — every learner gets hands-on practice, patient
              mentorship, and a certificate that means something to employers.
            </p>
            <Link href="/about" className="btn-navy mt-6 inline-flex">
              Learn Our Story <ArrowRight size={16} />
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center gap-5 rounded-3xl border border-navy-100 bg-white p-10 text-center shadow-card dark:border-navy-700 dark:bg-navy-800">
            <Image src="/images/rcss-logo.png" alt="The RCSS Bangalore — Rastriya Computer Saksharatha Samithi" width={160} height={195} className="h-40 w-auto" />
            <p className="max-w-xs text-sm text-navy-500 dark:text-cream/60">
              Recognized by <span className="font-semibold text-navy-800 dark:text-cream">RCSS Bangalore</span>,
              Government of Karnataka &amp; Skill India
            </p>
          </div>
        </div>
      </Section>

      {/* Why choose us */}
      <Section dark eyebrow="Why SNIT" title="Training built around the way people actually learn">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_US.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl border border-cream/10 bg-navy-800/60 p-6">
              <Icon className="mb-4 text-gold" size={28} />
              <h3 className="font-display text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-cream/60">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Courses preview */}
      <Section
        eyebrow="Courses"
        title="Programs for every stage of your career"
        description="From two-month foundation courses to full diplomas — explore our most popular programs below."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {COURSES.slice(0, 6).map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/courses" className="btn-gold">
            View All 20+ Courses <ArrowRight size={16} />
          </Link>
        </div>
      </Section>

      {/* Abacus banner */}
      <section className="bg-gradient-to-br from-leaf/90 to-leaf py-16 text-white">
        <div className="container-snit flex flex-col items-center justify-between gap-8 lg:flex-row">
          <div className="max-w-xl text-center lg:text-left">
            <span className="eyebrow text-white/80">SNIT Abacus Academy</span>
            <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">
              Sharper focus. Stronger memory. Confident kids.
            </h2>
            <p className="mt-3 text-white/85">
              Weekend batches for children — Saturdays 5:30–7:00 PM and Sundays 10:30 AM–12:30 PM.
            </p>
          </div>
          <div className="flex gap-3">
            <Link href="/abacus-academy" className="btn-gold">
              Explore Abacus Academy <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Section eyebrow="Testimonials" title="What our students and parents say">
        <TestimonialsSlider />
      </Section>

      {/* Trust strip */}
      <Section className="!py-10">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-navy-500 dark:text-cream/60">
          <span className="flex items-center gap-2 text-sm"><ShieldCheck size={18} className="text-gold-deep dark:text-gold" /> RCSS Bangalore Recognized</span>
          <span className="flex items-center gap-2 text-sm"><Award size={18} className="text-gold-deep dark:text-gold" /> Govt. of Karnataka Recognized</span>
          <span className="flex items-center gap-2 text-sm"><Sparkles size={18} className="text-gold-deep dark:text-gold" /> Skill India Recognized</span>
          <span className="flex items-center gap-2 text-sm"><Clock size={18} className="text-gold-deep dark:text-gold" /> 20+ Years Serving Mulbagal</span>
        </div>
      </Section>

      {/* FAQ */}
      <Section eyebrow="FAQ" title="Common questions from new students">
        <FAQ items={FAQ_ITEMS} />
      </Section>


      {/* Founder */}
      <Section eyebrow="Founder & Director" title="Guiding SNIT with practical computer education">
        <div className="grid items-center gap-10 rounded-3xl border border-gold/30 bg-cream p-8 shadow-card dark:border-gold/20 dark:bg-navy-900 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="mx-auto w-full max-w-md overflow-hidden rounded-3xl border-4 border-gold bg-cream shadow-gold">
            <Image
              src="/images/founder-natesh-gowda.jpg"
              alt="Mr. Natesh Gowda, Founder and Director of Sri Natesh Computer Center"
              width={1000}
              height={750}
              className="h-full w-full object-cover"
              priority={false}
            />
          </div>
          <div>
            <p className="eyebrow text-gold-deep dark:text-gold">Sri Natesh Computer Center</p>
            <h3 className="mt-3 font-display text-3xl font-semibold text-navy-900 dark:text-cream sm:text-4xl">
              Mr. Natesh Gowda
            </h3>
            <p className="mt-2 font-semibold text-navy-600 dark:text-cream/70">
              Founder & Director
            </p>
            <p className="mt-5 text-balance leading-relaxed text-navy-600 dark:text-cream/70">
              With a commitment to quality education, practical learning and student success, Mr. Natesh Gowda has helped SNIT become a trusted computer training institute in Mulbagal for 20+ years.
            </p>
            <p className="mt-4 text-balance leading-relaxed text-navy-600 dark:text-cream/70">
              The institute focuses on affordable computer education, hands-on training, career-ready skills and personal guidance for students, job seekers and working professionals.
            </p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <section className="bg-navy-radial py-16 text-center text-cream">
        <div className="container-snit">
          <h2 className="mx-auto max-w-2xl text-balance font-display text-3xl font-semibold sm:text-4xl">
            Admissions are open — reserve your seat today
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-cream/70">
            Walk in, call, or send us a WhatsApp message. Our team will help you pick the right course for your goals.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link href="/admissions" className="btn-gold">Enroll Now</Link>
            <a href={`tel:${SITE.primaryPhone}`} className="btn-outline">Call {SITE.primaryPhone}</a>
          </div>
        </div>
      </section>
    </>
  );
}
