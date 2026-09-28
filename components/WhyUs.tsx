import { site } from "@/lib/site";
import { CheckIcon } from "./icons";

const reasons = [
  {
    title: "Devis gratuit",
    text: "Un devis détaillé et sans engagement, établi rapidement après visite.",
  },
  {
    title: "Intervention rapide",
    text: "Basé à Mouroux, disponible pour vos urgences en Seine-et-Marne.",
  },
  {
    title: "Matériaux de qualité",
    text: "Des matériaux professionnels choisis pour la durabilité de vos travaux.",
  },
  {
    title: "Finitions soignées",
    text: "Un travail garanti, chantier après chantier.",
  },
];

export default function WhyUs() {
  return (
    <section className="section-pad bg-[var(--ink)]">
      <div className="wrap grid-2 grid grid-cols-[0.9fr_1.1fr] items-center gap-[60px]">
        <div className="flex flex-col gap-[18px]">
          <span className="eyebrow">Pourquoi nous choisir</span>
          <h2 className="text-[clamp(28px,3.2vw,40px)] font-medium text-white">
            Un artisan de confiance pour votre projet
          </h2>
          <p className="text-base leading-[1.7] text-[var(--muted-on-dark)]">
            {site.owner} met son savoir-faire artisanal au service des
            particuliers de Mouroux et de toute la Seine-et-Marne, avec des
            chantiers propres, soignés et suivis de bout en bout.
          </p>
        </div>

        <ul className="grid-3 grid grid-cols-2 gap-x-7 gap-y-8">
          {reasons.map((r) => (
            <li key={r.title} className="flex items-start gap-[15px]">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--gold-soft)] text-[var(--gold)]">
                <CheckIcon size={16} strokeWidth={2.2} />
              </div>
              <div>
                <h3 className="mb-[5px] font-body text-base font-bold text-white">
                  {r.title}
                </h3>
                <p className="text-[13.5px] leading-[1.55] text-[var(--muted-on-dark)]">
                  {r.text}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
