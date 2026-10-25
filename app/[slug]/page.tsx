import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CityPage from "@/components/CityPage";
import { site } from "@/lib/site";
import { getVille, villes } from "@/lib/villes";

export const dynamicParams = false;

export function generateStaticParams() {
  return villes.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[slug]">): Promise<Metadata> {
  const ville = getVille((await params).slug);
  if (!ville) return {};
  return {
    title: { absolute: ville.metaTitle },
    description: ville.metaDescription,
    alternates: { canonical: `/${ville.slug}` },
    openGraph: {
      type: "website",
      locale: "fr_FR",
      siteName: site.name,
      title: ville.metaTitle,
      description: ville.metaDescription,
      url: `/${ville.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: ville.metaTitle,
      description: ville.metaDescription,
    },
  };
}

export default async function Page({ params }: PageProps<"/[slug]">) {
  const ville = getVille((await params).slug);
  if (!ville) notFound();

  const url = `${site.url}/${ville.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: `Couvreur à ${ville.name}`,
        serviceType: "Couverture, rénovation de toiture et zinguerie",
        url,
        description: ville.metaDescription,
        image: ville.photos.items.map((p) => `${site.url}${p.src}`),
        provider: {
          "@type": "RoofingContractor",
          "@id": `${site.url}/#entreprise`,
          name: site.name,
          url: site.url,
          telephone: "+33780610791",
        },
        areaServed: {
          "@type": "City",
          name: ville.name,
          address: {
            "@type": "PostalAddress",
            postalCode: ville.postalCode,
            addressLocality: ville.name,
            addressRegion: ville.department,
            addressCountry: "FR",
          },
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: `Travaux de toiture à ${ville.name}`,
          itemListElement: ville.services.items.map((s) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: s.title },
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: site.url },
          {
            "@type": "ListItem",
            position: 2,
            name: `Couvreur à ${ville.name}`,
            item: url,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: ville.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\u003c"),
        }}
      />
      <CityPage ville={ville} />
    </>
  );
}
