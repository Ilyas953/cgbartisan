"use client";

import { useState, type FormEvent } from "react";
import { projectTypes } from "@/lib/site";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error ?? "Une erreur est survenue.");
      form.reset();
      setStatus("success");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue.");
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-[18px] rounded-md border border-[var(--gold-line)] bg-[var(--ink)] p-[38px] max-sm:p-6"
    >
      <h3 className="mb-0.5 font-body text-[21px] font-semibold text-white">
        Demande de devis gratuit
      </h3>

      <div className="grid-2 grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="cgb-nom">Nom complet</label>
          <input
            id="cgb-nom"
            name="nom"
            type="text"
            placeholder="Jean Dupont"
            autoComplete="name"
            required
          />
        </div>
        <div>
          <label htmlFor="cgb-tel">Téléphone</label>
          <input
            id="cgb-tel"
            name="tel"
            type="tel"
            placeholder="06 00 00 00 00"
            autoComplete="tel"
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="cgb-email">Email</label>
        <input
          id="cgb-email"
          name="email"
          type="email"
          placeholder="vous@email.com"
          autoComplete="email"
          required
        />
      </div>

      <div>
        <label htmlFor="cgb-projet">Type de projet</label>
        <select id="cgb-projet" name="projet" defaultValue={projectTypes[0]}>
          {projectTypes.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="cgb-message">Message</label>
        <textarea
          id="cgb-message"
          name="message"
          rows={4}
          placeholder="Décrivez votre projet..."
          required
        />
      </div>

      {/* Honeypot anti-spam : invisible pour les humains */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="!absolute !left-[-9999px] !h-0 !w-0 !p-0 !opacity-0"
      />

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-gold mt-1.5 cursor-pointer rounded-[4px] border-0 p-[15px] text-[15px] disabled:cursor-wait disabled:opacity-60"
      >
        {status === "sending" ? "Envoi en cours…" : "Envoyer ma demande"}
      </button>

      <p role="status" aria-live="polite" className="min-h-5 text-sm">
        {status === "success" && (
          <span className="text-[var(--gold)]">
            Merci ! Votre demande a bien été envoyée, nous vous recontactons
            sous 24h.
          </span>
        )}
        {status === "error" && <span className="text-red-400">{error}</span>}
      </p>
    </form>
  );
}
