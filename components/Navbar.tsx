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
      className={`sticky top-0 z-50 border-b border-gold/20 bg-cream/95 transition-all duration-300 backdrop-blur-md dark:bg-cream/95 ${
        scrolled ? "shadow-card" : ""
      }`}
    >
      <div className="container-snit flex min-h-[5.25rem] items-center justify-between py-3">
        <Link href="/" className="flex min-w-0 items-center gap-3 sm:gap-4">
          <Image
            src="/images/logo.png"
            alt="SNIT — Sri Natesh Computer Center logo"
            width={64}
            height={64}
            priority
            className="h-14 w-14 shrink-0 sm:h-16 sm:w-16"
          />
          <div className="min-w-0 leading-tight">
            <p className="font-display text-[1.32rem] font-bold leading-tight text-navy-800 sm:text-3xl lg:text-[2rem]">
              Sri Natesh Computer Center
            </p>
            <p className="mt-1 font-mono text-[9px] font-semibold uppercase tracking-[0.28em] text-leaf sm:text-xs">
              {SITE.tagline}
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-semibold transition-colors hover:text-gold-deep ${
                pathname === link.href ? "text-gold-deep" : "text-navy-700"
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
            className="rounded-full border border-navy-200 bg-white/70 p-2 text-navy-700 transition hover:border-gold hover:text-gold-deep"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a href={`tel:${SITE.primaryPhone}`} className="btn-gold">
            <Phone size={16} /> Call Now
          </a>
        </div>

        <button
          className="p-2 text-navy-800 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu size={30} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-gold/20 bg-cream px-5 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-3 py-3 text-sm font-semibold ${
                  pathname === link.href ? "bg-gold/15 text-gold-deep" : "text-navy-700"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex items-center gap-3">
            <button
              onClick={toggle}
              className="flex items-center gap-2 rounded-full border border-navy-200 bg-white/70 px-4 py-2 text-sm text-navy-700"
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
