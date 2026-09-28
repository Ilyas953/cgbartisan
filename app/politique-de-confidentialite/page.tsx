import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  alternates: { canonical: "/politique-de-confidentialite" },
};

export default function PolitiqueConfidentialite() {
  return (
    <LegalPage title="Politique de confidentialité">
      <p>
        Cette politique explique comment {site.name} ({site.owner}) traite les
        données personnelles collectées via ce site, conformément au Règlement
        général sur la protection des données (RGPD) et à la loi Informatique
        et Libertés.
      </p>

      <h2>Responsable du traitement</h2>
      <p>
        {site.name} — {site.owner}, {site.city}.
        <br />
        Contact : <a href={`mailto:${site.email}`}>{site.email}</a>
      </p>

      <h2>Données collectées</h2>
      <p>
        Lorsque vous remplissez le formulaire de demande de devis, nous
        collectons uniquement les informations que vous saisissez :
      </p>
      <ul>
        <li>nom complet ;</li>
        <li>numéro de téléphone ;</li>
        <li>adresse email ;</li>
        <li>type de projet et contenu de votre message.</li>
      </ul>

      <h2>Finalité et base légale</h2>
      <p>
        Ces données servent exclusivement à répondre à votre demande de devis
        et à vous recontacter à ce sujet. Le traitement repose sur des mesures
        précontractuelles prises à votre demande (article 6.1.b du RGPD). Elles
        ne sont ni vendues, ni utilisées pour de la prospection commerciale
        sans votre accord.
      </p>

      <h2>Durée de conservation</h2>
      <p>
        Vos données sont conservées le temps nécessaire au traitement de votre
        demande, puis au maximum 3 ans après notre dernier échange si aucune
        suite n&apos;est donnée, ou pendant la durée légale applicable en cas
        de contrat.
      </p>

      <h2>Destinataires</h2>
      <p>
        Vos données sont destinées à {site.owner}. Elles transitent par notre
        prestataire d&apos;envoi d&apos;emails et par l&apos;hébergeur du site,
        qui agissent uniquement pour notre compte.
      </p>

      <h2>Cookies et services tiers</h2>
      <p>
        Ce site n&apos;utilise ni cookies publicitaires ni outil de mesure
        d&apos;audience. La carte de la zone d&apos;intervention est fournie
        par Google Maps : son chargement peut déposer des cookies de Google,
        soumis à la{" "}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          politique de confidentialité de Google
        </a>
        . Les polices de caractères sont hébergées sur ce site.
      </p>

      <h2>Vos droits</h2>
      <p>
        Vous disposez d&apos;un droit d&apos;accès, de rectification,
        d&apos;effacement, de limitation, d&apos;opposition et de portabilité
        sur vos données. Pour les exercer, écrivez à{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>. Si vous estimez que
        vos droits ne sont pas respectés, vous pouvez saisir la{" "}
        <a
          href="https://www.cnil.fr/fr/plaintes"
          target="_blank"
          rel="noopener noreferrer"
        >
          CNIL
        </a>
        .
      </p>
    </LegalPage>
  );
}
