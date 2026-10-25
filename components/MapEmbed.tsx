"use client";

import { useState } from "react";
import { PinIcon } from "./icons";

// La carte Google Maps n'est chargée qu'après un clic : aucun appel à Google
// (ni cookie, ni adresse IP transmise) tant que le visiteur n'a pas accepté.
export default function MapEmbed({
  query,
  title,
}: {
  query: string;
  title: string;
}) {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <iframe
        title={title}
        src={`https://www.google.com/maps?q=${encodeURIComponent(query)}&z=10&output=embed`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-full w-full border-0 opacity-90 [filter:grayscale(0.4)_invert(0.9)_hue-rotate(180deg)]"
      />
    );
  }

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-3 p-6 text-center">
      <PinIcon size={30} strokeWidth={1.5} className="text-[var(--gold)]" />
      <p className="max-w-[340px] text-[13.5px] leading-[1.6] text-[var(--muted)]">
        La carte est fournie par Google Maps. En l&apos;affichant, vous
        acceptez que Google reçoive votre adresse IP et dépose des cookies.
      </p>
      <button
        type="button"
        onClick={() => setLoaded(true)}
        className="btn-gold cursor-pointer rounded-full border-0 px-6 py-3 text-[14px]"
      >
        Afficher la carte
      </button>
    </div>
  );
}
