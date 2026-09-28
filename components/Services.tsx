import type { ReactNode } from "react";
import {
  BrushIcon,
  DropIcon,
  FrameIcon,
  GutterIcon,
  RenovationIcon,
  RoofIcon,
} from "./icons";

const services: { title: string; text: string; icon: ReactNode }[] = [
  {
    title: "Couverture",
    text: "Pose, réparation et entretien de toitures en tuiles, ardoises ou autres matériaux.",
    icon: <RoofIcon size={22} strokeWidth={1.6} />,
  },
  {
    title: "Rénovation de toiture",
    text: "Remise à neuf complète de votre toiture pour prolonger sa durée de vie.",
    icon: <RenovationIcon size={22} strokeWidth={1.6} />,
  },
  {
    title: "Zinguerie",
    text: "Gouttières, chéneaux et habillages en zinc réalisés avec précision.",
    icon: <GutterIcon size={22} strokeWidth={1.6} />,
  },
  {
    title: "Étanchéité toiture",
    text: "Diagnostic et traitement durable contre les infiltrations d'eau.",
    icon: <DropIcon size={22} strokeWidth={1.6} />,
  },
  {
    title: "Démoussage & nettoyage",
    text: "Nettoyage, démoussage et traitement hydrofuge de votre toiture.",
    icon: <BrushIcon size={22} strokeWidth={1.6} />,
  },
  {
    title: "Charpente",
    text: "Réparation et renforcement de charpente bois.",
    icon: <FrameIcon size={22} strokeWidth={1.6} />,
  },
];

export default function Services() {
  return (
    <section id="services" className="section-pad bg-[var(--paper)]">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Nos savoir-faire</span>
          <h2 className="section-title">
            Des services complets pour votre toiture
          </h2>
          <p className="text-base leading-[1.6] text-[var(--muted)]">
            De la pose à la rénovation, C.G.B Artisan intervient sur tous vos
            travaux de couverture avec précision et rigueur.
          </p>
        </div>

        <ul className="grid-6 grid grid-cols-3 gap-[26px]">
          {services.map((s) => (
            <li
              key={s.title}
              className="flex flex-col gap-[15px] rounded-[4px] border border-[var(--paper-line)] bg-[var(--paper-soft)] px-[26px] py-8"
            >
              <div className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-[var(--gold-soft)] text-[var(--gold)]">
                {s.icon}
              </div>
              <h3 className="font-body text-[19px] font-bold">{s.title}</h3>
              <p className="text-[14.5px] leading-[1.6] text-[var(--muted)]">
                {s.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
