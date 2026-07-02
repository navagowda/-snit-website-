"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="fixed bottom-6 left-5 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-navy-200 bg-cream text-navy-900 shadow-card transition hover:border-gold hover:text-gold-deep dark:border-navy-600 dark:bg-navy-800 dark:text-cream md:bottom-8 md:left-8"
    >
      <ArrowUp size={18} />
    </button>
  );
}
