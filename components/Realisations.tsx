import Image from "next/image";

const pairs = [
  [
    {
      src: "/images/realisation-1.webp",
      alt: "Vue aérienne d'une toiture en tuiles rouges avec fenêtres de toit, chantier de couverture à Savigny-sur-Orge (91)",
    },
    {
      src: "/images/realisation-2.webp",
      alt: "Couvreur au travail sur une toiture en tuiles terre cuite sécurisée par un garde-corps à Savigny-sur-Orge (91), vue drone",
    },
  ],
  [
    {
      src: "/images/realisation-3.webp",
      alt: "Toiture gris anthracite avec fenêtres de toit, vue aérienne d'une rénovation de toiture à Versailles (78)",
    },
    {
      src: "/images/realisation-4.webp",
      alt: "Toiture gris anthracite d'une maison individuelle, couverture réalisée par C.G.B Artisan à Versailles (78)",
    },
  ],
];

export default function Realisations() {
  return (
    <section id="realisations" className="section-pad bg-[var(--paper-soft)]">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Nos réalisations</span>
          <h2 className="section-title">
            Nos chantiers de couverture et de rénovation de toiture en
            Île-de-France
          </h2>
          <p className="text-base leading-[1.6] text-[var(--muted)]">
            Quelques toitures réalisées et rénovées par C.G.B Artisan, de Savigny-sur-Orge à Versailles.
          </p>
        </div>

        <div className="flex flex-col gap-12">
          {pairs.map((pair, i) => (
            <div
              key={i}
              className="avant-apres grid grid-cols-2 gap-[18px]"
            >
              {pair.map((img) => (
                <div key={img.src} className="photo-frame">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 600px) 100vw, 640px"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
