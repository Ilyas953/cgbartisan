import { CheckIcon } from "./icons";

const items = [
  "Devis gratuit sous 24h",
  "Intervention rapide en Seine-et-Marne",
  "Assurance décennale",
  "Artisan de proximité, travail soigné",
];

export default function TrustBar() {
  return (
    <section className="border-b border-[var(--paper-line)] bg-[var(--paper-soft)]">
      <ul className="wrap wrap-pad flex flex-wrap justify-between gap-6 py-[26px]">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-center gap-2.5 text-sm font-semibold text-[var(--text)]"
          >
            <CheckIcon size={17} strokeWidth={2} className="text-[var(--gold)]" />
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
