import type { Metadata } from "next";
import Section from "@/components/Section";
import Gallery from "@/components/Gallery";
import { GALLERY_PHOTOS } from "@/lib/gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse real photos from Sri Natesh Computer Center (SNIT) — our building, computer lab, classroom training sessions, students, Abacus Academy, events and certificate distributions in Mulbagal.",
  alternates: { canonical: "/gallery" },
};

// Founder photos have a dedicated section on the homepage, so they're
// excluded from the general gallery grid to avoid duplication.
const PHOTOS = GALLERY_PHOTOS.filter((p) => p.category !== "Founder");

export default function GalleryPage() {
  return (
    <>
      <section className="bg-navy-radial py-20 text-center text-cream">
        <div className="container-snit">
          <span className="eyebrow rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-gold">Gallery</span>
          <h1 className="mx-auto mt-5 max-w-3xl text-balance font-display text-4xl font-semibold sm:text-5xl">
            A glimpse into life at SNIT
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-balance text-cream/70">
            Our building, our lab, our classrooms, our students, our events, and our youngest learners at the
            Abacus Academy — {PHOTOS.length} photos and counting.
          </p>
        </div>
      </section>

      <Section>
        <Gallery items={PHOTOS} />
      </Section>
    </>
  );
}
