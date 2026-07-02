"use client";

import { useState } from "react";
import { Clock, X, CheckCircle2, GraduationCap } from "lucide-react";
import type { Course } from "@/lib/courses";
import EnquiryForm from "./EnquiryForm";

export default function CourseCard({ course }: { course: Course }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="card flex h-full flex-col p-6 transition hover:-translate-y-1 hover:shadow-gold">
        <span className="section-label">{course.category}</span>
        <h3 className="font-display text-xl font-semibold text-navy-900 dark:text-cream">{course.name}</h3>
        <p className="mt-2 flex items-center gap-1.5 text-xs text-navy-500 dark:text-cream/60">
          <Clock size={14} /> {course.duration}
        </p>
        <p className="mt-1 flex items-center gap-1.5 text-xs text-navy-500 dark:text-cream/60">
          <GraduationCap size={14} /> Eligibility: {course.eligibility}
        </p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-600 dark:text-cream/70">{course.summary}</p>
        <ul className="mt-4 space-y-1.5">
          {course.highlights.slice(0, 3).map((h) => (
            <li key={h} className="flex items-center gap-2 text-xs text-navy-600 dark:text-cream/70">
              <CheckCircle2 size={13} className="shrink-0 text-leaf" /> {h}
            </li>
          ))}
        </ul>
        <button onClick={() => setOpen(true)} className="btn-navy mt-6 w-full">
          Enquire About This Course
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-navy-950/70 p-4" role="dialog" aria-modal="true">
          <div className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-cream p-7 dark:bg-navy-800">
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute right-4 top-4 rounded-full p-1.5 text-navy-500 hover:bg-navy-100 dark:text-cream/70 dark:hover:bg-navy-700"
            >
              <X size={20} />
            </button>
            <span className="section-label">{course.category}</span>
            <h3 className="font-display text-2xl font-semibold text-navy-900 dark:text-cream">{course.name}</h3>
            <p className="mt-2 text-sm text-navy-600 dark:text-cream/70">{course.summary}</p>
            <div className="mt-6">
              <EnquiryForm source="course-popup" compact presetCourse={course.name} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
