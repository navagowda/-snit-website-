import type { Metadata } from "next";
import { FileText, PhoneCall, ClipboardCheck, GraduationCap, Download } from "lucide-react";
import Section from "@/components/Section";
import EnquiryForm from "@/components/EnquiryForm";
import FAQ from "@/components/FAQ";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Admissions",
  description:
    "Admissions are open at Sri Natesh Computer Center (SNIT), Mulbagal. Learn about our simple 4-step admission process, required documents, batch timings and how to enroll.",
  alternates: { canonical: "/admissions" },
};

const STEPS = [
  { icon: PhoneCall, title: "Enquire", text: "Call, WhatsApp, or fill our enquiry form to tell us your goals and preferred course." },
  { icon: ClipboardCheck, title: "Counselling", text: "Our team helps you choose the right course and batch timing for your background." },
  { icon: FileText, title: "Documentation", text: "Submit basic ID proof, passport-size photos, and your latest academic marks card." },
  { icon: GraduationCap, title: "Start Learning", text: "Join your batch, get your login/lab seat, and begin hands-on training from day one." },
];

const DOCS = [
  "Aadhaar Card or valid Photo ID",
  "2 Passport-size photographs",
  "Latest marks card / academic certificate",
  "Course fee (or first installment)",
];

const ADMISSION_FAQ = [
  { q: "When can I join — is there a fixed intake date?", a: "Admissions are open throughout the year with rolling batches. You can join the next available batch as soon as your documents are complete." },
  { q: "What are the available batch timings?", a: "We run morning, afternoon and evening batches on weekdays, plus weekend batches for select courses including Abacus. Exact timings are confirmed during counselling." },
  { q: "Is there an entrance test?", a: "No entrance test is required for most courses. A short discussion helps us place you in the right starting level." },
  { q: "Do you offer fee installments?", a: "Yes, most diploma courses (ADCA, PGDCA) support installment plans. Ask our admissions desk for the current schedule." },
];

export default function AdmissionsPage() {
  return (
    <>
      <section className="bg-navy-radial py-20 text-center text-cream">
        <div className="container-snit">
          <span className="eyebrow rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-gold">Admissions Open</span>
          <h1 className="mx-auto mt-5 max-w-3xl text-balance font-display text-4xl font-semibold sm:text-5xl">
            Reserve your seat at SNIT today
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-balance text-cream/70">
            A simple, four-step process gets you from enquiry to your first day of class — no long paperwork, no waiting lists.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a href={`tel:${SITE.primaryPhone}`} className="btn-gold">Call {SITE.primaryPhone}</a>
            <a href="/SNIT-Brochure.pdf" download className="btn-outline">
              <Download size={16} /> Download Brochure
            </a>
          </div>
        </div>
      </section>

      <Section eyebrow="Process" title="How admission works">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map(({ icon: Icon, title, text }, i) => (
            <div key={title} className="relative rounded-2xl border border-navy-100 bg-white p-6 shadow-card dark:border-navy-700 dark:bg-navy-800">
              <span className="font-mono text-xs text-navy-300 dark:text-cream/30">Step {i + 1}</span>
              <Icon className="my-3 text-gold-deep dark:text-gold" size={28} />
              <h3 className="font-display text-lg font-semibold text-navy-900 dark:text-cream">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-600 dark:text-cream/70">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section dark eyebrow="Documents Needed" title="What to bring on admission day">
        <ul className="mx-auto grid max-w-2xl gap-4 sm:grid-cols-2">
          {DOCS.map((d) => (
            <li key={d} className="flex items-start gap-3 rounded-xl border border-cream/10 bg-navy-800/60 p-4 text-sm text-cream/80">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" /> {d}
            </li>
          ))}
        </ul>
      </Section>

      <Section eyebrow="Get Started" title="Submit your admission enquiry" description="Fill this form and our admissions team will call you within one business day.">
        <div className="mx-auto max-w-2xl card p-8">
          <EnquiryForm source="admissions-page" />
        </div>
      </Section>

      <Section eyebrow="FAQ" title="Admissions questions">
        <FAQ items={ADMISSION_FAQ} />
      </Section>
    </>
  );
}
