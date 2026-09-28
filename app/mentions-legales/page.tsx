import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { legal, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  alternates: { canonical: "/mentions-legales" },
};

export default function MentionsLegales() {
  return (
    <LegalPage title="Mentions légales">
      <h2>Éditeur du site</h2>
      <p>
        <strong>{site.name}</strong> — {site.owner}
        <br />
        Statut : {legal.statut}
        <br />
        SIRET : {legal.siret}
        <br />
        Adresse : {legal.adresse}
        <br />
        Téléphone : <a href={site.phoneHref}>{site.phone}</a>
        <br />
        Email : <a href={`mailto:${site.email}`}>{site.email}</a>
      </p>
      <p>Directeur de la publication : {site.owner}.</p>

      <h2>Assurance professionnelle</h2>
      <p>
        Assurance responsabilité décennale : {legal.assureur}.
      </p>

      <h2>Hébergement</h2>
      <p>{legal.hebergeur}</p>

      <h2>Propriété intellectuelle</h2>
      <p>
        L&apos;ensemble des contenus de ce site (textes, photographies,
        logo, mise en page) est la propriété de {site.name}, sauf mention
        contraire. Toute reproduction, totale ou partielle, sans autorisation
        préalable est interdite.
      </p>

      <h2>Responsabilité</h2>
      <p>
        {site.name} s&apos;efforce de fournir des informations exactes et à
        jour, mais ne saurait être tenu responsable d&apos;éventuelles erreurs
        ou omissions. Le site peut contenir des liens vers des services tiers
        (par exemple Google Maps) dont {site.name} n&apos;est pas responsable.
      </p>

      <h2>Données personnelles</h2>
      <p>
        Le traitement de vos données personnelles est détaillé dans notre{" "}
        <a href="/politique-de-confidentialite">
          politique de confidentialité
        </a>
        .
      </p>

      <h2>Droit applicable</h2>
      <p>
        Le présent site est soumis au droit français. En cas de litige, les
        tribunaux français seront seuls compétents.
      </p>
    </LegalPage>
  );
}
