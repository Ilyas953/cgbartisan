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
        <li>type de projet et contenu de votre message ;</li>
        <li>la page du site depuis laquelle la demande a été envoyée.</li>
      </ul>
      <p>
        Comme pour tout site web, l&apos;hébergeur enregistre aussi des
        données techniques de connexion (adresse IP, date, page consultée)
        nécessaires à la sécurité et au bon fonctionnement du site.
      </p>

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
        Vos données sont destinées uniquement à {site.owner}. Elles ne sont
        jamais vendues ni cédées. Pour faire fonctionner le site, elles
        transitent par les prestataires suivants, qui agissent pour notre
        compte :
      </p>
      <ul>
        <li>
          <strong>Vercel Inc.</strong> (États-Unis) : hébergement du site ;
        </li>
        <li>
          <strong>Google LLC</strong> (États-Unis), service Gmail : envoi de
          l&apos;email contenant votre demande ;
        </li>
        <li>
          <strong>Apple Inc.</strong> (États-Unis), service iCloud Mail :
          réception de votre demande.
        </li>
      </ul>

      <h2>Transferts hors de l&apos;Union européenne</h2>
      <p>
        Ces prestataires peuvent traiter des données aux États-Unis. Ces
        transferts sont encadrés par les garanties prévues par le RGPD :
        décision d&apos;adéquation de la Commission européenne (EU-US Data
        Privacy Framework) pour les entreprises certifiées, ou clauses
        contractuelles types de la Commission européenne.
      </p>

      <h2>Cookies et services tiers</h2>
      <p>
        Ce site ne dépose aucun cookie et n&apos;utilise ni publicité ni outil
        de mesure d&apos;audience. Les polices de caractères sont hébergées
        sur ce site : aucune requête n&apos;est envoyée à Google Fonts.
      </p>
      <p>
        La carte de la zone d&apos;intervention est fournie par Google Maps.
        Elle n&apos;est chargée que si vous cliquez sur « Afficher la carte » :
        Google reçoit alors votre adresse IP et peut déposer des cookies,
        conformément à la{" "}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          politique de confidentialité de Google
        </a>
        . Sans ce clic, aucune donnée n&apos;est transmise à Google.
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
