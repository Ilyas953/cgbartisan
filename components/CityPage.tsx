import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { villes, type Ville } from "@/lib/villes";
import CallButton from "./CallButton";
import ContactForm from "./ContactForm";
import Faq from "./Faq";
import Footer from "./Footer";
import Header from "./Header";
import { CheckIcon, PhoneIcon } from "./icons";

const steps = [
  {
    title: "Votre demande",
    text: "Par téléphone ou via le formulaire, vous décrivez votre projet ou votre problème de toiture.",
  },
  {
    title: "Visite et diagnostic",
    text: "Nous inspectons la couverture, la zinguerie et, si besoin, la charpente, photos à l'appui.",
  },
  {
    title: "Devis détaillé gratuit",
    text: "Un devis poste par poste, sans engagement, avec les démarches éventuelles à prévoir.",
  },
  {
    title: "Travaux et nettoyage",
    text: "Chantier sécurisé, travail soigné et chantier rendu propre en fin d'intervention.",
  },
];

export default function CityPage({ ville }: { ville: Ville }) {
  const others = villes.filter((v) => v.slug !== ville.slug);

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section
          className="bg-[var(--ink)]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, rgba(198,161,91,0.05) 0px, rgba(198,161,91,0.05) 2px, transparent 2px, transparent 26px)",
          }}
        >
          <div className="wrap wrap-pad flex flex-col gap-6 pb-20 pt-14 max-sm:pt-10">
            <nav aria-label="Fil d'Ariane" className="text-[13px] text-[var(--muted-on-dark)]">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link href="/" className="hover:text-[var(--gold)]">
                    Accueil
                  </Link>
                </li>
                <li aria-hidden="true">›</li>
                <li aria-current="page" className="text-white">
                  Couvreur à {ville.name}
                </li>
              </ol>
            </nav>
            <span className="eyebrow">{ville.eyebrow}</span>
            <h1 className="max-w-[860px] text-[clamp(38px,5vw,62px)] font-medium leading-[1.08] text-white">
              {ville.h1}
            </h1>
            <div className="flex max-w-[760px] flex-col gap-4">
              {ville.intro.map((p) => (
                <p
                  key={p}
                  className="text-[17px] leading-[1.7] text-[var(--muted-on-dark)]"
                >
                  {p}
                </p>
              ))}
            </div>
            <div className="mt-2 flex flex-wrap gap-4">
              <a
                href="#devis"
                className="btn-gold rounded-full px-[30px] py-4 text-[15px]"
              >
                Devis gratuit à {ville.name}
              </a>
              <a
                href={site.phoneHref}
                className="btn-outline rounded-full border border-white/[0.28] px-[30px] py-4 text-[15px]"
              >
                <PhoneIcon size={17} />
                {site.phone}
              </a>
            </div>
            <ul className="mt-4 flex flex-wrap gap-x-7 gap-y-3">
              {["Devis gratuit et détaillé", "Chantier sécurisé et rendu propre", "Artisan couvreur-zingueur"].map(
                (t) => (
                  <li
                    key={t}
                    className="flex items-center gap-2 text-sm font-semibold text-[var(--text)]"
                  >
                    <CheckIcon size={16} strokeWidth={2} className="text-[var(--gold)]" />
                    {t}
                  </li>
                ),
              )}
            </ul>
          </div>
        </section>

        {/* Toitures locales */}
        <section className="section-pad bg-[var(--paper)]">
          <div className="wrap">
            <div className="mb-12 flex max-w-[760px] flex-col gap-4">
              <span className="eyebrow">Le bâti local</span>
              <h2 className="section-title">{ville.roofs.title}</h2>
              <p className="text-base leading-[1.7] text-[var(--muted)]">
                {ville.roofs.intro}
              </p>
            </div>
            <div className="grid-2 grid grid-cols-2 gap-[26px]">
              {ville.roofs.items.map((b) => (
                <article
                  key={b.title}
                  className="flex flex-col gap-3 rounded-[4px] border border-[var(--paper-line)] bg-[var(--paper-soft)] p-8"
                >
                  <h3 className="font-body text-[19px] font-bold">{b.title}</h3>
                  <p className="text-[15px] leading-[1.7] text-[var(--muted)]">
                    {b.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="section-pad bg-[var(--paper-soft)]">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">Nos services</span>
              <h2 className="section-title">{ville.services.title}</h2>
            </div>
            <ul className="grid-6 grid grid-cols-3 gap-[26px]">
              {ville.services.items.map((s) => (
                <li
                  key={s.title}
                  className="flex flex-col gap-3 rounded-[4px] border border-[var(--paper-line)] bg-[var(--paper)] px-[26px] py-7"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--gold-soft)] text-[var(--gold)]">
                    <CheckIcon size={17} strokeWidth={2.2} />
                  </div>
                  <h3 className="font-body text-[18px] font-bold">{s.title}</h3>
                  <p className="text-[14.5px] leading-[1.6] text-[var(--muted)]">
                    {s.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Photos */}
        <section className="section-pad bg-[var(--paper)]">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">Réalisations</span>
              <h2 className="section-title">{ville.photos.title}</h2>
              <p className="text-base leading-[1.7] text-[var(--muted)]">
                {ville.photos.text}
              </p>
            </div>
            <div
              className={
                ville.photos.items.length > 1
                  ? "grid-2 grid grid-cols-2 gap-[26px]"
                  : "mx-auto max-w-[640px]"
              }
            >
              {ville.photos.items.map((photo) => (
                <figure key={photo.src} className="m-0 flex flex-col gap-3">
                  <div
                    className={`photo-frame ${
                      photo.height > photo.width
                        ? "!h-[640px] max-sm:!h-[440px]"
                        : "!h-[420px] max-sm:!h-[260px]"
                    }`}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(max-width: 900px) 100vw, 640px"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="text-[14px] leading-[1.6] text-[var(--muted)]">
                    {photo.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Démarches */}
        <section className="section-pad bg-[var(--ink)]">
          <div className="wrap grid-2 grid grid-cols-[0.8fr_1.2fr] gap-[60px]">
            <div className="flex flex-col gap-4">
              <span className="eyebrow">Démarches et contraintes</span>
              <h2 className="text-[clamp(28px,3.2vw,40px)] font-medium text-white">
                {ville.rules.title}
              </h2>
              <p className="text-base leading-[1.7] text-[var(--muted-on-dark)]">
                {ville.rules.intro}
              </p>
            </div>
            <div className="flex flex-col gap-7">
              {ville.rules.items.map((r) => (
                <div key={r.title} className="flex items-start gap-4">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--gold-soft)] text-[var(--gold)]">
                    <CheckIcon size={16} strokeWidth={2.2} />
                  </div>
                  <div>
                    <h3 className="mb-1.5 font-body text-[17px] font-bold text-white">
                      {r.title}
                    </h3>
                    <p className="text-[14.5px] leading-[1.7] text-[var(--muted-on-dark)]">
                      {r.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Prix + étapes */}
        <section className="section-pad bg-[var(--paper)]">
          <div className="wrap grid-2 grid grid-cols-2 gap-14">
            <div className="flex flex-col gap-5">
              <span className="eyebrow">Tarifs</span>
              <h2 className="section-title-sm">{ville.price.title}</h2>
              <ul className="flex flex-col gap-3">
                {ville.price.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[15px] leading-[1.6] text-[var(--muted)]"
                  >
                    <CheckIcon
                      size={17}
                      strokeWidth={2}
                      className="mt-0.5 shrink-0 text-[var(--gold)]"
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-[15px] leading-[1.7] text-[var(--muted)]">
                Chaque toiture est différente : le prix est établi après visite,
                dans un devis gratuit, détaillé poste par poste et sans
                engagement.
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <span className="eyebrow">Méthode</span>
              <h2 className="section-title-sm">
                Votre chantier de toiture à {ville.name} en 4 étapes
              </h2>
              <ol className="flex flex-col gap-4">
                {steps.map((s, i) => (
                  <li key={s.title} className="flex items-start gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--gold-line)] font-display text-lg text-[var(--gold)]">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="mb-1 font-body text-base font-bold">
                        {s.title}
                      </h3>
                      <p className="text-[14.5px] leading-[1.6] text-[var(--muted)]">
                        {s.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Zone */}
        <section className="section-pad bg-[var(--paper-soft)]">
          <div className="wrap flex flex-col gap-8">
            <div className="flex max-w-[760px] flex-col gap-4">
              <span className="eyebrow">Zone d&apos;intervention</span>
              <h2 className="section-title-sm">{ville.zone.title}</h2>
              <p className="text-base leading-[1.7] text-[var(--muted)]">
                {ville.zone.text}
              </p>
            </div>
            {ville.zone.quartiers && (
              <div className="flex flex-col gap-3">
                <h3 className="font-body text-base font-bold">
                  Quartiers de {ville.name}
                </h3>
                <ul className="flex flex-wrap gap-2.5">
                  {ville.zone.quartiers.map((q) => (
                    <li key={q} className="chip">
                      {q}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="flex flex-col gap-3">
              <h3 className="font-body text-base font-bold">
                Communes voisines ({ville.departmentCode})
              </h3>
              <ul className="flex flex-wrap gap-2.5">
                {ville.zone.voisines.map((v) => (
                  <li key={v} className="chip">
                    {v}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="font-body text-base font-bold">
                Nous intervenons aussi
              </h3>
              <ul className="flex flex-wrap gap-2.5">
                <li>
                  <Link href="/" className="chip inline-block hover:border-[var(--gold)]">
                    Couvreur à Mouroux (77)
                  </Link>
                </li>
                {others.map((o) => (
                  <li key={o.slug}>
                    <Link
                      href={`/${o.slug}`}
                      className="chip inline-block hover:border-[var(--gold)]"
                    >
                      Couvreur à {o.name} ({o.departmentCode})
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <Faq
          items={ville.faq}
          title={`Couvreur à ${ville.name} : vos questions`}
        />

        {/* Devis */}
        <section id="devis" className="section-pad bg-[var(--paper-soft)]">
          <div className="wrap grid-2 grid grid-cols-[0.85fr_1.15fr] gap-14">
            <div className="flex flex-col gap-5">
              <span className="eyebrow">Contact</span>
              <h2 className="section-title-sm">
                Devis gratuit pour votre toiture à {ville.name}
              </h2>
              <p className="text-base leading-[1.7] text-[var(--muted)]">
                Décrivez votre projet ou votre problème de toiture : nous vous
                recontactons pour convenir d&apos;une visite et établir un devis
                détaillé, gratuit et sans engagement.
              </p>
              <a
                href={site.phoneHref}
                className="flex items-center gap-3 text-[17px] font-semibold text-[var(--text)]"
              >
                <span className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-[var(--paper-line)] bg-[var(--paper)] text-[var(--gold)]">
                  <PhoneIcon size={16} />
                </span>
                {site.phone}
              </a>
            </div>
            <ContactForm source={`Page ${ville.name} (${ville.departmentCode})`} />
          </div>
        </section>
      </main>
      <Footer />
      <CallButton />
    </>
  );
}
