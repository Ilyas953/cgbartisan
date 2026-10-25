import { ImageResponse } from "next/og";
import { getVille, villes } from "@/lib/villes";

export const alt = "C.G.B Artisan — Couvreur";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return villes.map((v) => ({ slug: v.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const ville = getVille((await params).slug);
  const name = ville ? `${ville.name} (${ville.departmentCode})` : "";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 90,
          background: "#0b0b0c",
          borderLeft: "14px solid #c6a15b",
          color: "#ffffff",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#c6a15b",
          }}
        >
          C.G.B Artisan
        </div>
        <div style={{ fontSize: 80, lineHeight: 1.08, marginTop: 28 }}>
          {`Couvreur à ${name}`}
        </div>
        <div style={{ fontSize: 34, marginTop: 30, color: "#b9b6ae" }}>
          Couverture · Zinguerie · Étanchéité · Démoussage
        </div>
        <div style={{ fontSize: 30, marginTop: 44, color: "#c6a15b" }}>
          Devis gratuit · 07 80 61 07 91
        </div>
      </div>
    ),
    { ...size },
  );
}
