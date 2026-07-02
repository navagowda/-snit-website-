type SealBadgeProps = {
  label: string;
  size?: "sm" | "md" | "lg";
  spin?: boolean;
};

const sizes = {
  sm: "h-16 w-16 text-[7px]",
  md: "h-24 w-24 text-[8px]",
  lg: "h-36 w-36 text-[9px]",
};

/**
 * A rotating gold seal — the site's signature visual element, echoing the
 * SNIT logo's own certification-stamp identity. Used to present the
 * institute's recognitions (RCSS Bangalore, Government of Karnataka, Skill India).
 */
export default function SealBadge({ label, size = "md", spin = true }: SealBadgeProps) {
  return (
    <div className={`relative ${sizes[size]} shrink-0`}>
      <div
        className={`absolute inset-0 rounded-full bg-seal-ring p-[3px] shadow-gold ${
          spin ? "animate-spin-slow" : ""
        }`}
        style={{ animationDuration: "16s" }}
      >
        <div className="h-full w-full rounded-full bg-navy-900" />
      </div>
      <div className="absolute inset-[6px] flex items-center justify-center rounded-full border border-gold/40 bg-navy-900 text-center">
        <span className="px-2 font-mono font-semibold uppercase leading-tight tracking-wider text-gold">
          {label}
        </span>
      </div>
    </div>
  );
}
