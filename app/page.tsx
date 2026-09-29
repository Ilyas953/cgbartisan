import CallButton from "@/components/CallButton";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Realisations from "@/components/Realisations";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import TrustBar from "@/components/TrustBar";
import WhyUs from "@/components/WhyUs";
import Zone from "@/components/Zone";
import { faq } from "@/lib/faq";
import { reviews } from "@/lib/reviews";
import { profile, site } from "@/lib/site";

const cities = [
  "Mouroux",
  "Coulommiers",
  "La Ferté-Gaucher",
  "Crécy-la-Chapelle",
  "Rebais",
  "Meaux",
  "Provins",
];

const services = [
  "Couverture et réparation de toiture",
  "Rénovation de toiture",
  "Zinguerie, gouttières et chéneaux",
  "Étanchéité et réparation de fuite de toiture",
  "Démoussage et nettoyage de toiture",
  "Charpente bois",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "RoofingContractor",
      "@id": `${site.url}/#entreprise`,
      name: site.name,
      alternateName: "CGB Artisan",
      url: site.url,
      image: `${site.url}/images/hero.webp`,
      logo: `${site.url}/apple-icon`,
      telephone: "+33780610791",
      email: site.email,
      founder: { "@type": "Person", name: site.owner },
      description:
        "Couvreur à Mouroux (77) : couverture, rénovation de toiture, zinguerie, étanchéité, démoussage et charpente en Seine-et-Marne.",
      slogan: "L'excellence artisanale au service de votre toiture",
      address: {
        "@type": "PostalAddress",
        ...(profile.streetAddress
          ? { streetAddress: profile.streetAddress }
          : {}),
        addressLocality: "Mouroux",
        postalCode: site.postalCode,
        addressRegion: "Seine-et-Marne",
        addressCountry: "FR",
      },
      ...(profile.latitude !== undefined && profile.longitude !== undefined
        ? {
            geo: {
              "@type": "GeoCoordinates",
              latitude: profile.latitude,
              longitude: profile.longitude,
            },
          }
        : {}),
      ...(profile.openingHours.length
        ? {
            openingHoursSpecification: profile.openingHours.map((h) => ({
              "@type": "OpeningHoursSpecification",
              dayOfWeek: h.days,
              opens: h.opens,
              closes: h.closes,
            })),
          }
        : {}),
      ...(profile.priceRange ? { priceRange: profile.priceRange } : {}),
      ...(profile.googleMapsUrl ? { hasMap: profile.googleMapsUrl } : {}),
      ...(profile.sameAs.length ? { sameAs: profile.sameAs } : {}),
      ...(profile.foundingDate ? { foundingDate: profile.foundingDate } : {}),
      areaServed: [
        { "@type": "AdministrativeArea", name: "Seine-et-Marne" },
        ...cities.map((name) => ({ "@type": "City", name })),
      ],
      knowsAbout: [
        "Couverture",
        "Rénovation de toiture",
        "Zinguerie",
        "Étanchéité de toiture",
        "Démoussage de toiture",
        "Charpente",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services de couverture et toiture",
        itemListElement: services.map((name) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name },
        })),
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: (
          reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
        ).toFixed(1),
        reviewCount: reviews.length,
      },
      review: reviews.map((r) => ({
        "@type": "Review",
        author: { "@type": "Person", name: r.author },
        reviewRating: {
          "@type": "Rating",
          ratingValue: r.rating,
          bestRating: 5,
        },
        reviewBody: r.text,
      })),
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      inLanguage: "fr-FR",
      publisher: { "@id": `${site.url}/#entreprise` },
    },
    {
      "@type": "FAQPage",
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\u003c"),
        }}
      />
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <WhyUs />
        <Realisations />
        <Zone />
        <Reviews />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <CallButton />
    </>
  );
}
