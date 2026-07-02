"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";
import { COURSES } from "@/lib/courses";

type Status = "idle" | "loading";

export default function EnquiryForm({
  source,
  compact = false,
  presetCourse,
}: {
  source: string;
  compact?: boolean;
  presetCourse?: string;
}) {
  const [status, setStatus] = useState<Status>("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = new FormData(e.currentTarget);

    const name = String(form.get("name") || "");
    const phone = String(form.get("phone") || "");
    const email = String(form.get("email") || "");
    const course = String(form.get("course") || "");
    const message = String(form.get("message") || "");

    const whatsappMessage = `New SNIT Enquiry%0A%0AName: ${name}%0APhone: ${phone}%0AEmail: ${email}%0ACourse: ${course}%0AMessage: ${message}%0ASource: ${source}`;

    window.open(`https://wa.me/919739266491?text=${whatsappMessage}`, "_blank");

    setStatus("idle");
  }

  return (
    <form onSubmit={handleSubmit} className={`grid gap-4 ${compact ? "" : "sm:grid-cols-2"}`}>
      <div>
        <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-navy-500 dark:text-cream/60">
          Full Name *
        </label>
        <input required name="name" placeholder="Your name" className="w-full rounded-lg border border-navy-200 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-gold dark:border-navy-600 dark:bg-navy-800 dark:text-cream" />
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-navy-500 dark:text-cream/60">
          Phone Number *
        </label>
        <input required name="phone" type="tel" placeholder="10-digit mobile number" className="w-full rounded-lg border border-navy-200 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-gold dark:border-navy-600 dark:bg-navy-800 dark:text-cream" />
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-navy-500 dark:text-cream/60">
          Email
        </label>
        <input name="email" type="email" placeholder="you@example.com" className="w-full rounded-lg border border-navy-200 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-gold dark:border-navy-600 dark:bg-navy-800 dark:text-cream" />
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-navy-500 dark:text-cream/60">
          Course Interested In
        </label>
        <select name="course" defaultValue={presetCourse || ""} className="w-full rounded-lg border border-navy-200 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-gold dark:border-navy-600 dark:bg-navy-800 dark:text-cream">
          <option value="">Select a course</option>
          {COURSES.map((c) => (
            <option key={c.slug} value={c.name}>{c.name}</option>
          ))}
          <option value="Abacus Academy">Abacus Academy</option>
          <option value="Not sure yet">Not sure yet — please advise</option>
        </select>
      </div>

      <div className={compact ? "" : "sm:col-span-2"}>
        <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-navy-500 dark:text-cream/60">
          Message
        </label>
        <textarea name="message" rows={3} placeholder="Tell us about your goals or ask a question" className="w-full resize-none rounded-lg border border-navy-200 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-gold dark:border-navy-600 dark:bg-navy-800 dark:text-cream" />
      </div>

      <button type="submit" disabled={status === "loading"} className={`btn-gold ${compact ? "" : "sm:col-span-2"} disabled:opacity-70`}>
        {status === "loading" ? <Loader2 size={16} className="animate-spin" /> : null}
        {status === "loading" ? "Opening WhatsApp..." : "Submit Enquiry on WhatsApp"}
      </button>
    </form>
  );
}
