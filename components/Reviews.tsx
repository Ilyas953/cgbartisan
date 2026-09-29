import { reviews } from "@/lib/reviews";
import { StarIcon } from "./icons";

export default function Reviews() {
  return (
    <section id="avis" className="section-pad bg-[var(--ink)]">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Avis clients</span>
          <h2 className="section-title text-white">
            Avis de nos clients à Mouroux et en Seine-et-Marne
          </h2>
        </div>

        <ul className="grid-3 grid grid-cols-3 gap-[26px]">
          {reviews.map((r) => (
            <li
              key={r.author}
              className="flex flex-col gap-4 rounded-[4px] border border-[var(--ink-line)] bg-[var(--ink-soft)] p-[30px]"
            >
              <div
                className="flex gap-[3px] text-[var(--gold)]"
                role="img"
                aria-label="5 étoiles sur 5"
              >
                {Array.from({ length: 5 }, (_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              <blockquote className="m-0 text-[14.5px] italic leading-[1.65] text-[var(--muted-on-dark)]">
                «&nbsp;{r.text}&nbsp;»
              </blockquote>
              <span className="text-[13.5px] font-bold text-white">
                {r.author}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
