"use client";

import { useState } from "react";
import { X, ChevronLeft, ChevronRight, ImageIcon } from "lucide-react";

export type GalleryItem = {
  id: string;
  category: string;
  caption: string;
  gradient: string;
};

export default function Gallery({ items }: { items: GalleryItem[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = () => setActiveIndex(null);
  const prev = () => setActiveIndex((i) => (i === null ? null : (i - 1 + items.length) % items.length));
  const next = () => setActiveIndex((i) => (i === null ? null : (i + 1) % items.length));

  return (
    <>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {items.map((item, i) => (
          <button
            key={item.id}
            onClick={() => setActiveIndex(i)}
            className="group relative aspect-square overflow-hidden rounded-xl"
          >
            <div className="absolute inset-0 transition duration-300 group-hover:scale-110" style={{ background: item.gradient }} />
            <div className="absolute inset-0 bg-navy-950/0 transition group-hover:bg-navy-950/40" />
            <ImageIcon
              size={22}
              className="absolute right-2 top-2 text-cream/0 transition group-hover:text-cream/80"
            />
            <span className="absolute bottom-0 left-0 right-0 translate-y-full bg-navy-950/70 px-3 py-2 text-left text-xs text-cream transition group-hover:translate-y-0">
              {item.caption}
            </span>
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-navy-950/90 p-4"
          role="dialog"
          aria-modal="true"
        >
          <button onClick={close} aria-label="Close gallery" className="absolute right-5 top-5 text-cream hover:text-gold">
            <X size={28} />
          </button>
          <button onClick={prev} aria-label="Previous image" className="absolute left-4 text-cream hover:text-gold sm:left-8">
            <ChevronLeft size={32} />
          </button>
          <div className="w-full max-w-2xl">
            <div
              className="aspect-video w-full rounded-2xl"
              style={{ background: items[activeIndex].gradient }}
            />
            <p className="mt-4 text-center text-sm text-cream/80">{items[activeIndex].caption}</p>
          </div>
          <button onClick={next} aria-label="Next image" className="absolute right-4 text-cream hover:text-gold sm:right-8">
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </>
  );
}
