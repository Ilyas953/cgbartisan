import { faq } from "@/lib/faq";

export default function Faq() {
  return (
    <section id="faq" className="section-pad bg-[var(--paper)]">
      <div className="wrap mx-auto max-w-3xl">
        <div className="section-head">
          <span className="eyebrow">Questions fréquentes</span>
          <h2 className="section-title">
            Toiture à Mouroux : vos questions, nos réponses
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {faq.map((item) => (
            <details
              key={item.q}
              className="group rounded-[4px] border border-[var(--paper-line)] bg-[var(--paper-soft)] open:border-[var(--gold-line)]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-body text-base font-bold text-white [&::-webkit-details-marker]:hidden">
                <h3 className="font-body text-base font-bold">{item.q}</h3>
                <span
                  aria-hidden="true"
                  className="text-xl leading-none text-[var(--gold)] transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="px-6 pb-5 text-[14.5px] leading-[1.7] text-[var(--muted)]">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
