import type { ReactNode } from "react";
import { site } from "@/lib/site";
import { MailIcon, PhoneIcon, PinIcon } from "./icons";
import ContactForm from "./ContactForm";

function ContactRow({
  href,
  icon,
  children,
}: {
  href?: string;
  icon: ReactNode;
  children: ReactNode;
}) {
  const content = (
    <>
      <span className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full border border-[var(--paper-line)] bg-[var(--paper)] text-[var(--gold)]">
        {icon}
      </span>
      {children}
    </>
  );
  const className =
    "flex items-center gap-3 text-[15px] font-semibold text-[var(--text)]";

  return href ? (
    <a href={href} className={className}>
      {content}
    </a>
  ) : (
    <div className={className}>{content}</div>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="section-pad bg-[var(--paper-soft)]">
      <div className="wrap grid-2 grid grid-cols-[0.85fr_1.15fr] gap-14">
        <div className="flex flex-col gap-5">
          <span className="eyebrow">Contact</span>
          <h2 className="text-[clamp(28px,3.2vw,40px)] font-medium">
            Devis gratuit : couvreur à Mouroux et en Seine-et-Marne
          </h2>
          <p className="text-base leading-[1.7] text-[var(--muted)]">
            Un projet de toiture ? Contactez C.G.B Artisan pour un devis
            gratuit et personnalisé, sans engagement.
          </p>
          <div className="mt-2 flex flex-col gap-4">
            <ContactRow href={site.phoneHref} icon={<PhoneIcon size={16} />}>
              {site.phone}
            </ContactRow>
            <ContactRow
              href={`mailto:${site.email}`}
              icon={<MailIcon size={16} strokeWidth={1.6} />}
            >
              {site.email}
            </ContactRow>
            <ContactRow icon={<PinIcon size={16} strokeWidth={1.6} />}>
              {site.city}
            </ContactRow>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
