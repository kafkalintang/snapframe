"use client";

import { useEffect, useState } from "react";
import { Camera, LogIn, Menu, X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6">
      <nav
        aria-label="Navigasi utama"
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl border px-4 py-2.5 transition-all duration-300 ${
          scrolled || open
            ? "border-white/60 bg-white/80 shadow-lg shadow-brand-900/10 backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <a href="#" className="flex items-center gap-2.5 font-display text-lg font-extrabold text-brand-950">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 text-white shadow-glow">
            <Camera size={18} />
          </span>
          {SITE.name}
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-lg px-3.5 py-2 text-sm font-semibold text-brand-900/75 transition hover:bg-brand-100 hover:text-brand-700"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="/login"
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-b from-brand-500 to-brand-700 px-4 py-2.5 text-sm font-bold text-white shadow-glow transition hover:-translate-y-0.5 hover:from-brand-400"
          >
            <LogIn size={16} className="transition group-hover:translate-x-0.5" />
            Login
          </a>
          <button
            type="button"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-xl text-brand-900 transition hover:bg-brand-100 md:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="mx-auto mt-2 max-w-6xl rounded-2xl border border-white/60 bg-white/90 p-2 shadow-lg backdrop-blur-xl md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 text-sm font-semibold text-brand-900 hover:bg-brand-100"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
