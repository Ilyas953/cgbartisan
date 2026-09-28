import Link from "next/link";
import { navLinks, site } from "@/lib/site";
import { PhoneIcon } from "./icons";
import MobileMenu from "./MobileMenu";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--ink-line)] bg-[var(--ink)]">
      <div className="wrap wrap-pad flex h-[84px] items-center justify-between gap-5">
        <Link href="/" aria-label={`${site.name} — accueil`} className="flex items-center gap-[13px]">
          <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full border-[1.5px] border-[var(--gold)]">
            <span className="font-display text-[15px] tracking-[0.03em] text-[var(--gold)]">
              CGB
            </span>
          </div>
          <div className="flex flex-col leading-[1.15]">
            <span className="font-display text-[21px] tracking-[0.01em] text-white">
              {site.name}
            </span>
            <span className="text-[10.5px] uppercase tracking-[0.12em] text-[var(--muted-on-dark)]">
              Couverture · Mouroux (77)
            </span>
          </div>
        </Link>

        <nav
          className="nav-links flex items-center gap-8"
          aria-label="Navigation principale"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white transition-colors hover:text-[var(--gold)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={site.phoneHref}
            className="header-phone flex items-center gap-2 whitespace-nowrap rounded-full border border-[var(--gold-line)] px-4 py-[9px] text-[13.5px] font-semibold text-white transition-colors hover:border-[var(--gold)]"
          >
            <PhoneIcon size={15} />
            {site.phone}
          </a>
          <Link
            href="/#contact"
            className="btn-gold rounded-full px-5 py-[10px] text-[13.5px]"
          >
            Devis gratuit
          </Link>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
