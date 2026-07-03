"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { GalleryPhoto } from "@/lib/gallery";

export default function Gallery({
  items,
  showTabs = true,
}: {
  items: GalleryPhoto[];
  showTabs?: boolean;
}) {
  const categories = useMemo(() => ["All", ...Array.from(new Set(items.map((i) => i.category)))], [items]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () => (activeCategory === "All" ? items : items.filter((i) => i.category === activeCategory)),
    [items, activeCategory]
  );

  const close = () => setActiveIndex(null);
  const prev = () => setActiveIndex((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length));
  const next = () => setActiveIndex((i) => (i === null ? null : (i + 1) % filtered.length));

  useEffect(() => {
    if (activeIndex === null) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex, filtered.length]);

  return (
    <>
      {showTabs && (
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActiveCategory(c)}
              className={`rounded-full border px-4 py-1.5 text-xs font-medium uppercase tracking-wide transition ${
                activeCategory === c
                  ? "border-gold bg-gold text-navy-900"
                  : "border-navy-200 text-navy-600 hover:border-gold hover:text-gold-deep dark:border-navy-600 dark:text-cream/70 dark:hover:text-gold"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      )}

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {filtered.map((item, i) => (
          <button
            key={item.id}
            onClick={() => setActiveIndex(i)}
            className="group relative aspect-square overflow-hidden rounded-xl bg-navy-100 dark:bg-navy-800"
          >
            <Image
              src={item.thumb}
              alt={item.title}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover transition duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-navy-950/0 transition group-hover:bg-navy-950/40" />
            <span className="absolute bottom-0 left-0 right-0 translate-y-full bg-navy-950/70 px-3 py-2 text-left text-xs text-cream transition group-hover:translate-y-0">
              {item.title}
            </span>
          </button>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="py-10 text-center text-sm text-navy-400 dark:text-cream/40">No photos in this category yet.</p>
      )}

      {activeIndex !== null && filtered[activeIndex] && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-navy-950/90 p-4"
          role="dialog"
          aria-modal="true"
        >
          <button onClick={close} aria-label="Close gallery" className="absolute right-5 top-5 text-cream hover:text-gold">
            <X size={28} />
          </button>
          <button onClick={prev} aria-label="Previous image" className="absolute left-2 text-cream hover:text-gold sm:left-8">
            <ChevronLeft size={32} />
          </button>
          <div className="w-full max-w-3xl">
            <div className="relative mx-auto aspect-[4/3] w-full max-h-[75vh] overflow-hidden rounded-2xl">
              <Image
                src={filtered[activeIndex].src}
                alt={filtered[activeIndex].title}
                fill
                sizes="90vw"
                className="object-contain"
                priority
              />
            </div>
            <p className="mt-4 text-center text-sm text-cream/80">{filtered[activeIndex].title}</p>
          </div>
          <button onClick={next} aria-label="Next image" className="absolute right-2 text-cream hover:text-gold sm:right-8">
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </>
  );
}
