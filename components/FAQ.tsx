"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export type FaqItem = { q: string; a: string };

export default function FAQ({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl divide-y divide-navy-100 dark:divide-navy-700">
      {items.map((item, i) => (
        <div key={item.q} className="py-4">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between gap-4 text-left"
            aria-expanded={open === i}
          >
            <span className="font-medium text-navy-900 dark:text-cream">{item.q}</span>
            <ChevronDown
              size={18}
              className={`shrink-0 text-gold-deep transition-transform dark:text-gold ${open === i ? "rotate-180" : ""}`}
            />
          </button>
          {open === i && (
            <p className="mt-3 text-sm leading-relaxed text-navy-600 dark:text-cream/70">{item.a}</p>
          )}
        </div>
      ))}
    </div>
  );
}
