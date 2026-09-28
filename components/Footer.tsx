import Link from "next/link";
import { navLinks, site } from "@/lib/site";

const footerLinks = navLinks.map((l) =>
  l.href === "#avis" ? { ...l, label: "Avis clients" } : l,
);

export default function Footer() {
  return (
    <footer className="wrap-pad border-t border-[var(--gold-line)] bg-[var(--ink)] pb-7 pt-[60px]">
      <div className="wrap grid-3 grid grid-cols-[1.4fr_1fr_1fr] gap-11 border-b border-[var(--ink-line)] pb-9">
        <div className="flex flex-col gap-3.5">
          <div className="flex items-center gap-3">
            <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full border-[1.5px] border-[var(--gold)]">
              <span className="font-display text-[13px] text-[var(--gold)]">
                CGB
              </span>
            </div>
            <span className="font-display text-[19px] text-white">
              {site.name}
            </span>
          </div>
          <p className="max-w-[320px] text-[13.5px] leading-[1.65] text-[var(--muted-on-dark)]">
            Artisan couvreur à Mouroux (77), spécialisé en couverture,
            rénovation de toiture, zinguerie et étanchéité.
          </p>
        </div>

        <nav className="flex flex-col gap-3" aria-label="Pied de page">
          <span className="mb-1 text-[13px] font-bold uppercase tracking-[0.06em] text-white">
            Navigation
          </span>
          {footerLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13.5px] text-[var(--muted-on-dark)] transition-colors hover:text-[var(--gold)]"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-3">
          <span className="mb-1 text-[13px] font-bold uppercase tracking-[0.06em] text-white">
            Contact
          </span>
          <a
            href={site.phoneHref}
            className="text-[13.5px] text-[var(--muted-on-dark)] transition-colors hover:text-[var(--gold)]"
          >
            {site.phone}
          </a>
          <a
            href={`mailto:${site.email}`}
            className="text-[13.5px] text-[var(--muted-on-dark)] transition-colors hover:text-[var(--gold)]"
          >
            {site.email}
          </a>
          <span className="text-[13.5px] text-[var(--muted-on-dark)]">
            {site.city}
          </span>
        </div>
      </div>

      <div className="wrap flex flex-wrap justify-between gap-3 pt-[22px] text-[12.5px] text-[var(--muted-on-dark)]">
        <span>
          © {new Date().getFullYear()} {site.name} — {site.owner}. Tous droits
          réservés.
        </span>
        <div className="flex gap-[18px]">
          <Link href="/mentions-legales" className="hover:text-[var(--gold)]">
            Mentions légales
          </Link>
          <Link
            href="/politique-de-confidentialite"
            className="hover:text-[var(--gold)]"
          >
            Politique de confidentialité
          </Link>
        </div>
      </div>
    </footer>
  );
}
