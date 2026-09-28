import Image from "next/image";
import { site } from "@/lib/site";
import { PhoneIcon } from "./icons";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden h-[90vh]">
      <Image
        src="/images/hero.webp"
        alt="Toiture en ardoise rénovée par C.G.B Artisan, couvreur à Mouroux (77)"
        fill
        priority
        sizes="100vw"
        />
      <div className="absolute inset-0 bg-black/20" />
      <div
        className="absolute inset-0 bg-[var(--ink)] opacity-60"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(198,161,91,0.05) 0px, rgba(198,161,91,0.05) 2px, transparent 2px, transparent 26px)",
        }}
      />

      <div className="wrap-pad relative flex flex-col gap-[26px] pb-[110px] pt-[196px] max-sm:pt-[120px]">
        <span className="eyebrow">
          
        </span>
        <h1 className="w-[70vw] text-[clamp(38px,5vw,64px)] font-medium leading-[1.09] text-white">
          L&apos;excellence artisanale au service de votre toiture Couvreur qualifié · Mouroux &amp; Seine-et-Marne (77)
        </h1>
        <p className="max-w-[600px] text-[17.5px] leading-[1.65] text-[var(--muted-on-dark)]">
          Couverture, rénovation de toiture, zinguerie et étanchéité. Un
          savoir-faire artisanal et des finitions soignées, à Mouroux et dans
          toute la Seine-et-Marne.
        </p>
        <div className="mt-2.5 flex flex-wrap gap-4">
          <a
            href="#contact"
            className="btn-gold rounded-full px-[30px] py-4 text-[15px]"
          >
            Demander un devis gratuit
          </a>
          <a
            href={site.phoneHref}
            className="btn-outline rounded-full border border-white/[0.28] px-[30px] py-4 text-[15px]"
          >
            <PhoneIcon size={17} />
            {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
