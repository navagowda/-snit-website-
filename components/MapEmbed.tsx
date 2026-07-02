import { SITE } from "@/lib/site";

export default function MapEmbed() {
  return (
    <div className="overflow-hidden rounded-2xl border border-navy-100 shadow-card dark:border-navy-700">
      <iframe
        title="SNIT — Sri Natesh Computer Center location on Google Maps"
        src={SITE.mapEmbedSrc}
        width="100%"
        height="360"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
