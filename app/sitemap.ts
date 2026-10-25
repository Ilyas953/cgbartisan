import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { villes } from "@/lib/villes";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: site.url, lastModified, changeFrequency: "monthly", priority: 1 },
    ...villes.map((v) => ({
      url: `${site.url}/${v.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: `${site.url}/mentions-legales`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${site.url}/politique-de-confidentialite`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
