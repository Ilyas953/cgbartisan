import Image from "next/image";

const pairs = [
  [
    { src: "/images/realisation-1.webp", alt: "Toiture — chantier réalisé par C.G.B Artisan" },
    { src: "/images/realisation-2.webp", alt: "Toiture — finitions du chantier" },
  ],
  [
    { src: "/images/realisation-3.webp", alt: "Couverture — chantier en cours" },
    { src: "/images/realisation-4.webp", alt: "Couverture — chantier terminé" },
  ],
];

export default function Realisations() {
  return (
    <section id="realisations" className="section-pad bg-[var(--paper-soft)]">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Nos réalisations</span>
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
