import type { Metadata } from "next";
import Section from "@/components/Section";
import Gallery, { type GalleryItem } from "@/components/Gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse photos from Sri Natesh Computer Center (SNIT) — our computer lab, classroom training sessions, Abacus Academy, and certificate distribution events in Mulbagal.",
  alternates: { canonical: "/gallery" },
};

const GALLERY_ITEMS: GalleryItem[] = [
  { id: "g1", category: "Lab", caption: "Computer lab — practical session in progress", gradient: "linear-gradient(135deg,#0B1830,#2C4680)" },
  { id: "g2", category: "Lab", caption: "One system per student, hands-on practice", gradient: "linear-gradient(135deg,#132445,#F0B429)" },
  { id: "g3", category: "Classroom", caption: "DCA batch classroom training", gradient: "linear-gradient(135deg,#D4A017,#0B1830)" },
  { id: "g4", category: "Classroom", caption: "Tally with GST practical class", gradient: "linear-gradient(135deg,#FF9933,#0B1830)" },
  { id: "g5", category: "Events", caption: "Certificate distribution ceremony", gradient: "linear-gradient(135deg,#F0B429,#0F9D58)" },
  { id: "g6", category: "Events", caption: "Annual student achievement day", gradient: "linear-gradient(135deg,#0F9D58,#132445)" },
  { id: "g7", category: "Abacus", caption: "Abacus Academy weekend session", gradient: "linear-gradient(135deg,#0F9D58,#0B1830)" },
  { id: "g8", category: "Abacus", caption: "Mental maths speed round", gradient: "linear-gradient(135deg,#FCD980,#0F9D58)" },
  { id: "g9", category: "Lab", caption: "Web designing project showcase", gradient: "linear-gradient(135deg,#2C4680,#D4A017)" },
  { id: "g10", category: "Classroom", caption: "PGDCA programming session", gradient: "linear-gradient(135deg,#0B1830,#D4A017)" },
  { id: "g11", category: "Events", caption: "Guest session on career guidance", gradient: "linear-gradient(135deg,#132445,#FF9933)" },
  { id: "g12", category: "Abacus", caption: "Young learners with their abacus kits", gradient: "linear-gradient(135deg,#0F9D58,#F0B429)" },
];

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
            Our lab, our classrooms, our events, and our youngest learners at the Abacus Academy.
          </p>
        </div>
      </section>

      <Section>
        <Gallery items={GALLERY_ITEMS} />
        <p className="mt-8 text-center text-xs text-navy-400 dark:text-cream/40">
          Photos shown are illustrative placeholders. Replace with real center photography in{" "}
          <code className="rounded bg-navy-100 px-1.5 py-0.5 dark:bg-navy-800">app/gallery/page.tsx</code>.
        </p>
      </Section>
    </>
  );
}
