import CallButton from "@/components/CallButton";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Realisations from "@/components/Realisations";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import TrustBar from "@/components/TrustBar";
import WhyUs from "@/components/WhyUs";
import Zone from "@/components/Zone";
import { reviews } from "@/lib/reviews";
import { site } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  name: site.name,
  url: site.url,
  image: `${site.url}/images/hero.webp`,
  telephone: "+33780610791",
  email: site.email,
  description:
    "Couverture, rénovation de toiture, zinguerie, étanchéité, démoussage et charpente à Mouroux et en Seine-et-Marne.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mouroux",
    postalCode: site.postalCode,
    addressRegion: "Seine-et-Marne",
    addressCountry: "FR",
  },
  areaServed: [
    "Mouroux",
    "Coulommiers",
    "La Ferté-Gaucher",
    "Crécy-la-Chapelle",
    "Rebais",
    "Meaux",
    "Provins",
  ].map((name) => ({ "@type": "City", name })),
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
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
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
        <Contact />
      </main>
      <Footer />
      <CallButton />
    </>
  );
}
