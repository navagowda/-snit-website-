"use client";

import { useState } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { submitEnquiry } from "@/lib/firebase";
import { COURSES } from "@/lib/courses";

type Status = "idle" | "loading" | "success" | "error";

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
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = new FormData(e.currentTarget);
    const result = await submitEnquiry({
      name: String(form.get("name") || ""),
      phone: String(form.get("phone") || ""),
      email: String(form.get("email") || ""),
      course: String(form.get("course") || ""),
      message: String(form.get("message") || ""),
      source,
    });
    if (result.ok) {
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } else {
      setStatus("error");
      setErrorMsg(result.error);
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-leaf/30 bg-leaf/10 p-8 text-center">
        <CheckCircle2 className="text-leaf" size={36} />
        <p className="font-display text-lg font-semibold text-navy-900 dark:text-cream">Enquiry received!</p>
        <p className="text-sm text-navy-600 dark:text-cream/70">
          Thank you — our team will call you shortly. For an immediate response, feel free to call or WhatsApp us.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`grid gap-4 ${compact ? "" : "sm:grid-cols-2"}`}>
      <div className={compact ? "" : "sm:col-span-1"}>
        <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-navy-500 dark:text-cream/60">
          Full Name *
        </label>
        <input
          required
          name="name"
          placeholder="Your name"
          className="w-full rounded-lg border border-navy-200 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-gold dark:border-navy-600 dark:bg-navy-800 dark:text-cream"
        />
      </div>
      <div>
        <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-navy-500 dark:text-cream/60">
          Phone Number *
        </label>
        <input
          required
          name="phone"
          type="tel"
          pattern="[0-9]{10}"
          placeholder="10-digit mobile number"
          className="w-full rounded-lg border border-navy-200 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-gold dark:border-navy-600 dark:bg-navy-800 dark:text-cream"
        />
      </div>
      <div>
        <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-navy-500 dark:text-cream/60">
          Email
        </label>
        <input
          name="email"
          type="email"
          placeholder="you@example.com"
          className="w-full rounded-lg border border-navy-200 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-gold dark:border-navy-600 dark:bg-navy-800 dark:text-cream"
        />
      </div>
      <div>
        <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-navy-500 dark:text-cream/60">
          Course Interested In
        </label>
        <select
          name="course"
          defaultValue={presetCourse || ""}
          className="w-full rounded-lg border border-navy-200 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-gold dark:border-navy-600 dark:bg-navy-800 dark:text-cream"
        >
          <option value="">Select a course</option>
          {COURSES.map((c) => (
            <option key={c.slug} value={c.name}>
              {c.name}
            </option>
          ))}
          <option value="Abacus Academy">Abacus Academy</option>
          <option value="Not sure yet">Not sure yet — please advise</option>
        </select>
      </div>
      <div className={compact ? "" : "sm:col-span-2"}>
        <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-navy-500 dark:text-cream/60">
          Message
        </label>
        <textarea
          name="message"
          rows={3}
          placeholder="Tell us about your goals or ask a question"
          className="w-full resize-none rounded-lg border border-navy-200 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-gold dark:border-navy-600 dark:bg-navy-800 dark:text-cream"
        />
      </div>

      {status === "error" && (
        <div className={`${compact ? "" : "sm:col-span-2"} flex items-start gap-2 rounded-lg bg-red-50 p-3 text-sm text-red-700 dark:bg-red-900/20 dark:text-red-300`}>
          <AlertCircle size={16} className="mt-0.5 shrink-0" /> {errorMsg}
        </div>
      )}

      <button type="submit" disabled={status === "loading"} className={`btn-gold ${compact ? "" : "sm:col-span-2"} disabled:opacity-70`}>
        {status === "loading" ? <Loader2 size={16} className="animate-spin" /> : null}
        {status === "loading" ? "Sending..." : "Submit Enquiry"}
      </button>
    </form>
  );
}
