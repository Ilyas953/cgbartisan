import Link from "next/link";
import { villes } from "@/lib/villes";
import MapEmbed from "./MapEmbed";

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
          <h3 className="mt-4 font-body text-base font-bold">
            Nous intervenons aussi en Île-de-France
          </h3>
          <ul className="flex flex-wrap gap-2.5">
            {villes.map((v) => (
              <li key={v.slug}>
                <Link
                  href={`/${v.slug}`}
                  className="chip inline-block hover:border-[var(--gold)]"
                >
                  Couvreur à {v.name} ({v.departmentCode})
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="photo-frame !h-[340px]">
          <MapEmbed
            query="Mouroux 77120"
            title="Carte de la zone d'intervention — Mouroux (77)"
          />
        </div>
      </div>
    </section>
  );
}
