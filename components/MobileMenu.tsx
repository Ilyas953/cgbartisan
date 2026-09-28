"use client";

import { useEffect, useState } from "react";
import { navLinks, site } from "@/lib/site";
import { PhoneIcon } from "./icons";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((o) => !o)}
        className="hidden h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-[var(--gold-line)] bg-transparent text-white max-[900px]:flex"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          aria-hidden="true"
        >
          {open ? (
            <path d="M6 6l12 12M18 6 6 18" />
          ) : (
            <path d="M4 7h16M4 12h16M4 17h16" />
          )}
        </svg>
      </button>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Menu mobile"
          className="absolute left-0 right-0 top-full border-b border-[var(--gold-line)] bg-[var(--ink)] px-[clamp(20px,5vw,64px)] pb-6 pt-2 min-[901px]:hidden"
        >
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href} className="border-b border-[var(--ink-line)]">
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-4 text-base font-semibold text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={site.phoneHref}
            className="btn-outline mt-5 w-full justify-center rounded-full border border-[var(--gold-line)] px-5 py-3.5 text-[15px]"
          >
            <PhoneIcon size={17} />
            {site.phone}
          </a>
        </nav>
      )}
    </>
  );
}
