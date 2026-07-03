"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Moon, Sun, Phone } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/site";
import { useTheme } from "./ThemeProvider";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/95 shadow-card backdrop-blur-md dark:bg-cream/95"
          : "bg-cream/95"
      }`}
    >
      <div className="container-snit flex h-[5rem] items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/images/logo.png" alt="SNIT — Sri Natesh Computer Center logo" width={60} height={60} priority className="h-14 w-14" />
          <div className="leading-tight">
            <p className="font-display text-2xl font-bold text-navy-900 dark:text-navy-900">
              Sri Natesh <span className="text-navy-900 dark:text-navy-900">Computer Center</span>
            </p>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-leaf dark:text-leaf">
              {SITE.tagline}
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-gold-deep dark:hover:text-gold ${
                pathname === link.href
                  ? "text-gold-deep dark:text-gold"
                  : "text-navy-800 dark:text-navy-800"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            onClick={toggle}
            aria-label="Toggle dark mode"
            className="rounded-full border border-navy-200 p-2 text-navy-700 transition hover:border-gold hover:text-gold-deep dark:border-navy-600 dark:text-cream"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a href={`tel:${SITE.primaryPhone}`} className="btn-gold">
            <Phone size={16} /> Call Now
          </a>
        </div>

        <button
          className="p-2 text-navy-900 lg:hidden dark:text-navy-900"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-navy-100 bg-cream px-5 pb-6 pt-2 lg:hidden dark:border-navy-100 dark:bg-cream">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-3 py-3 text-sm font-medium ${
                  pathname === link.href
                    ? "bg-gold/10 text-gold-deep dark:text-gold"
                    : "text-navy-800 dark:text-navy-800"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex items-center gap-3">
            <button
              onClick={toggle}
              className="flex items-center gap-2 rounded-full border border-navy-200 px-4 py-2 text-sm text-navy-700 dark:border-navy-600 dark:text-cream"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />} Theme
            </button>
            <a href={`tel:${SITE.primaryPhone}`} className="btn-gold flex-1">
              <Phone size={16} /> Call Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
