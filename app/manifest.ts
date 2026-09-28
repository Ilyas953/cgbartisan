import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} — Couvreur à Mouroux (77)`,
    short_name: site.name,
    description:
      "Couverture, rénovation de toiture, zinguerie et étanchéité à Mouroux et en Seine-et-Marne.",
    start_url: "/",
    display: "standalone",
    background_color: "#131315",
    theme_color: "#0b0b0c",
    lang: "fr",
  };
}
