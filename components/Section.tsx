import type { ReactNode } from "react";

export default function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
  dark = false,
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children?: ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <section
      id={id}
      className={`py-16 sm:py-20 ${dark ? "bg-navy-900 text-cream" : ""} ${className}`}
    >
      <div className="container-snit">
        {(eyebrow || title) && (
          <div className="mx-auto mb-12 max-w-2xl text-center">
            {eyebrow && <span className="section-label">{eyebrow}</span>}
            {title && (
              <h2 className="text-balance font-display text-3xl font-semibold sm:text-4xl">{title}</h2>
            )}
            {description && (
              <p className={`mt-4 text-balance ${dark ? "text-cream/70" : "text-navy-600 dark:text-cream/70"}`}>
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
