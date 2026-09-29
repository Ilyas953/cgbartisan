const towns = [
  "Mouroux",
  "Coulommiers",
  "La Ferté-Gaucher",
  "Crécy-la-Chapelle",
  "Rebais",
  "Meaux",
  "Provins",
];

export default function Zone() {
  return (
    <section id="zone" className="section-pad bg-[var(--paper)]">
      <div className="wrap grid-2 grid grid-cols-2 items-center gap-14">
        <div className="flex flex-col gap-4">
          <span className="eyebrow">Zone d&apos;intervention</span>
          <h2 className="text-[clamp(28px,3.2vw,40px)] font-medium">
            Couvreur à Mouroux et dans tout le 77 : notre zone d&apos;intervention
          </h2>
          <p className="text-base leading-[1.7] text-[var(--muted)]">
            C.G.B Artisan, couvreur basé à Mouroux, intervient dans les
            communes voisines de Seine-et-Marne pour tous vos projets de
            couverture, rénovation de toiture et zinguerie.
          </p>
          <ul className="mt-2 flex flex-wrap gap-2.5">
            {towns.map((t) => (
              <li key={t} className="chip">
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="photo-frame !h-[340px]">
          <iframe
            title="Carte de la zone d'intervention — Mouroux (77)"
            src="https://www.google.com/maps?q=Mouroux+77120&z=10&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full w-full border-0 opacity-90 [filter:grayscale(0.4)_invert(0.9)_hue-rotate(180deg)]"
          />
        </div>
      </div>
    </section>
  );
}
