import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const title = "Couvreur Mouroux (77) — Toiture & Zinguerie | C.G.B Artisan";
const description =
  "Couvreur à Mouroux (77) : couverture, rénovation de toiture, zinguerie, étanchéité et démoussage en Seine-et-Marne. Devis gratuit sous 24h.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: `%s — ${site.name}` },
  description,
  applicationName: site.name,
  authors: [{ name: site.owner }],
  creator: site.owner,
  alternates: { canonical: "/" },
  verification: {
    google: "ckLWzufPHkuIVdIRGVCotSPHU19treO_I_j8ASis_vM",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: site.name,
    title,
    description,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
