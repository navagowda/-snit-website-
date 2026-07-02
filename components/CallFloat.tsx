import { Phone } from "lucide-react";
import { SITE } from "@/lib/site";

export default function CallFloat() {
  return (
    <a
      href={`tel:${SITE.primaryPhone}`}
      aria-label="Call SNIT now"
      className="fixed bottom-24 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-gold text-navy-900 shadow-gold transition hover:scale-105 md:bottom-28 md:right-8"
    >
      <Phone size={22} />
    </a>
  );
}
